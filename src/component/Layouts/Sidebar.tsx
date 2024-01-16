import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import routes from "../../routes/Sidebar";
import SidebarSubmenu from "./SidebarSubmenu";

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          {routes.map((route: any, k: number) => (
            <li
              className={`nav-item ${
                location.pathname === route.path ? "active" : ""
              }`}
              key={k}
            >
              {route.submenu ? (
                <>
                  <SidebarSubmenu
                    submenu={route.submenu}
                    name={route.name}
                    icon={route.icon}
                    path={route.path}
                    index={k}
                  />
                </>
              ) : (
                <NavLink
                  end
                  to={route.path}
                  className={({ isActive }) =>
                    `${isActive ? "nav-link active" : "nav-link"}`
                  }
                  aria-expanded="false"
                  aria-controls={route.title}
                >
                  {route.icon} {route.title}
                  <i className="menu-icon"></i>
                  {location.pathname === route.path ? (
                    <span className="menu-title"></span>
                  ) : null}
                  <span className="menu-title">{route.name}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
