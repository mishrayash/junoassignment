import React from "react";

const Actiontaken = ({ name, email }) => {
  return (
    <div>
      <div className="flex flex-col py-1 px-1">
        <span className="font-semibold">{name}</span>
        <span className="text-xs text-slate-400 font-medium">{email}</span>
      </div>
    </div>
  );
};

export default Actiontaken;
