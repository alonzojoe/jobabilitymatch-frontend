import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import api from "@/services/api";
import { formatDateTime } from "@/libs/utils";
import { IoIosNotifications } from "react-icons/io";
import { FaHourglass, FaCheck, FaCalendar, FaTimes } from "react-icons/fa";

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

const Notifications = ({ authUser }) => {
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
  const notifCount = notif?.count;

  return (
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
        {loading ? (
          // Loading state
          <div className="text-center width-300 p-b-10 p-t-10">
            <div className="d-flex align-items-center justify-content-center my-2">
              <div className="sk-wave sk-primary">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="sk-wave-rect"></div>
                ))}
              </div>
            </div>
          </div>
        ) : notifList?.length > 0 ? (
          notifList.map((notif) => (
            <a
              href="javascript:;"
              className="dropdown-item media"
              key={notif.id}
            >
              <div className="media-left">{renderIcon(notif?.status)}</div>
              <div className="media-body">
                <h6 className="d-block d-flex align-items-center gap-1 fs-7">
                  <IoIosNotifications className="fs-6" /> Application Update
                </h6>
                <p className="fs-7 fw-500">
                  <strong>Job Title:</strong> {notif?.job_posting?.title}
                </p>
                <div className="text-muted fw-500">
                  <strong>Received on:</strong>{" "}
                  {formatDateTime(notif?.updated_at)}
                </div>
              </div>
            </a>
          ))
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
  );
};

export default Notifications;
