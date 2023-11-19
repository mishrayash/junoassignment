import React from "react";
import { GoDotFill } from "react-icons/go";

const RiskLevel = ({ level }) => {
  return (
    <div>
      {level === "1" ? (
        <div className="flex flex-row ">
          <GoDotFill className="text-red-900 mt-1" />
          <span className="text-red-900 pl-2">Hard</span>
        </div>
      ) : level === "2" ? (
        <div className="flex flex-row ">
          <GoDotFill className=" text-yellow-700 mt-1" />
          <span className="text-yellow-700 pl-2">Medium</span>
        </div>
      ) : (
        <div className="flex flex-row ">
          <GoDotFill className=" text-green-800 mt-1" />
          <span className="text-green-800 pl-2">Low</span>
        </div>
      )}
    </div>
  );
};

export default RiskLevel;
