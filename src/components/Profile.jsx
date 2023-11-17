import React, { useEffect, useState } from "react";
import { NavDropdown, NavLink } from "react-bootstrap";
import "../assets/css/style.css";
import Profile_img from "../assets/images/profile_img.png";
import Status_icon from "../assets/icons/status_icon.png";
import { useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let getPath = location.pathname;

  let allPath = false;

  if (getPath === "/live_stream" || getPath === "/reels") {
    allPath = true;
  }

  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      // Parse the JSON data
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);
  const handleLogout = () => {
    // Clear local storage to log out the user
    localStorage.removeItem("userData");

    // Show logout success toast
    toast.success("Logout Successfully", {
      onClose: () => {
        // Navigate to the home page after the toast is closed
        navigate("/");
      },
    });
  };

  return (
    <>
      <ToastContainer />
      <NavDropdown
        id="nav-dropdown-dark-example"
        title={
          <div className="d-flex align-items-center">
            <div className="me-2 position-relative">
              <img className="profile_img" src={Profile_img} alt="" />
              <img className="status_icon" src={Status_icon} alt="" />
            </div>
            {userData && userData.username && (
              <h5
                style={{ color: allPath ? "white" : "" }}
                className="me-2 user_name0 d-none d-lg-block"
              >
                {userData.username}
              </h5>
            )}
          </div>
        }
        menuVariant="dark"
        className="me-2 main_drop_na"
        align={"end"}
      >
        <NavDropdown.Item>
          <NavLink to={"/profile"}>Settings</NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default Profile;
