import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DoneLogo from "../../assets/icons/doneLogo.png";
import { NavLink } from "react-router-dom";
import CheckIcon from "../../assets/icons/checkIcon.svg";
import CrossIcon from "../../assets/icons/crossIcon.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import "react-toastify/dist/ReactToastify.css";
import {
  setUser,
  setAuthenticated,
} from "../../components/Redux/Slices/AuthSlice";
import { useDispatch } from "react-redux";

const CreateName = ({ passCreate, detail, keyP, passCode }) => {
  const [nickname, setNickname] = useState("");
  const maxCharacterLimit = 30;
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const dispatch = useDispatch();
  const handleNicknameChange = (event) => {
    const input = event.target.value;

    // Check if the input length is within the allowed range (6 to 30 characters)
    if (input.length <= maxCharacterLimit) {
      setNickname(input);
    }
  };

  const isButtonEnabled =
    nickname.length >= 6 && nickname.length <= maxCharacterLimit;

  const handleConfirmation = () => {
    const dataToSend = {
      password: passCreate,
      username: nickname,
      passcode: passCode,
      fcmToken: "",
    };

    // Determine the key based on keyP value and update the dataToSend accordingly
    if (keyP === "number") {
      dataToSend.phone = detail;
    } else if (keyP === "gmail") {
      dataToSend.email = detail;
    }
    setIsButtonClicked(true);

    // Send data to the server
    axios
      .post(`${global.BASEURL}/users/signup`, dataToSend)
      .then((res) => {
        setIsConfirmed(true);
        dispatch(setUser(res.data));
        dispatch(setAuthenticated(true));

        // Show success toast
        toast.success("Account created successfully!");
        console.log(res, "resp");
      })
      .catch((error) => {
        // Handle error
        console.error("Error creating account: ", error);
        toast.error(error.response.data.message);
      })
      .finally(() => {
        // This block will execute regardless of success or error
        setIsButtonClicked(false);
      });
  };

  return (
    <>
      <ToastContainer />
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
                      src={isButtonEnabled ? CheckIcon : CrossIcon}
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
                className={`btn_${
                  isButtonEnabled ? "default" : "disable"
                } phon_inp mt-4`}
                disabled={!isButtonEnabled}
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
                  "Confirm"
                )}
              </button>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateName;
