/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import stars from "../../assets/logo/icons/star.svg";
import { Button } from "react-bootstrap";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Avatar from "../../assets/images/avatarImg.png";
import ImageLoader from "../ImageLoader";
import CustomSnackbar from "../CustomSnackbar";
import { selectUser } from "../Redux/Slices/AuthSlice";
import { useSelector } from 'react-redux';


const SuggestedBuddies = ({ activeModalTab }) => {
  // const [resultData, setResultData] = useState(null);
  const [suggestedBuddies, setSuggestedBuddies] = useState();
  const [loading, setLoading] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [noData, setNoData] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [fadeOutIndex, setFadeOutIndex] = useState(null);
  const userData = useSelector(selectUser);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };


  const GetSuggest = async () => {
    setLoading(true);
    try {
      const res = await axios.get(global.BASEURL + `/buddies/all/suggested`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userData?.token,
        },
      });
      setSuggestedBuddies(res.data.suggestions);
      setNoData(res.data.message);
      setLoading(false);
    } catch (error) {
      console.log(error, "error");
    }
  };
  useEffect(() => {
    if (userData && activeModalTab === "tab3") {
      GetSuggest();
    }
  }, [userData, activeModalTab]);

  // sentfollow request

  const SendFollowRequest = async (userId, index) => {
    setClickedIndex(index); // Set the clicked index
    setIsButtonClicked(true);
    const apiData = {
      to_id: userId,
    };
    try {
      const res = await axios.post(
        global.BASEURL + `/buddies/follow-request`,
        apiData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": userData?.token,
          },
        }
      );

      if (res.status === 201) {
        // Don't wait for spinner to finish, start animation immediately
        setFadeOutIndex(index); // Set the index to start fade-out animation

        // After some time, remove the index from state
        setTimeout(() => {
          setFadeOutIndex(null);
          setSuggestedBuddies((prevRequests) => {
            return prevRequests.filter((request) => request._id !== userId);
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
      ) : suggestedBuddies && suggestedBuddies.length > 0 ? (
        suggestedBuddies?.map((data, index) => (
          <div
            key={index}
            className={`bg-white px-3 pt-2 pb-3 radius_12 mb-2 ${
              index === fadeOutIndex ? "custom_fade" : ""
            }`}
          >
            <div className="d-flex mt-2">
              <div className="">
                <ImageLoader
                  classes="message-dp"
                  imageUrl={data?.profilePicture || Avatar}
                />
              </div>
              <div className="status ms-2">
                <p className="inter-semi fs-14">{data?.username}</p>
                <h1 className="fs-13 align_center inter light_text">
                  New York, USA
                </h1>
              </div>
              <div className=" ms-auto d-flex justify-content-center align-items-center">
                <div className="d-flex align-items-start me-2 justify-content-center">
                  <img alt="" src={stars} className="rating-star" />
                  <h1 className="fs-13 inter-bold ms-1">{data?.rating}</h1>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-evenly mt-3">
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">{data?.quantity}</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">{data?.quality}</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Rollies</p>
                <p className="ms-1 green-txt inter fs-11">{data?.rollies}</p>
              </div>
            </div>
            <p className="black_text_md fs-13 my-2 ms-1">
              Love to explore new strains! 🍃
            </p>
            <div className="d-flex justify-content-center ">
              <Button
                onClick={() => SendFollowRequest(data?._id, index)}
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
                  " Follow"
                )}
              </Button>
            </div>
          </div>
        ))
      ) : (
        <h5 className="text-center l-black inter fs-15 mt-2">
          Suggestion Not Found
        </h5>
      )}
    </>
  );
};

export default SuggestedBuddies;
