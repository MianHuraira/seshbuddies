/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import stars from "../../assets/logo/icons/star.svg";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import ImageLoader from "../ImageLoader";
import Avatar from "../../assets/images/avatarImg.png";
import CustomSnackbar from "../CustomSnackbar";

import { selectUser } from "../Redux/Slices/AuthSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Buddies = ({ activeModalTab }) => {
  // const [resultData, setResultData] = useState(null);
  const [buddies, setBuddies] = useState();
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [fadeOutIndex, setFadeOutIndex] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const userData = useSelector(selectUser);
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const GetBuddies = async () => {
    setLoading(true);
    try {
      const res = await axios.get(global.BASEURL + `/buddies/all/accepted`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userData?.token,
        },
      });
      setBuddies(res.data.following);
      setNoData(res.data.message);
      setLoading(false);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    if (userData && activeModalTab === "tab2") {
      GetBuddies();
    }
  }, [userData, activeModalTab]);

  const HandleUnfollow = async (postId, index) => {
    setClickedIndex(index); // Set the clicked index
    setIsButtonClicked(true);
    try {
      const resp = await axios.put(
        global.BASEURL + `/buddies/follow-request/unfollow/${postId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": userData?.token,
          },
        }
      );
      if (resp.status === 200) {
        setFadeOutIndex(index);

        // After some time, remove the index from state
        setTimeout(() => {
          setFadeOutIndex(null);
          setBuddies((prevBuddies) => {
            return prevBuddies.filter((request) => request._id !== postId);
          });
          showSnackbar(`Request Sent`, "success");
        }, 300);
      } else {
        showSnackbar(`Request failed`, "error");
      }
    } catch (error) {
      console.log(error, "error");
      showSnackbar(`Request Failed`, "error");
    } finally {
      setClickedIndex(null);
      setIsButtonClicked(false);
    }
  };
  return (
    <>
      <CustomSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleSnackbarClose}
      />
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
      ) : buddies && buddies.length > 0 ? (
        buddies?.map((data, index) => (
          <div
            key={index}
            className={`bg-white px-3 pt-2 pb-3 mb-2 radius_12 mb-2 ${
              index === fadeOutIndex ? "custom_fade" : ""
            }`}
          >
            <div className="d-flex mt-2">
              <Link
                to={`/users/${data?.user?._id}`}
                className="d-flex align-items-center cursorP"
              >
                <ImageLoader
                  classes="message-dp"
                  imageUrl={data?.user?.profilePicture || Avatar}
                  alt=""
                />
                <div className="status ms-2">
                  <p
                    style={{ color: "rgb(37, 37, 37)" }}
                    className="inter-semi fs-14 mb-2"
                  >
                    {data?.user?.username}
                  </p>
                  <h1
                    style={{ color: "rgb(37, 37, 37)" }}
                    className="fs-13 align_center inter light_text"
                  >
                    New York, USA
                  </h1>
                </div>
              </Link>
              <div className=" ms-auto d-flex justify-content-center align-items-center">
                <div className="d-flex align-items-start me-2 justify-content-center">
                  <img alt="" src={stars} className="rating-star" />
                  <h1 className="fs-13 inter-bold ms-1">
                    {(data?.user?.rating || []).length}
                  </h1>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-evenly mt-3">
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">
                  {(data?.user?.quality || []).length}
                </p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quantity</p>
                <p className="ms-1 green-txt inter fs-11">
                  {(data?.user?.quantity || []).length}
                </p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Rollies</p>
                <p className="ms-1 green-txt inter fs-11">
                  {(data?.user?.rollies || []).length}
                </p>
              </div>
            </div>
            <p className="black_text_md fs-13 my-2 ms-1">
              Love to explore new strains! 🍃
            </p>
            <div className="d-flex justify-content-center">
              <button
                onClick={() => HandleUnfollow(data?._id, index)}
                className={`btn-primary w-50 ${
                  isButtonClicked && clickedIndex === index ? "disabled" : ""
                }`}
                disabled={isButtonClicked && clickedIndex === index}
              >
                {isButtonClicked && clickedIndex === index ? (
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
                ) : (
                  "Un Follow"
                )}
              </button>
            </div>
          </div>
        ))
      ) : (
        <h5 className="text-center l-black inter fs-15 mt-2">{noData}</h5>
      )}
    </>
  );
};

export default Buddies;
