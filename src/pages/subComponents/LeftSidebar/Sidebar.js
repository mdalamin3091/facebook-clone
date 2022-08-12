import React from "react";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { homeLeftData } from "../../../data";
const Sidebar = () => {
  const [sliceItem, setSliceItem] = useState(6);
  return (
    <>
      <div className="flex items-start justify-center flex-col font-poppins pb-3 border-b border-gray-300 mb-3">
        <div className="flex items-center justify-start gap-5 hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer">
          <img
            className="w-[45px] h-[45px] rounded-full"
            src="https://i.ibb.co/HCQ2MLL/profile.jpg"
            alt="profile"
          />
          <h3 className="font-semibold text-sm">Md. Al Amin</h3>
        </div>
        {homeLeftData.slice(0, sliceItem).map((item) => (
          <div
            className="flex items-center justify-start gap-6 hover:bg-gray-200 cursor-pointer w-full p-2 rounded-md"
            key={item.id}
          >
            <img src={item.image} alt="sidebar" />
            <h3 className="text-sm">{item.text}</h3>
          </div>
        ))}
        {sliceItem === 6 ? (
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
            onClick={() => setSliceItem(6)}
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

export default Sidebar;
