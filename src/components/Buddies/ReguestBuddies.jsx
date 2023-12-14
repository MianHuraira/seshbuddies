/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import stars from "../../assets/logo/icons/star.svg";
import { Button, Modal } from "react-bootstrap";
import CustomSnackbar from "../CustomSnackbar";
import AlertWarning from "../../assets/logo/icons/alert_warning.svg";
import axios from "axios";
import ImageLoader from "../ImageLoader";
import avatarImg from "../../assets/images/avatarImg.png";
import SuggestedBuddies from "./SuggestedBuddies";
import StarElement from "../../assets/logo/icons/star_element_green.svg";
import Spinner from "react-bootstrap/Spinner";

const ReguestBuddies = ({ activeModalTab }) => {
  const [rejectRequest, setRejectRequest] = useState(false);
  const [rejectRequestId, setRejectRequestId] = useState(null);
  const [resultData, setResultData] = useState(null);
  const [reguested, setReguested] = useState();
  const [loading, setLoading] = useState(true);
  const [fadeOutIndex, setFadeOutIndex] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  // snackbar ended

  const HandleOpenModal = (id) => {
    setRejectRequestId(id);
    setRejectRequest(true);
  };
  const HandleCloseModal = () => {
    setRejectRequest(false);
  };

  // api

  useEffect(() => {
    const storedUserData = localStorage.getItem("meraname");
    if (storedUserData) {
      // Parse the JSON data
      const parsedUserData = JSON.parse(storedUserData);
      setResultData(parsedUserData);
    }
  }, []);

  const BuddiesRequest = async () => {
    setLoading(true);
    try {
      const res = await axios.get(global.BASEURL + `/buddies/all/pending`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": resultData.token,
        },
      });
      setReguested(res.data.following);
      setLoading(false);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    if (resultData && activeModalTab === "tab1") {
      BuddiesRequest();
    }
  }, [resultData, activeModalTab]);

  // accept req api

  const HandleAccept = async (postId, rejectProp, index) => {
    let apiEndpoint;
    if (rejectProp) {
      // If rejectProp is truthy, use the reject endpoint
      apiEndpoint = `/buddies/follow-request/reject/${postId}`;
    } else {
      // If rejectProp is falsy or undefined, use the accept endpoint
      apiEndpoint = `/buddies/follow-request/accept/${postId}`;
    }
    try {
      const resp = await axios.put(
        global.BASEURL + apiEndpoint,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": resultData.token,
          },
        }
      );

      if (resp.status === 200) {
        setFadeOutIndex(index);

        // After some time, remove the index from state
        setTimeout(() => {
          setFadeOutIndex(null);
          setReguested((prevBuddies) => {
            return prevBuddies.filter((request) => request._id !== postId);
          });
          if (rejectProp) {
            showSnackbar(`Rejected Successful`, "success");
          } else {
            showSnackbar(`Accepted Successful`, "success");
          }
          showSnackbar(`Request Sent`, "success");
        }, 300);
      } else {
        showSnackbar(`Request failed`, "error");
      }
    } catch (error) {
      console.log(error, "error");
    } finally {
      HandleCloseModal();
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
      ) : reguested && reguested.length > 0 ? (
        reguested?.map((data, index) => (
          <div
            key={index}
            className={`bg-white px-3 pt-2 pb-3 radius_12 mb-2 ${
              index === fadeOutIndex ? "custom_fade" : ""
            }`}
          >
            <div className="d-flex mt-2">
              <div>
                <ImageLoader
                  circleTrue={"true"}
                  imageUrl={data?.user?.profilePicture || avatarImg}
                  classes={"message-dp"}
                />
              </div>
              <div className="status ms-2">
                <p className="inter-semi fs-14 mb-2">{data?.user?.username}</p>
                <h1 className="fs-13 align_center inter light_text">
                  New York, USA
                </h1>
              </div>
              <div className=" ms-auto d-flex justify-content-center align-items-center">
                <div className="d-flex align-items-start me-2 justify-content-center">
                  <img alt="" src={stars} className="rating-star" />
                  <h1 className="fs-13 inter-bold ms-1">
                    {data?.user?.rating}
                  </h1>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-evenly mt-3">
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quantity</p>
                <p className="ms-1 green-txt inter fs-11">
                  {data?.user?.quantity}
                </p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">
                  {data?.user?.quality}
                </p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Rollies</p>
                <p className="ms-1 green-txt inter fs-11">
                  {data?.user?.rollies}
                </p>
              </div>
            </div>
            <p className="black_text_md fs-13 my-2 ms-1">
              Love to explore new strains! 🍃
            </p>
            <div className="d-flex justify-content-between">
              <button
                className="reject_btn w_45"
                onClick={() => HandleOpenModal(data?._id)}
              >
                Reject
              </button>
              <Button
                onClick={() => HandleAccept(data?._id)}
                className="btn-primary w_45"
              >
                Accept
              </Button>
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="align_center flex-column my-3">
            <img src={StarElement} alt="" />
            <h1 className="fs-17 inter-bold mt-3 mb-2">No Requests</h1>
            <p className="text-center  m-auto fs-15 w-75">
              While you don't have any pending buddy requests, why not connect
              with some of these suggested buddies?
            </p>
          </div>
          <SuggestedBuddies activeModalTab={"tab3"} />
        </>
      )}

      <Modal
        show={rejectRequest}
        size="sm"
        onHide={HandleCloseModal}
        dialogClassName=""
        centered
      >
        <Modal.Header
          closeButton
          className="px-4 hide_fcontrol py-2 likes_modal_head"
        >
          <Modal.Title className="mx-auto black_text_lg inter-bold fs-14 mt-1 ">
            Confirm
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-4">
          <div className="w-100 d-flex align-items-center mt-3 justify-content-center">
            <img alt="" src={AlertWarning} className="me-2" />
          </div>
          <h1 className="black_text_lg inter-bold text-center mb-2 mt-3">
            Reject Buddy Request?
          </h1>
          <h1 className="black_text_lg text-center inter mb-4 fs-13 w-90 m-auto">
            Are you sure you want to reject the buddy request from [@Nickname]?
            This action cannot be undone.
          </h1>
          <Button
            className="btn-primary"
            onClick={() => HandleAccept(rejectRequestId, "rejectP")}
          >
            Confirm
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReguestBuddies;
