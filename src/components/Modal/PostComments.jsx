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
import heart from "../../assets/logo/icons/heart.svg";
import union from "../../assets/logo/icons/union.svg";
import emoji from "../../assets/logo/icons/emoji.svg";
import comment_upload from "../../assets/logo/icons/comment_upload.svg";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Picker from "emoji-picker-react";
import Collapse from "react-bootstrap/Collapse";
import angle_down from "../../assets/logo/icons/angle_down.svg";

// import 'moment-timezone';

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import PostReport from "./PostReport";
import ImageLoader from "../ImageLoader";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { selectUser } from "../Redux/Slices/AuthSlice";
import { useSelector } from "react-redux";

const PostComments = ({
  isOpen,
  onClose,
  postData,
  commentResult = [],
  commentLoad,
  processText,
  postLikes,
  postIndex,
  totalLikes,
}) => {
  const [Likes, setShow] = useState(false);
  const Likes_btn_close = () => setShow(false);
  const Likes_btn_open = () => setShow(true);
  const [report, setReport] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [sentComment, setSentComment] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const userData = useSelector(selectUser);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [openStates, setOpenStates] = useState({});

  // coment post api
  const handleLike = async () => {
 
  };

  const postComment = async (postId, selectedCommentId) => {
    try {
      if (!userData?.token) {
        return;
      }
      setSentComment(true);
      const response = await axios.post(
        global.BASEURL + `/comments/create/${postId}/`,
        {
          text: commentValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": userData?.token,
          },
        }
      );

      // Do something with the response if needed
    } catch (error) {
      console.log(error, "error");
      // Handle the error as needed
    } finally {
      setSentComment(false);
      setCommentValue("");
      document.getElementById("comment_feild").value = "";
    }
  };

  const toggleOpenState = (commentId) => {
    setOpenStates((prevStates) => ({
      ...prevStates,
      [commentId]: !prevStates[commentId],
    }));
  };

  const onEmojiClick = (event, emojiObject) => {
    commentValue((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  // report modal open
  const reportHandleModal = () => {
    setReport(true);
    onClose();
  };
  const handleCloseModal = () => {
    setReport(false);
  };

  // post like

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
                              ? postData?.user?.profilePicture
                              : avatarImg
                          }
                          classes={"message-dp"}
                        />
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
                  <p className="black_text_md mt-2 ms-1">
                    {processText(postData?.text)}
                  </p>
                  <div className="m-auto mt-2">
                    <Swiper
                      pagination={true}
                      modules={[Pagination]}
                      className="swiper00"
                    >
                      {postData?.multimedia?.map((item, index) => (
                        <SwiperSlide key={index}>
                          {item.type === "image" ? (
                            <ImageLoader
                              imageUrl={item.url}
                              classes={"story_img mb-2"}
                            />
                          ) : item.type === "video" ? (
                            <video
                              controls
                              className="story_img mb-2"
                              src={item.url}
                            />
                          ) : null}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="d-flex justify-content-between pb-1 mt-2">
                      <div className="d-flex">
                        <p
                          onClick={Likes_btn_open}
                          className="inherit black_text_md cursorP align_center"
                        >
                          <img alt="" src={likes} className="ms-2 me-1" />
                          {totalLikes[postIndex]}
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
                      onClick={handleLike}
                      className="bg-white cursorP d-flex align-items-center justify-content-center"
                    >
                      <img
                        style={{ width: "20px", height: "20px" }}
                        alt=""
                        src={postLikes[postIndex] ? greenLeaf : like_btn}
                        className="me-2"
                      />
                      <h5
                        className={`${
                          postLikes[postIndex] ? "green-txt" : ""
                        } actionBTn00`}
                      >
                        Like
                      </h5>
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
                <div className="d-flex justify-content-between align-items-center h-100 mt-2">
                  <h1 className="black_text_lg">
                    {!commentLoad ? commentResult.length : ""}
                  </h1>
                  <button
                    className="border-0 btn-close hide_fcontrol"
                    onClick={onClose}
                  ></button>
                </div>
                <div className="pt-3 px-3 w-100 comment_block no_scrollbar overflow-y-auto overflow-x-hidden">
                  {commentLoad ? (
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
                  ) : commentResult.length > 0 ? (
                    commentResult?.map((item, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-start mb-3"
                      >
                        <ImageLoader
                          imageUrl={
                            item?.user?.profilePicture
                              ? item?.user?.profilePicture
                              : avatarImg
                          }
                          classes={"comment_avatar"}
                        />

                        <div className="w-100 ms-2">
                          <div className="d-flex justify-content-between align-items-center w-100">
                            <div>
                              <h1 className="black_text_md inter-semi">
                                {item?.user?.name}
                                <span className="light_text_sm ms-1">
                                  @ {item?.user?.username}
                                </span>
                              </h1>
                            </div>
                            <p className="gray_text_md justify_center">
                              <Moment fromNow>{item?.createdAt}</Moment>
                              <img
                                alt=""
                                src={heart}
                                className=" ms-2 mb-1 heart"
                              />
                            </p>
                          </div>
                          <p className="black_text_md">{item?.text}</p>

                          <div className="black_text_md">
                            <Moment format="YYYY-MM-DD">
                              {item?.createdAt}
                            </Moment>
                            <button
                              className="border-0 green-txt bg-white inter-semi ms-2"
                              onClick={() => setSelectedCommentId(item?._id)}
                            >
                              Reply
                            </button>
                          </div>
                          {item?.replyComments &&
                          item.replyComments.length > 0 ? (
                            <>
                              <button
                                className="border-0 bg-white black_text_md green-txt"
                                onClick={() => toggleOpenState(item?._id)}
                                aria-controls={item?._id}
                                aria-expanded={openStates[item?._id]}
                              >
                                View replies ({item.replyComments?.length})
                                <img alt="" src={angle_down} className="ms-1" />
                              </button>
                              <Collapse key={index} in={openStates[item?._id]}>
                                <div id={item.replyComments?._id}>
                                  {item.replyComments.map((replData, index) => (
                                    <>
                                      <div
                                        key={index}
                                        className="d-flex align-items-start  mt-3"
                                      >
                                        <img
                                          alt=""
                                          src={
                                            replData?.user?.profilePicture ||
                                            avatarImg
                                          }
                                          className="comment_avatar"
                                        />
                                        <div className="w-100 ms-2">
                                          <div className="d-flex justify-content-between align-items-center w-100">
                                            <div>
                                              <h1 className="black_text_md inter-semi">
                                                {replData?.user?.username}
                                                <span className="light_text_sm ms-1">
                                                  @{replData?.user?.username}
                                                </span>
                                              </h1>
                                            </div>
                                            <p className="gray_text_md justify_center">
                                              <Moment fromNow>
                                                {replData?.createdAt}
                                              </Moment>
                                              <img
                                                alt=""
                                                src={heart}
                                                className=" ms-2 mb-1 heart"
                                              />
                                            </p>
                                          </div>
                                          <p className="black_text_md">
                                            {replData.text}
                                          </p>
                                          <div className="black_text_md">
                                            <Moment format="YYYY-MM-DD">
                                              {item?.createdAt}
                                            </Moment>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ))}
                                </div>
                              </Collapse>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    "No more comments found"
                  )}
                </div>
                <div className="light_border_top">
                  <div className="comment_input mt-2">
                    <Form.Control
                      type="text"
                      className="w-100"
                      id="comment_feild"
                      placeholder="Add comment..."
                      aria-describedby="comment_feild"
                      value={commentValue}
                      onChange={handleCommentChange}
                      ref={(input) => {
                        if (input && selectedCommentId) {
                          input.focus();
                        }
                      }}
                    />

                    <div className="ms-auto d-flex align-items-center me-3">
                      <div className="ms-3 cursorP">
                        <img alt="" src={union} className="input_icon" />
                      </div>
                      <div className="ms-3 cursorP">
                        <img
                          alt=""
                          onClick={() => setShowPicker((val) => !val)}
                          src={emoji}
                          className="input_icon"
                        />
                      </div>
                      <div className="ms-3 cursorP">
                        {sentComment ? (
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
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </Spinner>
                          </div>
                        ) : (
                          <img
                            alt=""
                            src={comment_upload}
                            className="input_icon"
                            onClick={() => postComment(postData?._id)}
                          />
                        )}
                      </div>

                      {showPicker && (
                        <Picker
                          pickerStyle={{ width: "100%" }}
                          onEmojiClick={onEmojiClick}
                        />
                      )}
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
