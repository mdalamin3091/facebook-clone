import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";

const DisplayPost = () => {
  return (
    <div className="shadow-md rounded-lg overflow-hidden bg-white py-3 pb-0 my-5">
      <div className="flex items-start justify-start gap-3 w-full py-2 rounded-md flex-col">
        <div className="flex items-start justify-start gap-3 cursor-pointer px-3">
          <img
            className="w-[45px] h-[45px] rounded-full"
            src="https://i.ibb.co/HCQ2MLL/profile.jpg"
            alt="profile"
          />
          <div>
            <h3 className="font-semibold text-sm mt-1 underline decoration-transparent hover:decoration-gray-600">
              Md. Al Amin
            </h3>
            <div className="flex items-center justify-start gap-2 text-gray-500 text-sm">
              <h4>{new Date().getHours()}h</h4>
              <FaGlobeAfrica />
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="cursor-text px-3 mb-4">
            অনুপ্রেরণা হয়ে উঠবে আশাবাদী 😍 ফ্যাক্টঃ কোন কাজই ছোট নয়।
          </p>
          <div className="w-full mx-auto text-center">
            <img
              className="w-full h-auto"
              src="https://i.ibb.co/5n59Wjn/batch-5.jpg"
              alt="post"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPost;
