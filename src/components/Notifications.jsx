import React from "react";
import avatar from "../assets/logo/Avatar3.svg";
import "../assets/css/style.css";
import cancel_icon from "../assets/logo/cancel_icon.svg";
import { Container, Row, Col } from "react-bootstrap";
import LeftSideBar from "./LeftSideBar";
import SideMessage from "./side_message";
import statusLeaf from "../assets/icons/statusLeaf.svg";
import statusTime from "../assets/icons/sttatusTime.svg";
import statusBlock from "../assets/icons/statusBlock.svg";
import statusLeafg from "../assets/icons/statusLeafg.svg";
import statusMsg from "../assets/icons/statusMsg.svg";
import statusHand from "../assets/icons/statusHand.svg";
import statusCheck from "../assets/icons/statusCheck.svg";
import statusMail from "../assets/icons/statusMail.svg";
import statusStar from "../assets/icons/statusStart.svg";

const Notifications = () => {
  return (
    <>
      <Container className="top_padd" fluid="xxl">
        <Row className="w-100 h-100 p-0">
          <Col lg="3" className=" overflow-hidden">
            <LeftSideBar />
          </Col>
          <Col lg="6" className="main_height no_scrollbar ps-5 overflow-y-auto">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="black_text_lg inter-bold fs-16">Notifications</h1>
              <button className="border-0 green-txt inter bg-transparent">
                Mark all as read
              </button>
            </div>
            {/* ___today notifications___ */}

            <h1 className="fs-16 ms-3 mt-3 mb-3 inter-semi">TODAY</h1>

            {/* <<notification - SMOKE>> */}
            <div className="bg-white mb-2 radius_12 p-3 d-flex align-items-start">
              <div className="position-relative">
                <img src={avatar} alt="" className="round_img" />
                <div className="statusDiv">
                  <img src={statusLeaf} alt="" />
                </div>
              </div>
              <div className="ms-3">
                <p className="black_text_md fs-14">
                  <span className="green-txt fs-15">LeafyLaura </span>has
                  invited you to a
                  <span className="green-txt fs-15">SHMOKE </span>session.
                </p>
                <p className="mt-1 min_text">5 mins </p>
              </div>
            </div>
            {/* <<notification - SHEDULE>> */}
            <div className="bg-white mb-2 radius_12 p-3 d-flex align-items-start">
              <div className="position-relative">
                <img src={avatar} alt="" className="round_img" />
                <div className="statusDiv">
                  <img src={statusTime} alt="" />
                </div>
              </div>
              <div className="ms-3">
                <p className="black_text_md fs-14">
                  <span className="green-txt fs-15">LeafyLaura </span>has
                  invited you to a
                  <span className="green-txt fs-15">SHMOKE </span>session.
                </p>
                <p className="mt-1 min_text">5 mins </p>
              </div>
            </div>
            {/* <<notification>> */}
            <div className="bg-white mb-2 radius_12 p-3 d-flex align-items-start">
              <div className="position-relative">
                <img src={avatar} alt="" className="round_img" />
                <img src={cancel_icon} alt="" className="status_plus" />{" "}
                <div className="statusDiv">
                  <img src={statusBlock} alt="" />
                </div>{" "}
              </div>
              <div className="ms-3">
                <p className="black_text_md fs-14">
                  <span className="green-txt fs-15">LeafyLaura </span>has
                  invited you to a
                  <span className="green-txt fs-15">SHMOKE </span>session.
                </p>
                <p className="mt-1 min_text">5 mins </p>
              </div>
            </div>
            {/* <<notification>> */}

            {/* ___Yesterday notifications___ */}

            <h1 className="fs-15 ms-3 mt-3 mb-3 inter-semi  ">YESTERDAY</h1>

            {/* <<notification - POST>> */}
            <div className="bg-white mb-2 radius_12 p-3 d-flex align-items-start">
              <div className="position-relative">
                <img src={avatar} alt="" className="round_img" />
                <div className="statusDiv">
                  <img src={statusLeafg} alt="" />
                </div>
              </div>
              <div className="ms-3">
                <p className="black_text_md fs-14">
                  <span className="green-txt fs-15">LeafyLaura </span>has
                  invited you to a
                  <span className="green-txt fs-15">SHMOKE </span>session.
                </p>
                <p className="mt-1 min_text">5 mins </p>
              </div>
            </div>
            {/* <<notification - Comment>> */}
            <div className="bg-white mb-2 radius_12 p-3 d-flex align-items-start">
              <div className="position-relative">
                <img src={avatar} alt="" className="round_img" />
                <div className="statusDiv">
                  <img src={statusMsg} alt="" />
                </div>
              </div>
              <div className="ms-3">
                <p className="black_text_md fs-14">
                  <span className="green-txt fs-15">LeafyLaura </span>has
                  invited you to a
                  <span className="green-txt fs-15">SHMOKE </span>session.
                </p>
                <p className="mt-1 min_text">5 mins </p>
              </div>
            </div>

            {/* ___Yesterday LAST 7 DAYS */}

            <h1 className="fs-15 ms-3 mt-3 mb-3 inter-semi  ">LAST 7 DAYS</h1>

            {/* <<notification - SMOKE>> */}
            <div className="bg-white mb-2 radius_12 p-3 d-flex align-items-start">
              <div className="position-relative">
                <img src={avatar} alt="" className="round_img" />
                <div className="statusDiv">
                  <img src={statusHand} alt="" />
                </div>
              </div>
              <div className="ms-3">
                <p className="black_text_md fs-14">
                  <span className="green-txt fs-15">LeafyLaura </span>has
                  invited you to a
                  <span className="green-txt fs-15">SHMOKE </span>session.
                </p>
                <p className="mt-1 min_text">5 mins </p>
              </div>
            </div>
            {/* <<notification - SHEDULE>> */}
            <div className="bg-white mb-2 radius_12 p-3 d-flex align-items-start">
              <div className="position-relative">
                <img src={avatar} alt="" className="round_img" />
                <div className="statusDiv">
                  <img src={statusCheck} alt="" />
                </div>
              </div>
              <div className="ms-3">
                <p className="black_text_md fs-14">
                  <span className="green-txt fs-15">LeafyLaura </span>has
                  invited you to a
                  <span className="green-txt fs-15">SHMOKE </span>session.
                </p>
                <div className="d-flex mt-2">
                  <button
                    className="follow_modalbtn me-1 noti_btn_main"
                    style={{ fontSize: "13px" }}
                  >
                    Reject
                  </button>
                  <button
                    className="follow_modalbtn noti_btn_main Likes_active"
                    style={{ fontSize: "13px" }}
                  >
                    Accept
                  </button>
                </div>
                <p className="mt-1 min_text">5 mins </p>
              </div>
            </div>

            {/* ___Yesterday LAST 30 DAYS */}

            <h1 className="fs-15 ms-3 mt-3 mb-3 inter-semi  ">LAST 30 DAYS</h1>

            {/* <<notification - SMOKE>> */}
            <div className="bg-white mb-2 radius_12 p-3 d-flex align-items-start">
              <div className="position-relative">
                <img src={avatar} alt="" className="round_img" />
                <div className="statusDiv">
                  <img src={statusMail} alt="" />
                </div>
              </div>
              <div className="ms-3">
                <p className="black_text_md fs-14">
                  <span className="green-txt fs-15">LeafyLaura </span>has
                  invited you to a
                  <span className="green-txt fs-15">SHMOKE </span>session.
                </p>
                <p className="mt-1 min_text">5 mins </p>
              </div>
            </div>
            {/* <<notification - SHEDULE>> */}
            <div className="bg-white mb-2 radius_12 p-3 d-flex align-items-start">
              <div className="position-relative">
                <img src={avatar} alt="" className="round_img" />
                <div className="statusDiv">
                  <img src={statusStar} alt="" />
                </div>
              </div>
              <div className="ms-3">
                <p className="black_text_md fs-14">
                  <span className="green-txt fs-15">LeafyLaura </span>has
                  invited you to a
                  <span className="green-txt fs-15">SHMOKE </span>session.
                </p>
                <div className="d-flex mt-2">
                  <button
                    className="follow_modalbtn me-1 inter-semi"
                    style={{ fontSize: "13px" }}
                  >
                    Reject
                  </button>
                  <button
                    className="follow_modalbtn Likes_active"
                    style={{ fontSize: "13px" }}
                  >
                    Accept
                  </button>
                </div>
                <p className="mt-1 min_text">5 mins </p>
              </div>
            </div>
          </Col>
          <Col lg="3" className=" overflow-hidden">
            <SideMessage />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Notifications;
