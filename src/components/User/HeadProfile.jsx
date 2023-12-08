import React, { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import "../../assets/css/style.css";
import Status_icon from "../../assets/icons/status_icon.png";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import Avatar from "../../assets/images/avatarImg.png";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../pages/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import ImageLoader from "../ImageLoader";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  let getPath = location.pathname;

  let allPath = false;

  if (getPath === "/live_stream" || getPath === "/reels") {
    allPath = true;
  }
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem("meraname");
    if (storedUserData) {
      // Parse the JSON data
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("meraname");
    localStorage.removeItem("isAgeVerified");
    localStorage.removeItem("isConfirmed");
    logout();
    toast.success("Logout Successfully", {
      onClose: () => {
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
              {userData?.user?.profilePicture ? (
                <ImageLoader
                  classes="profile_img"
                  imageUrl={userData.user.profilePicture}
                  alt=""
                />
              ) : (
                <ImageLoader
                  style={{ border: "1px solid #EAEBF0" }}
                  classes="profile_img"
                  imageUrl={Avatar}
                  alt=""
                />
              )}

              <img className="status_icon" src={Status_icon} alt="" />
            </div>
            <h5
              style={{ color: allPath ? "white" : "" }}
              className="me-2 user_name0 d-none d-lg-block"
            >
              {userData?.user?.username}
            </h5>
          </div>
        }
        menuVariant="dark"
        className="me-2 main_drop_na"
        align={"end"}
      >
        <NavDropdown.Item>
          <NavLink className={"d-block w-100"} to={"/profile"}>
            Settings
          </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default Profile;
