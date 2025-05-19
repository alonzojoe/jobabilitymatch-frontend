import { logout } from "@/libs/utils";
import { FaBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useToggle from "@/hooks/useToggle";
import Bookmarks from "@/layouts/components/Header/Bookmarks/Bookmarks";
import Notifications from "@/layouts/components/Header/Notifications/Notifications";

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
            <Notifications authUser={authUser} />
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
              <div
                className="d-flex cursor-pointer"
                onClick={() => onUpdateProfile(true)}
              >
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
            {authUser?.role_id === 2 ? (
              <>
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
              </>
            ) : (
              <Link to="/home" className="dropdown-item mt-1">
                Go to dashboard
              </Link>
            )}

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
