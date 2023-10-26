import React from "react";
import add_story from "../assets/logo/add_story.svg";
import girl from "../assets/logo/orange-girl.svg";
import avatar1 from "../assets/logo/Avatar.svg";
import avatar2 from "../assets/logo/Avatar2.svg";
import avatar3 from "../assets/logo/Avatar3.svg";
import avatar4 from "../assets/logo/Avatar4.svg";
import pineapple from "../assets/logo/pineapple_express.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
const Top_story = () => {
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
          <button className=" border-0 add-story-outer me-2">
            <div className="add_story add_story-active">
              <img alt="" src={add_story} />
            </div>
            <p className="fs-11 pt-1 inter">Your Story</p>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 add-story-outer me-2">
            <div className="add_story add_story-active">
              <img alt="" src={pineapple} />
            </div>
            <p className="fs-11 pt-1 inter">Jake W.</p>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 add-story-outer me-2">
            <div className="add_story ">
              <img alt="" src={avatar1} />
            </div>
            <p className="fs-11 pt-1 inter">Steve</p>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 add-story-outer me-2">
            <div className="add_story ">
              <img alt="" src={avatar2} />
            </div>
            <p className="fs-11 pt-1 inter">Emily</p>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 add-story-outer me-2">
            <div className="add_story ">
              <img alt="" src={girl} />
            </div>
            <p className="fs-11 pt-1 inter">Mary</p>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 add-story-outer me-2">
            <div className="add_story ">
              <img alt="" src={avatar3} />
            </div>
            <p className="fs-11 pt-1 inter">harry</p>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 add-story-outer me-2">
            <div className="add_story add_story-active">
              <img alt="" src={avatar4} />
            </div>
            <p className="fs-11 pt-1 inter">Atif</p>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 add-story-outer me-2">
            <div className="add_story add_story-active">
              <img alt="" src={avatar2} />
            </div>
            <p className="fs-11 pt-1 inter">Your Story</p>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 add-story-outer me-2">
            <div className="add_story add_story-active">
              <img alt="" src={avatar3} />
            </div>
            <p className="fs-11 pt-1 inter">Your Story</p>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 add-story-outer me-2">
            <div className="add_story add_story-active">
              <img alt="" src={avatar3} />
            </div>
            <p className="fs-11 pt-1 inter">Your Story</p>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 add-story-outer me-2">
            <div className="add_story add_story-active">
              <img alt="" src={avatar3} />
            </div>
            <p className="fs-11 pt-1 inter">Your Story</p>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="border-0 add-story-outer me-2">
            <div className="add_story add_story-active">
              <img alt="" src={avatar3} />
            </div>
            <p className="fs-11 pt-1 inter">Your Story</p>
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Top_story;
