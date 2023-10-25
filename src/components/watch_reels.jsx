import React from "react";
import reel_girl from "../assets/logo/reel_girl.svg";
import avatar from "../assets/logo/Avatar.svg";
import reel_food from "../assets/logo/reel_food.svg";
import reel_camping from "../assets/logo/camping.svg";
import play_icon from "../assets/logo/icons/play_icon.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Watch_reels = () => {
  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <button className="border-0 reel_img me-2 position-relative">
            <img alt=""  src={reel_girl} className="reel_girl radius_8" />
            <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
              <div className="d-flex align-items-center">
                <img alt=""  src={play_icon} className="icon-sm me-2" />{" "}
                <p className="text-white inter fs-12">22.0M</p>
              </div>
              <div className="d-flex align-items-center">
                <img alt=""  src={avatar} className="user_img me-1" />{" "}
                <p className="text-white inter fs-11">Steve.brown</p>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 reel_img me-2 position-relative">
            <img alt=""  src={reel_food} className="reel_girl radius_8" />
            <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
              <div className="d-flex align-items-center">
                <img alt=""  src={play_icon} className="icon-sm me-2" />{" "}
                <p className="text-white inter fs-12">22.0M</p>
              </div>
              <div className="d-flex align-items-center">
                <img alt=""  src={avatar} className="user_img me-1" />{" "}
                <p className="text-white inter fs-11">Steve.brown</p>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 reel_img me-2 position-relative">
            <img alt=""  src={reel_camping} className="reel_girl radius_8" />
            <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
              <div className="d-flex align-items-center">
                <img alt=""  src={play_icon} className="icon-sm me-2" />{" "}
                <p className="text-white inter fs-12">22.0M</p>
              </div>
              <div className="d-flex align-items-center">
                <img alt=""  src={avatar} className="user_img me-1" />{" "}
                <p className="text-white inter fs-11">Steve.brown</p>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 reel_img me-2 position-relative">
            <img alt=""  src={reel_girl} className="reel_girl radius_8" />
            <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
              <div className="d-flex align-items-center">
                <img alt=""  src={play_icon} className="icon-sm me-2" />{" "}
                <p className="text-white inter fs-12">22.0M</p>
              </div>
              <div className="d-flex align-items-center">
                <img alt=""  src={avatar} className="user_img me-1" />{" "}
                <p className="text-white inter fs-11">Steve.brown</p>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 reel_img me-2 position-relative">
            <img alt=""  src={reel_camping} className="reel_girl radius_8" />
            <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
              <div className="d-flex align-items-center">
                <img alt=""  src={play_icon} className="icon-sm me-2" />{" "}
                <p className="text-white inter fs-12">22.0M</p>
              </div>
              <div className="d-flex align-items-center">
                <img alt=""  src={avatar} className="user_img me-1" />{" "}
                <p className="text-white inter fs-11">Steve.brown</p>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 reel_img me-2 position-relative">
            <img alt=""  src={reel_food} className="reel_girl radius_8" />
            <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
              <div className="d-flex align-items-center">
                <img alt=""  src={play_icon} className="icon-sm me-2" />{" "}
                <p className="text-white inter fs-12">22.0M</p>
              </div>
              <div className="d-flex align-items-center">
                <img alt=""  src={avatar} className="user_img me-1" />{" "}
                <p className="text-white inter fs-11">Steve.brown</p>
              </div>
            </div>
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Watch_reels;
