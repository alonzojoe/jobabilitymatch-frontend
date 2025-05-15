import { Link } from "react-router-dom";
import { logout } from "@/libs/utils";
import MainLogo from "@/assets/images/logo-main.png";
import MainText from "@/assets/images/logo-text.png";
import useToggle from "@/hooks/useToggle";
import ChangePassword from "@/components/Auth/ChangePassword";
import UpdateEmployer from "@/components/Form/UpdateEmployer";
import UpdateUser from "@/components/Form/UpdateUser";

const Navbar = ({ authUser }) => {
  const [changePass, toggleChangePass] = useToggle(false);
  const [updateProfile, toggleUpdateProfile] = useToggle(false);

  const renderUpdateComponent = () => {
    if (updateProfile) {
      switch (authUser?.role_id) {
        case 3:
          return (
            <UpdateEmployer
              authUser={authUser}
              onClose={() => toggleUpdateProfile(false)}
            />
          );
        case 1:
        default:
          return (
            <UpdateUser
              authUser={authUser}
              onClose={() => toggleUpdateProfile(false)}
              isNavbar={true}
            />
          );
      }
    }
  };

  return (
    <>
      {changePass && (
        <ChangePassword
          authUser={authUser}
          onClose={() => toggleChangePass(false)}
        />
      )}
      {renderUpdateComponent()}
      <div id="header" className="header navbar-default navbar-head">
        <div className="navbar-header">
          <Link to="/home" className="navbar-brand">
            <span className="navbar-logo d-flex align-items-center gap-2">
              {/* <i className="ion-ios-cloud"></i> */}
              <img src={MainLogo} width="31" height="25" />
              <img
                src={MainText}
                style={{
                  height: "auto",
                  width: "120px",
                }}
              />
            </span>
          </Link>
          <button
            type="button"
            className="navbar-toggle"
            data-click="sidebar-toggled"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        {/* END navbar-header */}
        {/* BEGIN header-nav */}
        <ul className="navbar-nav navbar-right">
          {authUser?.role_id === 3 && (
            <li className="dropdown">
              <a
                href="#"
                data-toggle="dropdown"
                className="dropdown-toggle icon"
              >
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
                    <span class="fw-medium d-block truncate-text-elipsis">
                      {`${authUser?.firstname} ${authUser?.lastname}`}
                    </span>
                    <small class="text-custom">{authUser?.role?.name}</small>
                  </div>
                  {/* <span className="dropdown-item label label-inverse pe-none">
                    {authUser?.role?.name}
                  </span> */}
                </div>
              </span>
              <a
                href="javascript:;"
                className="dropdown-item mt-1"
                onClick={() => toggleUpdateProfile(true)}
              >
                Update Profile
              </a>
              <a
                href="javascript:;"
                className="dropdown-item mt-1"
                onClick={() => toggleChangePass(true)}
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
      </div>
    </>
  );
};

export default Navbar;
