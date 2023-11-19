import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({ search, setSearch }) => {
  const handelChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className="relative">
        <CiSearch className="absolute text-gray-500 my-[10px] left-4" />
        <input
          type="text"
          name="name"
          onChange={handelChange}
          placeholder="Search"
          className="border border-gray-200 py-1 px-[3rem] placeholder:text-[0.9rem] focus:outline-none active:outline-none rounded w-[23.125rem]"
        ></input>
      </div>
    </div>
  );
};

export default Search;
