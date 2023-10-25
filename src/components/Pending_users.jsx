import React from "react";
import Avatar from "../assets/logo/Avatar2.svg";
import Avatar2 from "../assets/logo/Avatar.svg";
import Avatar3 from "../assets/logo/Avatar3.svg";
import stars from "../assets/logo/icons/star.svg";
import girl from "../assets/logo/orange-girl.svg";
const Pending_users = () => {
  return (
    <div>
      {/* ____host___ */}
      <h1 className="inter-medium fs-16 mt-2">Host</h1>
      <div className="d-flex mt-2">
        <div>
          <img alt="" src={girl} className="message-dp" />
        </div>
        <div className="status ms-2">
          <p className="inter-semi fs-14">steve.brown </p>
          <h1 className="fs-13 align_center light_text inter-medium">
            New York, USA
          </h1>
        </div>
        <div className=" ms-auto d-flex justify-content-center align-items-center">
          <div className="d-flex align-items-start me-3 justify-content-center">
            <img alt="" src={stars} className="rating-star" />
            <h1 className="black_text_md_bold ms-1">4.9</h1>
          </div>
          <button className="message_btn">Message</button>
        </div>
      </div>
      {/* ____host___ */}
      {/* ___users___ */}
      <h1 className="inter-medium fs-16 mt-2">Buddies</h1>
      <div className="d-flex mt-3">
        <div>
          <img alt="" src={Avatar} className="message-dp" />
        </div>
        <div className="status ms-2">
          <p className="inter-medium fs-14">John.brown </p>
          <div className="d-flex">
            <img alt="" src={stars} className="rating-star" />
            <h1 className="black_text_md_bold ms-1">4.9</h1>
          </div>
        </div>
        <div className=" ms-auto d-flex justify-content-center align-items-center">
          <button className="message_btn">Message</button>
        </div>
      </div>
      {/* ___users___ */}
      {/* ___users___ */}
      <div className="d-flex mt-3">
        <div>
          <img alt="" src={Avatar2} className="message-dp" />
        </div>
        <div className="status ms-2">
          <p className="inter-medium fs-14">wink </p>
          <div className="d-flex">
            <img alt="" src={stars} className="rating-star" />
            <h1 className="black_text_md_bold ms-1">4.9</h1>
          </div>
        </div>
        <div className=" ms-auto d-flex justify-content-center align-items-center">
          <button className="message_btn">Message</button>
        </div>
      </div>
      {/* ___users___ */}
      {/* ___users___ */}
      <div className="d-flex mt-3">
        <div>
          <img alt="" src={Avatar3} className="message-dp" />
        </div>
        <div className="status ms-2">
          <p className="inter-medium fs-14">John.brown </p>
          <div className="d-flex">
            <img alt="" src={stars} className="rating-star" />
            <h1 className="black_text_md_bold ms-1">4.9</h1>
          </div>
        </div>
        <div className=" ms-auto d-flex justify-content-center align-items-center">
          <button className="message_btn">Message</button>
        </div>
      </div>
      {/* ___users___ */}
      {/* ___users___ */}
      <div className="d-flex mt-3">
        <div>
          <img alt="" src={Avatar} className="message-dp" />
        </div>
        <div className="status ms-2">
          <p className="inter-medium fs-14">John.brown </p>
          <div className="d-flex">
            <img alt="" src={stars} className="rating-star" />
            <h1 className="black_text_md_bold ms-1">4.9</h1>
          </div>
        </div>
        <div className=" ms-auto d-flex justify-content-center align-items-center">
          <button className="message_btn">Message</button>
        </div>
      </div>
      {/* ___users___ */}
    </div>
  );
};

export default Pending_users;
