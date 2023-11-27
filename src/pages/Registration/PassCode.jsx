import React, { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import ConfirmPassCode from "./ConfirmPassCode";

const PassCode = ({ passCreate, detail, keyP }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const codeInputs = [useRef(), useRef(), useRef(), useRef()];
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCodeChange = (e, index) => {
    const value = e.target.value;

    // Check for backspace key
    if (e.keyCode === 8 && index > 0 && !value) {
      // Move the cursor to the previous input
      codeInputs[index - 1].current.focus();
    }

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

  const confirmCode = () => {
    setShowConfirm(true);
  };
  const isButtonDisabled = code.some((val) => val === "");
  return (
    <>
      {showConfirm ? (
        <ConfirmPassCode
          passCode={code.join("")}
          detail={detail}
          passCreate={passCreate}
          keyP={keyP}
        />
      ) : (
        <div className="main_div_login varifyDiv">
          <div className="login_main p-4">
            <h4 className="f_head">Secure Your Account</h4>
            <h5 className="mt-2 sb_head">
              Set a 4-digit passcode for added security.
            </h5>

            <Form>
              <Form.Group className="mt-3 d-flex align-items-center justify-content-center me-2">
                {codeInputs.map((inputRef, index) => (
                  <input
                    key={index}
                    ref={inputRef}
                    className={`custom_control text-center inp_width me-2 ${code[index] ? "activeB" : ""}`}
                    type="text"
                    value={code[index]}
                    onKeyDown={(e) => handleCodeChange(e, index)}
                    onChange={(e) => handleCodeChange(e, index)}
                  />
                ))}
              </Form.Group>

              <button
                onClick={confirmCode}
                className={`phon_inp mt-4 btn_${
                  isButtonDisabled ? "disable" : "default"
                }`}
                disabled={isButtonDisabled}
              >
                Set Passcode
              </button>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default PassCode;
