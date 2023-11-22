import React, { useEffect, useState } from "react";
import girl from "../assets/logo/orange-girl.svg";
import stars from "../assets/logo/icons/star.svg";
import dots from "../assets/logo/icons/3dots.svg";
import pineapple from "../assets/logo/pineapple_express.svg";
import likes from "../assets/logo/icons/likes.svg";
import like_btn from "../assets/icons/like_transparent.svg";
import greenLeaf from "../assets/icons/greenLeaf.svg";
import comment_btn from "../assets/logo/icons/commentsvg.svg";
import share_btn from "../assets/logo/icons/share.svg";
import { Row, Col, Modal, Form } from "react-bootstrap";
import status_icon from "../assets/logo/icons/Status_Icon.svg";
import avatar from "../assets/logo/yellow_girl.svg";
import heart from "../assets/logo/icons/heart.svg";
import union from "../assets/logo/icons/union.svg";
import emoji from "../assets/logo/icons/emoji.svg";
import comment_upload from "../assets/logo/icons/comment_upload.svg";
import Colapse from "./colapse";
import angle_right from "../assets/logo/icons/angle_right.svg";
import alert_success from "../assets/logo/alert-success.svg";
import icon_info from "../assets/logo/icons/icn-info.svg";
import icon_start from "../assets/logo/icons/icn-eye-off.svg";
import { Link } from "react-router-dom";
import staticImg from "../assets/images/started_img_bg.png";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
const Story = () => {
  const [Likes, setShow] = useState(false);
  const Likes_btn_close = () => setShow(false);
  const Likes_btn_open = () => setShow(true);
  const [liked, setLiked] = useState(false);
  // data get
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLike = () => {
    setLiked(!liked);
  };

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

  const folloStatus = (key) => {
    setFollow((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const [coment, setComent] = useState(false);

  const handleClose = () => setComent(false);
  const comentModal = () => setComent(true);

  // api get post start

  const getPost = async () => {
    try {
      const res = await axios.get(global.BASEURL + "/post/all", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRjOTBkYWZiMTk2ZTAyMzk1NGY2ZjciLCJpYXQiOjE2OTk1MTY2MzR9.tTvS58eQrcHTyr2DElEtnr4kYxiEpfJQBjo7NgmRbbA",
        },
      });
      const resultGet = res.data.posts;
      setGetData(resultGet);
    } catch (error) {
      console.log(error, "error");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  // api get post ended

  return (
    <>
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
        getData.map((data) => (
          <div className="bg-white mt-3 radius_12 mb-4 overflow-hidden">
            <div className="px-3">
              <div className="d-flex justify-content-between mt-2">
                <Link to={"/users"} className="d-flex align-items-center">
                  <div className="position-relative">
                    <img alt="" src={girl} className="message-dp" />
                    <img alt="" src={status_icon} className="status_plus" />
                  </div>
                  <div className="status ms-2">
                    <p
                      style={{ color: "#252525" }}
                      className="inter-semi fs-15"
                    >
                      {data?.user?.username}
                    </p>
                    <h1 className="fs-14 align_center green-txt inter">
                      {data?.location?.location} {<span>.</span>}
                      <p className="ms-1 black_text_md inter-light ">5 min</p>
                    </h1>
                  </div>
                </Link>

                <div className="d-flex justify-content-center align-items-center">
                  <div className="d-flex align-items-start me-3 justify-content-center">
                    <img alt="" src={stars} className="rating-star" />
                    <h1 className="black_text_md_bold ms-1">
                      {data?.user.rating}
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
              <p className="black_text_md mt-2 ms-1">{data?.text}</p>
              <div className="m-auto mt-2">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="swiper00"
                >
                  {data?.images?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img
                        loading="lazy"
                        onClick={comentModal}
                        alt=""
                        src={global.BASEURL + "/" + item}
                        className="story_img mb-2"
                      />
                    </SwiperSlide>
                  ))}
                  {data?.video && data.video.length > 0 ? (
                    <SwiperSlide>
                      <video
                        controls
                        onClick={comentModal}
                        className="story_img mb-2"
                        src={global.BASEURL + data?.video}
                      />
                    </SwiperSlide>
                  ) : data?.images && data.images.length === 0 ? (
                    <SwiperSlide>
                      <img
                        onClick={comentModal}
                        alt=""
                        src={staticImg}
                        className="story_img mb-2"
                      />
                    </SwiperSlide>
                  ) : null}
                </Swiper>

                <div className="d-flex justify-content-between pb-1 mt-2">
                  <div className="d-flex">
                    <p
                      onClick={Likes_btn_open}
                      className="inherit black_text_md cursorP align_center"
                    >
                      <img alt="" src={likes} className="ms-2 me-1" />
                      <h5 className="postD">{data?.TotalLikes}</h5>
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="me-2 postD">{data?.comments} Comments</p>
                    <p className="me-2 postD">{data?.shares} Shares</p>
                    <p className="me-2 postD">{data?.views} Views</p>
                  </div>
                </div>
              </div>
            </div>
            <Row className="w-100 h-100 p-0 border-top m-auto">
              <Col lg="4" sm="4" xs="4" className="like_btn">
                <div
                  onClick={handleLike}
                  className="bg-white cursorP d-flex align-items-center justify-content-center"
                >
                  <img
                    style={{ width: "20px", height: "20px" }}
                    alt=""
                    src={liked ? greenLeaf : like_btn}
                    className="me-2"
                  />
                  {liked ? "Like" : "Like"}
                </div>
              </Col>

              <Col
                onClick={comentModal}
                lg="4"
                sm="4"
                xs="4"
                className="like_btn"
              >
                <div className="bg-white cursorP d-flex align-items-center justify-content-center">
                  <img alt="" src={comment_btn} className="me-2" />
                  Comment
                </div>
              </Col>

              <Col lg="4" sm="4" xs="4" className="like_btn border-0">
                <button className="bg-white cursorP d-flex align-items-center justify-content-center">
                  <img alt="" src={share_btn} className="me-2" />
                  Share
                </button>
              </Col>
            </Row>
          </div>
        ))
      )}

      {/* _____likes_modal___ */}
      <Modal
        show={Likes}
        onHide={Likes_btn_close}
        backdrop="static"
        keyboard={false}
        centered
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
              onClick={() => folloStatus(1)}
              className={`${follow[1] ? "folowing_btn00" : "folow_btn00"}`}
            >
              {follow[1] ? "Following" : "Follow"}
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
            <button
              onClick={() => folloStatus(2)}
              className={`${follow[2] ? "folowing_btn00" : "folow_btn00"}`}
            >
              {follow[2] ? "Following" : "Follow"}
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
            <button
              onClick={() => folloStatus(3)}
              className={`${follow[3] ? "folowing_btn00" : "folow_btn00"}`}
            >
              {follow[3] ? "Following" : "Follow"}
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
            <button
              onClick={() => folloStatus(4)}
              className={`${follow[4] ? "folowing_btn00" : "folow_btn00"}`}
            >
              {follow[4] ? "Following" : "Follow"}
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
            <button
              onClick={() => folloStatus(5)}
              className={`${follow[5] ? "folowing_btn00" : "folow_btn00"}`}
            >
              {follow[5] ? "Following" : "Follow"}
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
            <button
              onClick={() => folloStatus(6)}
              className={`${follow[6] ? "folowing_btn00" : "folow_btn00"}`}
            >
              {follow[6] ? "Following" : "Follow"}
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
            <button
              onClick={() => folloStatus(7)}
              className={`${follow[7] ? "folowing_btn00" : "folow_btn00"}`}
            >
              {follow[7] ? "Following" : "Follow"}
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {/* coment modal start */}

      <Modal show={coment} onHide={handleClose} size="lg" centered>
        <Modal.Body className="p-0">
          <Row>
            <Col
              className="p-0"
              style={{ borderRight: "2px solid #EEF5F2" }}
              lg="6"
            >
              <div className="bg-white radius_12  overflow-hidden">
                <div className="px-3">
                  <div className="d-flex justify-content-between mt-2">
                    <Link to={"/users"} className="d-flex align-items-center">
                      <div className="position-relative">
                        <img alt="" src={girl} className="message-dp" />
                        <img alt="" src={status_icon} className="status_plus" />
                      </div>
                      <div className="status ms-2">
                        <p
                          style={{ color: "#252525" }}
                          className="inter-semi fs-15"
                        >
                          steve.brown
                        </p>
                        <h1 className="fs-14 align_center green-txt inter">
                          New York, USA<span>.</span>
                          <p className="ms-1 black_text_md inter-light ">
                            5 min
                          </p>
                        </h1>
                      </div>
                    </Link>

                    <div className="d-flex justify-content-center align-items-center">
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
                    Just tried the new Pineapple Express strain. 10/10 would
                    recommend! 🍍🔥
                  </p>
                  <div className="m-auto mt-2">
                    <img alt="" src={pineapple} className="story_img mb-2" />
                    <div className="d-flex justify-content-between pb-1 mt-2">
                      <div className="d-flex">
                        <p
                          onClick={Likes_btn_open}
                          className="inherit black_text_md cursorP align_center"
                        >
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
                  <Col lg="6" className="like_btn">
                    <div
                      onClick={handleLike}
                      className="bg-white cursorP d-flex align-items-center justify-content-center"
                    >
                      <img
                        style={{ width: "20px", height: "20px" }}
                        alt=""
                        src={liked ? greenLeaf : like_btn}
                        className="me-3"
                      />
                      {liked ? "Like" : "Like"}
                    </div>
                  </Col>

                  <Col lg="6" className="like_btn border-0">
                    <button className="bg-white cursorP d-flex align-items-center justify-content-center">
                      <img alt="" src={share_btn} className="me-3" />
                      Share
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg="6">
              <div className="d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
                  <h1 className="black_text_lg">35 Comments</h1>
                  <button
                    className="border-0 btn-close px-3 hide_fcontrol"
                    onClick={handleClose}
                  ></button>
                </div>
                <div className="pt-3 px-3 w-100 comment_block no_scrollbar overflow-y-auto overflow-x-hidden">
                  <div className="d-flex align-items-start">
                    <img alt="" src={avatar} className="comment_avatar" />
                    <div className="w-100 ms-2">
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <div>
                          <h1 className="black_text_md inter-semi">
                            Jane Doe
                            <span className="light_text_sm ms-1">@Jane D</span>
                          </h1>
                        </div>
                        <p className="gray_text_md justify_center">
                          1h
                          <img
                            alt=""
                            src={heart}
                            className=" ms-2 mb-1 heart"
                          />
                        </p>
                      </div>
                      {/* <name & like section> */}

                      <p className="black_text_md">Looks Like a great time!</p>

                      <p className="black_text_md">
                        2022-12-23
                        <button className="border-0 green-txt bg-white inter-semi ms-2">
                          Reply
                        </button>
                        <Colapse children={<Colapse />} />
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mt-3">
                    <img alt="" src={avatar} className="comment_avatar" />
                    <div className="w-100 ms-2">
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <div>
                          <h1 className="black_text_md inter-semi">
                            Jane Doe
                            <span className="light_text_sm ms-1">@Jane D</span>
                          </h1>
                        </div>
                        <p className="gray_text_md justify_center">
                          1h
                          <img
                            alt=""
                            src={heart}
                            className=" ms-2 mb-1 heart"
                          />
                        </p>
                      </div>

                      <p className="black_text_md">Looks Like a great time!</p>

                      <p className="black_text_md">
                        2022-12-23
                        <button className="border-0 green-txt bg-white inter-semi ms-2">
                          Reply
                        </button>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mt-3">
                    <img alt="" src={avatar} className="comment_avatar" />
                    <div className="w-100 ms-2">
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <div>
                          <h1 className="black_text_md inter-semi">
                            Jane Doe
                            <span className="light_text_sm ms-1">@Jane D</span>
                          </h1>
                        </div>
                        <p className="gray_text_md justify_center">
                          1h
                          <img
                            alt=""
                            src={heart}
                            className=" ms-2 mb-1 heart"
                          />
                        </p>
                      </div>

                      <p className="black_text_md">Looks Like a great time!</p>

                      <p className="black_text_md">
                        2022-12-23
                        <button className="border-0 green-txt bg-white inter-semi ms-2">
                          Reply
                        </button>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mt-3">
                    <img alt="" src={avatar} className="comment_avatar" />
                    <div className="w-100 ms-2">
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <div>
                          <h1 className="black_text_md inter-semi">
                            Jane Doe
                            <span className="light_text_sm ms-1">@Jane D</span>
                          </h1>
                        </div>
                        <p className="gray_text_md justify_center">
                          1h
                          <img
                            alt=""
                            src={heart}
                            className=" ms-2 mb-1 heart"
                          />
                        </p>
                      </div>

                      <p className="black_text_md">Looks Like a great time!</p>

                      <p className="black_text_md">
                        2022-12-23
                        <button className="border-0 green-txt bg-white inter-semi ms-2">
                          Reply
                        </button>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mt-3">
                    <img alt="" src={avatar} className="comment_avatar" />
                    <div className="w-100 ms-2">
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <div>
                          <h1 className="black_text_md inter-semi">
                            Jane Doe
                            <span className="light_text_sm ms-1">@Jane D</span>
                          </h1>
                        </div>
                        <p className="gray_text_md justify_center">
                          1h
                          <img
                            alt=""
                            src={heart}
                            className=" ms-2 mb-1 heart"
                          />
                        </p>
                      </div>

                      <p className="black_text_md">Looks Like a great time!</p>

                      <p className="black_text_md">
                        2022-12-23
                        <button className="border-0 green-txt bg-white inter-semi ms-2">
                          Reply
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="light_border_top">
                  <div className="comment_input mt-2">
                    <Form.Control
                      type="text"
                      className="w-100"
                      id="comment_feild"
                      placeholder="Add comment..."
                      aria-describedby="comment_feild"
                      name="comment_feild"
                    />
                    <div className="ms-auto d-flex align-items-center me-3">
                      <div className="ms-3 cursorP">
                        <img alt="" src={union} className="input_icon" />
                      </div>
                      <div className="ms-3 cursorP">
                        <img alt="" src={emoji} className="input_icon" />
                      </div>
                      <div className="ms-3 cursorP">
                        <img
                          alt=""
                          src={comment_upload}
                          className="input_icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
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
            <div
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
            </div>
            <div
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
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Story;
