import React from "react";
const Content = () => {
  return (
    <div className="flex flex-row">
      <div className="pr-1 pt-1">
        <img src="Image.jpg" alt="logo" />
      </div>
      <div className="flex flex-col leading-3">
        <p className="font-semibold text-sm hover:cursor-pointer hover:font-bold">
          Elon Musk
        </p>
        <p className="text-slate-500 text-sm">elon@twitter.com</p>
      </div>
    </div>
  );
};

export default Content;
