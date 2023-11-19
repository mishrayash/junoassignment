import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

import { MONIERING_STATUS } from "../constants";
import Popup from "./Popup";
const Nav = ({ status, setStatus }) => {
  const [show, setShow] = useState(false);
  const handel = () => setShow(false);
  return (
    <div className="relative z-10">
      <div className=" flex flex-row justify-between pt-8">
        <div className="flex flex-row  text-neutral-400 font-semibold gap-2 hover:cursor-pointer">
          <div
            onClick={() => setStatus(MONIERING_STATUS.Pending)}
            className={`${
              status === MONIERING_STATUS.Pending
                ? "text-blue-500"
                : "text-neutral-400"
            } px-3 py-1 w-20`}
          >
            {MONIERING_STATUS.Pending}
          </div>
          <div
            onClick={() => setStatus(MONIERING_STATUS.Completed)}
            className={`${
              status === MONIERING_STATUS.Completed
                ? "text-blue-500"
                : "text-neutral-400"
            } px-3 py-1 w-20`}
          >
            {MONIERING_STATUS.Completed}
          </div>
        </div>
        <div className="flex flex-row leading-2 bg-red-200 text-red-600 rounded mb-2 hover:bg-red-300 hover:cursor-pointer">
          <RxCrossCircled className="my-2 ml-2" />

          <button onClick={() => setShow(true)} className="text-sm px-2 py-1 ">
            Close Account
          </button>
        </div>
      </div>
      <Popup show={show} onClose={handel} />
    </div>
  );
};

export default Nav;
