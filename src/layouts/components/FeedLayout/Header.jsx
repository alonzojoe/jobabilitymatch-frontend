import { useContext } from "react";
import AuthContext from "@/store/auth/auth-context";
import MainLogo from "@/assets/images/logo-main.png";
import MainText from "@/assets/images/logo-text.png";
import useToggle from "@/hooks/useToggle";
import Login from "@/components/Auth/Login";
import Registry from "@/components/Auth/Registry";
import AuthUser from "@/layouts/components/Header/AuthUser";
import useAuthSetup from "@/hooks/useAuthSetup";
import AuthControls from "@/layouts/components/Header/AuthControls";
import UpdatePwd from "@/components/Form/UpdatePwd";
import ChangePassword from "@/components/Auth/ChangePassword";
import { logout } from "@/libs/utils";
import { Link } from "react-router-dom";
import JobApplicationProvider from "@/store/jobapplication/jobapplication-provider";
import { FaBookmark } from "react-icons/fa6";

const Header = ({ roles, disabilityTypes }) => {
  const [showLogin, toggleLogin] = useToggle(false);
  const [showRegistry, toggleRegistry] = useToggle(false);
  const [updateProfile, toggleUpdateProfile] = useToggle(false);
  const [changePass, toggleChangePass] = useToggle(false);
  const [showModal, toggleShowModal] = useToggle(false);

  const { authUser } = useContext(AuthContext);

  useAuthSetup();

  const createAccount = () => {
    toggleLogin(false);
    toggleRegistry(true);
  };

  return (
    <>
      {showLogin && (
        <Login onClose={() => toggleLogin(false)} onCreate={createAccount} />
      )}
      {showRegistry && (
        <Registry
          onClose={() => toggleRegistry(false)}
          roles={roles?.data}
          disabilityTypes={disabilityTypes?.data}
        />
      )}
      {updateProfile && (
        <UpdatePwd
          authUser={authUser}
          roles={roles?.data}
          disabilityTypes={disabilityTypes?.data}
          onClose={() => toggleUpdateProfile(false)}
        />
      )}
      {changePass && (
        <ChangePassword
          authUser={authUser}
          onClose={() => toggleChangePass(false)}
        />
      )}
      <div id="header" className="header navbar-default navbar-head">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            <span className="navbar-logo d-flex align-items-center gap-2">
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
          <div className="navbar-toggle profile bg-white">
            {authUser ? (
              // <ul
              //   className="navbar-nav navbar-right"
              //   style={{
              //     background: "#fff",
              //   }}
              // >
              //   {authUser?.role_id === 2 && (
              //     <>
              //       <li className="dropdown">
              //         <a
              //           href="javascript:;"
              //           className="dropdown-toggle icon"
              //           onClick={() => toggleShowModal(true)}
              //         >
              //           <FaBookmark className="fs-5" />
              //         </a>
              //       </li>
              //       <li className="dropdown">
              //         <a
              //           href="#"
              //           data-toggle="dropdown"
              //           className="dropdown-toggle icon"
              //         >
              //           <i className="ion-ios-notifications"></i>
              //           <span className="label">0</span>
              //         </a>
              //         <div className="dropdown-menu media-list dropdown-menu-right">
              //           <div className="dropdown-header">NOTIFICATIONS (0)</div>
              //           <div className="text-center width-300 p-b-10 p-t-10">
              //             No notification found
              //           </div>
              //         </div>
              //       </li>
              //     </>
              //   )}
              //   <li className="dropdown navbar-user">
              //     <a
              //       href="#"
              //       className="dropdown-toggle"
              //       data-toggle="dropdown"
              //     >
              //       <div className="image image-icon bg-black text-grey-darker">
              //         <i className="fa fa-user"></i>
              //       </div>
              //       <span className="d-none d-md-inline font-weight-bold">
              //         {`${authUser?.firstname} ${authUser.lastname}`}
              //       </span>{" "}
              //       <b className="caret"></b>
              //     </a>
              //     <div className="dropdown-menu dropdown-menu-right">
              //       <span className="dropdown-item">
              //         {/* <span className="dropdown-item label label-inverse ml-3 pe-none">
              //     {authUser?.role?.name}
              //   </span> */}
              //         <div className="d-flex">
              //           <div className="flex-shrink-0">
              //             <div className="image image-icon bg-black text-grey-darker">
              //               <i className="fa fa-user"></i>
              //             </div>
              //           </div>

              //           <div className="flex-grow-1">
              //             <span className="fw-medium d-block truncate-text-elipsis">
              //               {`${authUser?.firstname} ${authUser?.lastname}`}
              //             </span>
              //             <small className="text-custom">
              //               {authUser?.role?.name}
              //             </small>
              //           </div>
              //           {/* <span className="dropdown-item label label-inverse pe-none">
              //       {authUser?.role?.name}
              //     </span> */}
              //         </div>
              //       </span>
              //       <a
              //         href="javascript:;"
              //         className="dropdown-item mt-1"
              //         onClick={() => toggleUpdateProfile(true)}
              //       >
              //         Update Profile
              //       </a>
              //       <a
              //         href="javascript:;"
              //         className="dropdown-item mt-1"
              //         // onClick={() => toggleChangePass(true)}
              //       >
              //         Change Password
              //       </a>
              //       <div className="dropdown-divider"></div>
              //       <a
              //         href="javascript:;"
              //         className="dropdown-item"
              //         onClick={logout}
              //       >
              //         Log Out
              //       </a>
              //     </div>
              //   </li>
              // </ul>
              <JobApplicationProvider>
                <AuthUser
                  withClass={false}
                  authUser={authUser}
                  onUpdateProfile={toggleUpdateProfile}
                  onChangePass={toggleChangePass}
                />
              </JobApplicationProvider>
            ) : (
              <AuthControls
                type={`md`}
                onSignIn={() => toggleLogin(true)}
                onSignUp={() => toggleRegistry(true)}
              />
            )}
          </div>
        </div>
        {/* END navbar-header */}

        {/* BEGIN header-nav */}
        {authUser ? (
          <JobApplicationProvider>
            <AuthUser
              authUser={authUser}
              onUpdateProfile={toggleUpdateProfile}
              onChangePass={toggleChangePass}
            />
          </JobApplicationProvider>
        ) : (
          <AuthControls
            type={`lg`}
            onSignIn={() => toggleLogin(true)}
            onSignUp={() => toggleRegistry(true)}
          />
        )}
      </div>
    </>
  );
};

export default Header;
