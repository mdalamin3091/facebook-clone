import React from "react";

const Comment = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-2 pb-2 w-full mt-5">
        <img
          className="w-[45px] h-[45px] rounded-full cursor-pointer"
          src="https://i.ibb.co/HCQ2MLL/profile.jpg"
          alt="profile"
        />
        <input
          type="text"
          placeholder="Write a comment..."
          className="bg-gray-100 focus:outline-none py-2 px-3 rounded-full w-full text-sm hover:bg-gray-200 cursor-pointer"
        />
      </div>
      <div className="comments">
        <div className="flex items-start justify-start gap-2 pb-4 w-full mt-5 rounded-lg">
          <img
            className="w-[35px] h-[35px] rounded-full cursor-pointer"
            src="https://i.ibb.co/HCQ2MLL/profile.jpg"
            alt="profile"
          />
          <span className="bg-gray-100 p-3 rounded-2xl">
            <h1 className="font-semibold text-sm underline decoration-transparent hover:decoration-gray-600 cursor-pointer">
              Md. Al Amin
            </h1>
            <p className="text-gray-600 text-sm">This is a comment</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Comment;
