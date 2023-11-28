/* eslint-disable no-unused-vars */
import React from "react";
import angle_right from "../assets/logo/icons/angle_right.svg";
import help_icon from "../assets/icons/help_icon.png";
import guidlines from "../assets/icons/guidlines.png";
import terms from "../assets/icons/terms&service.png";
import privacy_policy from "../assets/icons/privacy_policy.png";
import highlights from "../assets/icons/prvacy_highlights.png";
import copyright from "../assets/icons/copyright.png";

const ProfileAbout = () => {
  return (
    <div>
      <div className="bg-white pt-4 px-4 radius_14">
        <div className="account_head pb-2">
          <p className="text-center black_text_lg inter-bold fs-16">About</p>
        </div>
        <div className="account_body">
          <button className="black_text_lg d-flex justify-content-between align-items-center w-100 border-0 bg-transparent mt-2 mb-1">
            <div className="d-flex align-items-center justify-content-center">
              <p className="inter-semi fs-17 my-2 align_center">
                <img src={guidlines} alt="" className="sheild me-2" />
                Community Guidelines
              </p>
            </div>
            <img alt="" src={angle_right} className="angle-right" />
          </button>

          <button className="black_text_lg d-flex justify-content-between align-items-center w-100 border-0 bg-transparent mt-2 mb-1">
            <div className="d-flex align-items-center justify-content-center">
              <p className="inter-semi fs-17 my-2 align_center">
                <img src={terms} alt="" className="sheild2 me-2" />
                Terms of Service
              </p>
            </div>
            <img alt="" src={angle_right} className="angle-right" />
          </button>

          <button className="black_text_lg d-flex justify-content-between align-items-center w-100 border-0 bg-transparent mt-2 mb-1">
            <div className="d-flex align-items-center justify-content-center">
              <p className="inter-semi fs-17 my-2 align_center">
                <img src={privacy_policy} alt="" className="sheild me-2" />
                Privacy Policy
              </p>
            </div>
            <img alt="" src={angle_right} className="angle-right" />
          </button>

          <button className="black_text_lg d-flex justify-content-between align-items-center w-100 border-0 bg-transparent mt-2 mb-1">
            <div className="d-flex align-items-center justify-content-center">
              <p className="inter-semi fs-17 my-2 align_center">
                <img src={highlights} alt="" className="sheild me-2" />
                Privacy Highlights for Teens
              </p>
            </div>
            <img alt="" src={angle_right} className="angle-right" />
          </button>

          <button className="black_text_lg d-flex justify-content-between align-items-center w-100 border-0 bg-transparent mt-2 mb-1">
            <div className="d-flex align-items-center justify-content-center">
              <p className="inter-semi fs-17 my-2 align_center">
                <img src={copyright} alt="" className="sheild me-2" />
                Copyright Policy
              </p>
            </div>
            <img alt="" src={angle_right} className="angle-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;
