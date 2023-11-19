import React from "react";
import Sidebar from "./Sidebar";
// import "../index.css";
import Main from "./Main";

function Layout() {
    // const []
  return (
    <div className="flex flex-row bg-white h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <Main />
      </div>
    </div>
  );
}

export default Layout;
