import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
interface MainLayoutAttributes {
  children: React.ReactNode;
  title?: string;
}
const MainLayout: React.FC<MainLayoutAttributes> = ({ children, title }) => {
  useEffect(() => {
    document.title = title ?? "Admin";
  }, [title]);
  return (
    <div>
      <div className="container-scroller">
        <Navbar />
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
          {/* partial:partials/_sidebar.html */}
          <div className="theme-setting-wrapper">
            <div id="settings-trigger">
              <i className="ti-settings" />
            </div>
            <div id="theme-settings" className="settings-panel">
              <i className="settings-close ti-close" />
              <p className="settings-heading">SIDEBAR SKINS</p>
              <div
                className="sidebar-bg-options selected"
                id="sidebar-light-theme"
              >
                <div className="img-ss rounded-circle bg-light border mr-3" />
                Light
              </div>
              <div className="sidebar-bg-options" id="sidebar-dark-theme">
                <div className="img-ss rounded-circle bg-dark border mr-3" />
                Dark
              </div>
              <p className="settings-heading mt-2">HEADER SKINS</p>
              <div className="color-tiles mx-0 px-4">
                <div className="tiles success" />
                <div className="tiles warning" />
                <div className="tiles danger" />
                <div className="tiles info" />
                <div className="tiles dark" />
                <div className="tiles default" />
              </div>
            </div>
          </div>

          <Sidebar />
          {/* partial */}
          <div className="main-panel">
            {/* content-wrapper ends */}
            {/* partial:partials/_footer.html */}
            <div className="content-wrapper">{children}</div>
            <Footer />
            {/* partial */}
          </div>
          {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
