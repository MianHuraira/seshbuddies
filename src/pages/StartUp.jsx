import React from "react";
import Logowhite from "../assets/logo/logo_white.png";
import LogoTextwhite from "../assets/logo/logo_text_white.png";
import GoogleIcon from "../assets/icons/google_icon.png";
import AppleIcon from "../assets/icons/apple_icon.png";
import { NavLink } from "react-router-dom";

const StartUp = () => {
  return (
    <>
      <div className="main_startUp">
        <div className="d-flex align-items-center mb-5">
          <img src={Logowhite} className="logo_icon" alt="" />
          <img className="logo_text" src={LogoTextwhite} alt="" />
        </div>
        <h3 className="startUpHead text-center mt-4">
          The Friendliest Cannabis <br /> Social Network
        </h3>
        <h5 className="startUpCont text-center mt-3">
          Connect with other like-minded cannabis <br /> enthusiasts, schedule a
          sesh in real life, <br /> socialize and share your sesh experience.
        </h5>
        <NavLink to={"/login"} type="btn" className="login_btn_div mt-4">
          <h4 className="btn_login_text">Continue with email or phone</h4>
        </NavLink>
        <button type="btn" className="login_btn_div mt-2">
          <div className="d-flex align-items-center">
            <img className="social_iconStart" src={GoogleIcon} alt="" />
            <h4 className="btn_login_text ms-2">Login with Google</h4>
          </div>
        </button>
        <button type="btn" className="login_btn_div mt-2">
          <div className="d-flex align-items-center">
            <img className="social_iconStart" src={AppleIcon} alt="" />
            <h4 className="btn_login_text ms-2">Login with Apple ID</h4>
          </div>
        </button>
        <div className="mt-5">
          <h5 className="login_text d-flex align-items-center mb-4">
            Already have an account?
            <NavLink className="nav_text ms-2" to={"/login"}>
              Login
            </NavLink>
          </h5>
        </div>
      </div>
    </>
  );
};

export default StartUp;
