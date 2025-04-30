import { MENUS } from "@/constants";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const user_type = "admin";
  const { pathname } = useLocation();
  const menus = MENUS.filter((menu) => menu.type === user_type);

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
              <a href="index.html">
                <i className="ion-ios-power bg-pink"></i>
                <span>Logout {JSON.stringify(pathname)}</span>
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
      <Link to={menu.path}>
        <i className={`${menu.icon} ${menu.color}`}></i>
        <span>{menu.name}</span>
      </Link>
    </li>
  );
};
