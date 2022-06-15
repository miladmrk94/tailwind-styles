/*



*/

import React, { useState } from "react";
const Dropdown = ({ selected, setSelected, Items }) => {
  const [showItem, setShowItem] = useState(false);
  const options = Items;

  return (
    <div>
      <div
        onClick={() => setShowItem(!showItem)}
        className="bg-sky-700 text-gray-50 px-2 hover:ring-1 hover:ring-offset-1 hover:ring-sky-600 rounded-md flex justify-between items-center cursor-pointer
        select-none w-36 relative"
      >
        {selected}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-5 ml-6 mt-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {showItem && (
        <div className="mt-1 border border-gray-400 bg-gray-100 rounded-md overflow-hidden text-gray-700 absolute 	w-36 ">
          {options.map((i, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setSelected(i);
                  setShowItem(false);
                }}
                className=" transition-all duration-200 ease-in-out px-2 py-1 hover:bg-gray-300 hover:text-sky-800 cursor-pointer"
              >
                {i}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
