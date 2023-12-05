/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import stars from "../assets/logo/icons/star.svg";
import dots from "../assets/logo/icons/3dots.svg";
import avatarImg from "../assets/images/avatarImg.png";
import likes from "../assets/logo/icons/likes.svg";
import like_btn from "../assets/icons/like_transparent.svg";
import greenLeaf from "../assets/icons/greenLeaf.svg";
import comment_btn from "../assets/logo/icons/commentsvg.svg";
import share_btn from "../assets/logo/icons/share.svg";
import { Row, Col, Modal, Form } from "react-bootstrap";
import status_icon from "../assets/logo/icons/Status_Icon.svg";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import staticImg from "../assets/images/started_img_bg.png";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import PostComments from "./Modal/PostComments";
import PostReport from "./Modal/PostReport";
import ImageLoader from "./ImageLoader";
import { toast } from "react-toastify";
import PostLikesUser from "../components/Modal/PostLikesUser";
const PostAll = () => {
  const [likeModalShow, setLikeModalShow] = useState(false);
  const [postId, stePostId] = useState("");
  const [likedPosts, setLikedPosts] = useState({});
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentLoad, setCommentLoad] = useState(true);
  const [reportModal, setReportModal] = useState(false);
  const [coment, setComent] = useState(false);
  const [postData, setPostData] = useState(null);
  const [resultData, setResultData] = useState({});
  const [commentGet, setCommentGet] = useState([]);

  const likesModalShow = (postId) => {
    setLikeModalShow(true);
    stePostId(postId);
  };

  const likesModalClose = () => {
    setLikeModalShow(false);
  };

  // report modal
  const reportOpenModal = () => {
    setReportModal(true);
  };

  const reportModalClose = () => {
    setReportModal(false);
  };

  // follow status

  // post modal
  const comentModal = (postData, id) => {
    getComment(id);
    setPostData(postData);
    setComent(true);
    setCommentLoad(true);
  };

  const handleClose = () => {
    setComent(false);
  };

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem("meraname");

    if (storedUserData) {
      // Parse the JSON data
      const parsedUserData = JSON.parse(storedUserData);
      setResultData(parsedUserData);
    }
  }, []);

  // api get comments
  const getComment = async (idPost) => {
    try {
      const resp = await axios.get(
        global.BASEURL + `/comments/all/${idPost}/`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": resultData.token,
          },
        }
      );
      const ComentResult = resp.data.posts;

      setCommentGet(ComentResult);

      if (resp) {
        setCommentLoad(false);
      } else {
        setCommentLoad(true);
      }
    } catch (error) {
      console.log(error, "error");
      toast.error(error);
    }
  };

  // api get post start
  const getPost = async () => {
    try {
      if (!resultData.token) {
        return;
      }
      const res = await axios.get(global.BASEURL + "/post/all", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": resultData.token,
        },
      });
      const resultGet = res.data.posts;

      setGetData(resultGet);

      const finalR = res.data.success;
      if (finalR) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    } catch (error) {
      console.log(error, "error");
      toast.error(error);
    }
  };

  useEffect(() => {
    getPost();
  }, [resultData]);

  const handleLike = async (postId) => {
    try {
      const resp = await axios.post(
        `${global.BASEURL}/post/${postId}/like`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": resultData.token,
          },
        }
      );
      const { success } = resp.data;

      if (success) {
        setLikedPosts((prevLikedPosts) => ({
          ...prevLikedPosts,
          [postId]: !prevLikedPosts[postId],
        }));
      }
    } catch (error) {
      console.log(error, "error");
      toast.error(error);
    } finally {
      getPost();
      setLoading(false);
    }
  };

  // api get post ended

  const processText = (text) => {
    if (!text) {
      return null; // or handle the absence of text in some way
    }

    const regex = /(#\w+)|(@\w+)/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (regex.test(part)) {
        if (part.startsWith("#")) {
          return (
            <span key={index} style={{ color: "#1E51AB" }}>
              {part}
            </span>
          );
        } else if (part.startsWith("@")) {
          return (
            <span key={index} style={{ color: "#32B744" }}>
              {part}
            </span>
          );
        }
      }
      return <span key={index}>{part}</span>;
    });
  };

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
        getData.map((data, index) => (
          <div className="bg-white mt-3 radius_12 mb-4 overflow-hidden">
            <div className="px-3">
              <div className="d-flex justify-content-between mt-3">
                <Link
                  to={`/users/${data?.user?._id}`}
                  className="d-flex align-items-center"
                >
                  <div className="position-relative">
                    <ImageLoader
                      circeltrue={true}
                      imageUrl={
                        data?.user?.profilePicture
                          ? global.BASEURL + "/" + data?.user?.profilePicture
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
                      {data?.user?.username}
                    </p>
                    <h1 className="fs-14 align_center green-txt inter">
                      {data?.location?.location} {<span>.</span>}
                      <p className="ms-1 black_text_md inter-light ">
                        <Moment fromNow>{data?.createdAt}</Moment>
                      </p>
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
                        onClick={reportOpenModal}
                      >
                        <img alt="" src={dots} className="ms-2" s />
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
              <p key={index} className="black_text_md mt-2 ms-1">
                {processText(data?.text)}
              </p>
              <div className="m-auto mt-2">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="swiper00"
                >
                  {data?.multimedia?.map((item, index) => (
                    <SwiperSlide key={index}>
                      {item.type === "image" ? (
                        <ImageLoader
                          classes={"story_img"}
                          imageUrl={global.BASEURL + item.url}
                          onClick={() => comentModal(data, data?._id)}
                        />
                      ) : item.type === "video" ? (
                        <video
                          controls
                          onClick={() => comentModal(data, data?._id)}
                          className="story_img mb-2"
                          src={global.BASEURL + item.url}
                        />
                      ) : (
                        <ImageLoader
                          classes={"story_img"}
                          imageUrl={staticImg}
                        />
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="d-flex justify-content-between pb-1 mt-2">
                  <div className="d-flex">
                    <p
                      onClick={() => likesModalShow(data?._id)}
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
                  onClick={() => handleLike(data?._id)}
                  className="bg-white cursorP d-flex align-items-center justify-content-center"
                >
                  <img
                    style={{ width: "20px", height: "20px" }}
                    alt=""
                    src={
                      likedPosts[data?._id] || data?.likes
                        ? greenLeaf
                        : like_btn
                    }
                    className="me-2"
                  />
                  Like
                </div>
              </Col>

              <Col
                onClick={() => comentModal(data, data?._id)}
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

              {/* PostComments */}

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

      {/* post coment modal */}

      <PostComments
        isOpen={coment}
        onClose={handleClose}
        postData={postData}
        commentResult={commentGet}
        commentLoad={commentLoad}
        processText={processText}
      />

      <PostReport isOpen={reportModal} onClose={reportModalClose} />
      <PostLikesUser
        isOpen={likeModalShow}
        onClose={likesModalClose}
        postId={postId}
      />
    </>
  );
};

export default PostAll;
