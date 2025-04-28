import React from "react";

const Sidebar = () => {
  return (
    <>
      <div id="sidebar" className="sidebar">
        <div data-scrollbar="true" data-height="100%">
          <ul className="nav mt-3">
            <li className="nav-header">Navigation</li>
            <li className="active">
              <a href="index.html">
                <i className="ion-ios-pulse"></i>
                <span>Home</span>
              </a>
            </li>
            <li className="has-sub">
              <a href="javascript:;">
                <b className="caret"></b>
                <i className="ion-ios-list"></i>
                <span>Menu Level</span>
              </a>
              <ul className="sub-menu">
                <li className="has-sub">
                  <a href="javascript:;">
                    <b className="caret"></b> Menu 1.1
                  </a>
                  <ul className="sub-menu">
                    <li className="has-sub">
                      <a href="javascript:;">
                        <b className="caret"></b> Menu 2.1
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="javascript:;">Menu 3.1</a>
                        </li>
                        <li>
                          <a href="javascript:;">Menu 3.2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:;">Menu 2.2</a>
                    </li>
                    <li>
                      <a href="javascript:;">Menu 2.3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;">Menu 1.2</a>
                </li>
                <li>
                  <a href="javascript:;">Menu 1.3</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="javascript:;"
                className="sidebar-minify-btn"
                data-click="sidebar-minify"
              >
                <i className="ion-ios-arrow-back"></i> <span>Collapse</span>
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
