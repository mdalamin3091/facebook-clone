import React from "react";
import { ImCross } from "react-icons/im";
import { FaGlobeAfrica } from "react-icons/fa";
import { MdArrowDropDown, MdPhotoLibrary } from "react-icons/md";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalOpen } from "../../../../store/reducers/modalSlice";
const PostModal = () => {
  const [inputValue, setInputValue] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const dispatch = useDispatch();
  const { openModal } = useSelector((state) => state.modal);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {openModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <form
              onSubmit={handleSubmit}
              className="relative w-auto my-6 mx-auto max-w-xl"
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold text-center self-center">
                    Create Post
                  </h3>
                  <button
                    className="p-3 ml-auto border-0 text-sm text-black leading-none font-semibold  bg-gray-200 rounded-full"
                    onClick={() => dispatch(modalOpen(false))}
                  >
                    <ImCross />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-5 flex-auto">
                  <div className="flex items-center justify-start gap-2 w-full p-2 rounded-md cursor-pointer">
                    <img
                      className="w-[45px] h-[45px] rounded-full"
                      src="https://i.ibb.co/HCQ2MLL/profile.jpg"
                      alt="profile"
                    />
                    <div>
                      <h3 className="font-semibold text-sm cursor-text">
                        Md. Al Amin
                      </h3>
                      <span className="flex items-center justify-start gap-1 p-1 bg-gray-300 rounded-full text-sm">
                        <FaGlobeAfrica />
                        <p className="text-[12px]">Public</p>
                        <span className="text-[16px]">
                          <MdArrowDropDown />
                        </span>
                      </span>
                    </div>
                  </div>
                  <textarea
                    name=""
                    cols="50"
                    rows="5"
                    placeholder="What's on your mind, Md?"
                    className="text-xl outline-none focus:outline-none overflow-hidden"
                    onChange={(e) => setInputValue(e.target.value)}
                  ></textarea>

                  <div>
                    {uploadImage && (
                      <div>
                        <img
                          className="w-full h-auto object-cover rounded-md mb-3"
                          src={uploadImage}
                          alt="post"
                        />
                      </div>
                    )}
                  </div>

                  <label htmlFor="images">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg text-sm cursor-pointer">
                      <h2>Add your posts</h2>
                      <div>
                        <span className="text-2xl text-green-600">
                          <MdPhotoLibrary />
                        </span>
                      </div>
                    </div>
                  </label>
                  <input
                    className="hidden"
                    type="file"
                    name="images"
                    id="images"
                    onChange={(e) =>
                      setUploadImage(URL.createObjectURL(e.target.files[0]))
                    }
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 pt-0">
                  <button
                    className="px-6 py-2 rounded shadow bg-primary hover:shadow-md hover:bg-blue-600 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full text-white"
                    type="submit"
                    onClick={() => dispatch(modalOpen(false))}
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="opacity-[0.65] fixed inset-0 z-40 bg-white"></div>
        </>
      ) : null}
    </>
  );
};

export default PostModal;
