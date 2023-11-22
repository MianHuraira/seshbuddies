/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Spinner from "react-bootstrap/Spinner";
import VarifyCode from "./VerifyCode";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ForgetPass = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showVerifyCode, setShowVerifyCode] = useState(false);
  const [verifyCodeTitle, setVerifyCodeTitle] = useState("");
  const [otp, setOtp] = useState("");
  const [detail, setDetail] = useState("");
  const [keyProp, setKeyProp] = useState("");
  const [token, setToken] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handlePhoneChange = (value, country, e, formattedValue) => {
    const fullPhoneNumber = `+${value.replace(/\D/g, "")}`;
    setPhone(fullPhoneNumber);
    setIsValid(formattedValue.length === country.format.length);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;

    // Simple email validation - you may want to use a more robust solution
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(emailValue);

    setEmail(emailValue);
    setIsValid(isValidEmail);
  };

  const tabClick = (tab) => {
    setActiveTab(tab);
  };

  // post data api

  const handleSendCode = () => {
    let requestData;
    let title;
    let currentDetail = "";
    let keyP;

    if (activeTab === "tab1") {
      // Phone tab
      requestData = { phone };
      title = "Enter 5-digit code";
      keyP = "number";
      currentDetail = phone;
    } else if (activeTab === "tab2") {
      // Email tab
      requestData = { email };
      title = "Enter verification code";
      keyP = "gmail";
      currentDetail = email;
    }

    setIsButtonClicked(true);

    axios
      .post(`${global.BASEURL}/users/forget-password`, requestData)
      .then((res) => {
        const result = res.data.code;
        setOtp(result);
        const token = res.data.token;
        setToken(token);
        const resultSuccess = res.data.success;

        if (resultSuccess) {
          setShowVerifyCode(true);
          toast.success("code sent successfully");

          // Set other states
          setIsValid(true);
          setVerifyCodeTitle(title);
          setDetail(currentDetail);
          setKeyProp(keyP);
        }
      })
      .catch((error) => {
        console.error("Error sending code: ", error);
        toast.error("Already Added");
      })
      .finally(() => {
        // This block will execute regardless of success or error
        setIsButtonClicked(false);
      });
  };

  return (
    <>
      <ToastContainer />
      <div
        className={`singUpDiv main_div_login ${showVerifyCode ? "d-none" : ""}`}
      >
        <div className="login_main p-4">
          <h4 className="f_head">Get Started</h4>
          <h5 className="mt-2 sb_head">Forget Your Password</h5>

          {/* tabs start */}
          <ul className="nav nav-tabs nav-tabs-main mt-5 p-1">
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

          {/* content area */}

          <div className="tab-content mt-2">
            {activeTab === "tab1" && (
              <PhoneInput
                className="phon_inp mt-4"
                country={"pk"}
                enableAreaCodes={true}
                enableSearch={true}
                disableSearchIcon={true}
                value={phone}
                onChange={handlePhoneChange}
              />
            )}

            {activeTab === "tab2" && (
              <Form className="mt-4">
                <Form.Group
                  className="mb-3 shadow_def"
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
              </Form>
            )}

            <h5 className="sb_head mt-3">
              By continuing, you agree to SESHBUDDIES’s
              <span
                style={{
                  color: "#2D3D38",
                  fontFamily: "inter-bold",
                  margin: "5px",
                }}
              >
                Terms of Service
              </span>
              and confirm that you have read SESHBUDDIES’s
              <span
                style={{
                  color: "#2D3D38",
                  fontFamily: "inter-bold",
                  margin: "5px",
                }}
              >
                Privacy Policy
              </span>
            </h5>
            <button
              disabled={!isValid}
              onClick={handleSendCode}
              className={
                isValid
                  ? "btn_default phon_inp mt-4"
                  : "btn_disable phon_inp mt-4"
              }
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
                "Send Code"
              )}
            </button>
          </div>
        </div>
      </div>

      {showVerifyCode && (
        <VarifyCode
          otp={otp}
          keyP={keyProp}
          detail={detail}
          title={verifyCodeTitle}
          forget={true}
          token={token}
        />
      )}
    </>
  );
};

export default ForgetPass;
