import React from "react";

const Popup = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center ">
      <div className="flex flex-col w-[30rem] h-[25rem]  bg-white rounded-2xl ">
        <div className=" flex flex-col py-4 px-5">
          <div className=" flex flex-row justify-between text-2xl font-medium">
            <div>Close account</div>
            <button onClick={onClose} className="pr-2">
              x
            </button>
          </div>
          <div className="flex flex-col py-2 text-slate-400">
            <span>Email</span>
            <input
              type="email"
              className="border rouned focus:outline-none active:outline-none"
            ></input>
            <div>
              <div className="flex flex-row pt-4">
                <span className="text-black pr-[4rem] text-sm">
                  Want to file UAR
                </span>
                <form>
                  <input
                    type="radio"
                    id="Yes"
                    name="option"
                    value="Yes"
                  ></input>
                  <label for="Yes" className="pr-[2rem]">
                    Yes
                  </label>
                  <input type="radio" id="No" name="option" value="No"></input>
                  <label for="No">No</label>
                </form>
              </div>
            </div>
            <span className="py-2">Reason</span>
            <input
              type="text"
              className="border rounded focus:outline-none active:outline-none"
            ></input>
            <span className="py-2">Note</span>
            <input
              type="Text"
              className="border h-[50px]  text-xs rounded focus:outline-none active:outline-none"
            ></input>
          </div>
          <div className=" flex flex-row ">
            <div className="py-3">
              <input
                className="mt-2"
                type="radio"
                id="Yes"
                name="option"
                value="Yes"
              ></input>
              <label
                for="Yes"
                className="pr-[1rem] pl-2 text-slate-400 text-xs"
              >
                Charge clourse fee
              </label>
            </div>

            <div className="h-[15px] ">
              <button
                onClick={onClose}
                className=" ml-[130px] px-4 py-4 w-40   bg-slate-100 rounded-2xl text-sm hover:bg-blue-600 hover:text-white"
              >
                Close Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
