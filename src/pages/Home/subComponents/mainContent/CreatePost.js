import React from "react";
import { FaVideo } from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";
import { BsEmojiHeartEyes } from "react-icons/bs";
const CreatePost = () => {
  return (
    <>
      <div className="bg-white rounded-md shadow-md px-5">
        <div className="flex items-center flex-col justify-start pt-3">
          <div className="flex items-center justify-between gap-3 border-b border-gray-200 pb-4 w-full">
            <img
              className="w-[45px] h-[45px] rounded-full cursor-pointer"
              src="https://i.ibb.co/HCQ2MLL/profile.jpg"
              alt="profile"
            />
            <input
              type="text"
              placeholder="What's on your mind, Md?"
              className="bg-gray-100 focus:outline-none py-2 px-4 rounded-full w-full text-lg hover:bg-gray-200 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-evenly gap-3 w-[90%] py-2">
            <div className="cursor-pointer flex items-center justify-start gap-2 text-lg hover:bg-hover_bg p-3 rounded-md w-full">
              <span className="text-xl text-red-500">
                <FaVideo />
              </span>
              <h3 className="font-semibold text-sm text-gray-600">
                Live Video
              </h3>
            </div>
            <div className="cursor-pointer flex items-center justify-start gap-2 text-lg hover:bg-hover_bg p-3 rounded-md w-full">
              <span className="text-xl text-green-500">
                <MdPhotoLibrary />
              </span>
              <h3 className="font-semibold text-sm text-gray-600">
                Photo/Video
              </h3>
            </div>
            <div className="cursor-pointer hidden md:flex items-center justify-start gap-2 text-lg hover:bg-hover_bg p-3 rounded-md w-full">
              <span className="text-xl text-yellow-500">
                <BsEmojiHeartEyes />
              </span>
              <h3 className="font-semibold text-sm text-gray-600">
                Feeling/Activity
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
