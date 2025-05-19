import { useContext, useMemo, useState } from "react";
import { logout } from "@/libs/utils";
import { FaBookmark } from "react-icons/fa6";
import useToggle from "@/hooks/useToggle";
import Modal from "@/components/UI/Modal";
import PageHeader from "@/components/Global/PageHeader";
import { JobFeedItem } from "@/pages/Feed/components/JobPostingList";
import JobApplicationContext from "@/store/jobapplication/jobapplication-context";
import useLocalStorage from "@/hooks/useLocalStorage";
import JobDetails from "@/pages/Feed/components/JobDetails";
import useFetch from "@/hooks/useFetch";
import api from "@/services/api";
import { IoIosNotifications } from "react-icons/io";
import { formatDateTime } from "@/libs/utils";
import { FaHourglass, FaCheck, FaCalendar, FaTimes } from "react-icons/fa";
import { dummyNotifs } from "@/constants";
import Bookmarks from "@/layouts/components/Header/Bookmarks/Bookmarks";

const renderIcon = (status) => {
  const icons = {
    Pending: { icon: <FaHourglass />, bg: "bg-warning" },
    "For Interview": { icon: <FaCalendar />, bg: "bg-primary" },
    Hired: { icon: <FaCheck />, bg: "bg-success" },
    Rejected: { icon: <FaTimes />, bg: "bg-danger" },
  };

  const { icon, bg } = icons[status] || {
    icon: <FaHourglass />,
    bg: "bg-muted",
  };

  return <i className={`fa media-object ${bg}`}>{icon}</i>;
};

const AuthUser = ({
  withClass = true,
  authUser,
  onUpdateProfile,
  onChangePass,
}) => {
  const ulClass = withClass ? "profile-auth" : "";
  const [showModal, toggleShowModal] = useToggle(false);
  const [params, setParams] = useState({
    rand: 1,
  });

  const { data: notif } = useFetch(
    `/notification/count/${authUser?.id}`,
    params
  );

  const { data: applicantNotifs, loading } = useFetch(
    `/applicant/user/${authUser?.id}`,
    params
  );

  const handleSeen = async () => {
    try {
      await api.patch(`/notification/seen/${authUser?.id}`);
      setParams((prev) => ({ ...prev, rand: Math.floor(Math.random() * 100) }));
    } catch (error) {
      console.log(error?.message);
    }
  };
  const notifList = applicantNotifs?.data ?? [];
  console.log("notiffff", notif?.count);
  console.log("notifffflist", applicantNotifs?.data, notifList?.length);
  const notifCount = notif?.count;

  return (
    <>
      {showModal && (
        <Bookmarks
          onClose={() => {
            toggleShowModal(false);
            window.location.reload();
          }}
        />
      )}
      <ul className={`navbar-nav navbar-right ${ulClass}`}>
        {authUser?.role_id === 2 && (
          <>
            <li className="dropdown">
              <a
                href="javascript:;"
                className="dropdown-toggle icon"
                onClick={() => toggleShowModal(true)}
              >
                <FaBookmark className="fs-5" />
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                data-toggle="dropdown"
                className="dropdown-toggle icon"
                onClick={handleSeen}
              >
                <i className="ion-ios-notifications"></i>
                <span className="label">{notifCount}</span>
              </a>
              <div className="dropdown-menu media-list dropdown-menu-right">
                <div className="dropdown-header">
                  NOTIFICATIONS ({notifList?.length})
                </div>
                {notifList?.length > 0 ? (
                  <>
                    {notifList?.map((notif) => (
                      <a
                        href="javascript:;"
                        className="dropdown-item media"
                        key={notif.id}
                      >
                        <div className="media-left">
                          {renderIcon(notif?.status)}
                        </div>
                        <div className="media-body">
                          <h6 className="d-block d-flex align-items-center gap-1 fs-7">
                            <IoIosNotifications className="fs-6" /> Application
                            Update
                          </h6>
                          <p className="fs-7 fw-500">
                            Job Title: {notif?.job_posting?.title}
                          </p>
                          <div className="text-muted fw-500">
                            Received on: {formatDateTime(notif?.updated_at)}
                          </div>
                        </div>
                      </a>
                    ))}
                  </>
                ) : (
                  <div className="text-center width-300 p-b-10 p-t-10">
                    No notification(s) found
                  </div>
                )}
                <div className="dropdown-header text-primary cursor-pointer text-center">
                  VIEW ALL
                </div>
              </div>
            </li>
          </>
        )}
        <li className="dropdown navbar-user">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <div className="image image-icon bg-black text-grey-darker">
              <i className="fa fa-user"></i>
            </div>
            <span className="d-none d-md-inline font-weight-bold">
              {`${authUser?.firstname} ${authUser?.lastname}`}
            </span>{" "}
            <b className="caret"></b>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <span className="dropdown-item">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <div className="image image-icon bg-black text-grey-darker">
                    <i className="fa fa-user"></i>
                  </div>
                </div>

                <div className="flex-grow-1">
                  <span className="fw-medium d-block truncate-text-elipsis">
                    {`${authUser?.firstname} ${authUser?.lastname}`}
                  </span>
                  <small className="text-custom">{authUser?.role?.name}</small>
                </div>
              </div>
            </span>
            <a
              href="javascript:;"
              className="dropdown-item mt-1"
              onClick={() => onUpdateProfile(true)}
            >
              Update Profile
            </a>
            <a
              href="javascript:;"
              className="dropdown-item mt-1"
              onClick={() => onChangePass(true)}
            >
              Change Password
            </a>
            <div className="dropdown-divider"></div>
            <a href="javascript:;" className="dropdown-item" onClick={logout}>
              Log Out
            </a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default AuthUser;
