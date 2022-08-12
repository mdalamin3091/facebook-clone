import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { FaRegCommentAlt } from "react-icons/fa";
import Comment from "./Comment";
const DisplayPost = () => {
  return (
    <div className="shadow-md rounded-lg overflow-hidden bg-white py-3 my-5">
      <div className="flex items-start justify-start gap-3 w-full py-2 rounded-md flex-col">
        {/* header post */}
        <div className="flex items-start justify-start gap-3 cursor-pointer px-3">
          <img
            className="w-[45px] h-[45px] rounded-full"
            src="https://i.ibb.co/HCQ2MLL/profile.jpg"
            alt="profile"
          />
          <div>
            <h3 className="font-semibold text-sm mt-1 underline decoration-transparent hover:decoration-gray-600 cursor-pointer">
              Md. Al Amin
            </h3>
            <div className="flex items-center justify-start gap-2 text-gray-500 text-sm">
              <h4>{new Date().getHours()}h</h4>
              <FaGlobeAfrica />
            </div>
          </div>
        </div>
        {/* body post */}
        <div className="w-full">
          <p className="cursor-text px-3 mb-4">
            অনুপ্রেরণা হয়ে উঠবে আশাবাদী 😍 ফ্যাক্টঃ কোন কাজই ছোট নয়।
          </p>
          <div className="w-full mx-auto text-center">
            <img
              className="w-full h-auto cursor-pointer"
              src="https://i.ibb.co/5n59Wjn/batch-5.jpg"
              alt="post"
            />
          </div>
        </div>
      </div>
      {/* footer post */}
      <div className="footer-post px-4">
        <div className="flex items-center justify-between text-[15px] text-gray-600">
          <p className="underline decoration-transparent hover:decoration-gray-500 cursor-pointer">
            You and 580 others
          </p>
          <div>
            <p>
              {" "}
              <span className="underline decoration-transparent hover:decoration-gray-500 cursor-pointer">
                19 Comments
              </span>{" "}
              <span className="underline decoration-transparent hover:decoration-gray-500 cursor-pointer">
                54 Shares
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-y mt-2 py-1 border-gray-300">
          <div className="cursor-pointer flex items-center justify-center gap-2 text-lg hover:bg-hover_bg p-2 rounded-md w-full text-gray-500">
            <span className="text-xl">
              <BiLike />
            </span>
            <h3 className="font-semibold text-sm text-gray-600">Like</h3>
          </div>
          <div className="cursor-pointer flex items-center justify-center gap-2 text-lg hover:bg-hover_bg p-2 rounded-md w-full text-gray-500">
            <span className="text-xl">
              <FaRegCommentAlt />
            </span>
            <h3 className="font-semibold text-sm text-gray-600">Comment</h3>
          </div>
          <div className="cursor-pointer flex items-center justify-center gap-2 text-lg hover:bg-hover_bg p-2 rounded-md w-full text-gray-500">
            <span className="text-xl">
              <RiShareForwardLine />
            </span>
            <h3 className="font-semibold text-sm text-gray-600">Share</h3>
          </div>
        </div>
        <Comment />
      </div>
    </div>
  );
};

export default DisplayPost;
