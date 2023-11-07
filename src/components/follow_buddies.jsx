import React, { useState } from "react";
import avatar from "../assets/logo/Avatar.svg";
import stars from "../assets/logo/icons/star.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const Follow_buddies = () => {
  const [followState, setFollowState] = useState(false);

  const followHandle = (key) => {
    setFollowState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper py-3"
      >
        <SwiperSlide>
          <div className="buddies_card px-3 me-2">
            <Link to={"/users"} className="buddies_round">
              <img alt="" src={avatar} />
            </Link>
            <p className="inter-semi mt-1 fs-13">Mary_Jane</p>
            <div className="d-flex align-items-start mt-2  justify-content-center">
              <img alt="" src={stars} className="rating-star" />
              <h1 className="fw-bold fs-12 ms-1 inter">4.9</h1>
            </div>
            <p className="light_text_sm fs-11 mt-2">
              Mutual Buddies <span>5</span>{" "}
            </p>
            <button
              onClick={() => followHandle(1)}
              style={{
                color: followState[1] ? "white" : "",
                background: followState[1] ? "#006835" : "",
              }}
              className="follow_buddy_btn mt-3"
            >
              {followState[1] ? "Following" : "Follow"}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="buddies_card px-3 me-2">
            <Link to={"/users"} className="buddies_round">
              <img alt="" src={avatar} />
            </Link>
            <p className="inter-semi mt-1 fs-13">Mary_Jane</p>
            <div className="d-flex align-items-start mt-2  justify-content-center">
              <img alt="" src={stars} className="rating-star" />
              <h1 className="fw-bold fs-12 ms-1 inter">4.9</h1>
            </div>
            <p className="light_text_sm fs-11 mt-2">
              Mutual Buddies <span>5</span>{" "}
            </p>
            <button
              onClick={() => followHandle(2)}
              style={{
                color: followState[2] ? "white" : "",
                background: followState[2] ? "#006835" : "",
              }}
              className="follow_buddy_btn mt-3"
            >
              {followState[2] ? "Following" : "Follow"}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="buddies_card px-3 me-2">
            <Link to={"/users"} className="buddies_round">
              <img alt="" src={avatar} />
            </Link>
            <p className="inter-semi mt-1 fs-13">Mary_Jane</p>
            <div className="d-flex align-items-start mt-2  justify-content-center">
              <img alt="" src={stars} className="rating-star" />
              <h1 className="fw-bold fs-12 ms-1 inter">4.9</h1>
            </div>
            <p className="light_text_sm fs-11 mt-2">
              Mutual Buddies <span>5</span>{" "}
            </p>
            <button
              onClick={() => followHandle(3)}
              style={{
                color: followState[3] ? "white" : "",
                background: followState[3] ? "#006835" : "",
              }}
              className="follow_buddy_btn mt-3"
            >
              {followState[3] ? "Following" : "Follow"}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="buddies_card px-3 me-2">
            <Link to={"/users"} className="buddies_round">
              <img alt="" src={avatar} />
            </Link>
            <p className="inter-semi mt-1 fs-13">Mary_Jane</p>
            <div className="d-flex align-items-start mt-2  justify-content-center">
              <img alt="" src={stars} className="rating-star" />
              <h1 className="fw-bold fs-12 ms-1 inter">4.9</h1>
            </div>
            <p className="light_text_sm fs-11 mt-2">
              Mutual Buddies <span>5</span>{" "}
            </p>
            <button
              onClick={() => followHandle(4)}
              style={{
                color: followState[4] ? "white" : "",
                background: followState[4] ? "#006835" : "",
              }}
              className="follow_buddy_btn mt-3"
            >
              {followState[4] ? "Following" : "Follow"}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="buddies_card px-3 me-2">
            <Link to={"/users"} className="buddies_round">
              <img alt="" src={avatar} />
            </Link>
            <p className="inter-semi mt-1 fs-13">Mary_Jane</p>
            <div className="d-flex align-items-start mt-2  justify-content-center">
              <img alt="" src={stars} className="rating-star" />
              <h1 className="fw-bold fs-12 ms-1 inter">4.9</h1>
            </div>
            <p className="light_text_sm fs-11 mt-2">
              Mutual Buddies <span>5</span>{" "}
            </p>
            <button
              onClick={() => followHandle(5)}
              style={{
                color: followState[5] ? "white" : "",
                background: followState[5] ? "#006835" : "",
              }}
              className="follow_buddy_btn mt-3"
            >
              {followState[5] ? "Following" : "Follow"}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="buddies_card px-3 me-2">
            <Link to={"/users"} className="buddies_round">
              <img alt="" src={avatar} />
            </Link>
            <p className="inter-semi mt-1 fs-13">Mary_Jane</p>
            <div className="d-flex align-items-start mt-2  justify-content-center">
              <img alt="" src={stars} className="rating-star" />
              <h1 className="fw-bold fs-12 ms-1 inter">4.9</h1>
            </div>
            <p className="light_text_sm fs-11 mt-2">
              Mutual Buddies <span>5</span>{" "}
            </p>
            <button
              onClick={() => followHandle(6)}
              style={{
                color: followState[6] ? "white" : "",
                background: followState[6] ? "#006835" : "",
              }}
              className="follow_buddy_btn mt-3"
            >
              {followState[6] ? "Following" : "Follow"}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="buddies_card px-3 me-2">
            <Link to={"/users"} className="buddies_round">
              <img alt="" src={avatar} />
            </Link>
            <p className="inter-semi mt-1 fs-13">Mary_Jane</p>
            <div className="d-flex align-items-start mt-2  justify-content-center">
              <img alt="" src={stars} className="rating-star" />
              <h1 className="fw-bold fs-12 ms-1 inter">4.9</h1>
            </div>
            <p className="light_text_sm fs-11 mt-2">
              Mutual Buddies <span>5</span>{" "}
            </p>
            <button
              onClick={() => followHandle(7)}
              style={{
                color: followState[7] ? "white" : "",
                background: followState[7] ? "#006835" : "",
              }}
              className="follow_buddy_btn mt-3"
            >
              {followState[7] ? "Following" : "Follow"}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="buddies_card px-3 me-2">
            <Link to={"/users"} className="buddies_round">
              <img alt="" src={avatar} />
            </Link>
            <p className="inter-semi mt-1 fs-13">Mary_Jane</p>
            <div className="d-flex align-items-start mt-2  justify-content-center">
              <img alt="" src={stars} className="rating-star" />
              <h1 className="fw-bold fs-12 ms-1 inter">4.9</h1>
            </div>
            <p className="light_text_sm fs-11 mt-2">
              Mutual Buddies <span>5</span>{" "}
            </p>
            <button
              onClick={() => followHandle(8)}
              style={{
                color: followState[8] ? "white" : "",
                background: followState[8] ? "#006835" : "",
              }}
              className="follow_buddy_btn mt-3"
            >
              {followState[8] ? "Following" : "Follow"}
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Follow_buddies;
