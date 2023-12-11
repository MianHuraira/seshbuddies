/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import backicon from "../../assets/logo/icons/arrow_left.svg";
import Avatar from "../../assets/images/avatarImg.png";
import comment_full from "../../assets/logo/icons/comment_icon_full.svg";
import angle_down_full from "../../assets/logo/icons/angle_down_full.svg";
import post_wind from "../../assets/logo/icons/post_wind.svg";
import video from "../../assets/logo/icons/video.svg";
import star_element from "../../assets/logo/icons/star_element.svg";
import Ratings from "../Ratings";
import clip from "../../assets/logo/icons/clip.svg";
import Code from "../../assets/icons/qrcode_icon.png";
import Dashboard from "../../assets/icons/dashboard-square-icon.png";
import Reels_icon from "../../assets/icons/reels-icon.png";
import { useNavigate } from "react-router-dom";
import Review from "../../assets/icons/star_element.png";
import { Button, Modal, Form } from "react-bootstrap";
import ProfilUpdate from "../Modal/ProfilUpdate";
import UserPost from "./UserPost";
import CreatePost from "../Modal/CreatePost";
import Reels from "../Reels";
import ImageLoader from "../ImageLoader";
import AddBioUser from "../Modal/AddBioUser";
import AddUrlUser from "../Modal/AddUrlUser";
import AddQrCodeUser from "../Modal/AddQrCodeUser";
import clipboardCopy from "clipboard-copy";
import CustomSnackbar from "../CustomSnackbar";
const MyProfile = () => {
  // ___modal bio___
  const [bio, setBio] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info"); // or any other valid default value
  // or any other valid default value


  // close snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const BioClose = () => {
    setBio(false);
  };
  const BioOpen = () => {
    setBio(true);
  };

  const [profile, setProfile] = useState(false);

  const Profile_open = () => {
    setProfile(true);
  };
  const Profile_close = () => {
    setProfile(false);
  };

  const [qrCode, setQR] = useState(false);
  const QRClose = () => setQR(false);
  const QROpen = () => setQR(true);

  const [url, setUrl] = useState(false);
  const UrlClose = () => setUrl(false);
  const UrlOpen = () => setUrl(true);

  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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

  // api update profiel
  const [createpost, setShow] = useState(false);
  const Post_open = () => {
    setShow(true);
  };
  const Post_close = () => {
    setShow(false);
  };
  const navigate = useNavigate();
  const CopyClipHandle = () => {
    const urlToCopy = userData?.user?.url;
    setSnackbarMessage("URL copied to clipboard");
    setSnackbarOpen(true);
    clipboardCopy(urlToCopy);
    setSnackbarSeverity("success");
  };

  return (
    <>
      <CustomSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity} // or "error", "warning", "info", etc.
        onClose={handleSnackbarClose}
      />
      <div className="bg-white pt-4 px-4 radius_14">
        <div className="align_center flex-column">
          <div className="d-flex justify-content-between align-items-center w-100">
            <img
              onClick={() => navigate(-1)}
              src={backicon}
              className="cursorP"
              alt=""
            />
            <h1 className="black_text_lg fs-16 ps-5 me-5 inter-bold mx-3">
              {userData?.user?.username}
            </h1>
            <div className="bg-white">
              <button onClick={QROpen} className="border-0 bg-white">
                <img src={Code} alt="" className="qrcode" />
              </button>
            </div>
          </div>
          <div className="mt-4 flex-column align_center">
            <div className="bg-white">
              {userData?.user?.profilePicture ? (
                <ImageLoader
                  classes="userPic2"
                  imageUrl={userData.user.profilePicture}
                  alt=""
                />
              ) : (
                <ImageLoader
                  style={{ border: "1px solid #EAEBF0" }}
                  classes="userPic2"
                  imageUrl={Avatar}
                  alt=""
                />
              )}
            </div>

            <h1 className="black_text_lg inter-bold mt-2 fs-18">
              @{userData?.user?.username}
            </h1>
            <div className="d-flex">
              <div className="align_center flex-column B-right">
                <button className="border-0 bg-white">
                  <h1>{(userData?.user?.posts || []).length}</h1>

                  <p>Posts</p>
                </button>
              </div>
              <div className="align_center flex-column B-right">
                <button className="bg-white border-0">
                  <h1>{(userData?.user?.buddies || []).length}</h1>

                  <p>Buddies</p>
                </button>
              </div>
              <div className="align_center flex-column B-right border-0">
                <h1>{(userData?.user?.sessions || []).length}</h1>

                <p>Seshsions</p>
              </div>
            </div>
            <div className="align_center mt-3">
              <button onClick={Profile_open} className="edit_profile">
                Edit profile
              </button>
              <img src={comment_full} alt="" className="ms-1" />
              <img src={angle_down_full} alt="" className="ms-1" />
            </div>
          </div>
          {/* <AddBuddies/> */}

          <div className="d-flex align-items-center flex-column mt-4 mb-4">
            {userData?.user?.bio ? (
              <h5 className="mb-2 bio00">{userData?.user?.bio}</h5>
            ) : (
              <button onClick={BioOpen} className="add_bio mb-2">
                + Add bio
              </button>
            )}

            {userData?.user?.url ? (
              <>
                <div
                  className={`align_center mt-1 mb-4 ${
                    !userData?.user?.url ? "d-none" : ""
                  }`}
                >
                  <img
                    onClick={CopyClipHandle}
                    className="cursorP me-2"
                    src={clip}
                    alt=""
                  />
                  <h5 className="url00">{userData?.user?.url}</h5>
                </div>
              </>
            ) : (
              <button onClick={UrlOpen} className="add_bio">
                + Add url
              </button>
            )}
          </div>
          <ul
            style={{ padding: "4px" }}
            className="nav nav-tabs nav-tabs-main mb-4"
          >
            <li className="nav-item nav-item-main">
              <button
                className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("tab1")}
              >
                <img src={post_wind} alt="" />
              </button>
            </li>
            <li className="nav-item nav-item-main">
              <button
                className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
                onClick={() => handleTabClick("tab2")}
              >
                <img src={video} alt="" />
              </button>
            </li>
            <li className="nav-item nav-item-main">
              <button
                className={`nav-link ${activeTab === "tab3" ? "active" : ""}`}
                onClick={() => handleTabClick("tab3")}
              >
                <img src={star_element} alt="" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <div className="tab-content mt-2">
          <div
            className={`tab-pane ${activeTab === "tab1" ? "active" : ""}`}
            id="tab1"
          >
            {(userData?.user?.posts || []).length === 0 ? (
              <div className="align_center flex-column my-5">
                <img src={Dashboard} alt="" style={{ width: "21px" }} />
                <h1 className="fs-17 inter-bold mt-3 mb-2">No Posts Yet!</h1>
                <p className="text-center m-auto fs-15 w-75">
                  Share your experiences, thoughts, or your favorite strains and
                  start interacting with your buddies!
                </p>
                <div className="w-50 d-flex align-items-center justify-content-center mt-3">
                  <Button onClick={Post_open} className="btn-primary w-75">
                    Create Your First Post
                  </Button>
                </div>
              </div>
            ) : (
              <UserPost />
            )}
          </div>
          <div
            className={`tab-pane ${activeTab === "tab2" ? "active" : ""}`}
            id="tab2"
          >
            <div className="align_center flex-column my-5">
              <img src={Reels_icon} alt="" style={{ width: "21px" }} />
              <h1 className="fs-17 inter-bold mt-3 mb-2">No Reels Yet!</h1>
              <p className="text-center  m-auto fs-15 w-75">
                Capture and share your sesh moments in a reel. Let your
                creativity shine!
              </p>
            </div>

            <Reels />
          </div>
          <div
            className={`tab-pane ${activeTab === "tab3" ? "active" : ""}`}
            id="tab3"
          >
            <div className="align_center flex-column my-5">
              <img src={Review} alt="" style={{ width: "21px" }} />
              <h1 className="fs-17 inter-bold mt-3 mb-2">No Reviews Yet!</h1>
              <p className="text-center  m-auto fs-15 w-75">
                Share your thoughts on different strains and Seshsions. Help
                your buddies know what's good!
              </p>
            </div>

            <Ratings />
          </div>
        </div>
      </div>

      {/* modal start */}
      <AddBioUser isOpen={bio} onClose={BioClose} />
      <AddUrlUser isOpen={url} onClose={UrlClose} />
      <AddQrCodeUser isOpen={qrCode} onClose={QRClose} />
      <ProfilUpdate isOpen={profile} onClose={Profile_close} />
      <CreatePost isOpen={createpost} onClose={Post_close} />
    </>
  );
};

export default MyProfile;
