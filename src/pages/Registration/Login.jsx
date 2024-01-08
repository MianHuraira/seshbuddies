/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { Form } from "react-bootstrap";
import openEye from "../../assets/icons/open_eye.svg";
import closeEye from "../../assets/icons/close_eye.svg";
import GoogleIcon from "../../assets/icons/google_icon.svg";
import AppleIcon from "../../assets/icons/apple_icon.svg";
import Spinner from "react-bootstrap/Spinner";
import { NavLink } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  selectIsAgeVerified,
  setUser,
  setAuthenticated
} from "../../components/Redux/Slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [phone, setPhone] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [password, setPassword] = useState("");
  const isAgeVerified = useSelector(selectIsAgeVerified);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setInputType(passwordVisible ? "password" : "text");
  };

  const tabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;

    // Simple email validation - you may want to use a more robust solution
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(emailValue);

    setEmail(emailValue);
    setIsValid(isValidEmail);
  };
  const handlePhone = (value, country, e, formattedValue) => {
    const fullPhoneNumber = `+${value.replace(/\D/g, "")}`;
    setPhone(fullPhoneNumber);
    setIsValid(formattedValue.length === country.format.length);
  };

  // api login

  const loginHandle = () => {
    let requestData;
    let currentDetail = "";

    if (!isValidPassword()) {
      // Password is required
      toast.error("Password is required");
      return;
    }

    if (activeTab === "tab1") {
      // Phone tab
      requestData = { phone, password, fcmToken: "", };
      currentDetail = phone;
    } else if (activeTab === "tab2") {
      // Email tab
      requestData = { email, password ,fcmToken: "", };
      currentDetail = email;
    }
    setIsButtonClicked(true);

    axios
      .post(`${global.BASEURL}/auth`, requestData)
      .then((res) => {
        const resultSuccess = res.data;
        dispatch(setUser(resultSuccess));
        dispatch(setAuthenticated(true));
        toast.success("Login Successfully");
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error sending code: ", error);
        toast.error(error.response.data.message);
      })
      .finally(() => {
        // This block will execute regardless of success or error
        setIsButtonClicked(false);
      });
  };

  const isValidPassword = () => {
    return password.trim().length > 0;
  };

  return (
    <>
      <ToastContainer />
      <div className="main_div_login">
        <div className="login_main p-4">
          <h3 className="f_head">Login</h3>
          <h5 className="mt-2 sb_head">
            Welcome back! Log in and let’s get seshed!
          </h5>

          <ul className="nav nav-tabs nav-tabs-main mt-3 p-1">
            <li className="nav-item sign_tab nav-item-main w-50">
              <button
                className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
                onClick={() => tabClick("tab1")}
              >
                Phone
              </button>
            </li>
            <li className="nav-item sign_tab nav-item-main w-50">
              <button
                className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
                onClick={() => tabClick("tab2")}
              >
                Email
              </button>
            </li>
          </ul>

          <div className="tab-content w-100">
            <Form>
              {activeTab === "tab1" && (
                <PhoneInput
                  className="phon_inp w-100 mt-4"
                  country={"pk"}
                  enableAreaCodes={true}
                  enableSearch={true}
                  disableSearchIcon={true}
                  value={phone}
                  onChange={handlePhone}
                />
              )}

              {activeTab === "tab2" && (
                <Form.Group
                  className="shadow_def mt-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="custom_control"
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Form.Group>
              )}

              <Form.Group className="mb-4 mt-4" controlId="formBasicPassword">
                <div
                  className={`d-flex align-items-center login_inp p-2 ${
                    isInputFocused ? "focused" : ""
                  }`}
                >
                  <Form.Control
                    className="hide_fcontrol p-0"
                    type={inputType}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              <NavLink
                to={"/forget_pass"}
                className="for_text d-block text-center "
              >
                Forgot Password?
              </NavLink>
              <div
                disabled={!isValid}
                onClick={loginHandle}
                className={
                  isValid
                    ? "btn_default text-center phon_inp mt-4"
                    : "btn_disable text-center phon_inp mt-4"
                }
                type="submit"
              >
                {isButtonClicked ? (
                  <Spinner
                    style={{
                      width: "20px",
                      height: "20px",
                      marginTop: "3px",
                      borderWidth: "0.15em",
                    }}
                    animation="border"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  "Login"
                )}
              </div>
            </Form>
          </div>

          {/* <h4 className="mt-4 mb-4 sb_head">OR CONTINUE WITH</h4> */}

          {/* <button type="btn" className="login_btn_div border_btn_l mt-2">
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
          </button> */}
          <div className="mt-4">
            <h5
              style={{ color: "#02150F" }}
              className="login_text d-flex align-items-center"
            >
              Don't have an account?
              {isAgeVerified ? (
                <NavLink className="nav_text ms-2" to={"/signUp"}>
                  Sign up
                </NavLink>
              ) : (
                <NavLink className="nav_text ms-2" to={"/age_varifi"}>
                  Sign up
                </NavLink>
              )}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
