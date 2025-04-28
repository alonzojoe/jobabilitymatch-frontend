import { MENUS } from "@/constants";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const user_type = "admin";

  const menus = MENUS.filter((menu) => menu.type === user_type);

  return (
    <>
      <div id="sidebar" className="sidebar">
        <div data-scrollbar="true" data-height="100%">
          <ul className="nav mt-3">
            <li className="nav-header">Navigation</li>
            {menus.map((menu) => (
              <NavItem key={menu.id} menu={menu} />
            ))}
            <li>
              <a href="index.html">
                <i className="ion-ios-power"></i>
                <span>Logout</span>
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
  const { menu } = props;

  return (
    <li className={menu.id === 1 ? "active" : ""}>
      <Link href="index.html">
        <i className={menu.icon}></i>
        <span>{menu.name}</span>
      </Link>
    </li>
  );
};
