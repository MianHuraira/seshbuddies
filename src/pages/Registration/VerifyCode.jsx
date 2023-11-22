/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import CreatPas from "./CreatPass";
import errorIcon from "../../assets/icons/error_icon.png";
import axios from "axios";

const VerifyCode = ({ title, otp, detail, keyP, forget , token }) => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const codeInputs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const [currentPage, setCurrentPage] = useState("verify");
  const [errorMessage, setErrorMessage] = useState("");

  const [initialOtp, setInitialOtp] = useState(otp);
  console.log("as" , token);

  // prop for create pass

  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const handleCodeChange = (e, index) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 1) {
      setCode((prevCode) => {
        const newCode = [...prevCode];
        newCode[index] = value;

        if (value !== "") {
          codeInputs[index].current.classList.add("activeB");
        } else {
          codeInputs[index].current.classList.remove("activeB");
        }

        if (index < 4 && value !== "") {
          codeInputs[index + 1].current.focus();
        } else if (index === 4 && value !== "") {
          const enteredCode = newCode.join("");
          if (enteredCode === initialOtp) {
            setCurrentPage("createPass");
            setVerificationSuccess(true);
          } else {
            setErrorMessage("Incorrect code");
          }
        } else if (index > 0 && value === "") {
          codeInputs[index - 1].current.focus();
        } else {
          setErrorMessage("");
        }

        return newCode;
      });
    } else if (e.keyCode === 8) {
      // Handle backspace
      if (value === "" && index > 0) {
        codeInputs[index - 1].current.focus();
      } else if (index > 0) {
        codeInputs[index - 1].current.focus();
      }
    } else if (/^\d*$/.test(value) && index < 4) {
      // Handle typing a number
      codeInputs[index + 1].current.focus();
    }
  };

  const [timer, setTimer] = useState(50);
  const [showResendLink, setShowResendLink] = useState(false);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setShowResendLink(true);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const handleResendCode = () => {
    // Determine whether it's a phone or email resend
    let requestData;
    if (keyP === "number") {
      // Phone resend
      requestData = { phone: detail };
    } else if (keyP === "gmail") {
      // Email resend
      requestData = { email: detail };
    }

    let apiUrl;
    if (forget) {
      apiUrl = "forget-password";
    } else {
      apiUrl = "send-code";
    }

    // Resend the code
    axios
      .post(`${global.BASEURL}/users/${apiUrl}`, requestData)
      .then((res) => {
        const resp = res.data.code;
        setInitialOtp(resp);
      })
      .catch((error) => {
        console.error("Error resending code: ", error);
      });

    setTimer(50);
    setShowResendLink(false);
  };

  //   get value 5 digit

  return (
    <>
      {currentPage === "verify" ? (
        <>
          <div className="main_div_login varifyDiv">
            <div className="login_main p-4">
              <h4 className="f_head">{title}</h4>
              <h5 className="mt-2 sb_head">
                Your code was sent to
                <span style={{ color: "#32B744" }}> {detail}</span>
              </h5>
              <Form>
                <Form.Group className="mt-3 d-flex align-items-center me-2">
                  {codeInputs.map((inputRef, index) => (
                    <input
                      key={index}
                      ref={inputRef}
                      className="custom_control text-center inp_width me-2"
                      type="text"
                      value={code[index]}
                      onChange={(e) => handleCodeChange(e, index)}
                    />
                  ))}
                </Form.Group>
                {errorMessage && (
                  <div className="error_div mt-3">
                    <img className="me-2" src={errorIcon} alt="" />
                    {errorMessage}
                  </div>
                )}
              </Form>
              <h5 className="sb_head mt-4">Resend code {timer}s</h5>
              <div className="mt-4">
                {showResendLink ? (
                  <h5 className="counter_con">
                    Didn’t get a code?
                    <span
                      onClick={handleResendCode}
                      style={{
                        color: "#32B744",
                        cursor: "pointer",
                        marginLeft: "5px",
                      }}
                    >
                      Resend Code
                    </span>
                  </h5>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </>
      ) : currentPage === "createPass" ? (
        <CreatPas detail={detail} keyP={keyP} forget={true} token={token} />
      ) : null}
    </>
  );
};

export default VerifyCode;
