import React from "react";
import "../assets/css/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Createpost from "../components/createpost";
import SideMessage from "../components/side_message";
import { Container } from "react-bootstrap";
import Video from "../assets/video/startUpVideo.mp4";
import LiveProfile from "../assets/images/livePro.png";
import EyeIcon from "../assets/icons/eyeIcon.svg";
import CrosIcon from "../assets/icons/cros_con.svg";

const LiveStream = () => {
  return (
    <>
      <Container className="top_padd px-4" fluid="xxl">
        <Row className="h-100 p-0">
          <Col lg="3" md="3" className="overflow-hidden">
            <Createpost />
          </Col>
          <Col
            lg="6"
            md="9"
            className="main_height no_scrollbar gx-5 overflow-y-auto"
          >
            <div className="video_div m-auto position-relative">
              <video className="video_size" autoPlay src={Video} />
              <div className="video_head_icon">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img className="LiveProImg" src={LiveProfile} alt="" />
                    <div className="ms-2">
                      <h3 className="userNameLive">steve.brown</h3>
                      <h5 className="liveRang00 mt-1">Host</h5>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="live_div_btn">
                      <h5>Live</h5>
                    </div>
                    <div className="eyeDiv00 d-flex align-items-center mx-2">
                      <img src={EyeIcon} alt="" />
                      <h5>235</h5>
                    </div>
                    <img
                      style={{
                        width: "18px",
                        height: "18px",
                        cursor: "pointer",
                      }}
                      src={CrosIcon}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="strem_btn_div mt-3 mb-3">
              <input
                className="comnt_inp"
                type="text"
                placeholder="Write Comment"
              />
              <button type="btn" className="btn_default ms-2">
                Send
              </button>
            </div>
          </Col>
          <Col lg="3" className="overflow-hidden d-lg-block d-none">
            <SideMessage />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LiveStream;
