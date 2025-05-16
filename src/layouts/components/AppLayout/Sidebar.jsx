import { MENUS } from "@/constants";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { logout } from "@/libs/utils";

const Sidebar = ({ authUser }) => {
  console.log("authUser sidebar", authUser);
  const { pathname } = useLocation();
  const menus = MENUS.filter((menu) => menu.type === authUser?.role_id);

  return (
    <>
      <div id="sidebar" className="sidebar">
        <div data-scrollbar="true" data-height="100%">
          <ul className="nav mt-3">
            <li className="nav-header">Navigation</li>
            {menus.map((menu) => (
              <NavItem key={menu.id} menu={menu} current={pathname} />
            ))}
            <li className="sidebar-items">
              <Link to="/" className="fw-500">
                <i className="ion-ios-create bg-secondary"></i>
                <span>View Job Postings</span>
              </Link>
            </li>
            <li className="sidebar-items">
              <a href="javascript:;" className="fw-500" onClick={logout}>
                <i className="ion-ios-power bg-pink"></i>
                <span>Logout</span>
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                className="sidebar-minify-btn"
                data-click="sidebar-minify"
              >
                <i
                  className="ion-ios-arrow-back bg-info"
                  style={{ color: "#2C3436" }}
                ></i>
                <span>Collapse</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-bg"></div>
    </>
  );
};

export default Sidebar;

const NavItem = (props) => {
  const { menu, current } = props;

  return (
    <li className={`sidebar-items ${menu.path === current ? "active" : ""}`}>
      <Link to={menu.path} className="fw-500">
        <i className={`${menu.icon} ${menu.color}`}></i>
        <span>{menu.name}</span>
      </Link>
    </li>
  );
};
