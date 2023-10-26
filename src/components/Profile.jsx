import React from "react";
import { NavDropdown } from "react-bootstrap";
import "../assets/css/style.css";
import Profile_img from "../assets/images/profile_img.png";
import Status_icon from "../assets/icons/status_icon.png";
import { NavLink, useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();

  let getPath = location.pathname;

  let allPath = false;

  if (
    getPath === "/live_stream" ||
    getPath === "/sessions" ||
    getPath === "/reels"
  ) {
    allPath = true;
  }
  return (
    <>
      <NavDropdown
        id="nav-dropdown-dark-example"
        title={
          <div className="d-flex align-items-center">
            <div className="me-3 position-relative">
              <img
                className="profile_img d-none d-lg-block"
                src={Profile_img}
                alt=""
              />
              <img className="status_icon" src={Status_icon} alt="" />
            </div>
            <h5
              style={{ color: allPath ? "white" : "" }}
              className="me-2 user_name0 d-none d-lg-block"
            >
              steve.brown
            </h5>
          </div>
        }
        menuVariant="dark"
        className="m-2 main_drop_na"
        align={"end"}
      >
        <NavDropdown.Item>Action</NavDropdown.Item>
        <NavDropdown.Item>
          <NavLink to={"/profile"}>Settings</NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Separated link</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default Profile;
