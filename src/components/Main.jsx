import { useState } from "react";
import Nav from "./Nav";
import Search from "./Search";
import User from "./User";

import { MONIERING_STATUS } from "../constants";

const Main = () => {
  const [status, setStatus] = useState(MONIERING_STATUS.Pending);
  return (
    <div className="pt-[3rem] pr-[5rem] pl-[5rem] pb-[4rem] ">
      <div className="text-3xl font-semibold ">Monitoring</div>
      <Nav status={status} setStatus={setStatus} />
      <div className="h-[2px] bg-slate-200 rounded-sm flex flex-row">
        <div
          className={`rounded-sm w-[90px] h-[2px] ${
            status === MONIERING_STATUS.Pending ? " bg-blue-500 " : " "
          } `}
        />
        <div
          className={`rounded-sm w-[100px] h-[2px] ${
            status === MONIERING_STATUS.Completed ? " bg-blue-500" : " "
          } `}
        />
      </div>
      <User status={status} />
    </div>
  );
};

export default Main;
