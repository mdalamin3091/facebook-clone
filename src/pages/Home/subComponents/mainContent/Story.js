import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
const Story = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <div className="item shadow-lg rounded-lg overflow-hidden cursor-pointer bg-white h-60 relative group">
          <img
            className="w-full h-[190px] rounded-lg object-cover group-hover:scale-[1.03] transition-all ease-in duration-150"
            src="https://i.ibb.co/HCQ2MLL/profile.jpg"
            alt="photo"
          />
          <span className="absolute text-md text-center bg-primary text-white p-1.5 font-bold rounded-full border-4 border-white bottom-9 left-[3.5rem]">
            <AiOutlinePlus />
          </span>
          <h3 className="text-center text-sm font-semibold mt-3">
            Create Story
          </h3>
        </div>
      </div>
    </>
  );
};

export default Story;
