import React from "react";
// import "../index.css";
export const Frame = () => {
  return (
    <div className="flex-1">
      <div className="text-slate-300 border-t-2 border-b-2 text-3xl  pl-4 pb-2 pt-2 mb-[48px]">
        LOGO HERE
      </div>

      <div className="flex flex-col">
        <span className="text-1x  pt-1 pb-1 pl-1 pr-1 mb-3  text-neutral-400 font-semibold hover:rounded hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer">
          Overview
        </span>
        <span className="text-1xl pt-1 pb-1 pl-1 pr-1 mb-3  text-neutral-400 font-semibold hover:rounded hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer">
          Onboarding
        </span>
        <span className="text-1xl hover:cursor-pointer text-blue-600 rounded bg-blue-100 pt-1 pb-1 pl-1 pr-1 mb-3  font-semibold ">
          Monitoring
        </span>
        <span className="text-1xl pt-1 pb-1 pl-1 pr-1 mb-3  text-neutral-400 font-semibold hover:rounded hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer">
          Flagging
        </span>
        <span className="text-1xl pt-1 pb-1 pl-1 pr-1 mb-3  text-neutral-400 font-semibold hover:rounded hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer">
          Source of Income
        </span>
        <span className="text-1xl pt-1 pb-1 pl-1 pr-1 mb-3  text-neutral-400 font-semibold hover:rounded hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer">
          UAR
        </span>
      </div>
    </div>
  );
};
