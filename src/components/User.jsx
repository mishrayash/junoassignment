import React, { useState } from "react";
import Search from "./Search";
import Details from "./Details";

const User = ({ status }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="pt-[2rem] ">
      <div className="flex flex-row pb-[0.5rem] rounded-md">
        <Search search={search} setSearch={setSearch} />
        <div className="flex flex-row px-[1rem]">
          <button
            type="button"
            className="px-[1rem] pb-1 bg-gray-100 rounded-md text-gray-400 text-sm font-medium w-[9rem]"
          >
            <svg
              class="w-[0.5rem]  font-medium relative left-[108px] top-[14px] text-gray-400 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
            Trigger reason
          </button>
          <button
            type="button"
            className=" pb-2 pr-2 bg-gray-100 rounded-md text-gray-400 text-sm font-medium w-[8rem] ml-[1rem] text-center"
          >
            <svg
              class="w-[0.4rem] h-2 relative left-[100px] top-[15px] text-gray-400 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
            Risk level
          </button>
        </div>
      </div>
      <Details status={status} search={search} setSearch={setSearch} />
    </div>
  );
};

export default User;
