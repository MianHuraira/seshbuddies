import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import CreatPas from "./CreatPass";
import errorIcon from "../../assets/icons/error_icon.png";
const VerifyCode = ({ title }) => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const codeInputs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const [currentPage, setCurrentPage] = useState("verify");

  const [errorMessage, setErrorMessage] = useState("");

  const handleCodeChange = (e, index) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 1) {
      setCode((prevCode) => {
        const newCode = [...prevCode];
        newCode[index] = value;

        if (index < 4 && value !== "") {
          codeInputs[index + 1].current.focus();
        } else if (index === 4 && value !== "") {
          // Check if the code is correct
          const enteredCode = newCode.join("");
          if (enteredCode === "22222") {
            setCurrentPage("createPass");
          } else {
            setErrorMessage("Incorrect code");
          }
        } else {
          setErrorMessage(""); // Clear the error message if the input is empty
        }

        return newCode;
      });
    }
  };

  const [timer, setTimer] = useState(5);
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
    setTimer(5);
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
                <span style={{ color: "#32B744" }}>+44 12345678 </span>
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
                {errorMessage && <div className="error_div mt-3"> <img className="me-2" src={errorIcon} alt="" /> {errorMessage}</div>}
              </Form>
              <h5 className="sb_head mt-4">Resend code {timer}s</h5>
              <div className="mt-4">
                {showResendLink ? (
                  <h5 className="counter_con">
                    Didn’t get a code?{" "}
                    <span
                      onClick={handleResendCode}
                      style={{ color: "#32B744", cursor: "pointer" }}
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
        <CreatPas />
      ) : null}
    </>
  );
};

export default VerifyCode;
