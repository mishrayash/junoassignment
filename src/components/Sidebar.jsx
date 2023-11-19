import React from "react";
// import "../index.css";
import { Frame } from "./Frame";
import Content from "./Content";

const Sidebar = () => {
  return (
    <div className=" font-sanse  w-64 flex flex-col border-r-2  pt-10 pr-8 pb-6 pl-10  ">
      <Frame />
      <Content />
    </div>
  );
};

export default Sidebar;
