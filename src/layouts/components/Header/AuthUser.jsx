import React from "react";
import { logout } from "@/libs/utils";

const AuthUser = ({
  withClass = true,
  authUser,
  onUpdateProfile,
  onChangePass,
}) => {
  const ulClass = withClass ? "profile-auth" : "";

  return (
    <ul className={`navbar-nav navbar-right ${ulClass}`}>
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
            {`${authUser?.firstname} ${authUser?.lastname}`}
          </span>{" "}
          <b className="caret"></b>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          {/* <span className="dropdown-item d-flex">
                 <h3 className="label label-inverse">Administrator</h3>
               </span> */}
          <span className="dropdown-item label label-inverse ml-3 pe-none">
            {authUser?.role?.name}
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
  );
};

export default AuthUser;
