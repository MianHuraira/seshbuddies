/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import clipboardCopy from "clipboard-copy";
import SideMessage from "../side_message";
import backicon from "../../assets/logo/icons/arrow_left.svg";
import bellIcon from "../../assets/logo/icons/bell_icon.svg";
import dots from "../../assets/logo/icons/3dots.svg";
import avaatar2 from "../../assets/logo/Avatar2.svg";
import comment_full from "../../assets/logo/icons/comment_icon_full.svg";
import angle_down_full from "../../assets/logo/icons/angle_down_full.svg";
import avatarImg from "../../assets/images/avatarImg.png";
import clip from "../../assets/logo/icons/clip.svg";
import post_wind from "../../assets/logo/icons/post_wind.svg";
import video from "../../assets/logo/icons/video.svg";
import star_element from "../../assets/logo/icons/star_element.svg";
import Story from "../PostAll";
import Reels from "../Reels";
import Ratings from "../Ratings";
import girl from "../../assets/logo/orange-girl.svg";
import stars from "../../assets/logo/icons/star.svg";
import CloseIcon from "../../assets/logo/closeLight.svg";
import AngleRight from "../../assets/logo/icons/angle_right.svg";
import Info from "../../assets/logo/info_icon.svg";
import Createpost from "../createpost";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ImageLoader from "../ImageLoader";
import Spinner from "react-bootstrap/Spinner";
import OtherUserPost from "./OtherUserPost";
import CustomSnackbar from "../CustomSnackbar";
import { selectUser } from "../Redux/Slices/AuthSlice";
import { useSelector } from 'react-redux';

