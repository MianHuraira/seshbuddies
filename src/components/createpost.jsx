import React, { useState, useRef } from "react";
import edit from "../assets/logo/icons/edit.svg";
import angle_right from "../assets/logo/icons/angle_right.svg";
import Pinpoint from "../assets/logo/icons/pinpoint.svg";
import { NavLink, useLocation } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import FileSelector from "./File_selector";
import alert_success from "../assets/logo/alert-success.svg";
import downIcon from "../assets/icons/downIcon.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

// images

import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";

const Createpost = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setdate] = useState("");

  // mention code start

  const [inputValue, setInputValue] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef();

  const userSuggestions = [
    { id: 1, name: "John Doe", image: user1, des: "Toronto, CA" },
    { id: 2, name: "Ahmad Ali", image: user2, des: "Guadalajara, MX" },
    { id: 3, name: "Abuzar", image: user1, des: "Philadelphia, USA" },
    { id: 4, name: "Jane Sarmad", image: user2, des: "San Diego, USA" },
    { id: 5, name: "Atif Smit", image: user1, des: "Los Angeles, USA" },
    { id: 6, name: "Huraira", image: user2, des: "Puebla, MX" },
  ];
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.includes("@")) {
      const keywords = value.split("@").slice(1);
      const filteredSuggestions = userSuggestions.filter((user) =>
        keywords.some((keyword) =>
          user.name.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (user) => {
    const mention = `@${user.name} `;
    setSelectedUsers([...selectedUsers, user]);
    setInputValue((prevValue) => {
      // Remove the last word starting with "@"
      const words = prevValue.trim().split(/\s+/);
      words.pop();

      // Append the mention to the input value
      return [...words, mention].join(" ");
    });
    setSuggestions([]);
    inputRef.current.focus();
  };

  const shouldShowSuggestions =
    inputValue.includes("@") && suggestions.length > 0;

  // ///// mentionn code end
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // get path

  const location = useLocation();

  let getPath = location.pathname;

  let allPath = false;

  if (getPath === "/live_stream" || getPath === "/reels") {
    allPath = true;
  }

  const [Success, ShowNotification] = useState(false);
  const Success_close = () => ShowNotification(false);

  const showSuccess = () => {
    shmoke(false);
    ShowNotification(true);
  };

  const [createpost, setShow] = useState(false);
  const Post_open = () => setShow(true);
  const Post_close = () => setShow(false);

  const [SHMOKE, shmoke] = useState(false);
  const [smokeModal, setSmokeModal] = useState("");
  const Shmoke_open = () => {
    shmoke(true);
  };
  const Shmoke_close = () => shmoke(false);

  return (
    <div className="">
      <button
        onClick={Post_open}
        className="oval w-100 d-flex align-items-center justify-content-center"
      >
        <img alt="" src={edit} className="edit me-1" />
        <p className="fs-14 inter fw-bold">Create new post</p>
      </button>

      <div className="explore">
        <p className="semibold  l-black inter fs-14 mt-3">Explore</p>
        <NavLink className="black_text_lg d-flex justify-content-between mt-2">
          <div className="d-flex align-items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.9375 9C0.9375 4.5472 4.5472 0.9375 9 0.9375C13.4528 0.9375 17.0625 4.5472 17.0625 9C17.0625 13.4528 13.4528 17.0625 9 17.0625C4.5472 17.0625 0.9375 13.4528 0.9375 9ZM9.30103 6.22347L11.491 5.49349C12.1556 5.27193 12.488 5.16115 12.6634 5.33658C12.8389 5.51201 12.7281 5.84435 12.5065 6.50902L11.7765 8.69897C11.399 9.83162 11.2102 10.3979 10.8041 10.8041C10.3979 11.2102 9.83162 11.399 8.69898 11.7765L6.50903 12.5065C5.84435 12.7281 5.51201 12.8389 5.33658 12.6634C5.16115 12.488 5.27193 12.1556 5.49349 11.491L6.22347 9.30103C6.60102 8.16838 6.78979 7.60206 7.19593 7.19593C7.60206 6.78979 8.16838 6.60102 9.30103 6.22347ZM9.53103 8.46897C9.82299 8.76094 9.82299 9.23431 9.53103 9.52628L9.52628 9.53103C9.23431 9.82299 8.76094 9.82299 8.46897 9.53103C8.17701 9.23906 8.17701 8.76569 8.46897 8.47372L8.47372 8.46897C8.76569 8.17701 9.23906 8.17701 9.53103 8.46897Z"
                fill={allPath ? "white" : "#02150F"}
              />
            </svg>
            <p
              style={{ color: allPath ? "white" : "" }}
              className="inter-bold fs-14 my-2 ms-2"
            >
              For You
            </p>
          </div>
          <img alt="" src={angle_right} className="angle-right" />
        </NavLink>
        <div className="d-flex justify-content-between mt-1">
          <div className="d-flex align-items-center">
            <svg
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.20573 0.860421C7.73571 1.08632 8.09766 1.62194 8.09766 2.26261L8.09816 7.33855C8.09817 7.42139 8.16533 7.48854 8.24816 7.48854H10.5745C11.2389 7.48854 11.6966 7.93692 11.8849 8.40755C12.0731 8.87768 12.0477 9.4815 11.6721 9.96366L6.4234 16.7009C6.00239 17.2413 5.3404 17.3722 4.79379 17.1392C4.26381 16.9133 3.90186 16.3777 3.90186 15.737L3.90136 10.6611C3.90135 10.5782 3.8342 10.5111 3.75136 10.5111H1.42502C0.760661 10.5111 0.302955 10.0627 0.114604 9.59207C-0.0735491 9.12194 -0.0481923 8.51812 0.327435 8.03596L5.57612 1.29876C5.99713 0.758363 6.65912 0.627435 7.20573 0.860421Z"
                fill={allPath ? "white" : "#02150F"}
              />
            </svg>
            <p
              style={{ color: allPath ? "white" : "" }}
              className="my-2 inter-bold fs-14 ms-2"
            >
              Trending
            </p>
          </div>
          <img alt="" src={angle_right} className="angle-right" />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <NavLink className="d-flex black_text_lg align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="path-1-outside-1_2396_80382"
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="0"
                  width="15"
                  height="17"
                  fill="black"
                >
                  <rect fill="white" x="1" width="15" height="17" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.0214 11.4607C6.12261 6.22594 8.63317 1 8.63317 1V12.8451L8.63335 12.8452L8.63335 1C8.63335 1 11.1435 6.2251 9.24558 11.4595C9.69966 10.4912 10.1618 9.88502 11.5997 9.1651C12.9783 8.51886 14.1097 7.44144 14.8236 6.09525L14.8235 6.09657L14.8237 6.09616L14.8233 6.09954C14.5802 10.2266 11.7375 11.8689 9.99018 12.4915C11.0987 12.2637 12.8735 12.015 15.2667 12.0423L15.2631 12.0444L15.2667 12.0445C15.2667 12.0445 14.3317 14.1854 8.63335 13.2314L8.63335 13.2305C2.9359 14.185 2 12.0436 2 12.0436L2.02799 12.0433C2.16782 12.0418 2.30553 12.0412 2.44112 12.0415C4.61043 12.0465 6.23479 12.2776 7.27433 12.4907C5.52839 11.868 2.69153 10.2279 2.44404 6.11074L2.44231 6.09616L2.44328 6.098L2.44312 6.09525C3.15698 7.44144 4.28845 8.51886 5.66702 9.1651C7.10425 9.88534 7.5667 10.4917 8.0214 11.4607ZM8.63335 12.8457V12.8461L8.6334 12.846L8.63479 12.843L8.63335 12.8457ZM6.72868 14.6862C6.6865 14.5926 6.65825 14.4935 6.64481 14.3917C8.60003 15.1865 10.6715 14.0973 10.6715 14.0973C10.6572 14.2499 10.6266 14.4004 10.5803 14.5465C10.4103 14.7617 10.199 14.9407 9.95893 15.0729C9.71882 15.2052 9.45472 15.288 9.18218 15.3166C9.54972 15.3964 9.93384 15.331 10.2544 15.134C10.0971 15.4198 9.85977 15.6533 9.57169 15.8058C9.28361 15.9584 8.95729 16.0233 8.63285 15.9926C8.34829 16.0059 8.0647 15.9507 7.80588 15.8315C7.54705 15.7124 7.32053 15.5328 7.14535 15.3079C7.29859 15.3969 7.46802 15.4546 7.64373 15.4774C7.81944 15.5002 7.99793 15.4877 8.16878 15.4407C7.61614 15.3633 7.10729 15.0967 6.72868 14.6862Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.0214 11.4607C6.12261 6.22594 8.63317 1 8.63317 1V12.8451L8.63335 12.8452L8.63335 1C8.63335 1 11.1435 6.2251 9.24558 11.4595C9.69966 10.4912 10.1618 9.88502 11.5997 9.1651C12.9783 8.51886 14.1097 7.44144 14.8236 6.09525L14.8235 6.09657L14.8237 6.09616L14.8233 6.09954C14.5802 10.2266 11.7375 11.8689 9.99018 12.4915C11.0987 12.2637 12.8735 12.015 15.2667 12.0423L15.2631 12.0444L15.2667 12.0445C15.2667 12.0445 14.3317 14.1854 8.63335 13.2314L8.63335 13.2305C2.9359 14.185 2 12.0436 2 12.0436L2.02799 12.0433C2.16782 12.0418 2.30553 12.0412 2.44112 12.0415C4.61043 12.0465 6.23479 12.2776 7.27433 12.4907C5.52839 11.868 2.69153 10.2279 2.44404 6.11074L2.44231 6.09616L2.44328 6.098L2.44312 6.09525C3.15698 7.44144 4.28845 8.51886 5.66702 9.1651C7.10425 9.88534 7.5667 10.4917 8.0214 11.4607ZM8.63335 12.8457V12.8461L8.6334 12.846L8.63479 12.843L8.63335 12.8457ZM6.72868 14.6862C6.6865 14.5926 6.65825 14.4935 6.64481 14.3917C8.60003 15.1865 10.6715 14.0973 10.6715 14.0973C10.6572 14.2499 10.6266 14.4004 10.5803 14.5465C10.4103 14.7617 10.199 14.9407 9.95893 15.0729C9.71882 15.2052 9.45472 15.288 9.18218 15.3166C9.54972 15.3964 9.93384 15.331 10.2544 15.134C10.0971 15.4198 9.85977 15.6533 9.57169 15.8058C9.28361 15.9584 8.95729 16.0233 8.63285 15.9926C8.34829 16.0059 8.0647 15.9507 7.80588 15.8315C7.54705 15.7124 7.32053 15.5328 7.14535 15.3079C7.29859 15.3969 7.46802 15.4546 7.64373 15.4774C7.81944 15.5002 7.99793 15.4877 8.16878 15.4407C7.61614 15.3633 7.10729 15.0967 6.72868 14.6862Z"
                  fill={allPath ? "white" : "#02150F"}
                />
                <path
                  d="M8.63317 1H8.93317C8.93317 0.859981 8.83631 0.738582 8.69979 0.70749C8.56327 0.676398 8.42339 0.743881 8.36276 0.870092L8.63317 1ZM8.0214 11.4607L7.74981 11.5882C7.81794 11.7334 7.98824 11.7993 8.13638 11.7378C8.28453 11.6763 8.35811 11.5092 8.30342 11.3584L8.0214 11.4607ZM8.63317 12.8451H8.33317C8.33317 12.9711 8.4118 13.0836 8.53003 13.1269L8.63317 12.8451ZM8.63335 12.8452L8.53021 13.1269C8.62221 13.1606 8.72487 13.1472 8.80519 13.0911C8.8855 13.035 8.93335 12.9432 8.93335 12.8452H8.63335ZM8.63335 1L8.90376 0.870092C8.84313 0.743881 8.70325 0.676398 8.56673 0.70749C8.4302 0.738582 8.33335 0.859981 8.33335 1L8.63335 1ZM9.24558 11.4595L8.96355 11.3572C8.90887 11.508 8.98248 11.6751 9.13064 11.7366C9.2788 11.798 9.44909 11.7321 9.5172 11.5868L9.24558 11.4595ZM11.5997 9.1651L11.4723 8.89338L11.4654 8.89685L11.5997 9.1651ZM14.8236 6.09525L15.1231 6.1127C15.1313 5.97188 15.0403 5.84437 14.9045 5.80635C14.7686 5.76833 14.6246 5.83008 14.5586 5.9547L14.8236 6.09525ZM14.8235 6.09657L14.524 6.07912C14.5158 6.21994 14.6068 6.34746 14.7427 6.38547C14.8785 6.42349 15.0225 6.36173 15.0886 6.23711L14.8235 6.09657ZM14.8237 6.09616L15.1217 6.13078C15.1384 5.98745 15.0506 5.85257 14.9129 5.8097C14.7751 5.76684 14.6263 5.82814 14.5587 5.95563L14.8237 6.09616ZM14.8233 6.09954L14.5253 6.06491C14.5247 6.07056 14.5242 6.07622 14.5239 6.08189L14.8233 6.09954ZM9.99018 12.4915L9.88949 12.2089C9.74107 12.2618 9.65885 12.4205 9.70125 12.5722C9.74366 12.724 9.89623 12.8171 10.0506 12.7853L9.99018 12.4915ZM15.2667 12.0423L15.422 12.299C15.5366 12.2296 15.5914 12.0926 15.5561 11.9633C15.5209 11.834 15.4041 11.7438 15.2701 11.7423L15.2667 12.0423ZM15.2631 12.0444L15.1078 11.7877C14.9932 11.8571 14.9384 11.994 14.9737 12.1233C15.0089 12.2526 15.1256 12.3428 15.2595 12.3444L15.2631 12.0444ZM15.2667 12.0445L15.5416 12.1646C15.5819 12.0724 15.5733 11.9662 15.5187 11.8817C15.4641 11.7972 15.3708 11.7457 15.2703 11.7445L15.2667 12.0445ZM8.63335 13.2314L8.33335 13.2306C8.33295 13.3774 8.43895 13.503 8.58381 13.5272L8.63335 13.2314ZM8.63335 13.2305L8.93335 13.2313C8.93358 13.1429 8.89485 13.0589 8.82747 13.0017C8.7601 12.9446 8.67094 12.92 8.58378 12.9346L8.63335 13.2305ZM2 12.0436L1.99662 11.7436C1.896 11.7448 1.80265 11.7963 1.74804 11.8808C1.69342 11.9653 1.68481 12.0715 1.72511 12.1637L2 12.0436ZM2.02799 12.0433L2.02475 11.7433L2.02461 11.7433L2.02799 12.0433ZM2.44112 12.0415L2.44043 12.3415H2.44043L2.44112 12.0415ZM7.27433 12.4907L7.21408 12.7846C7.36839 12.8162 7.52089 12.7231 7.56327 12.5714C7.60564 12.4197 7.52347 12.261 7.3751 12.2081L7.27433 12.4907ZM2.44404 6.11074L2.7435 6.09274C2.74315 6.08692 2.74263 6.08112 2.74194 6.07534L2.44404 6.11074ZM2.44231 6.09616L2.70733 5.95558C2.63965 5.82799 2.49065 5.76673 2.3528 5.80983C2.21494 5.85292 2.12736 5.98813 2.1444 6.13156L2.44231 6.09616ZM2.44328 6.098L2.17826 6.23858C2.24436 6.3632 2.38836 6.42493 2.5242 6.38688C2.66004 6.34883 2.75102 6.22128 2.74277 6.08045L2.44328 6.098ZM2.44312 6.09525L2.70816 5.9547C2.64207 5.83006 2.49807 5.76832 2.36222 5.80636C2.22637 5.8444 2.13538 5.97196 2.14364 6.11279L2.44312 6.09525ZM5.66702 9.1651L5.80147 8.89681L5.79436 8.89347L5.66702 9.1651ZM8.63335 12.8461H8.33335C8.33335 12.9441 8.38123 13.0359 8.4616 13.092C8.54197 13.1482 8.64468 13.1615 8.7367 13.1277L8.63335 12.8461ZM8.63335 12.8457L8.36782 12.7061C8.34518 12.7492 8.33335 12.7971 8.33335 12.8457H8.63335ZM8.6334 12.846L8.73675 13.1277C8.8123 13.1 8.87354 13.043 8.90672 12.9697L8.6334 12.846ZM8.63479 12.843L8.90811 12.9666C8.97499 12.8188 8.91226 12.6446 8.7665 12.5734C8.62074 12.5022 8.44477 12.5598 8.36926 12.7033L8.63479 12.843ZM6.64481 14.3917L6.75777 14.1138C6.65879 14.0736 6.54587 14.089 6.46133 14.1544C6.37679 14.2197 6.33339 14.3251 6.34739 14.431L6.64481 14.3917ZM6.72868 14.6862L6.45521 14.8095C6.46845 14.8389 6.48633 14.8659 6.50815 14.8896L6.72868 14.6862ZM10.6715 14.0973L10.9702 14.1254C10.9805 14.0158 10.9299 13.9093 10.8385 13.8481C10.747 13.7868 10.6293 13.7805 10.5319 13.8318L10.6715 14.0973ZM10.5803 14.5465L10.8157 14.7325C10.8382 14.704 10.8554 14.6717 10.8663 14.6371L10.5803 14.5465ZM9.18218 15.3166L9.15092 15.0182C9.00438 15.0336 8.89068 15.1531 8.88263 15.3002C8.87457 15.4473 8.97454 15.5785 9.11852 15.6097L9.18218 15.3166ZM10.2544 15.134L10.5172 15.2787C10.5829 15.1594 10.5599 15.0108 10.4614 14.9168C10.3628 14.8229 10.2133 14.8071 10.0973 14.8784L10.2544 15.134ZM9.57169 15.8058L9.71208 16.071L9.71208 16.071L9.57169 15.8058ZM8.63285 15.9926L8.66108 15.6939C8.64704 15.6926 8.63293 15.6923 8.61884 15.6929L8.63285 15.9926ZM7.80588 15.8315L7.93132 15.559L7.80588 15.8315ZM7.14535 15.3079L7.29607 15.0485C7.17184 14.9763 7.01386 15.0023 6.91936 15.1106C6.82486 15.2188 6.82037 15.3789 6.90866 15.4922L7.14535 15.3079ZM7.64373 15.4774L7.60511 15.7749H7.60512L7.64373 15.4774ZM8.16878 15.4407L8.24833 15.73C8.38552 15.6923 8.47734 15.5634 8.46816 15.4214C8.45898 15.2794 8.35132 15.1634 8.21042 15.1436L8.16878 15.4407ZM8.63317 1C8.36276 0.870092 8.36271 0.870203 8.36264 0.870333C8.36261 0.870403 8.36254 0.870554 8.36247 0.870694C8.36234 0.870975 8.36216 0.871336 8.36195 0.871775C8.36153 0.872655 8.36096 0.873853 8.36025 0.875366C8.35881 0.878393 8.35679 0.882681 8.35421 0.888211C8.34904 0.899272 8.34163 0.915301 8.33219 0.93614C8.3133 0.977816 8.28628 1.03874 8.25282 1.11764C8.1859 1.27542 8.09318 1.50521 7.98828 1.79678C7.77858 2.37965 7.51961 3.21101 7.32101 4.20875C6.92444 6.20116 6.76487 8.87638 7.73938 11.563L8.30342 11.3584C7.37914 8.81028 7.52546 6.25513 7.90947 4.32588C8.10117 3.36279 8.35117 2.56049 8.55285 1.99991C8.65365 1.71976 8.74223 1.50037 8.80519 1.35191C8.83667 1.27769 8.86173 1.22123 8.87869 1.1838C8.88718 1.16508 8.89363 1.15113 8.89785 1.14209C8.89996 1.13757 8.90151 1.13429 8.90248 1.13225C8.90296 1.13123 8.90329 1.13052 8.90348 1.13013C8.90357 1.12994 8.90363 1.12982 8.90365 1.12978C8.90366 1.12976 8.90364 1.1298 8.90365 1.12979C8.90362 1.12984 8.90359 1.12991 8.63317 1ZM8.93317 12.8451V1H8.33317V12.8451H8.93317ZM8.73649 12.5635L8.73631 12.5634L8.53003 13.1269L8.53021 13.1269L8.73649 12.5635ZM8.33335 1L8.33335 12.8452H8.93335L8.93335 1L8.33335 1ZM9.52761 11.5617C10.5017 8.8753 10.342 6.20042 9.94541 4.20827C9.74681 3.21066 9.48787 2.37943 9.27819 1.79664C9.1733 1.50511 9.08059 1.27536 9.01368 1.11761C8.98023 1.03872 8.95321 0.9778 8.93432 0.93613C8.92488 0.915295 8.91747 0.899267 8.91231 0.888209C8.90973 0.882679 8.90771 0.878392 8.90627 0.875366C8.90555 0.873853 8.90498 0.872655 8.90457 0.871775C8.90436 0.871335 8.90418 0.870975 8.90405 0.870694C8.90398 0.870554 8.90391 0.870403 8.90388 0.870333C8.90381 0.870203 8.90376 0.870092 8.63335 1C8.36293 1.12991 8.3629 1.12984 8.36287 1.12979C8.36288 1.1298 8.36286 1.12976 8.36287 1.12978C8.36289 1.12982 8.36295 1.12994 8.36304 1.13013C8.36322 1.13052 8.36356 1.13123 8.36404 1.13225C8.36501 1.13429 8.36656 1.13757 8.36867 1.14209C8.37289 1.15112 8.37934 1.16507 8.38782 1.18379C8.40478 1.22121 8.42984 1.27766 8.46131 1.35187C8.52426 1.50031 8.61284 1.71966 8.71362 1.99977C8.91528 2.56027 9.16526 3.36245 9.35696 4.32542C9.74097 6.25441 9.8874 8.80925 8.96355 11.3572L9.52761 11.5617ZM11.4654 8.89685C10.7287 9.2657 10.222 9.6152 9.83847 10.0102C9.45352 10.4066 9.20765 10.8338 8.97396 11.3321L9.5172 11.5868C9.73759 11.1169 9.94983 10.7568 10.2689 10.4281C10.5895 10.098 11.0328 9.78443 11.734 9.43336L11.4654 8.89685ZM14.5586 5.9547C13.8751 7.24348 12.792 8.27486 11.4724 8.89347L11.727 9.43674C13.1646 8.76286 14.3443 7.63941 15.0886 6.23579L14.5586 5.9547ZM15.123 6.11402L15.1231 6.1127L14.5241 6.07779L14.524 6.07912L15.123 6.11402ZM14.5587 5.95563L14.5585 5.95604L15.0886 6.23711L15.0888 6.2367L14.5587 5.95563ZM15.1213 6.13416L15.1217 6.13078L14.5257 6.06154L14.5253 6.06491L15.1213 6.13416ZM10.0909 12.7741C11.8932 12.1319 14.8696 10.4162 15.1228 6.11718L14.5239 6.08189C14.2909 10.0371 11.5818 11.6059 9.88949 12.2089L10.0909 12.7741ZM15.2701 11.7423C12.8543 11.7148 11.0581 11.9658 9.9298 12.1976L10.0506 12.7853C11.1393 12.5616 12.8927 12.3152 15.2633 12.3422L15.2701 11.7423ZM15.4184 12.3011L15.422 12.299L15.1114 11.7856L15.1078 11.7877L15.4184 12.3011ZM15.2703 11.7445L15.2667 11.7445L15.2595 12.3444L15.2631 12.3445L15.2703 11.7445ZM8.58381 13.5272C11.4686 14.0102 13.1908 13.7174 14.2077 13.2703C14.7168 13.0465 15.0447 12.7857 15.249 12.5708C15.3508 12.4638 15.421 12.3691 15.4672 12.2977C15.4903 12.262 15.5074 12.2321 15.5195 12.2095C15.5256 12.1982 15.5303 12.1887 15.534 12.1811C15.5358 12.1773 15.5373 12.1741 15.5386 12.1713C15.5392 12.1699 15.5398 12.1687 15.5403 12.1675C15.5406 12.167 15.5408 12.1664 15.541 12.1659C15.5411 12.1657 15.5413 12.1654 15.5413 12.1652C15.5415 12.1649 15.5416 12.1646 15.2667 12.0445C14.9918 11.9244 14.9919 11.9241 14.9921 11.9238C14.9921 11.9237 14.9922 11.9234 14.9923 11.9232C14.9925 11.9229 14.9926 11.9225 14.9928 11.9222C14.993 11.9216 14.9932 11.9211 14.9934 11.9208C14.9937 11.9201 14.9938 11.9198 14.9937 11.9201C14.9935 11.9206 14.9923 11.923 14.9901 11.9271C14.9857 11.9354 14.9772 11.9506 14.9636 11.9716C14.9364 12.0135 14.8891 12.0786 14.8142 12.1574C14.6651 12.3141 14.4031 12.529 13.9662 12.7211C13.0909 13.1059 11.4965 13.4065 8.68288 12.9355L8.58381 13.5272ZM8.33335 13.2297L8.33335 13.2306L8.93334 13.2322L8.93335 13.2313L8.33335 13.2297ZM2 12.0436C1.72511 12.1637 1.72525 12.1641 1.7254 12.1644C1.72546 12.1645 1.72561 12.1649 1.72572 12.1651C1.72594 12.1656 1.72617 12.1662 1.72642 12.1667C1.72693 12.1678 1.7275 12.1691 1.72813 12.1705C1.7294 12.1732 1.73094 12.1765 1.73277 12.1803C1.73641 12.1878 1.74119 12.1973 1.74723 12.2087C1.75931 12.2313 1.77642 12.2611 1.79955 12.2968C1.84583 12.3683 1.91604 12.463 2.01788 12.57C2.22225 12.7849 2.55019 13.0457 3.05938 13.2696C4.07634 13.7168 5.79859 14.0096 8.68292 13.5263L8.58378 12.9346C5.77066 13.4059 4.17623 13.1052 3.30088 12.7204C2.86391 12.5282 2.60179 12.3133 2.45263 12.1565C2.37771 12.0778 2.33029 12.0126 2.30314 11.9707C2.28954 11.9497 2.28098 11.9344 2.27657 11.9262C2.27436 11.922 2.27319 11.9196 2.27295 11.9191C2.27283 11.9189 2.27294 11.9191 2.27327 11.9198C2.27343 11.9202 2.27365 11.9207 2.27392 11.9213C2.27406 11.9216 2.27421 11.9219 2.27437 11.9223C2.27445 11.9225 2.27458 11.9227 2.27462 11.9228C2.27475 11.9231 2.27489 11.9235 2 12.0436ZM2.02461 11.7433L1.99662 11.7436L2.00338 12.3436L2.03138 12.3433L2.02461 11.7433ZM2.44181 11.7415C2.30491 11.7412 2.16589 11.7418 2.02475 11.7433L2.03124 12.3433C2.16976 12.3418 2.30616 12.3412 2.44043 12.3415L2.44181 11.7415ZM7.33457 12.1968C6.27653 11.9799 4.6322 11.7465 2.44181 11.7415L2.44043 12.3415C4.58865 12.3464 6.19306 12.5753 7.21408 12.7846L7.33457 12.1968ZM2.14458 6.12874C2.40238 10.4175 5.37267 12.131 7.17355 12.7733L7.3751 12.2081C5.6841 11.6051 2.98067 10.0382 2.7435 6.09274L2.14458 6.12874ZM2.1444 6.13156L2.14614 6.14613L2.74194 6.07534L2.74021 6.06077L2.1444 6.13156ZM2.70831 5.95742L2.70733 5.95558L2.17728 6.23674L2.17826 6.23858L2.70831 5.95742ZM2.14364 6.11279L2.1438 6.11555L2.74277 6.08045L2.74261 6.0777L2.14364 6.11279ZM5.79436 8.89347C4.47474 8.27486 3.39158 7.24348 2.70816 5.9547L2.17808 6.23579C2.92239 7.63941 4.10216 8.76286 5.53969 9.43674L5.79436 8.89347ZM8.29298 11.3333C8.059 10.8346 7.81291 10.4073 7.42793 10.0107C7.0444 9.61554 6.5378 9.26591 5.80143 8.8969L5.53262 9.43331C6.23347 9.78453 6.67672 10.0982 6.99739 10.4286C7.31662 10.7574 7.5291 11.1178 7.74981 11.5882L8.29298 11.3333ZM8.93335 12.8461V12.8457H8.33335V12.8461H8.93335ZM8.53005 12.5644L8.52999 12.5644L8.7367 13.1277L8.73675 13.1277L8.53005 12.5644ZM8.36147 12.7193L8.36008 12.7224L8.90672 12.9697L8.90811 12.9666L8.36147 12.7193ZM8.89887 12.9853L8.90032 12.9826L8.36926 12.7033L8.36782 12.7061L8.89887 12.9853ZM6.34739 14.431C6.36467 14.5618 6.40099 14.6893 6.45521 14.8095L7.00215 14.5628C6.97202 14.496 6.95183 14.4251 6.94222 14.3524L6.34739 14.431ZM10.6715 14.0973C10.5319 13.8318 10.532 13.8317 10.532 13.8317C10.5321 13.8317 10.5321 13.8317 10.5321 13.8316C10.5322 13.8316 10.5322 13.8316 10.5322 13.8316C10.5322 13.8316 10.5321 13.8317 10.5318 13.8318C10.5313 13.8321 10.5303 13.8326 10.5288 13.8334C10.5258 13.8349 10.5209 13.8374 10.5142 13.8407C10.5006 13.8475 10.4796 13.8577 10.4518 13.8707C10.3959 13.8968 10.3126 13.9339 10.2061 13.9764C9.99261 14.0616 9.68774 14.1677 9.32498 14.25C8.59528 14.4156 7.65715 14.4794 6.75777 14.1138L6.53184 14.6697C7.58768 15.0988 8.6629 15.0155 9.45774 14.8351C9.85725 14.7445 10.1925 14.6279 10.4285 14.5337C10.5467 14.4865 10.6405 14.4448 10.7056 14.4144C10.7382 14.3992 10.7636 14.3868 10.7814 14.378C10.7902 14.3735 10.7972 14.37 10.8022 14.3675C10.8047 14.3662 10.8067 14.3652 10.8082 14.3644C10.8089 14.364 10.8095 14.3637 10.81 14.3634C10.8103 14.3633 10.8105 14.3632 10.8107 14.3631C10.8108 14.363 10.8109 14.363 10.8109 14.3629C10.811 14.3629 10.8111 14.3628 10.6715 14.0973ZM10.8663 14.6371C10.919 14.4707 10.9538 14.2992 10.9702 14.1254L10.3728 14.0692C10.3605 14.2005 10.3342 14.3302 10.2943 14.4559L10.8663 14.6371ZM10.1037 15.3357C10.3788 15.1841 10.6209 14.979 10.8157 14.7325L10.3449 14.3605C10.1997 14.5443 10.0192 14.6972 9.81419 14.8102L10.1037 15.3357ZM9.21344 15.6149C9.52582 15.5822 9.8285 15.4873 10.1037 15.3357L9.81419 14.8102C9.60914 14.9231 9.38363 14.9938 9.15092 15.0182L9.21344 15.6149ZM10.0973 14.8784C9.84271 15.0348 9.53768 15.0868 9.24584 15.0234L9.11852 15.6097C9.56177 15.706 10.025 15.6271 10.4115 15.3896L10.0973 14.8784ZM9.71208 16.071C10.0519 15.891 10.3317 15.6156 10.5172 15.2787L9.99157 14.9893C9.86242 15.2239 9.66766 15.4155 9.43129 15.5407L9.71208 16.071ZM8.60461 16.2913C8.98733 16.3275 9.37227 16.2509 9.71208 16.071L9.4313 15.5407C9.19494 15.6659 8.92724 15.7191 8.66108 15.6939L8.60461 16.2913ZM7.68043 16.1041C7.9829 16.2433 8.31431 16.3078 8.64685 16.2923L8.61884 15.6929C8.38227 15.704 8.14651 15.6581 7.93132 15.559L7.68043 16.1041ZM6.90866 15.4922C7.11332 15.755 7.37797 15.9648 7.68043 16.1041L7.93132 15.559C7.71612 15.46 7.52775 15.3106 7.38203 15.1235L6.90866 15.4922ZM7.68235 15.1799C7.54619 15.1622 7.41488 15.1175 7.29607 15.0485L6.99462 15.5673C7.18231 15.6763 7.38985 15.7469 7.60511 15.7749L7.68235 15.1799ZM8.08924 15.1515C7.95682 15.1879 7.8185 15.1975 7.68234 15.1799L7.60512 15.7749C7.82038 15.8028 8.03904 15.7875 8.24833 15.73L8.08924 15.1515ZM6.50815 14.8896C6.93373 15.351 7.50578 15.6508 8.12715 15.7378L8.21042 15.1436C7.72649 15.0758 7.28084 14.8423 6.94921 14.4828L6.50815 14.8896Z"
                  fill={allPath ? "white" : "#02150F"}
                  mask="url(#path-1-outside-1_2396_80382)"
                />
              </svg>
              <p
                style={{ color: allPath ? "white" : "" }}
                className="my-2 inter-bold fs-14 ms-2"
              >
                Your Buddies
              </p>
            </div>
            <img alt="" src={angle_right} className="angle-right" />
          </NavLink>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <div className="d-flex align-items-center">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.507 9.98701C5.8944 8.58766 8.91839 8.58766 11.3058 9.98701C11.3814 10.0313 11.4755 10.0836 11.5827 10.1431C12.0571 10.4064 12.7861 10.8111 13.2851 11.2919C13.5967 11.5922 13.9039 11.9977 13.96 12.5028C14.0201 13.0439 13.7783 13.5433 13.3161 13.9768C12.5285 14.7154 11.5776 15.3125 10.3458 15.3125H4.46697C3.23522 15.3125 2.28428 14.7154 1.49671 13.9768C1.03447 13.5433 0.792712 13.0439 0.852804 12.5028C0.908883 11.9977 1.21605 11.5922 1.52766 11.2919C2.02671 10.8111 2.75564 10.4064 3.23012 10.1431C3.33723 10.0836 3.4314 10.0313 3.507 9.98701Z"
                fill={allPath ? "white" : "#02150F"}
              />
              <path
                d="M3.84389 4.25C3.84389 2.28249 5.43888 0.6875 7.40639 0.6875C9.37391 0.6875 10.9689 2.28249 10.9689 4.25C10.9689 6.21751 9.37391 7.8125 7.40639 7.8125C5.43888 7.8125 3.84389 6.21751 3.84389 4.25Z"
                fill={allPath ? "white" : "#02150F"}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.5312 1.25C14.9455 1.25 15.2812 1.58579 15.2812 2V3.125H16.4062C16.8205 3.125 17.1562 3.46079 17.1562 3.875C17.1562 4.28921 16.8205 4.625 16.4062 4.625H15.2812V5.75C15.2812 6.16421 14.9455 6.5 14.5312 6.5C14.117 6.5 13.7812 6.16421 13.7812 5.75V4.625H12.6562C12.242 4.625 11.9062 4.28921 11.9062 3.875C11.9062 3.46079 12.242 3.125 12.6562 3.125L13.7812 3.125V2C13.7812 1.58579 14.117 1.25 14.5312 1.25Z"
                fill={allPath ? "white" : "#02150F"}
              />
            </svg>
            <p
              style={{ color: allPath ? "white" : "" }}
              v
              className="my-2 inter-bold fs-14 ms-2"
            >
              Following
            </p>
          </div>
          <img alt="" src={angle_right} className="angle-right" />
        </div>
      </div>

      <div>
        <p className="mb-1 mt-3 l-black inter-semi fs-15">Start your seshion</p>
        <button
          onClick={() => {
            Shmoke_open();
            setSmokeModal("smoke");
          }}
          className="green-bg mt-2 shession-oval w-100 border-0 d-flex align-items-center justify-content-between"
        >
          <div>
            <h1
              style={{ color: allPath ? "white" : "" }}
              className="fs-13 inter-semi black text-start"
            >
              SHMOKE
            </h1>
            <p
              style={{ color: allPath ? "white" : "" }}
              className="fs-11 inter mt-1"
            >
              Invite a buddy for a chill sesh.
            </p>
          </div>
          <img alt="" src={angle_right} className=" angle-med" />
        </button>
        <div
          onClick={() => {
            Shmoke_open();
            setSmokeModal("match");
          }}
          className="skin-bg mt-2 shession-oval d-flex align-items-center justify-content-between"
        >
          <div>
            <h1
              style={{ color: allPath ? "white" : "" }}
              className="fs-13 inter-semi black"
            >
              MATCH
            </h1>
            <p
              style={{ color: allPath ? "white" : "" }}
              className="fs-11 inter mt-1"
            >
              Find a buddy to match your strain and vibe.
            </p>
          </div>
          <img alt="" src={angle_right} className=" angle-med" />
        </div>
        <div
          onClick={() => {
            Shmoke_open();
            setSmokeModal("drop");
          }}
          className="blue-bg mt-2 shession-oval d-flex align-items-center justify-content-between"
        >
          <div>
            <h1
              style={{ color: allPath ? "white" : "" }}
              className="fs-13 inter-semi black"
            >
              DROP
            </h1>
            <p
              style={{ color: allPath ? "white" : "" }}
              className="fs-11 inter mt-1"
            >
              Running low? Invite buddies to contribute.
            </p>
          </div>
          <img alt="" src={angle_right} className=" angle-med" />
        </div>
        <div
          onClick={() => {
            Shmoke_open();
            setSmokeModal("smo");
          }}
          className="pink-bg mt-2 shession-oval d-flex align-items-center justify-content-between"
        >
          <div>
            <h1
              style={{ color: allPath ? "white" : "" }}
              className="fs-13 inter-semi black"
            >
              SMO
            </h1>
            <p
              style={{ color: allPath ? "white" : "" }}
              className="fs-11 inter mt-1"
            >
              Out of stash? Request a 'Smoke Me Out.'
            </p>
          </div>
          <img alt="" src={angle_right} className=" angle-med" />
        </div>
      </div>

      {/* add new post */}
      <Modal
        dialogClassName="rating_modal"
        show={createpost}
        onHide={Post_close}
        centered
      >
        <Modal.Header closeButton className="py-3 border-0">
          <Modal.Title className="fs-16 inter-bold">New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body className="upload_modal">
          <FileSelector />
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button className="btn-primary mt-3">Post</Button>
        </Modal.Footer>
      </Modal>

      {/* session add modal  */}
      <Modal show={SHMOKE} centered onHide={Shmoke_close} size="md">
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fs-15 inter-bold">
            Start a New SHMOKE Seshsion!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className={` ${
              smokeModal === "match"
                ? "matchBg"
                : "green-bg" && smokeModal === "drop"
                ? "dropBg"
                : "green-bg" && smokeModal === "smo"
                ? "smoBg"
                : "green-bg"
            }  shession-oval w-100`}
          >
            <div>
              <h1 className="sessionName">
                {smokeModal === "smoke" && "SHMOKE"}
                {smokeModal === "match" && "MATCH"}
                {smokeModal === "drop" && "DROP"}
                {smokeModal === "smo" && "SMO"}
              </h1>
              <p className="sessionSb00 mt-1">
                {/* Invite a buddy for a chill sesh. */}
                {smokeModal === "smoke" && "Invite a buddy for a chill sesh."}
                {smokeModal === "match" &&
                  "Find a buddy to match your strain and vibe."}
                {smokeModal === "drop" &&
                  "Running low? Invite buddies to contribute."}
                {smokeModal === "smo" &&
                  "Out of stash? Request a 'Smoke Me Out.'"}
              </p>
            </div>
          </div>
          <Form>
            <Form.Group className="mt-1 mainInp00">
              <Form.Label className="labelHead00">Seshsion Name</Form.Label>
              <Form.Control
                placeholder="Enter seshion name"
                aria-describedby="basic-addon1"
                className="radius_12 text_area"
              />
            </Form.Group>

            <div
              className={`d-grid ${
                smokeModal === "match" || smokeModal === "drop"
                  ? "dualR"
                  : "singlR"
              } mt-2`}
            >
              <Form.Group className="mainInp00 w-100">
                <Form.Label className="labelHead00">Sesh Type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="radius_12 text_area w-100 selctClr"
                >
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mainInp00 w-100">
                <Form.Label className="labelHead00">Strain</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="radius_12 text_area w-100 selctClr"
                >
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className={`mainInp00 w-100 ${
                  smokeModal === "match" || smokeModal === "drop"
                    ? "d-block"
                    : "d-none"
                }`}
              >
                <Form.Label className="labelHead00">Grams</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="radius_12 text_area w-100 selctClr"
                >
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mainInp00 w-100">
                <Form.Label className="labelHead00">Utensils</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="radius_12 text_area w-100 selctClr"
                >
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="position-relative mainInp00">
              <Form.Label className="labelHead00">Location</Form.Label>
              <Form.Control
                placeholder="Choose location"
                aria-label="Choose location"
                aria-describedby="basic-addon1"
                className="radius_12 text_area"
              />
              <img src={Pinpoint} alt="" className="pinpoint" />
            </div>

            <Form.Group className="mt-1 mainInp00">
              <Form.Label className="labelHead00">Date & Time</Form.Label>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center form-control radius_12">
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MMMM d, yyyy"
                    className="border-0 w-100"
                    placeholderText="Select Date"
                  />
                  <img src={downIcon} alt="" />
                </div>

                <div className="position-relative">
                  <Form.Control
                    type="text"
                    value={date}
                    placeholder="time"
                    style={{ fontSize: "14px", zIndex: "10" }}
                    className="mb-0 position-relative"
                  />
                  <Form.Control
                    type="time"
                    placeholder="address"
                    onChange={(e) => setdate(e.target.value)}
                    className="position-absolute mb-0 top-0 bottom-0"
                    style={{ fontSize: "14px", opacity: 0, zIndex: "100" }}
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mt-1 mainInp00">
              <Form.Label className="labelHead00">Description</Form.Label>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                className="mt-1 text_area radius_12"
                Rows={4}
              />
            </Form.Group>
            <Form.Group className="mt-1 mainInp00 position-relative">
              <Form.Label className="labelHead00">Invite Buddies</Form.Label>
              <Form.Control
                placeholder="Write your message..."
                aria-label="Write your message..."
                aria-describedby="basic-addon1"
                className="text_area radius_12"
                value={inputValue}
                onChange={handleInputChange}
                ref={inputRef}
              />
              {shouldShowSuggestions && (
                <div className="mainSearch000">
                  {suggestions.map((user) => (
                    <div
                      className="suggestion-item mb-2 d-flex align-items-center"
                      onClick={() => handleSuggestionClick(user)}
                      key={user.id}
                    >
                      <img
                        className="searcimg00 me-2"
                        src={user.image}
                        alt={user.name}
                      />
                      <div className="d-flex flex-column">
                        <h4 className="userNamesearc00">{user.name}</h4>
                        <h5 className="userdessearc00">{user.des}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button className="btn-primary" onClick={showSuccess}>
            Create Seshsion
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={Success}
        size="sm"
        onHide={Success_close}
        dialogClassName="rating_modal"
        centered
      >
        <Modal.Header
          closeButton
          className="px-2 hide_fcontrol py-2 likes_modal_head"
        >
          <Modal.Title className="m-auto black_text_lg inter-bold fs-16 mt-1 ps-4 ">
            Thanks
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-0">
          <div className="w-100 me-2 d-flex align-items-center mt-1 justify-content-center">
            <img alt="" src={alert_success} className=" alert_Success_img" />
          </div>
          <h1 className="black_text_lg text-center inter-bold mt-3 fs-15 w-75 m-auto">
            Seshsion Created Successfully!
          </h1>
          <p className="text-center inter fs-14 mt-3">
            Your SHMOKE Seshsion 'Chill & Blaze' has been created and invites
            have been sent.
          </p>
          <div className="d-flex align-items-center justify-content-between mt-4 pb-3">
            <NavLink
              to={"/"}
              className="text-center yourBuddyBtn2 bg-transparent"
            >
              Go to Home
            </NavLink>
            <button className="yourBuddyBtn2 btnGreen">View Details</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Createpost;
