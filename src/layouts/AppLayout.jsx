import { useContext } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "@/store/auth/auth-context";
import Navbar from "@/layouts/components/AppLayout/Navbar";
import Sidebar from "@/layouts/components/AppLayout/Sidebar";

const AppLayout = () => {
  const { authUser } = useContext(AuthContext);
  return (
    <>
      <div
        id="page-container"
        className="page-container fade page-sidebar-fixed page-header-fixed"
      >
        <Navbar authUser={authUser} />

        <Sidebar authUser={authUser} />

        {/* BEGIN #content */}
        <div id="content" className="content">
          <Outlet />
        </div>
        {/* END #content */}

        <a
          href="javascript:;"
          className="btn btn-icon btn-circle btn-primary btn-scroll-to-top fade"
          data-click="scroll-top"
        >
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </>
  );
};

export default AppLayout;
