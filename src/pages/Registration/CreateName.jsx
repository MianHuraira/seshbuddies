import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DoneLogo from "../../assets/icons/doneLogo.png";
import { NavLink } from "react-router-dom";
import CheckIcon from "../../assets/icons/checkIcon.svg";
import CrossIcon from "../../assets/icons/crossIcon.svg";

const CreateName = () => {
  const [nickname, setNickname] = useState("");
  const maxCharacterLimit = 30;

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Function to update the character count
  const handleNicknameChange = (event) => {
    const input = event.target.value;
    if (input.length <= maxCharacterLimit) {
      setNickname(input);
    }
  };

  const isButtonEnabled = nickname.length > 0;

  const handleConfirmation = () => {
    setIsConfirmed(true);
  };

  return (
    <>
      <div className="main_div_login">
        <div className={`login_main p-4`}>
          {isConfirmed ? (
            <>
              <section className={`text-center donSec`}>
                <img
                  style={{ width: "42px", height: "42px" }}
                  src={DoneLogo}
                  alt=""
                />

                <h3 className="sucess_text mt-3">Welcome to SESHBUDDIES!</h3>
                <h5 className="mt-3 sb_head">
                  Your account has been successfully created.
                </h5>

                <button className={`btn_default phon_inp mt-4`}>
                  <NavLink style={{ color: "white" }} to={"/home"}>
                    Start Your Sesh Journey
                  </NavLink>
                </button>
              </section>
            </>
          ) : (
            <section className={`nick_name_sec`}>
              <h4 className="f_head text-center">Create nickname</h4>
              <h5 className="mt-2 sb_head">This can be anything you like.</h5>
              <Form className="mt-4 w-100">
                <Form.Group
                  className="mb-3 w-100 text-center"
                  controlId="exampleForm.ControlInput1"
                >
                  <div
                    className={`d-flex align-items-center login_inp p-2 ${
                      isInputFocused ? "focused" : ""
                    }`}
                  >
                    <Form.Control
                      className="hide_fcontrol p-0"
                      type="text"
                      placeholder="Add your nickname"
                      value={nickname}
                      onFocus={() => setIsInputFocused(true)}
                      onBlur={() => setIsInputFocused(false)}
                      onChange={handleNicknameChange}
                    />
                    <img
                      className="pass_img"
                      src={nickname  === "admin" ? CheckIcon : CrossIcon}
                      alt=""
                    />
                  </div>
                  <span className="character-count">
                    {nickname.length}/{maxCharacterLimit}
                  </span>
                  <h6 className="mt-3 sb_head">
                    You can change the nickname later in Settings.
                  </h6>
                </Form.Group>
              </Form>

              <button
                onClick={handleConfirmation}
                className={`btn_${ nickname === "admin" ? "default" : "disable" } phon_inp mt-4`}
                disabled={!isButtonEnabled}
              >
                Confirm
              </button>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateName;
