/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import backicon from "../assets/logo/icons/arrow_left.svg";
import avaatar2 from "../assets/images/avatarImg.png";
import comment_full from "../assets/logo/icons/comment_icon_full.svg";
import angle_down_full from "../assets/logo/icons/angle_down_full.svg";
import post_wind from "../assets/logo/icons/post_wind.svg";
import video from "../assets/logo/icons/video.svg";
import star_element from "../assets/logo/icons/star_element.svg";
import Story from "../components/PostAll";
import Reels from "../components/Reels";
import Ratings from "../components/Ratings";
import CodeQR from "../assets/icons/code_QR.png";
import Code from "../assets/icons/qrcode_icon.png";
import Dashboard from "../assets/icons/dashboard-square-icon.png";
import Reels_icon from "../assets/icons/reels-icon.png";
import { useNavigate } from "react-router-dom";
import Review from "../assets/icons/star_element.png";

import { Button, Modal, Form } from "react-bootstrap";
import ProfilUpdate from "./Modal/ProfilUpdate";
import UserPost from "./User/UserPost";
import CreatePost from "./Modal/CreatePost";

const MyProfile = () => {
  // ___modal bio___
  const [Bio, setBio] = useState(false);
  const BioClose = () => setBio(false);
  const BioOpen = () => setBio(true);

  const [profile, setProfile] = useState(false);

  const Profile_open = () => {
    setProfile(true);
  };
  const Profile_close = () => {
    setProfile(false);
  };

  const [QRcode, setQR] = useState(false);
  const QRClose = () => setQR(false);
  const QROpen = () => setQR(true);

  const [Url, setUrl] = useState(false);
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
  return (
    <div>
      <div className="bg-white pt-4 px-4 radius_14">
        <div className="align_center flex-column">
          <div className="d-flex justify-content-between align-items-center w-100">
            <img onClick={() => navigate(-1)} src={backicon} className="cursorP" alt="" />
            <h1 className="black_text_lg fs-16 ps-5 me-5 inter-bold mx-3">
              {userData?.username || userData?.user?.username}
            </h1>
            <div className="bg-white">
              <button onClick={QROpen} className="border-0 bg-white">
                <img src={Code} alt="" className="qrcode" />
              </button>
            </div>
          </div>
          <div className="mt-4 flex-column align_center">
            <div className="bg-white">
              <img src={avaatar2} alt="" className="userPic2" />
            </div>

            <h1 className="black_text_lg inter-bold mt-2 fs-18">
              @{userData?.username || userData?.user?.username}
            </h1>
            <div className="d-flex">
              <div className="align_center flex-column B-right">
                <button className="border-0 bg-white">
                  <h1>
                    {(userData?.posts || userData?.user?.posts || []).length}
                  </h1>

                  <p>Posts</p>
                </button>
              </div>
              <div className="align_center flex-column B-right">
                <button className="bg-white border-0">
                  <h1>
                    {
                      (userData?.buddies || userData?.user?.buddies || [])
                        .length
                    }
                  </h1>

                  <p>Buddies</p>
                </button>
              </div>
              <div className="align_center flex-column B-right border-0">
                <h1>
                  {
                    (userData?.sessions || userData?.user?.sessions || [])
                      .length
                  }
                </h1>

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

          <div className="align_center mt-4 mb-4">
            <button onClick={BioOpen} className="add_bio me-2">
              + Add bio
            </button>
            <button onClick={UrlOpen} className="add_bio">
              + Add url
            </button>
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
            {(userData?.posts || userData?.user?.posts || []).length === 0 ? (
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

      <Modal
        show={Bio}
        onHide={BioClose}
        centered
        dialogClassName="modal_width"
      >
        <Modal.Header closeButton className="px-3 py-2 m-0 likes_modal_head">
          <Modal.Title className="m-auto black_text_lg inter-bold fs-18">
            Bio
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-light">
          <div>
            <Form.Control
              as="textarea"
              placeholder="Add bio"
              aria-label="With textarea"
              className="text_area"
              rows={5}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 modal-light">
          <Button className="btn-primary">Save</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={Url}
        onHide={UrlClose}
        centered
        dialogClassName="modal_width"
        className="btn-close"
      >
        <Modal.Header
          closeButton
          className="px-3 Modal_btn py-2 m-0 likes_modal_head"
        >
          <Modal.Title className="m-auto black_text_lg inter-bold fs-18">
            Add URL
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-light">
          <div>
            <Form.Control
              placeholder="https://"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="text_area py-2 radius_10"
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 modal-light">
          <Button className="btn-primary">Save</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={QRcode}
        onHide={QRClose}
        centered
        dialogClassName="modal_width"
      >
        <Modal.Header closeButton className="px-3 py-2 m-0 border-0 Modal_btn">
          <Modal.Title className="me-auto black_text_lg inter-bold fs-16">
            My QR Code
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="align_center flex-column">
          <div className="code_qr">
            <img src={CodeQR} alt="" />
          </div>
          <h1 className="black_text_lg inter-bold fs-20 text-center mt-5">
            @BlazeBuddy
          </h1>
          <h2 className="light_text fs-15 inter text-center mt-2">
            Status: Re'd Up
          </h2>
          <p className="light_text fs-15 inter text-center mt-3 mb-3">
            Share your QR Code with your buddies to connect instantly! Just scan
            the code, and you're connected. No need to search for usernames or
            numbers.
          </p>
        </Modal.Body>
      </Modal>
      <ProfilUpdate isOpen={profile} onClose={Profile_close} />
      <CreatePost isOpen={createpost} onClose={Post_close} />
    </div>
  );
};

export default MyProfile;
