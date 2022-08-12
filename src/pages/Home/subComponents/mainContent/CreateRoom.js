import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
const CreateRoom = () => {
  return (
    <>
      <div className="bg-white rounded-md shadow-lg px-5 py-2">
        <div className="flex items-center justify-between gap-3">
          <Swiper
            slidesPerView={10}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="border-2 border-primary/50 flex items-center justify-start w-[150px] h-auto py-2 px-2 rounded-full cursor-pointer">
                <span className="flex text-red-500 mt-1">
                  <RiVideoAddFill />
                </span>
                <h3 className="text-gray-500 font-semibold ml-2">
                  Create Room
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[45px] h-[45px] rounded-full cursor-pointer"
                src="https://i.ibb.co/HCQ2MLL/profile.jpg"
                alt="profile"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[45px] h-[45px] rounded-full cursor-pointer"
                src="https://i.ibb.co/HCQ2MLL/profile.jpg"
                alt="profile"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[45px] h-[45px] rounded-full cursor-pointer"
                src="https://i.ibb.co/HCQ2MLL/profile.jpg"
                alt="profile"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[45px] h-[45px] rounded-full cursor-pointer"
                src="https://i.ibb.co/HCQ2MLL/profile.jpg"
                alt="profile"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[45px] h-[45px] rounded-full cursor-pointer"
                src="https://i.ibb.co/HCQ2MLL/profile.jpg"
                alt="profile"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[45px] h-[45px] rounded-full cursor-pointer"
                src="https://i.ibb.co/HCQ2MLL/profile.jpg"
                alt="profile"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[45px] h-[45px] rounded-full cursor-pointer"
                src="https://i.ibb.co/HCQ2MLL/profile.jpg"
                alt="profile"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[45px] h-[45px] rounded-full cursor-pointer"
                src="https://i.ibb.co/HCQ2MLL/profile.jpg"
                alt="profile"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[45px] h-[45px] rounded-full cursor-pointer"
                src="https://i.ibb.co/HCQ2MLL/profile.jpg"
                alt="profile"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[45px] h-[45px] rounded-full cursor-pointer"
                src="https://i.ibb.co/HCQ2MLL/profile.jpg"
                alt="profile"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CreateRoom;
