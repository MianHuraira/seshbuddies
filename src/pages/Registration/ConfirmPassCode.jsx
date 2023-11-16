/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import CreateName from "./CreateName";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PassCode = ({ passCode, keyP, passCreate, detail }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const codeInputs = [useRef(), useRef(), useRef(), useRef()];

  const [passcodesMatch, setPasscodesMatch] = useState(false);

  const handleCodeChange = (e, index) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 1) {
      setCode((prevCode) => {
        const newCode = [...prevCode];
        newCode[index] = value;

        if (index < 3 && value !== "") {
          codeInputs[index + 1].current.focus();
        }

        return newCode;
      });
    }
  };
  const handleConfirmPasscode = () => {
    const enteredCode = code.join("");

    if (enteredCode === passCode) {
      setPasscodesMatch(true);
      toast.success("Passcodes match.");
    } else {
      toast.error("Passcodes do not match.");
      //   setPasscodesMatch(false);
    }
  };

  return (
    <>
      <ToastContainer />
      {passcodesMatch ? (
        <CreateName
          passCode={passCode}
          passCreate={passCreate}
          keyP={keyP}
          detail={detail}
        />
      ) : (
        <div className="main_div_login varifyDiv">
          <div className="login_main p-4">
            <h4 className="f_head">Confirm Passcode</h4>
            <h5 className="mt-2 sb_head">
              Enter your passcode again to confirm.
            </h5>

            <Form>
              <Form.Group className="mt-3 d-flex align-items-center justify-content-center me-2">
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

              <button
                onClick={handleConfirmPasscode}
                className="btn_default phon_inp mt-4"
                type="button"
              >
                Confirm
              </button>

              {!setPasscodesMatch ? (
                <div className="error-message">
                  Passcodes do not match. Please try again.
                </div>
              ) : (
                ""
              )}
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default PassCode;
