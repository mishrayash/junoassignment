import React from "react";

const Previous = ({ val, date }) => {
  return (
    <div className="flex flex-col">
      <div className="font-medium">
        {val === true ? <span>Yes</span> : <span>No</span>}
      </div>
      <div>
        {val === true ? (
          <span className="text-xs text-slate-400 font-medium">{date}</span>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default Previous;
