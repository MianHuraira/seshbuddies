/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import stars from "../../assets/logo/icons/star.svg";
import dots from "../../assets/logo/icons/3dots.svg";
import avatarImg from "../../assets/images/avatarImg.png";
import likesImg from "../../assets/logo/icons/likes.svg";
import like_btn from "../../assets/icons/like_transparent.svg";
import greenLeaf from "../../assets/icons/greenLeaf.svg";
import share_btn from "../../assets/logo/icons/share.svg";
import { Row, Col, Modal, Form } from "react-bootstrap";
import status_icon from "../../assets/logo/icons/Status_Icon.svg";
import heart from "../../assets/logo/icons/heart.svg";
import union from "../../assets/logo/icons/union.svg";
import emoji from "../../assets/logo/icons/emoji.svg";
import comment_upload from "../../assets/logo/icons/comment_upload.svg";
import comment_uploadD from "../../assets/logo/icons/comment_upload(d).svg";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Picker from "emoji-picker-react";
import Collapse from "react-bootstrap/Collapse";
import angle_down from "../../assets/logo/icons/angle_down.svg";
import grenHeart from "../../assets/icons/grenHeart.svg";
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
import CustomSnackbar from "../CustomSnackbar";
import InfiniteScroll from "react-infinite-scroller";

