import React from "react";
import MainLogo from "@/assets/images/logo-main.png";
import MainText from "@/assets/images/logo-text.png";
import Avatar from "@/assets/images/avatar.jpeg";

const Header = () => {
  const authenticated = false;

  return (
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
                  <button className="btn btn-custom btn-md">Sign In</button>
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
        </ul>
      ) : (
        <ul className="navbar-nav navbar-right profile-auth">
          <li>
            <div className="d-flex align-items-center gap-2 mt-2">
              <button className="btn btn-custom btn-md">Sign In</button>
              <button className="btn btn-outline-custom btn-md mr-3">
                Sign Up
              </button>
            </div>
          </li>
        </ul>
      )}
    </div>
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