const OtherUsers = () => {
  const { userId } = useParams();
  // const [resultData, setResultData] = useState({});
  const [otherUser, setOtherUser] = useState("");
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info"); // or any other valid default value
  const userData = useSelector(selectUser);



  // close snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  // ___modal___
  const [LiveNoti, ShowNotification] = useState(false);
  const Notificationpen = () => ShowNotification(true);
  const NotificationClose = () => ShowNotification(false);
  // ___modal___

  // ___modal___
  const [Suggested, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // ___modal___
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [activeModalTab, setActiveModalTab] = useState("tab1");
  const handleModalClick = (tab) => {
    setActiveModalTab(tab);
  };
  const navigate = useNavigate();

  // api get user post anda data
  const GetData = async () => {
    try {
      const res = await axios.get(
        global.BASEURL + `/users/other-users/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": userData?.token,
          },
        }
      );
      setOtherUser(res.data.user);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   const storedUserData = localStorage.getItem("meraname");

  //   if (storedUserData) {
  //     const parsedUserData = JSON.parse(storedUserData);

  //     if (parsedUserData.token) {
  //       setToken(parsedUserData.token);
  //     }

  //     setResultData(parsedUserData);
  //   }
  // }, []);

  useEffect(() => {
    if (userData?.token) {
      GetData();
    }
  }, [userData?.token]);

  const CopyClipHandle = () => {
    const urlToCopy = otherUser?.url;
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

      <Container className="top_padd px-4" fluid="xxl">
        <Row className="h-100 p-0">
          <Col lg="3" md="3" className=" overflow-hidden">
            <Createpost />
          </Col>

          <Col
            lg="6"
            md="9"
            className="main_height no_scrollbar gx-5 overflow-y-auto"
          >
            {loading ? (
              <div className="text-center">
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
              </div>
            ) : (
              <div className="bg-white pt-4 px-4 radius_12">
                <div className="align_center flex-column">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <img
                      onClick={() => navigate(-1)}
                      className="cursorP"
                      src={backicon}
                      alt=""
                    />
                    <h1 className="black_text_lg fs-16 ps-5 inter-bold mx-3">
                      {otherUser?.username}
                    </h1>
                    <div className="bg-white">
                      <button className="border-0 bg-white">
                        <img src={bellIcon} alt="" className="me-4 " />
                      </button>
                      <button className="border-0 bg-white">
                        <img src={dots} alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 flex-column align_center">
                    <button
                      className="border-0 bg-white"
                      onClick={Notificationpen}
                    >
                      <div className="position-relative">
                        <ImageLoader
                          circeltrue={true}
                          imageUrl={
                            otherUser?.profilePicture
                              ?otherUser?.profilePicture
                              : avatarImg
                          }
                          classes={"userPic2"}
                        />
                      </div>
                    </button>

                    <h1 className="black_text_lg inter-bold mt-2 fs-18">
                      @{otherUser?.username}
                    </h1>
                    <div className="d-flex">
                      <div className="align_center flex-column B-right">
                        <button className="border-0 bg-white">
                          <h1 className="">
                            {(otherUser?.posts || []).length}
                          </h1>
                          <p>Posts</p>
                        </button>
                      </div>
                      <div className="align_center flex-column B-right">
                        <button
                          onClick={handleShow}
                          className="bg-white border-0"
                        >
                          <h1>{(otherUser?.buddies || []).length}</h1>
                          <p>Buddies</p>
                        </button>
                      </div>
                      <div className="align_center flex-column B-right border-0">
                        <h1>{(otherUser?.sessions || []).length}</h1>
                        <p>Seshsions</p>
                      </div>
                    </div>
                    <div className="align_center mt-3">
                      <button className="follow_modalbtn Likes_active">
                        Follow
                      </button>
                      <img src={comment_full} alt="" className="ms-1" />
                      <img src={angle_down_full} alt="" className="ms-1" />
                    </div>
                  </div>
                  {/* <div className="d-flex justify-content-between align-items-center w-100 ">
                    <div className="d-flex">
                      <p>Suggested accounts</p>
                      <img src={Info} alt="" />
                    </div>
                    <div className="d-flex">
                      <p>View all</p>
                      <img src={AngleRight} alt="" />
                    </div>
                  </div> */}

                  {/* <AddBuddies/> */}

                  <p className="text-center black_text_lg mt-3">
                    {otherUser?.bio}
                  </p>
                  <div
                    className={`align_center mt-1 mb-4 ${
                      !otherUser?.bio ? "d-none" : ""
                    }`}
                  >
                    <img
                      onClick={CopyClipHandle}
                      className="cursorP"
                      src={clip}
                      alt=""
                    />
                    <p className="inter-bold fs-16 ps-1">{otherUser?.url}</p>
                  </div>
                  <ul
                    style={{ padding: "4px" }}
                    className="nav nav-tabs nav-tabs-main mb-4"
                  >
                    <li className="nav-item nav-item-main">
                      <button
                        className={`nav-link ${
                          activeTab === "tab1" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("tab1")}
                      >
                        <img src={post_wind} alt="" />
                      </button>
                    </li>
                    <li className="nav-item nav-item-main">
                      <button
                        className={`nav-link ${
                          activeTab === "tab2" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("tab2")}
                      >
                        <img src={video} alt="" />
                      </button>
                    </li>
                    <li className="nav-item nav-item-main">
                      <button
                        className={`nav-link ${
                          activeTab === "tab3" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("tab3")}
                      >
                        <img src={star_element} alt="" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div className="mt-4">
              <div className="tab-content mt-2">
                <div
                  className={`tab-pane ${activeTab === "tab1" ? "active" : ""}`}
                  id="tab1"
                >
                  <OtherUserPost />
                </div>
                <div
                  className={`tab-pane ${activeTab === "tab2" ? "active" : ""}`}
                  id="tab2"
                >
                  <Reels />
                </div>
                <div
                  className={`tab-pane ${activeTab === "tab3" ? "active" : ""}`}
                  id="tab3"
                >
                  <Ratings />
                </div>
              </div>
            </div>
          </Col>
          <Col lg="3" className=" overflow-hidden">
            <SideMessage />
          </Col>
        </Row>
      </Container>
      <Modal
        dialogClassName="modal_width"
        show={Suggested}
        onHide={handleClose}
      >
        <Modal.Header closeButton className="px-3 py-2 likes_modal_head">
          <Modal.Title className="m-auto black_text_lg inter-bold fs-16 mt-1">
            Likes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div>
            <ul className="nav nav-tabs ModalNav mb-2 p-2">
              <li className="nav-item nav_item_modal">
                <button
                  className={`nav-link ${
                    activeModalTab === "tab1" ? "active" : ""
                  }`}
                  onClick={() => handleModalClick("tab1")}
                >
                  Following
                </button>
              </li>
              <li className="nav-item nav_item_modal">
                <button
                  className={`nav-link ${
                    activeModalTab === "tab2" ? "active" : ""
                  }`}
                  onClick={() => handleModalClick("tab2")}
                >
                  Followers
                </button>
              </li>
              <li className="nav-item nav_item_modal">
                <button
                  className={`nav-link ${
                    activeModalTab === "tab3" ? "active" : ""
                  }`}
                  onClick={() => handleModalClick("tab3")}
                >
                  Suggested
                </button>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="tab-content mt-2 px-3">
              <div
                className={`tab-pane px-2 ${
                  activeModalTab === "tab1" ? "active" : ""
                }`}
                id="tab1"
              >
                {/* <follow div> */}
                <div className="d-flex mb-3 justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img alt="" src={girl} className="likes_dp" />
                    <div className="ms-3 height-30 me-4">
                      <p className="black_text_lg inter-semi fs-15">
                        trailblaze
                      </p>
                      <div className="d-flex align-items-start">
                        <img alt="" src={stars} className="rating-star" />
                        <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                      </div>
                    </div>
                  </div>
                  <button className="follow_modalbtn Likes_active">
                    Follow
                  </button>
                </div>
                {/* <follow div> */}
                {/* <follow div> */}
                <div className="d-flex mb-3 justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img alt="" src={girl} className="likes_dp" />
                    <div className="ms-3 height-30 me-4">
                      <p className="black_text_lg inter-semi fs-15">
                        trailblaze
                      </p>
                      <div className="d-flex align-items-start">
                        <img alt="" src={stars} className="rating-star" />
                        <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                      </div>
                    </div>
                  </div>
                  <button className="follow_modalbtn Likes_active">
                    Follow
                  </button>
                </div>
                {/* <follow div> */}
                {/* <follow div> */}
                <div className="d-flex mb-3 justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img alt="" src={girl} className="likes_dp" />
                    <div className="ms-3 height-30 me-4">
                      <p className="black_text_lg inter-semi fs-15">
                        trailblaze
                      </p>
                      <div className="d-flex align-items-start">
                        <img alt="" src={stars} className="rating-star" />
                        <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                      </div>
                    </div>
                  </div>
                  <button className="follow_modalbtn Likes_active">
                    Follow
                  </button>
                </div>
                {/* <follow div> */}
                {/* <follow div> */}
                <div className="d-flex mb-3 justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img alt="" src={girl} className="likes_dp" />
                    <div className="ms-3 height-30 me-4">
                      <p className="black_text_lg inter-semi fs-15">
                        trailblaze
                      </p>
                      <div className="d-flex align-items-start">
                        <img alt="" src={stars} className="rating-star" />
                        <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                      </div>
                    </div>
                  </div>
                  <button className="follow_modalbtn Likes_active">
                    Follow
                  </button>
                </div>
                {/* <follow div> */}
                {/* <follow div> */}
                <div className="d-flex mb-3 justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img alt="" src={girl} className="likes_dp" />
                    <div className="ms-3 height-30 me-4">
                      <p className="black_text_lg inter-semi fs-15">
                        trailblaze
                      </p>
                      <div className="d-flex align-items-start">
                        <img alt="" src={stars} className="rating-star" />
                        <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                      </div>
                    </div>
                  </div>
                  <button className="follow_modalbtn Likes_active">
                    Follow
                  </button>
                </div>
                {/* <follow div> */}
              </div>
              <div
                className={`tab-pane px-2 ${
                  activeModalTab === "tab2" ? "active" : ""
                }`}
                id="tab2"
              >
                {/* <follow div> */}
                <div className="d-flex mb-3 justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img alt="" src={girl} className="likes_dp" />
                    <div className="ms-3 height-30 me-4">
                      <p className="black_text_lg inter-semi fs-15">
                        trailblaze
                      </p>
                      <div className="d-flex align-items-start">
                        <img alt="" src={stars} className="rating-star" />
                        <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                      </div>
                    </div>
                  </div>
                  <button className="follow_modalbtn Likes_active">
                    Follow
                  </button>
                </div>
                {/* <follow div> */}
                {/* <follow div> */}
                <div className="d-flex mb-3 justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img alt="" src={girl} className="likes_dp" />
                    <div className="ms-3 height-30 me-4">
                      <p className="black_text_lg inter-semi fs-15">
                        trailblaze
                      </p>
                      <div className="d-flex align-items-start">
                        <img alt="" src={stars} className="rating-star" />
                        <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                      </div>
                    </div>
                  </div>
                  <button className="follow_modalbtn Likes_active">
                    Follow
                  </button>
                </div>
                {/* <follow div> */}
                {/* <follow div> */}
                <div className="d-flex mb-3 justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img alt="" src={girl} className="likes_dp" />
                    <div className="ms-3 height-30 me-4">
                      <p className="black_text_lg inter-semi fs-15">
                        trailblaze
                      </p>
                      <div className="d-flex align-items-start">
                        <img alt="" src={stars} className="rating-star" />
                        <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                      </div>
                    </div>
                  </div>
                  <button className="follow_modalbtn Likes_active">
                    Follow
                  </button>
                </div>
                {/* <follow div> */}
                {/* <follow div> */}
                <div className="d-flex mb-3 justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img alt="" src={girl} className="likes_dp" />
                    <div className="ms-3 height-30 me-4">
                      <p className="black_text_lg inter-semi fs-15">
                        trailblaze
                      </p>
                      <div className="d-flex align-items-start">
                        <img alt="" src={stars} className="rating-star" />
                        <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                      </div>
                    </div>
                  </div>
                  <button className="follow_modalbtn Likes_active">
                    Follow
                  </button>
                </div>
                {/* <follow div> */}
                {/* <follow div> */}
                <div className="d-flex mb-3 justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img alt="" src={girl} className="likes_dp" />
                    <div className="ms-3 height-30 me-4">
                      <p className="black_text_lg inter-semi fs-15">
                        trailblaze
                      </p>
                      <div className="d-flex align-items-start">
                        <img alt="" src={stars} className="rating-star" />
                        <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                      </div>
                    </div>
                  </div>
                  <button className="follow_modalbtn Likes_active">
                    Follow
                  </button>
                </div>
                {/* <follow div> */}
              </div>
              <div
                className={`tab-pane px-2 ${
                  activeModalTab === "tab3" ? "active" : ""
                }`}
                id="tab3"
              >
                {/* <follow div> */}
                <div className="d-flex mb-3 justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img alt="" src={girl} className="likes_dp" />
                    <div className="ms-3 height-30 me-4">
                      <p className="black_text_lg inter-semi fs-15">
                        trailblaze
                      </p>
                      <div className="d-flex align-items-start">
                        <img alt="" src={stars} className="rating-star" />
                        <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                      </div>
                    </div>
                  </div>
                  <div className="align_center">
                    <button className="follow_modalbtn Likes_active">
                      Follow
                    </button>
                    <button className="bg-white border-0 ms-3">
                      <img src={CloseIcon} alt="" />
                    </button>
                  </div>
                </div>
                {/* <follow div> */}
                {/* <follow div> */}
                <div className="d-flex mb-3 justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img alt="" src={girl} className="likes_dp" />
                    <div className="ms-3 height-30 me-4">
                      <p className="black_text_lg inter-semi fs-15">
                        trailblaze
                      </p>
                      <div className="d-flex align-items-start">
                        <img alt="" src={stars} className="rating-star" />
                        <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                      </div>
                    </div>
                  </div>
                  <div className="align_center">
                    <button className="follow_modalbtn Likes_active">
                      Follow
                    </button>
                    <button className="bg-white border-0 ms-3">
                      <img src={CloseIcon} alt="" />
                    </button>
                  </div>
                </div>
                {/* <follow div> */}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* ____modal____ */}
      <Modal
        show={LiveNoti}
        size="sm"
        onHide={NotificationClose}
        dialogClassName=""
        centered
      >
        <Modal.Header
          closeButton
          className="px-4 hide_fcontrol py-2 likes_modal_head"
        >
          <Modal.Title className="mx-auto black_text_lg inter-bold fs-14 mt-1 ">
            jane.smith
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-4">
          <div className="w-100 me-2 d-flex align-items-center mt-3 justify-content-center">
            <img alt="" src={avaatar2} className=" Notification_img" />
          </div>
          <h1 className="black_text_lg text-center inter-bold mt-3 mb-4 fs-13 w-75 m-auto">
            Follow jane.smith to set up LIVE notifications
          </h1>
          <Button className="btn-primary">Follow</Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OtherUsers;
