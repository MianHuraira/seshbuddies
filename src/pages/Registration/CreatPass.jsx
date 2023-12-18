/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { Form } from "react-bootstrap";
import openEye from "../../assets/icons/open_eye.svg";
import closeEye from "../../assets/icons/close_eye.svg";
import axios from "axios";
import PassCode from "./PassCode";
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
  setUser,
  setAuthenticated,
} from "../../components/Redux/Slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const CreatPass = ({ keyP, detail, forget, token }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [isLetterAndNumberValid, setIsLetterAndNumberValid] = useState(false);
  const [specialCa, setSpecialCa] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showPassCode, setShowPassCode] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // prop sent data
  const [passCreate, setPassCreate] = useState("");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setInputType(passwordVisible ? "password" : "text");
  };
  const [password, setPassword] = useState("");
  const [progress, setProgress] = useState(0);
  const [validationStatus, setValidationStatus] = useState("Weak");

  const handlePassword = (passwordValue) => {
    const strengthChecks = {
      length: 0,
      hasSpecialChar: false,
      hasLetterAndNumber: false,
    };

    strengthChecks.length = passwordValue.length >= 8 ? true : false;
    strengthChecks.hasSpecialChar = /[#-?-!-$-&-@]+/.test(passwordValue);
    strengthChecks.hasLetterAndNumber =
      /[a-zA-Z]+/.test(passwordValue) && /[0-9]+/.test(passwordValue);

    setIsLetterAndNumberValid(strengthChecks.hasLetterAndNumber);
    setSpecialCa(strengthChecks.hasSpecialChar);
    if (
      strengthChecks.length &&
      strengthChecks.hasSpecialChar &&
      strengthChecks.hasLetterAndNumber
    ) {
      setValidationStatus("Strong");
    } else if (
      strengthChecks.hasSpecialChar ||
      strengthChecks.hasLetterAndNumber
    ) {
      setValidationStatus("Medium");
    } else {
      setValidationStatus("Weak");
    }

    setProgress(1 / 3);
    if (passwordValue.length > 0) {
      setProgress(1 / 3);
    }
    if (strengthChecks.hasSpecialChar || strengthChecks.hasLetterAndNumber) {
      setProgress(1 / 3);
    }
    if (
      strengthChecks.length &&
      (strengthChecks.hasSpecialChar || strengthChecks.hasLetterAndNumber)
    ) {
      setProgress(2 / 3);
    }
    if (
      strengthChecks.length &&
      strengthChecks.hasSpecialChar &&
      strengthChecks.hasLetterAndNumber
    ) {
      setProgress(1);
    }

    setPassword(passwordValue);
  };

  const getActiveColor = (type, progress) => {
    if (type === "Strong") return "#4EB77B";
    if (type === "Medium") return "#4EB77B";
    if (type === "Weak" && progress > 0) return "#EFD01D";
    return "#ED6054";
  };

  const isPassword8Characters = password.length >= 8;

  const handleNextButtonClick = () => {
    setShowPassCode(true);
    setPassCreate(password);
  };

  // login api

  const handleForget = () => {
    const requestData = {
      password: password,
      token: token,
    };
    setIsButtonClicked(true);

    axios
      .put(`${global.BASEURL}/users/update-password`, requestData)
      .then((res) => {
        const resp = res.data.success;
        if (resp) {
          loginHandle();
        } else {
          toast.error(resp);
        }
        toast.success(res.data.message);
      })
      .catch((error) => {
        console.error("Error resending code: ", error);
      });
  };

  const loginHandle = () => {
    let requestData = {};

    if (keyP === "number") {
      requestData.phone = detail;
    } else if (keyP === "gmail") {
      requestData.email = detail;
    }

    requestData.password = password;

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
        setIsButtonClicked(false);
      });
  };
  return (
    <>
      {showPassCode ? (
        // <CreateName passCreate={passCreate} keyP={keyP} detail={detail} />
        <PassCode passCreate={passCreate} keyP={keyP} detail={detail} />
      ) : (
        <div className="main_div_login">
          <div className="login_main p-4">
            <h4 className="f_head">Create password</h4>
            <h5 className="mt-2 sb_head">
              Create a secure password to protect your account.
            </h5>
            <Form className="w-100 mt-4">
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <div
                  className={`d-flex align-items-center login_inp p-2 ${
                    isInputFocused ? "focused" : ""
                  }`}
                >
                  <Form.Control
                    className="hide_fcontrol  p-0"
                    type={inputType}
                    placeholder="Enter password"
                    value={password}
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                    onChange={({ target }) => {
                      handlePassword(target.value);
                    }}
                  />
                  <img
                    className="pass_img"
                    src={passwordVisible ? openEye : closeEye}
                    alt=""
                    onClick={togglePasswordVisibility}
                  />
                </div>
              </Form.Group>

              <h4 className="passs_cont_o mt-3">
                Your password must be at least:
              </h4>
              <div className="mt-3">
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.5 9C1.5 5.27208 4.52208 2.25 8.25 2.25C11.9779 2.25 15 5.27208 15 9C15 12.7279 11.9779 15.75 8.25 15.75C4.52208 15.75 1.5 12.7279 1.5 9ZM8.25 0.75C3.69365 0.75 0 4.44365 0 9C0 13.5563 3.69365 17.25 8.25 17.25C12.8063 17.25 16.5 13.5563 16.5 9C16.5 4.44365 12.8063 0.75 8.25 0.75ZM12.7803 7.53033C13.0732 7.23744 13.0732 6.76256 12.7803 6.46967C12.4874 6.17678 12.0126 6.17678 11.7197 6.46967L7.25 10.9393L5.28033 8.96967C4.98744 8.67678 4.51256 8.67678 4.21967 8.96967C3.92678 9.26256 3.92678 9.73744 4.21967 10.0303L6.71967 12.5303L7.25 13.0607L7.78033 12.5303L12.7803 7.53033Z"
                      fill={isPassword8Characters ? "#4EB77B" : "#DBD8DB"}
                    />
                  </svg>
                  <h4
                    style={{ color: isPassword8Characters ? "#02150F" : "" }}
                    className="pas_vali ms-2"
                  >
                    8 characters (20 max)
                  </h4>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.5 9C1.5 5.27208 4.52208 2.25 8.25 2.25C11.9779 2.25 15 5.27208 15 9C15 12.7279 11.9779 15.75 8.25 15.75C4.52208 15.75 1.5 12.7279 1.5 9ZM8.25 0.75C3.69365 0.75 0 4.44365 0 9C0 13.5563 3.69365 17.25 8.25 17.25C12.8063 17.25 16.5 13.5563 16.5 9C16.5 4.44365 12.8063 0.75 8.25 0.75ZM12.7803 7.53033C13.0732 7.23744 13.0732 6.76256 12.7803 6.46967C12.4874 6.17678 12.0126 6.17678 11.7197 6.46967L7.25 10.9393L5.28033 8.96967C4.98744 8.67678 4.51256 8.67678 4.21967 8.96967C3.92678 9.26256 3.92678 9.73744 4.21967 10.0303L6.71967 12.5303L7.25 13.0607L7.78033 12.5303L12.7803 7.53033Z"
                      fill={isLetterAndNumberValid ? "#4EB77B" : "#DBD8DB"}
                    />
                  </svg>
                  <h4
                    style={{ color: isLetterAndNumberValid ? "#02150F" : "" }}
                    className="pas_vali ms-2"
                  >
                    1 letter and1 number
                  </h4>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.5 9C1.5 5.27208 4.52208 2.25 8.25 2.25C11.9779 2.25 15 5.27208 15 9C15 12.7279 11.9779 15.75 8.25 15.75C4.52208 15.75 1.5 12.7279 1.5 9ZM8.25 0.75C3.69365 0.75 0 4.44365 0 9C0 13.5563 3.69365 17.25 8.25 17.25C12.8063 17.25 16.5 13.5563 16.5 9C16.5 4.44365 12.8063 0.75 8.25 0.75ZM12.7803 7.53033C13.0732 7.23744 13.0732 6.76256 12.7803 6.46967C12.4874 6.17678 12.0126 6.17678 11.7197 6.46967L7.25 10.9393L5.28033 8.96967C4.98744 8.67678 4.51256 8.67678 4.21967 8.96967C3.92678 9.26256 3.92678 9.73744 4.21967 10.0303L6.71967 12.5303L7.25 13.0607L7.78033 12.5303L12.7803 7.53033Z"
                      fill={specialCa ? "#4EB77B" : "#DBD8DB"}
                    />
                  </svg>
                  <h4
                    style={{ color: specialCa ? "#02150F" : "" }}
                    className="pas_vali ms-2"
                  >
                    1 special character (Example: # ? ! $ & @)
                  </h4>
                </div>
              </div>

              <div className="progress-bg mt-4">
                <div
                  className="progress cus_prog"
                  style={{
                    width: `${progress * 100}%`,
                    backgroundColor: getActiveColor(validationStatus),
                  }}
                ></div>
              </div>
              <h5 className="mt-3 passs_cont_o">
                Password oo strength: {validationStatus}{" "}
              </h5>

              {token ? (
                <button
                  className={`btn_${
                    validationStatus === "Strong" ? "default" : "disable"
                  } phon_inp mt-4`}
                  onClick={handleForget}
                  type="button"
                  disabled={validationStatus !== "Strong"}
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
                    "Change Password"
                  )}
                </button>
              ) : (
                <button
                  className={`btn_${
                    validationStatus === "Strong" ? "default" : "disable"
                  } phon_inp mt-4`}
                  onClick={handleNextButtonClick}
                  disabled={validationStatus !== "Strong"}
                >
                  Next
                </button>
              )}
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatPass;