const PostComments = ({
  isOpen,
  onClose,
  postData,
  processText,
  postLikes,
  postIndex,
  totalLikes,
  currentPostId,
  setCurrentPostId,
}) => {
  const commentDataRef = useRef(null);
  const commentInputRef = useRef(null);
  const replyButtonRef = useRef(null);
  const [Likes, setShow] = useState(false);
  const Likes_btn_close = () => setShow(false);
  const Likes_btn_open = () => setShow(true);
  const [report, setReport] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [sentComment, setSentComment] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const userData = useSelector(selectUser);
  const [openStates, setOpenStates] = useState({});
  const [commentLiked, setCommentLiked] = useState([]);
  const [newComment, setnewComment] = useState("");
  const [localPostLikes, setLocalPostLikes] = useState(postLikes || []);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");
  const [selectedCommentId, setSelectedCommentId] = useState("");
  const [commentGet, setCommentGet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentStatus, setCommentStatus] = useState("");
  const [getReplyComments, setGetReplyComments] = useState([]);
  console.log(getReplyComments);
  // report modal open
  const reportHandleModal = () => {
    setReport(true);
    onClose();
  };

  const handleReplyButton = (commentId) => {
    setSelectedCommentId(commentId);
    // Set focus on the comment input
    if (commentInputRef.current) {
      commentInputRef.current.focus();
    }
  };

  // snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };
  // snackbar

  const handleLike = async () => {
    setLocalPostLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[postIndex] = !newLikes[postIndex];
      return newLikes;
    });
  };

  useEffect(() => {}, [localPostLikes, postIndex]);

  // comment create

  useEffect(() => {
    if (commentGet && commentGet.length > 0) {
      setCommentGet(commentGet);
    }
  }, [commentGet]);

  const createComments = async (postId) => {
    try {
      if (!userData?.token) {
        return;
      }
      setSentComment(true);
      const response = await axios.post(
        global.BASEURL + `/comments/create/${postId}/`,
        {
          text: commentValue,
          ...(selectedCommentId ? { replyComment: selectedCommentId } : {}),
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": userData?.token,
          },
        }
      );
      if (response.status === 201) {
        const getResult = response.data.comment;

        const modifiUserData = {
          username: userData?.user?.username,
          profilePicture: userData?.user?.profilePicture,
          _id: userData?.user?._id,
        };

        if (getResult && getResult?.user) {
          // Replace 'user' property with modifiUserData
          const modifiedResult = {
            ...getResult,
            // concat user data
            user: {
              ...modifiUserData,
            },
            // chnges likes data
            likes: false,
          };
          setnewComment(modifiedResult);
        } else {
          console.error("User property not found in getResult:", getResult);
          showSnackbar(getResult, "error");
        }
      }
    } catch (error) {
      console.log(error, "error");
      showSnackbar(error, "error");
    } finally {
      setSentComment(false);
      setCommentValue("");
      setSelectedCommentId("");
      document.getElementById("comment_feild").value = "";
    }
  };
  useEffect(() => {
    if (newComment) {
      setCommentGet((prevComments) => {
        // Check if prevComments is truthy and is an array
        return Array.isArray(prevComments)
          ? [newComment, ...prevComments]
          : [newComment];
      });

      if (commentDataRef.current) {
        commentDataRef.current.scrollTop = 0;
      }
    }
  }, [newComment]);

  // comment create
  // replay toggle
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

  const handleCloseModal = () => {
    setReport(false);
  };

  // post comment like api
  useEffect(() => {
    if (commentGet && commentGet.length > 0) {
      const initialCommentLikes = commentGet.map(
        (data) => data?.likes || false
      );
      setCommentLiked(initialCommentLikes);
    }
  }, [commentGet]);

  const handleLikeComment = async (id, index, replc) => {
    if (!replc) {
      const updatedCommentLiked = [...commentLiked];
      updatedCommentLiked[index] = !updatedCommentLiked[index];
      setCommentLiked(updatedCommentLiked);
    }

    try {
      const resp = await axios.post(
        `${global.BASEURL}/comments/${id}/like`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": userData?.token,
          },
        }
      );
    } catch (error) {
      console.log(error, "error");
    }
  };

  // get all comments

  const getComment = async (idPost) => {
    setLoading(true);
    try {
      const resp = await axios.get(
        global.BASEURL + `/comments/all/${idPost}/`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": userData?.token,
          },
        }
      );
      const ComentResult = resp.data.posts;
      setCommentStatus(resp?.data?.message);
      if (resp.status) setCommentGet(ComentResult);
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentPostId) {
      getComment(currentPostId);
    }
  }, [currentPostId]);
  // modal close
  const modalClose = () => {
    setCommentGet("");
    setCommentValue("");
    setLoading(true);
    setCurrentPostId("");
  };

  // replay comment get
  useEffect(() => {
    if (commentGet && commentGet.length > 0) {
      // Extract replyComments from commentGet
      const extractedReplyComments = commentGet.map(
        (comment) => comment.replyComments || []
      );

      // Set extractedReplyComments in getReplyComments state
      setGetReplyComments(extractedReplyComments);
    }
  }, [commentGet]);
  // ////////////////////// ended ///////////////

  return (
    <>
      <CustomSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity} // or "error", "warning", "info", etc.
        onClose={handleSnackbarClose}
      />
      <Modal
        backdrop="static"
        show={isOpen}
        onHide={onClose}
        size="lg"
        centered
      >
        <Modal.Body>
          <Modal.Header
            closeButton
            className="py-3 border-0 poAB00"
            onClick={modalClose}
          ></Modal.Header>
          <Row>
            <Col
              className="p-0"
              style={{ borderRight: "2px solid #EEF5F2" }}
              lg="6"
            >
              <div className="bg-white radius_12 overflow-hidden">
                <div className="px-3">
                  <div className="d-flex justify-content-between mt-2">
                    <Link
                      to={`/users/${postData?.user?._id}`}
                      className="d-flex align-items-center"
                    >
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
                            <Moment fromNow>{postData?.createdAt}</Moment>
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
                          <img
                            src={likesImg}
                            alt="likes"
                            className="ms-2 me-1"
                          />
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
                        src={localPostLikes[postIndex] ? greenLeaf : like_btn}
                        className="me-2"
                      />
                      <h5
                        className={`${
                          localPostLikes[postIndex] ? "green-txt" : ""
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
                    {commentGet && commentGet?.length}
                  </h1>
                </div>
                <div
                  ref={commentDataRef}
                  className="pt-3 px-3 w-100 comment_block no_scrollbar overflow-y-auto overflow-x-hidden"
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
                  ) : commentGet && commentGet?.length > 0 ? (
                    commentGet?.map((item, index) => (
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
                            <div className="gray_text_md justify_center">
                              <Moment fromNow>{item?.createdAt}</Moment>
                              <img
                                alt=""
                                src={commentLiked[index] ? grenHeart : heart}
                                className=" ms-2 mb-1 heart cursorP"
                                onClick={() =>
                                  handleLikeComment(item?._id, index)
                                }
                              />
                            </div>
                          </div>
                          <p className="black_text_md">{item?.text}</p>

                          <div className="black_text_md">
                            <Moment format="YYYY-MM-DD">
                              {item?.createdAt}
                            </Moment>
                            <button
                              ref={replyButtonRef}
                              className="border-0 green-txt bg-white inter-semi ms-2"
                              onClick={() => handleReplyButton(item?._id)}
                            >
                              Reply
                            </button>
                          </div>

                          {
                            getReplyComments[index] &&
                            getReplyComments[index].length > 0 ? (
                              <>
                                <button
                                  className="border-0 bg-white black_text_md green-txt"
                                  onClick={() => toggleOpenState(index)}
                                  aria-controls={index}
                                  aria-expanded={openStates[index]}
                                >
                                  View replies ({getReplyComments[index].length}
                                  )
                                  <img
                                    alt=""
                                    src={angle_down}
                                    className="ms-1"
                                  />
                                </button>
                                <Collapse key={index} in={openStates[index]}>
                                  <div id={item.replyComments?._id}>
                                    {getReplyComments[index].map(
                                      (replData, index) => (
                                        <>
                                          <div
                                            key={index}
                                            className="d-flex align-items-start  mt-3"
                                          >
                                            <img
                                              alt=""
                                              src={
                                                replData?.user
                                                  ?.profilePicture || avatarImg
                                              }
                                              className="comment_avatar"
                                            />
                                            <div className="w-100 ms-2">
                                              <div className="d-flex justify-content-between align-items-center w-100">
                                                <div>
                                                  <h1 className="black_text_md inter-semi">
                                                    <span className="light_text_sm ms-1">
                                                      @
                                                      {replData?.user?.username}
                                                    </span>
                                                  </h1>
                                                </div>
                                                <p className="gray_text_md justify_center">
                                                  <Moment fromNow>
                                                    {replData?.createdAt}
                                                  </Moment>
                                                  <img
                                                    alt=""
                                                    src={
                                                      replData.likes
                                                        ? grenHeart
                                                        : heart
                                                    }
                                                    className=" ms-2 mb-1 heart cursorP"
                                                    onClick={() =>
                                                      handleLikeComment(
                                                        replData?._id,
                                                        index,
                                                        "replc"
                                                      )
                                                    }
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
                                      )
                                    )}
                                  </div>
                                </Collapse>
                              </>
                            ) : (
                              ""
                            )
                            //  getReplyComments[index].map(
                            //     (replyItem, replyIndex) => (
                            //     )
                            //   )
                          }

                          {/* {item?.replyComments &&
                          item.replyComments.length > 0 ? (
                            <>
                              <button
                                className="border-0 bg-white black_text_md green-txt"
                                onClick={() => toggleOpenState(index)}
                                aria-controls={index}
                                aria-expanded={openStates[index]}
                              >
                                View replies ({item.replyComments?.length})
                                <img alt="" src={angle_down} className="ms-1" />
                              </button>
                              <Collapse key={index} in={openStates[index]}>
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
                                                src={
                                                  replData.likes
                                                    ? grenHeart
                                                    : heart
                                                }
                                                className=" ms-2 mb-1 heart cursorP"
                                                onClick={() =>
                                                  handleLikeComment(
                                                    replData?._id,
                                                    index,
                                                    "replc"
                                                  )
                                                }
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
                          )} */}
                        </div>
                      </div>
                    ))
                  ) : (
                    commentStatus
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
                      ref={commentInputRef}
                    />

                    <div className="ms-auto d-flex align-items-center me-3">
                      <div className="ms-3 cursorP">
                        <img alt="" src={union} className="input_icon" />
                      </div>
                      <div className="ms-3 cursorP">
                        <img
                          alt=""
                          // onClick={() => setShowPicker((val) => !val)}
                          src={emoji}
                          className="input_icon cursorP"
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
                            src={
                              commentValue.trim()
                                ? comment_upload
                                : comment_uploadD
                            }
                            className={`input_icon ${
                              commentValue.trim() ? "enabled" : "disabled"
                            }`}
                            onClick={() => {
                              if (commentValue.trim()) {
                                createComments(postData?._id);
                              }
                            }}
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
