import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";

const RightSidebar = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-500 font-semibold text-lg mb-2">Contacts</h2>
        <div className="flex items-center justify-between gap-4 text-lg">
          <span
            className="cursor-pointer p-2 hover:bg-gray-200 rounded-full"
            title="New Room"
          >
            <RiVideoAddFill />
          </span>
          <span
            className="cursor-pointer p-2 hover:bg-gray-200 rounded-full"
            title="Search by name or group"
          >
            <BiSearchAlt2 />
          </span>
          <span
            className="cursor-pointer p-2 hover:bg-gray-200 rounded-full"
            title="Options"
          >
            <BsThreeDots />
          </span>
        </div>
      </div>
      <div className="flex items-start justify-center flex-col">
        <div className="flex items-center justify-start gap-5 hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer">
          <img
            className="w-[45px] h-[45px] rounded-full"
            src="https://i.ibb.co/HCQ2MLL/profile.jpg"
            alt="profile"
          />
          <h3 className="font-semibold text-sm">Md. Al Amin</h3>
        </div>
        <div className="flex items-center justify-start gap-5 hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer">
          <img
            className="w-[45px] h-[45px] rounded-full"
            src="https://i.ibb.co/HCQ2MLL/profile.jpg"
            alt="profile"
          />
          <h3 className="font-semibold text-sm">Md. Al Amin</h3>
        </div>
        <div className="flex items-center justify-start gap-5 hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer">
          <img
            className="w-[45px] h-[45px] rounded-full"
            src="https://i.ibb.co/HCQ2MLL/profile.jpg"
            alt="profile"
          />
          <h3 className="font-semibold text-sm">Md. Al Amin</h3>
        </div>
        <div className="flex items-center justify-start gap-5 hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer">
          <img
            className="w-[45px] h-[45px] rounded-full"
            src="https://i.ibb.co/HCQ2MLL/profile.jpg"
            alt="profile"
          />
          <h3 className="font-semibold text-sm">Md. Al Amin</h3>
        </div>
        <div className="flex items-center justify-start gap-5 hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer">
          <img
            className="w-[45px] h-[45px] rounded-full"
            src="https://i.ibb.co/HCQ2MLL/profile.jpg"
            alt="profile"
          />
          <h3 className="font-semibold text-sm">Md. Al Amin</h3>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
