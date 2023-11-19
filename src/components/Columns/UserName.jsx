import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const UserName = ({ name, email }) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col py-1 px-1">
        <span className="font-semibold">{name}</span>
        <span className="text-xs text-slate-400 font-medium">{email}</span>
      </div>
      <div className="py-4 px-1 ">
        <FaExternalLinkAlt className="text-blue-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default UserName;
