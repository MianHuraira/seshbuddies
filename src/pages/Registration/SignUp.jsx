import { React, useState } from "react";
import { Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Spinner from "react-bootstrap/Spinner";
import VarifyCode from "./VerifyCode";

const SignUp = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const tabClick = (tab) => {
    setActiveTab(tab);
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showVerifyCode, setShowVerifyCode] = useState(false);
  const handleOnChange = (value, country, e, formattedValue) => {
    setPhoneNumber(value);
    setIsValid(formattedValue.length === country.format.length);
  };

  const [verifyCodeTitle, setVerifyCodeTitle] = useState("");
  const phonSub = (title) => {
    setIsValid(true);
    // Show the VerifyCode component
    setShowVerifyCode(true);
    setVerifyCodeTitle(title);
    // Optionally, you can hide the "singUpDiv" using CSS or by toggling a class
  };
  return (
    <>
      <div
        className={`singUpDiv main_div_login ${showVerifyCode ? "d-none" : ""}`}
      >
        <div className="login_main p-4">
          <h4 className="f_head">Get Started</h4>
          <h5 className="mt-2 sb_head">Login to your account</h5>

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
            <div
              className={`tab-pane ${activeTab === "tab1" ? "active" : ""}`}
              id="tab1"
            >
              <PhoneInput
                className="phon_inp mt-4"
                country={"pk"}
                enableAreaCodes={true}
                enableSearch={true}
                disableSearchIcon={true}
                value={phoneNumber}
                onChange={handleOnChange}
              />

              <h5 className="sb_head mt-3">
                By continuing, you agree to SESHBUDDIES’s
                <span style={{ color: "#2D3D38", fontFamily: "inter-bold", margin:"5px" }}>
                  Terms of Service
                </span>
                and confirm that you have read SESHBUDDIES’s
                <span style={{ color: "#2D3D38", fontFamily: "inter-bold" ,margin:"5px" }}>
                  Privacy Policy
                </span>
              </h5>

              <button
                disabled={!isValid}
                onClick={() => phonSub("Enter 5-digit code")}
                className={
                  isValid
                    ? "btn_default phon_inp mt-4"
                    : "btn_disable phon_inp mt-4"
                }
              >
                Send Code
                <Spinner
                  className={isValid ? "d-block" : "d-none"}
                  style={{
                    width: "20px",
                    height: "20px",
                    float: "right",
                    marginTop: "3px",
                    borderWidth: "0.15em",
                  }}
                  animation="border"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </button>
            </div>
            {/* <VarifyCode />  */}
            <div
              className={`tab-pane ${activeTab === "tab2" ? "active" : ""}`}
              id="tab2"
            >
              <>
                <Form className="mt-4">
                  <Form.Group
                    className="mb-3 shadow_def"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      className="custom_control"
                      type="email"
                      placeholder="Email address"
                    />
                  </Form.Group>
                </Form>

                <h5 className="sb_head mt-3">
                By continuing, you agree to SESHBUDDIES’s
                <span style={{ color: "#2D3D38", fontFamily: "inter-bold", margin:"5px" }}>
                  Terms of Service
                </span>
                and confirm that you have read SESHBUDDIES’s
                <span style={{ color: "#2D3D38", fontFamily: "inter-bold" ,margin:"5px" }}>
                  Privacy Policy
                </span>
              </h5>

                <button
                  onClick={() => phonSub("Verify your email")}
                  className="btn_default phon_inp mt-4"
                >
                  Send Code
                  <Spinner
                    className={isValid ? "d-block" : "d-none"}
                    style={{
                      width: "20px",
                      height: "20px",
                      float: "right",
                      marginTop: "3px",
                      borderWidth: "0.15em",
                    }}
                    animation="border"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </button>
              </>
            </div>
          </div>
        </div>
      </div>

      {showVerifyCode && <VarifyCode title={verifyCodeTitle} />}
    </>
  );
};

export default SignUp;
