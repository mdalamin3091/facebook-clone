import React, { useState } from "react";
import { shortcutGroups } from "../../../data";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { homeLeftData } from "../../../data";
const Shortcuts = () => {
  const [sliceItem, setSliceItem] = useState(4);
  return (
    <>
      <div className="flex items-start justify-center flex-col font-poppins">
        <h2 className="text-gray-500 font-semibold text-lg mb-2">
          Your shortcuts
        </h2>
        {shortcutGroups.slice(0, sliceItem).map((item) => (
          <div
            className="flex items-center justify-start gap-4 hover:bg-gray-200 cursor-pointer w-full p-2 rounded-md"
            key={item.id}
          >
            <img
              className="rounded-md w-[50px] h-[35px] object-cover"
              src={item.image}
              alt="groups"
            />
            <h3 className="text-sm">{item.name}</h3>
          </div>
        ))}
        {sliceItem === 4 ? (
          <div
            className="flex items-center justify-start gap-5 hover:bg-gray-200 cursor-pointer w-full p-2 rounded-md"
            onClick={() => setSliceItem(homeLeftData.length)}
          >
            <span className="p-3 bg-gray-300 rounded-full">
              <MdKeyboardArrowDown />
            </span>
            <h3 className="text-sm">see More</h3>
          </div>
        ) : (
          <div
            className="flex items-center justify-start gap-5 hover:bg-gray-200 cursor-pointer w-full p-2 rounded-md"
            onClick={() => setSliceItem(4)}
          >
            <span className="p-3 bg-gray-300 rounded-full">
              <MdKeyboardArrowUp />
            </span>
            <h3 className="text-sm">See less</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Shortcuts;
