import { useContext, useMemo, useState } from "react";
import { logout } from "@/libs/utils";
import { FaBookmark } from "react-icons/fa6";
import useToggle from "@/hooks/useToggle";
import Modal from "@/components/UI/Modal";
import PageHeader from "@/components/Global/PageHeader";
import { JobFeedItem } from "@/pages/Feed/components/JobPostingList";
import JobApplicationContext from "@/store/jobapplication/jobapplication-context";
import useLocalStorage from "@/hooks/useLocalStorage";
import { getLocalStorage } from "@/libs/utils";

const AuthUser = ({
  withClass = true,
  authUser,
  onUpdateProfile,
  onChangePass,
}) => {
  const ulClass = withClass ? "profile-auth" : "";
  const [showModal, toggleShowModal] = useToggle(false);

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
        <li className="dropdown">
          <a
            href="javascript:;"
            className="dropdown-toggle icon"
            onClick={() => toggleShowModal(true)}
          >
            <FaBookmark className="fs-5" />
          </a>
        </li>
        {authUser?.role_id === 2 && (
          <li className="dropdown">
            <a href="#" data-toggle="dropdown" className="dropdown-toggle icon">
              <i className="ion-ios-notifications"></i>
              <span className="label">0</span>
            </a>
            <div className="dropdown-menu media-list dropdown-menu-right">
              <div className="dropdown-header">NOTIFICATIONS (0)</div>
              <div className="text-center width-300 p-b-10 p-t-10">
                No notification found
              </div>
            </div>
          </li>
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

const Bookmarks = ({ onClose }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [bookmarks, setBookmarks] = useLocalStorage("user-bookmark", []);
  const { addBookmark, removeBookmark } = useContext(JobApplicationContext);

  const hasBookMark = useMemo(() => {
    return (job) => bookmarks?.some((b) => b.id === job?.id) || false;
  }, [bookmarks]);

  const onView = (job) => {
    setSelectedJob(job);
  };

  const rmBookmark = (jobId) => {
    setBookmarks((prev) => prev.filter((job) => job.id !== jobId));
    removeBookmark(jobId);
  };

  console.log("Bookmarks component-re-renders", bookmarks);

  return (
    <Modal onClose={onClose}>
      <>
        <PageHeader title={`Save Jobs (${bookmarks.length})`} />
        <div className="row mt-4">
          {bookmarks.length > 0 ? (
            bookmarks.map((job) => (
              <div className="col-sm-12 col-md-6 col-lg-6" key={job.id}>
                <JobFeedItem
                  job={job}
                  selectedJob={selectedJob}
                  onView={onView}
                  hasBookMark={hasBookMark}
                  removeBookmark={rmBookmark}
                  addBookmark={addBookmark}
                />
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="text-center text-custom fs-5 fw-semibold">
                Looks like you haven't saved any jobs.
              </div>
            </div>
          )}
        </div>
      </>
    </Modal>
  );
};

export default AuthUser;
