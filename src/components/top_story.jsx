import { React, useState } from "react";
// import add_story from "../assets/logo/add_story.svg";
import girl from "../assets/logo/orange-girl.svg";
import avatar1 from "../assets/logo/Avatar.svg";
import avatar2 from "../assets/logo/Avatar2.svg";
import avatar3 from "../assets/logo/Avatar3.svg";
import avatar4 from "../assets/logo/Avatar4.svg";

import pineapple from "../assets/logo/pineapple_express.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Modal } from "react-bootstrap";


import Video from "../assets/video/startUpVideo.mp4";
import LiveProfile from "../assets/images/livePro.png";
import closeBtn from "../assets/icons/cros_con.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
const Top_story = () => {
  const [show, setShow] = useState(false);
  const Likes_btn_close = () => setShow(false);
  const Likes_btn_open = () => setShow(true);
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <button className=" border-0 add-story-outer me-2">
            <div className="add_story add_story-active">
              <img alt="" src={add_story} />
            </div>
            <p className="fs-11 pt-1 inter">Your Story</p>
          </button>
        </SwiperSlide> */}
        <SwiperSlide onClick={Likes_btn_open}>
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

      {/* modal start */}

      <Modal
        show={show}
        onHide={Likes_btn_close}
        backdrop="static"
        keyboard={false}
        size="auto"
        className="modalS"
        centered
      >
        <Modal.Body className="p-0">
          <>
            <div className="storyModal00 m-auto position-relative">
              <video className="childStory00" autoPlay src={Video} />
              <div className="video_head_icon">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img className="LiveProImg" src={LiveProfile} alt="" />
                    <div className="ms-2 d-flex align-items-center">
                      <h3 className="userNameLive">steve.brown</h3>
                      <h5 className="liveRang00 ms-2">Host</h5>
                    </div>
                  </div>
                  <img
                    style={{ width: "20px" }}
                    className="cursorP btn-close"
                    src={closeBtn}
                    onClick={Likes_btn_close}
                    alt=""
                  />
                </div>
              </div>
              <div className="strem_btn_div storyB00">
                <input
                  className="comnt_inp w-100"
                  type="text"
                  placeholder="Write Comment"
                />
                <button style={{width:"12rem"}} type="btn" className="btn_default ms-2">
                  Send
                </button>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Top_story;
