/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import stars from "../../assets/logo/icons/star.svg";
import dots from "../../assets/logo/icons/3dots.svg";
import avatarImg from "../../assets/images/avatarImg.png";
import likes from "../../assets/logo/icons/likes.svg";
import like_btn from "../../assets/icons/like_transparent.svg";
import greenLeaf from "../../assets/icons/greenLeaf.svg";
import share_btn from "../../assets/logo/icons/share.svg";
import { Row, Col, Modal, Form } from "react-bootstrap";
import status_icon from "../../assets/logo/icons/Status_Icon.svg";
import avatar from "../../assets/logo/yellow_girl.svg";
import heart from "../../assets/logo/icons/heart.svg";
import union from "../../assets/logo/icons/union.svg";
import emoji from "../../assets/logo/icons/emoji.svg";
import comment_upload from "../../assets/logo/icons/comment_upload.svg";
import Colapse from "../colapse";
import { Link } from "react-router-dom";
import staticImg from "../../assets/images/started_img_bg.png";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import PostReport from "./PostReport";
import ImageLoader from "../ImageLoader";

const PostComments = ({ isOpen, onClose, postData }) => {
  const [Likes, setShow] = useState(false);
  const Likes_btn_close = () => setShow(false);
  const [likedPosts, setLikedPosts] = useState({});
  const Likes_btn_open = () => setShow(true);

  const [report, setReport] = useState(false);

  // report modal open
  const reportHandleModal = () => {
    setReport(true);
    onClose();
  };
  const handleCloseModal = () => {
    setReport(false);
  };

  return (
    <>
      <Modal show={isOpen} onHide={onClose} size="lg" centered>
        <Modal.Body>
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
                        <ImageLoader
                          imageUrl={
                            postData?.user?.profilePicture
                              ? global.BASEURL +
                                "/" +
                                postData?.user?.profilePicture
                              : avatarImg
                          }
                          classes={"message-dp"}
                        />
                        {/* <img
                          alt=""
                          src={
                            postData?.user?.profilePicture
                              ? global.BASEURL +
                                "/" +
                                postData?.user?.profilePicture
                              : avatarImg
                          }
                          className="message-dp"
                        /> */}
                        <img alt="" src={status_icon} className="status_plus" />
                      </div>
                      <div className="status ms-2">
                        <p
                          style={{ color: "#252525" }}
                          className="inter-semi fs-15"
                        >
                          {postData?.user?.username}
                        </p>
                        <h1 className="fs-14 align_center green-txt inter">
                          {postData?.location?.location}
                          <span>.</span>
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
                          {postData?.user?.rating}
                          <button
                            className="border-0 bg-transparent"
                            onClick={reportHandleModal}
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
                  <p className="black_text_md mt-2 ms-1">{postData?.text}</p>
                  <div className="m-auto mt-2">
                    <Swiper
                      pagination={true}
                      modules={[Pagination]}
                      className="swiper00"
                    >
                      {postData?.images?.map((item, index) => (
                        <SwiperSlide key={index}>
                          <ImageLoader imageUrl={global.BASEURL + "/" + item} classes={"story_img mb-2"} />
                          {/* <img
                            loading="lazy"
                            alt=""
                            src={global.BASEURL + "/" + item}
                            className="story_img mb-2"
                          /> */}
                        </SwiperSlide>
                      ))}
                      {postData?.video && postData.video.length > 0 ? (
                        <SwiperSlide>
                          <video
                            controls
                            className="story_img mb-2"
                            src={global.BASEURL + postData?.video}
                          />
                        </SwiperSlide>
                      ) : postData?.images && postData.images.length === 0 ? (
                        <SwiperSlide>
                          <img
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
                          {postData?.TotalLikes}
                        </p>
                      </div>
                      <div className="d-flex">
                        <p className="me-2 postD">
                          {postData?.comments} Comments
                        </p>
                        <p className="me-2 postD">{postData?.shares} Shares</p>
                        <p className="me-2 postD">{postData?.views} Views</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Row className="w-100 h-100 p-0 border-top m-auto">
                  <Col lg="6" className="like_btn">
                    <div
                      //   onClick={() => handleLike(postData?._id)}
                      className="bg-white cursorP d-flex align-items-center justify-content-center"
                    >
                      <img
                        style={{ width: "20px", height: "20px" }}
                        alt=""
                        src={
                          likedPosts[postData?._id] || postData?.likes
                            ? greenLeaf
                            : like_btn
                        }
                        className="me-2"
                      />
                      Like
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
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <h1 className="black_text_lg">35 Comments</h1>
                  <button
                    className="border-0 btn-close hide_fcontrol"
                    onClick={onClose}
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

      <PostReport isOpen={report} onClose={handleCloseModal} />
    </>
  );
};

export default PostComments;
