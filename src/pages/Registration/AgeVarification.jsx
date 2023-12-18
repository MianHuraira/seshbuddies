/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import whiteLogo from "../../assets/logo/logo_white.svg";
import { Button, Form } from "react-bootstrap";
import ErrorIcon from "../../assets/icons/error_icon.png";
import axios from "axios";
import { useNavigate ,NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import { setAgeVerified } from "../../components/Redux/Slices/AuthSlice";

const AgeVarification = () => {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMonthChange = (e) => {
    const value = e.target.value;
    if (e.target.selectionStart === 0 && e.target.selectionEnd === 0) {
      setMonth("");
    } else if (/^\d+$/.test(value) && value >= 1 && value <= 12) {
      setMonth(value);
      if (value.length === 2) {
        document.getElementById("dayInput").focus();
      }
    }
  };

  const handleDayChange = (e) => {
    const value = e.target.value;
    if (e.target.selectionStart === 0 && e.target.selectionEnd === 0) {
      setDay("");
      document.getElementById("monthInput").focus();
    } else if (/^\d+$/.test(value) && value >= 1 && value <= 31) {
      setDay(value);
      if (value.length === 2) {
        document.getElementById("yearInput").focus();
      }
    }
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    if (e.target.selectionStart === 0 && e.target.selectionEnd === 0) {
      setYear("");
      document.getElementById("dayInput").focus();
    } else if (/^\d*$/.test(value) && value.length <= 4) {
      setYear(value);
      if (value.length === 4) {
        // Perform age validation here
        const currentYear = new Date().getFullYear();
        const age = currentYear - parseInt(value, 10);
        if (age < 18) {
          setError("Sorry, you must be at least 18 years old.");
        } else {
          setError("");
        }
      } else {
        setError("");
      }
    }
  };
  const AgeVarifiy = () => {
    // Check if any of the input fields is empty
    if (!month || !day || !year) {
      setError("Please fill in all date fields.");
      toast.error("Please fill in all date fields.");
      return;
    }

    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(year, 10);

    if (age >= 18) {
      setError("");
      toast.success("You are now eligible to sign up!");

      // Store the flag in local storage or state indicating successful age verification
      // localStorage.setItem("isAgeVerified", "true");
      dispatch(setAgeVerified(true));

      navigate("/signUp");
    } else {
      setError("Sorry, you must be at least 18 years old.");
      toast.error("Sorry, you must be at least 18 years old.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="main_verifi_div">
        <div className="child_varif">
          <img
            style={{ width: "55px", height: "55px" }}
            className="mb-3"
            src={whiteLogo}
            alt=""
          />
          <h4 className="startUpHead text-center mt-4">Age Verfication</h4>
          <h5 className="startUpCont text-center mt-3">
            In some states you must be 18 or over to view <br /> cannabis
            information, SESHBUDDIES requires <br /> users to meet the legal age
            limit to access our <br />
            application.
          </h5>
          <h5 className="startUpCont text-center mt-5">
            When’s your birthday?
          </h5>
          {/* varification form start */}

          <Form className="mt-4">
            <div className="d-flex align-items-center">
              <Form.Group className="mb-3 me-2">
                <Form.Control
                  style={{ width: "5rem" }}
                  placeholder="MM"
                  className={`age_inp ${error ? "erorborder" : ""}`}
                  onChange={handleMonthChange}
                  maxLength="2"
                  value={month}
                  type="text"
                  id="monthInput"
                />
              </Form.Group>
              <Form.Group className="mb-3 me-2">
                <Form.Control
                  style={{ width: "5rem" }}
                  placeholder="DD"
                  className={`age_inp ${error ? "erorborder" : ""}`}
                  onChange={handleDayChange}
                  maxLength="2"
                  id="dayInput"
                  value={day}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  placeholder="YYYY"
                  className={`age_inp ${error ? "erorborder" : ""}`}
                  onChange={handleYearChange}
                  maxLength="4"
                  id="yearInput"
                  value={year}
                  type="text"
                />
              </Form.Group>
            </div>
            {error && (
              <div className="errrDiv d-flex align-items-center justify-content-center">
                <img
                  style={{ width: "14px", height: "14px", marginRight: "4px" }}
                  src={ErrorIcon}
                  alt=""
                />{" "}
                {error}
              </div>
            )}
            <h5 className="startUpCont text-center mt-5">
              I can confirm that I am 18 or over that I agree to the SESHBUDDIES
              <span style={{ color: "#32B744" }}> Terms of Use </span> and
              <span style={{ color: "#32B744" }}> Privacy Policy </span>
            </h5>

            <div className="d-flex align-items-center mt-5 mb-3">
              <Button onClick={AgeVarifiy} variant="primary" type="button">
                I Agree
              </Button>
              <NavLink to={"/"} type="button" className="dec_btn text-center ms-3">
                Decline
              </NavLink>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AgeVarification;
