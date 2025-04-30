import React from "react";
import MainLogo from "@/assets/images/logo-main.png";
import MainText from "@/assets/images/logo-text.png";
import Avatar from "@/assets/images/avatar.jpeg";
import useToggle from "@/hooks/useToggle";
import MiniModal from "@/components/UI/ModalSm";

const Header = () => {
  const authenticated = false;
  const [showModal, toggleModal] = useToggle(false);
  return (
    <>
      {showModal && (
        <MiniModal onClose={() => toggleModal(false)}>
          <>
            <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
              {/* <img src={MainLogo} width="36" height="30" alt="app-logo" /> */}
              <img
                src={MainText}
                alt="app-text"
                style={{
                  height: "auto",
                  width: "160px",
                }}
              />
            </div>
            <h3 class="mb-2 font-weight-bold">
              Welcome! Sign in to get started.
            </h3>
            <p class="mb-2 text-secondary fs-6">
              Please sign-in to your account.
            </p>
            <form className="mb-3">
              <div className="mb-3 fv-plugins-icon-container">
                <label htmlFor="email" className="form-label fs-6">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  data-has-listeners="true"
                />
                <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
              </div>

              <div className="mb-3 fv-plugins-icon-container">
                <label htmlFor="password" className="form-label fs-6">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="password"
                  data-has-listeners="true"
                />
                <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
              </div>

              <div className="mb-4"></div>

              <button
                type="button"
                className="btn btn-custom d-grid w-100 waves-effect waves-light"
                onClick={() => toggleModal(true)}
              >
                Sign in
              </button>

              <input type="hidden" data-has-listeners="true" />
            </form>
            <div className="text-center">
              <span className="fs-6 text-secondary">New on our platform?</span>
              <div className="cursor-pointer text-primary fs-6">
                <span>Create an account</span>
              </div>
            </div>
          </>
        </MiniModal>
      )}
      <div id="header" className="header navbar-default navbar-head">
        <div className="navbar-header">
          <a href="index.html" className="navbar-brand">
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
          </a>
          <div className="navbar-toggle profile">
            {authenticated ? (
              <ul
                className="navbar-nav navbar-right"
                style={{
                  background: "#fff",
                }}
              >
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
                <li className="dropdown navbar-user">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    {/* <div className="bg-black text-grey-darker">
             
              <img src={Avatar} className="rounded-circle border" />
            </div> */}
                    <div className="image image-icon bg-black text-grey-darker">
                      <i className="fa fa-user"></i>
                    </div>
                    <span className="d-none d-md-inline font-weight-bold">
                      JOENELL ALONZO
                    </span>{" "}
                    <b className="caret"></b>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    {/* <span className="dropdown-item d-flex">
              <h3 className="label label-inverse">Administrator</h3>
            </span> */}
                    <span className="dropdown-item label label-inverse ml-3 pe-none">
                      Administrator
                    </span>
                    <a href="javascript:;" className="dropdown-item mt-1">
                      Update Profile
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="javascript:;" className="dropdown-item">
                      Log Out
                    </a>
                  </div>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav navbar-right">
                <li>
                  <div className="d-flex align-items-center gap-2 mt-0">
                    <button
                      className="btn btn-custom btn-md"
                      onClick={() => toggleModal(true)}
                    >
                      Sign In
                    </button>
                    <button className="btn btn-outline-custom btn-md mr-3">
                      Sign Up
                    </button>
                  </div>
                </li>
              </ul>
            )}
          </div>
          {/* <button
          type="button"
          className="navbar-toggle"
          data-click="sidebar-toggled"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button> */}
        </div>
        {/* END navbar-header */}

        {/* BEGIN header-nav */}
        {authenticated ? (
          <ul className="navbar-nav navbar-right profile-auth">
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
            <li className="dropdown navbar-user">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                {/* <div className="bg-black text-grey-darker">
             
              <img src={Avatar} className="rounded-circle border" />
            </div> */}
                <div className="image image-icon bg-black text-grey-darker">
                  <i className="fa fa-user"></i>
                </div>
                <span className="d-none d-md-inline font-weight-bold">
                  JOENELL ALONZO
                </span>{" "}
                <b className="caret"></b>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                {/* <span className="dropdown-item d-flex">
              <h3 className="label label-inverse">Administrator</h3>
            </span> */}
                <span className="dropdown-item label label-inverse ml-3 pe-none">
                  Administrator
                </span>
                <a href="javascript:;" className="dropdown-item mt-1">
                  Update Profile
                </a>
                <div className="dropdown-divider"></div>
                <a href="javascript:;" className="dropdown-item">
                  Log Out
                </a>
              </div>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav navbar-right profile-auth">
            <li>
              <div className="d-flex align-items-center gap-2 mt-2">
                <button
                  className="btn btn-custom btn-md"
                  onClick={() => toggleModal(true)}
                >
                  Sign In
                </button>
                <button className="btn btn-outline-custom btn-md mr-3">
                  Sign Up
                </button>
              </div>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

// profile-auth
const LoggedUser = ({ cutomClass = "" }) => {
  <ul className={`navbar-nav navbar-right ${cutomClass}`}>
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
    <li className="dropdown navbar-user">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        {/* <div className="bg-black text-grey-darker">
             
              <img src={Avatar} className="rounded-circle border" />
            </div> */}
        <div className="image image-icon bg-black text-grey-darker">
          <i className="fa fa-user"></i>
        </div>
        <span className="d-none d-md-inline font-weight-bold">
          JOENELL ALONZO
        </span>{" "}
        <b className="caret"></b>
      </a>
      <div className="dropdown-menu dropdown-menu-right">
        {/* <span className="dropdown-item d-flex">
              <h3 className="label label-inverse">Administrator</h3>
            </span> */}
        <span className="dropdown-item label label-inverse ml-3 pe-none">
          Administrator
        </span>
        <a href="javascript:;" className="dropdown-item mt-1">
          Update Profile
        </a>
        <div className="dropdown-divider"></div>
        <a href="javascript:;" className="dropdown-item">
          Log Out
        </a>
      </div>
    </li>
  </ul>;
};

export default Header;
