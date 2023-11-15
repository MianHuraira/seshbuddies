import { React, useState } from "react";
import { Form } from "react-bootstrap";
import openEye from "../../assets/icons/open_eye.svg";
import closeEye from "../../assets/icons/close_eye.svg";
import GoogleIcon from "../../assets/icons/google_icon.svg";
import AppleIcon from "../../assets/icons/apple_icon.svg";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputType, setInputType] = useState("password");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setInputType(passwordVisible ? "password" : "text");
  };
  return (
    <>
      <div className="main_div_login">
        <div className="login_main p-4">
          <h3 className="f_head">Login</h3>
          <h5 className="mt-2 sb_head">
            Welcome back! Log in and let’s get seshed!
          </h5>

          {/* form start */}
          <Form className="w-100 mt-4">
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                className="login_inp p-2 radius_12"
                type="email"
                placeholder="Enter your email or username"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <div
                className={`d-flex align-items-center login_inp p-2 ${
                  isInputFocused ? "focused" : ""
                }`}
              >
                <Form.Control
                  className="hide_fcontrol p-0"
                  type={inputType}
                  placeholder="Enter password"
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                />
                <img
                  className="pass_img"
                  src={passwordVisible ? openEye : closeEye}
                  alt=""
                  onClick={togglePasswordVisibility}
                />
              </div>
            </Form.Group>

            <h4 className="for_text">Forgot Password?</h4>
            <NavLink
              to={"/home"}
              className="mt-4 text-center btn_default"
              type="submit"
            >
              Login
            </NavLink>
          </Form>

          <h4 className="mt-4 mb-4 sb_head">OR CONTINUE WITH</h4>

          <button type="btn" className="login_btn_div border_btn_l mt-2">
            <div className="d-flex align-items-center">
              <img className="social_iconStart" src={GoogleIcon} alt="" />
              <h4 className="btn_login_text ms-2">Login with Google</h4>
            </div>
          </button>
          <button type="btn" className="login_btn_div border_btn_l mt-2">
            <div className="d-flex align-items-center">
              <img className="social_iconStart" src={AppleIcon} alt="" />
              <h4 className="btn_login_text ms-2">Login with Apple ID</h4>
            </div>
          </button>
          <div className="mt-4">
            <h5
              style={{ color: "#02150F" }}
              className="login_text d-flex align-items-center"
            >
              Already have an account?
              <NavLink className="nav_text ms-2" to={"/signUp"}>
                Sign up
              </NavLink>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
