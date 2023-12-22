/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import avatarImg from "../../assets/images/avatarImg.png";
import { Modal } from "react-bootstrap";
import stars from "../../assets/logo/icons/star.svg";
import axios from "axios";
import ImageLoader from "../ImageLoader";
import Spinner from "react-bootstrap/Spinner";
import { selectUser } from "../Redux/Slices/AuthSlice";
import { useSelector } from "react-redux";

const PostLikesUser = ({ isOpen, onClose, postId }) => {
  const [follow, setFollow] = useState(false);
  // const [resultData, setResultData] = useState({});
  const [likesUser, setLikesUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const userData = useSelector(selectUser);

  const folloStatus = (key) => {
    setFollow((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  useEffect(() => {
    if (isOpen) {
      // Reset loading state when modal is opened
      setLoading(true);
      GetLikesUser(postId);
    }
  }, [isOpen, postId]);

  const GetLikesUser = async (postId) => {
    try {
      const resp = await axios.get(
        global.BASEURL + `/post/${postId}/getLikes`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": userData?.token,
          },
        }
      );
      setLikesUser(resp?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching likes:", error);
    }
  };

  return (
    <>
      <Modal
        show={isOpen}
        onHide={onClose}
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
          ) : likesUser.length > 0 ? (
            likesUser.map((data, index) => (
              <div
                key={index}
                className="d-flex mb-3 justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <ImageLoader
                    circeltrue={true}
                    imageUrl={data?.user?.profilePicture || avatarImg}
                    classes={"likes_dp imgB"}
                  />
                  <div className="ms-3 height-30 me-4">
                    <p className="black_text_lg inter-semi fs-15">
                      {data?.user?.username}
                    </p>
                    <div className="d-flex align-items-start">
                      <img alt="" src={stars} className="rating-star" />
                      <h1 className="black_text_md_bold ms-1 fs-14">
                        {data?.user?.rating}
                      </h1>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => folloStatus(data?._id)}
                  className={`${
                    follow[data?._id] ? "folowing_btn00" : "folow_btn00"
                  }`}
                >
                  {follow[data?._id] ? "Following" : "Follow"}
                </button>
              </div>
            ))
          ) : (
            <p>No likes yet.</p>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PostLikesUser;
