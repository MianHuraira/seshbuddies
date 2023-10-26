import React, { useState } from "react";
import girl from "../assets/logo/orange-girl.svg";
import stars from "../assets/logo/icons/star.svg";
import dots from "../assets/logo/icons/3dots.svg";
import pineapple from "../assets/logo/pineapple_express.svg";
import likes from "../assets/logo/icons/likes.svg";
// import add_icon from "../assets/logo/icons/Status-plus.svg";
import like_btn from "../assets/icons/like_transparent.svg";
import comment_btn from "../assets/logo/icons/commentsvg.svg";
import share_btn from "../assets/logo/icons/share.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import status_icon from "../assets/logo/icons/Status_Icon.svg";
import { Modal } from "react-bootstrap";
import angle_right from "../assets/logo/icons/angle_right.svg";
import alert_success from "../assets/logo/alert-success.svg";
import icon_info from "../assets/logo/icons/icn-info.svg";
import icon_start from "../assets/logo/icons/icn-eye-off.svg";

const Story = ({ handleShow, show }) => {
  const [Likes, setShow] = useState(false);
  const Likes_btn_close = () => setShow(false);
  const Likes_btn_open = () => setShow(true);

  const showSuccess = () => {
    setReport(false);
    setmodal(true); // Open the second modal
  };

  const [report, setReport] = useState(false);
  const report_btn_open = () => setReport(true);
  const report_btn_close = () => setReport(false);

  const [report_success, setmodal] = useState(false);
  const report_modal2_close = () => setmodal(false);

  // follow status

  const [follow, setFollow] = useState(false);

  const folloStatus = () => {
    setFollow(!follow);
  };

  return (
    <div
      className={
        show === false
          ? "bg-white pt-1 mt-3 radius_12 mb-4 overflow-hidden"
          : "bg-white pt-1 radius_12 overflow-hidden"
      }
    >
      <div className="px-3">
        <div className="d-flex mt-2">
          <div className="position-relative">
            <img alt="" src={girl} className="message-dp" />
            <img alt="" src={status_icon} className="status_plus" />
          </div>
          <div className="status ms-2">
            <p className="inter-semi fs-15">steve.brown </p>
            <h1 className="fs-14 align_center green-txt inter">
              New York, USA<span>.</span>
              <p className="ms-1 black_text_md inter-light ">5 min</p>
            </h1>
          </div>
          <div className=" ms-auto d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-start me-3 justify-content-center">
              <img alt="" src={stars} className="rating-star" />
              <h1 className="black_text_md_bold ms-1">
                4.9
                <button
                  className="border-0 bg-transparent"
                  onClick={report_btn_open}
                >
                  <img alt="" src={dots} className="ms-2" />
                </button>
              </h1>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-evenly mt-3">
          <div className="d-flex desc align-items-center justify-content-center">
            <img alt="" src={stars} className="inter rating-star" />
            <p className="ms-1 inter fs-11">Quality</p>
            <p className="ms-1 green-txt inter fs-11">4.9</p>
          </div>
          <div className="d-flex desc align-items-center justify-content-center">
            <img alt="" src={stars} className="inter rating-star" />
            <p className="ms-1 inter fs-11">Quality</p>
            <p className="ms-1 green-txt inter fs-11">4.5</p>
          </div>
          <div className="d-flex desc align-items-center justify-content-center">
            <img alt="" src={stars} className="inter rating-star" />
            <p className="ms-1 inter fs-11">Rollies</p>
            <p className="ms-1 green-txt inter fs-11">4.0</p>
          </div>
        </div>
        <p className="black_text_md mt-2 ms-1">
          Just tried the new Pineapple Express strain. 10/10 would recommend!
          🍍🔥
        </p>
        <div className="m-auto mt-2">
          <img alt="" src={pineapple} className="story_img mb-2" />
          <div className="d-flex justify-content-between pb-1">
            <div className="d-flex">
              <p className="inherit black_text_md align_center">
                <img alt="" src={likes} className="ms-2 me-1" />
                541
              </p>
            </div>
            <div className="d-flex">
              <p className="me-2 light_text_sm">26 Comments</p>
              <p className="me-2 light_text_sm">87 Shares</p>
              <p className="me-2 light_text_sm">2.5k Views</p>
            </div>
          </div>
        </div>
      </div>
      <Row className="w-100 h-100 p-0 border-top m-auto">
        {show === false ? (
          <Col sm="4" className="like_btn">
            <button className=" bg-white" onClick={Likes_btn_open}>
              <img alt="" src={like_btn} className="me-2" />
              Like
            </button>
          </Col>
        ) : (
          <Col sm="6" xs={6} className="like_btn">
            <button className=" bg-white">
              <img alt="" src={like_btn} className="me-2" />
              Like
            </button>
          </Col>
        )}
        {show === false && (
          <Col sm="4" className="like_btn">
            <button className=" bg-white" onClick={handleShow}>
              <img alt="" src={comment_btn} className="me-2" />
              Comment
            </button>
          </Col>
        )}

        {show === false ? (
          <Col sm="4" className="like_btn border-0">
            <button className=" bg-white">
              <img alt="" src={share_btn} className="me-2" />
              Share
            </button>
          </Col>
        ) : (
          <Col sm="6" xs={6} className="like_btn border-0">
            <button className=" bg-white">
              <img alt="" src={share_btn} className="me-2" />
              Share
            </button>
          </Col>
        )}
      </Row>
      <div></div>
      {/* _____likes_modal___ */}
      <Modal
        show={Likes}
        onHide={Likes_btn_close}
        backdrop="static"
        keyboard={false}
        dialogClassName="rating_modal"
      >
        <Modal.Header closeButton className="px-3 py-2 likes_modal_head">
          <Modal.Title className="m-auto black_text_lg inter-bold fs-16 mt-1">
            Likes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=" py-2 px-4 likes_modal_body overflow-y-auto no_scrollbar">
          <div className="d-flex mb-3 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img alt="" src={girl} className="likes_dp" />
              <div className="ms-3 height-30 me-4">
                <p className="black_text_lg inter-semi fs-15">trailblaze</p>
                <div className="d-flex align-items-start">
                  <img alt="" src={stars} className="rating-star" />
                  <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                </div>
              </div>
            </div>
            <button
              onClick={folloStatus}
              className={`${follow ? "folowing_btn00" : "folow_btn00"}`}
            >
              {follow ? "Following" : "Follow"}
            </button>
          </div>

          <div className="d-flex mb-3 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img alt="" src={girl} className="likes_dp" />
              <div className="ms-3 height-30 me-4">
                <p className="black_text_lg inter-semi fs-15">trailblaze</p>
                <div className="d-flex align-items-start">
                  <img alt="" src={stars} className="rating-star" />
                  <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                </div>
              </div>
            </div>
            <button className="folowing_btn00">Following</button>
          </div>

          <div className="d-flex mb-3 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img alt="" src={girl} className="likes_dp" />
              <div className="ms-3 height-30 me-4">
                <p className="black_text_lg inter-semi fs-15">trailblaze</p>
                <div className="d-flex align-items-start">
                  <img alt="" src={stars} className="rating-star" />
                  <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                </div>
              </div>
            </div>
            <button className="folow_btn00">Follow</button>
          </div>

          <div className="d-flex mb-3 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img alt="" src={girl} className="likes_dp" />
              <div className="ms-3 height-30 me-4">
                <p className="black_text_lg inter-semi fs-15">trailblaze</p>
                <div className="d-flex align-items-start">
                  <img alt="" src={stars} className="rating-star" />
                  <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                </div>
              </div>
            </div>
            <button className="folow_btn00">Follow</button>
          </div>

          <div className="d-flex mb-3 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img alt="" src={girl} className="likes_dp" />
              <div className="ms-3 height-30 me-4">
                <p className="black_text_lg inter-semi fs-15">trailblaze</p>
                <div className="d-flex align-items-start">
                  <img alt="" src={stars} className="rating-star" />
                  <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                </div>
              </div>
            </div>
            <button className="folow_btn00">Follow</button>
          </div>

          <div className="d-flex mb-3 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img alt="" src={girl} className="likes_dp" />
              <div className="ms-3 height-30 me-4">
                <p className="black_text_lg inter-semi fs-15">trailblaze</p>
                <div className="d-flex align-items-start">
                  <img alt="" src={stars} className="rating-star" />
                  <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                </div>
              </div>
            </div>
            <button className="folow_btn00">Follow</button>
          </div>

          <div className="d-flex mb-3 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img alt="" src={girl} className="likes_dp" />
              <div className="ms-3 height-30 me-4">
                <p className="black_text_lg inter-semi fs-15">trailblaze</p>
                <div className="d-flex align-items-start">
                  <img alt="" src={stars} className="rating-star" />
                  <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                </div>
              </div>
            </div>
            <button className="folow_btn00">Follow</button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={report}
        onHide={report_btn_close}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="modal_width"
      >
        <Modal.Header closeButton className="px-3 py-2 m-0 likes_modal_head">
          <Modal.Title className="m-auto black_text_lg inter-bold fs-16 mt-1">
            Report
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-2">
            <h1 className="inter-bold fs-16 mb-2">
              Why are you reporting this post?
            </h1>
            <p className="inter fs-15 height-20 mb-4">
              Your report is anonymous, except if you're reporting an
              intellectual property infringement. If someone is in immediate
              danger, call the local emergency services - don't wait.
            </p>
            <div>
              <button className="report_btn mt-2" onClick={showSuccess}>
                I just don't like it <img src={angle_right} alt="" />
              </button>
              <button className="report_btn mt-2 " onClick={showSuccess}>
                It's spam <img src={angle_right} alt="" />
              </button>
              <button className="report_btn mt-2 " onClick={showSuccess}>
                Nudity or sexual activity <img src={angle_right} alt="" />
              </button>
              <button className="report_btn mt-2 " onClick={showSuccess}>
                Hate speech or symbols <img src={angle_right} alt="" />
              </button>
              <button className="report_btn mt-2 " onClick={showSuccess}>
                Violence or dangerous organisations
                <img src={angle_right} alt="" />
              </button>
              <button className="report_btn mt-2" onClick={showSuccess}>
                Bullying or harassment <img src={angle_right} alt="" />
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={report_success}
        onHide={report_modal2_close}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="modal_width"
      >
        <Modal.Header closeButton className="px-4 m-0 py-2 likes_modal_head">
          <Modal.Title className="mx-auto ps-3 black_text_lg inter-bold fs-16 mt-1 ">
            Thanks
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 d-flex align-items-center justify-content-center">
            <img
              alt=""
              src={alert_success}
              style={{ width: "40px" }}
              className="me-3 "
            />
          </div>
          <h1 className="black_text_lg text-center inter-bold mt-3 fs-18">
            Thanks for letting us know
          </h1>
          <p className="black_text_md text-center mt-2 mb-3 fs-16">
            We use these reports to:
          </p>
          <div>
            <button
              onClick={report_modal2_close}
              className="report_success_btn mt-2 d-flex align-items-center justify-content-center text-left"
            >
              <img
                alt=""
                src={icon_info}
                style={{ width: "22px" }}
                className="me-2"
              />
              Understand problems that people are having with different types of
              content on SESHBUDDIES.
            </button>
            <button
              onClick={report_modal2_close}
              className="report_success_btn mt-2 d-flex align-items-center justify-content-center text-left"
            >
              <img
                alt=""
                src={icon_start}
                style={{ width: "22px" }}
                className="me-2"
              />
              Understand problems that people are having with different types of
              content on SESHBUDDIES.
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Story;
