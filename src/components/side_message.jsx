import React, { useState } from "react";
import girl from "../assets/logo/orange-girl.svg";
// import Stars from "../assets/logo/icons/star.svg";
import plus_full from "../assets/logo/icons/Status-plus.svg";
import avatar1 from "../assets/logo/Avatar.svg";
import avatar2 from "../assets/logo/Avatar2.svg";
import avatar3 from "../assets/logo/Avatar3.svg";
import avatar4 from "../assets/logo/Avatar4.svg";
import { Link, useLocation } from "react-router-dom";

import RedUpModal from "./Modal/RedUpModal";
const SideMessage = () => {
  const location = useLocation();

  let getPath = location.pathname;
  let allPath = false;

  if (getPath === "/live_stream" || getPath === "/reels") {
    allPath = true;
  }


  // moodal code red up 
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <p className="semibold explore l-black text-start inter fs-15">
        It's you
      </p>
      <div className="d-flex mb-3">
        <img alt="" src={girl} className="message-dp" />
        <div className="ms-2 height-15">
          <h1
            style={{ color: allPath ? "white" : "#252525" }}
            className="inter-semi fs-15"
          >
            steve.brown
          </h1>
          <p className="l-black inter fs-13">Steve Brown</p>
        </div>
        <div className="d-flex align-items-start ms-2 justify-content-center">
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 5.23464C12 5.36224 11.9062 5.48275 11.8125 5.5749L9.1947 8.08436L9.81487 11.6288C9.82215 11.6784 9.82215 11.7209 9.82215 11.7705C9.82215 11.9549 9.7356 12.125 9.52642 12.125C9.42548 12.125 9.32452 12.0895 9.23798 12.0399L6 10.367L2.76202 12.0399C2.66827 12.0895 2.57452 12.125 2.47356 12.125C2.26442 12.125 2.17067 11.9549 2.17067 11.7705C2.17067 11.7209 2.17789 11.6784 2.1851 11.6288L2.80528 8.08436L0.180289 5.5749C0.09375 5.48275 0 5.36224 0 5.23464C0 5.02198 0.223558 4.93691 0.403847 4.90855L4.02404 4.39107L5.64664 1.16564C5.71154 1.03095 5.83414 0.875 6 0.875C6.16586 0.875 6.28847 1.03095 6.35336 1.16564L7.97595 4.39107L11.5961 4.90855C11.7692 4.93691 12 5.02198 12 5.23464Z"
              fill={allPath ? "white" : "#02150F"}
            />
          </svg>
          <h1
            style={{ color: allPath ? "white" : "" }}
            className="inter-semi fs-14 ms-1"
          >
            4.9
          </h1>
        </div>
        <Link
          to={"/profile"}
          className="green-txt fs-15 inter-semi ms-auto my-auto"
        >
          Manage
        </Link>
      </div>
      <div className="d-flex mb-2">
        <img alt="" src={plus_full} className="message-dp" />
        <div className="ms-2">
          <h1
            style={{ color: allPath ? "white" : "" }}
            className="inter-semi fs-15"
          >
            Re'd Up
          </h1>
          <p className="l-black inter fs-13">You're full of greens...</p>
        </div>
        <button
          style={{ color: allPath ? "#32B744" : "" }}
          onClick={handleOpenModal}
          className="fs-15 bg-transparent border-0 inter-semi ms-auto my-auto"
        >
          Change
        </button>
        <RedUpModal show={showModal} handleClose={handleCloseModal} />
      </div>
      <div className="d-flex mb-3 justify-content-between align-items-center">
        <p className="inter fs-15 l-black">Suggested for you</p>
        <p className="green-txt fs-13 inter-semi">See All</p>
      </div>
      <div className="d-flex mb-3">
        <img alt="" src={avatar1} className="message-dp" />
        <div className="ms-2 height-15">
          <h1
            style={{ color: allPath ? "white" : "" }}
            className="inter-semi fs-15 d-flex"
          >
            bobS
            <div className="d-flex align-items-start ms-2 justify-content-center">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 5.23464C12 5.36224 11.9062 5.48275 11.8125 5.5749L9.1947 8.08436L9.81487 11.6288C9.82215 11.6784 9.82215 11.7209 9.82215 11.7705C9.82215 11.9549 9.7356 12.125 9.52642 12.125C9.42548 12.125 9.32452 12.0895 9.23798 12.0399L6 10.367L2.76202 12.0399C2.66827 12.0895 2.57452 12.125 2.47356 12.125C2.26442 12.125 2.17067 11.9549 2.17067 11.7705C2.17067 11.7209 2.17789 11.6784 2.1851 11.6288L2.80528 8.08436L0.180289 5.5749C0.09375 5.48275 0 5.36224 0 5.23464C0 5.02198 0.223558 4.93691 0.403847 4.90855L4.02404 4.39107L5.64664 1.16564C5.71154 1.03095 5.83414 0.875 6 0.875C6.16586 0.875 6.28847 1.03095 6.35336 1.16564L7.97595 4.39107L11.5961 4.90855C11.7692 4.93691 12 5.02198 12 5.23464Z"
                  fill={allPath ? "white" : "#02150F"}
                />
              </svg>
              <h1 className="inter-semi fs-13 ms-1">4.9</h1>
            </div>
          </h1>
          <p className="l-black inter fs-13">San Diego, USA</p>
        </div>

        <h1 className="green-txt fs-15 inter ms-auto my-auto">Follow</h1>
      </div>
      <div className="d-flex mb-3">
        <img alt="" src={avatar2} className="message-dp" />
        <div className="ms-2 height-15">
          <h1
            style={{ color: allPath ? "white" : "" }}
            className="inter-semi fs-15 d-flex"
          >
            sarahG
            <div className="d-flex align-items-start ms-2 justify-content-center">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 5.23464C12 5.36224 11.9062 5.48275 11.8125 5.5749L9.1947 8.08436L9.81487 11.6288C9.82215 11.6784 9.82215 11.7209 9.82215 11.7705C9.82215 11.9549 9.7356 12.125 9.52642 12.125C9.42548 12.125 9.32452 12.0895 9.23798 12.0399L6 10.367L2.76202 12.0399C2.66827 12.0895 2.57452 12.125 2.47356 12.125C2.26442 12.125 2.17067 11.9549 2.17067 11.7705C2.17067 11.7209 2.17789 11.6784 2.1851 11.6288L2.80528 8.08436L0.180289 5.5749C0.09375 5.48275 0 5.36224 0 5.23464C0 5.02198 0.223558 4.93691 0.403847 4.90855L4.02404 4.39107L5.64664 1.16564C5.71154 1.03095 5.83414 0.875 6 0.875C6.16586 0.875 6.28847 1.03095 6.35336 1.16564L7.97595 4.39107L11.5961 4.90855C11.7692 4.93691 12 5.02198 12 5.23464Z"
                  fill={allPath ? "white" : "#02150F"}
                />
              </svg>
              <h1 className="inter-semi fs-13 ms-1">4.9</h1>
            </div>
          </h1>
          <p className="l-black inter fs-13">Puebla, MX</p>
        </div>

        <h1 className="green-txt fs-15 inter ms-auto my-auto">Follow</h1>
      </div>
      <div className="d-flex mb-3">
        <img alt="" src={avatar3} className="message-dp" />
        <div className="ms-2 height-15">
          <h1
            style={{ color: allPath ? "white" : "" }}
            className="inter-semi fs-15 d-flex"
          >
            emilyC
            <div className="d-flex align-items-start ms-2 justify-content-center">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 5.23464C12 5.36224 11.9062 5.48275 11.8125 5.5749L9.1947 8.08436L9.81487 11.6288C9.82215 11.6784 9.82215 11.7209 9.82215 11.7705C9.82215 11.9549 9.7356 12.125 9.52642 12.125C9.42548 12.125 9.32452 12.0895 9.23798 12.0399L6 10.367L2.76202 12.0399C2.66827 12.0895 2.57452 12.125 2.47356 12.125C2.26442 12.125 2.17067 11.9549 2.17067 11.7705C2.17067 11.7209 2.17789 11.6784 2.1851 11.6288L2.80528 8.08436L0.180289 5.5749C0.09375 5.48275 0 5.36224 0 5.23464C0 5.02198 0.223558 4.93691 0.403847 4.90855L4.02404 4.39107L5.64664 1.16564C5.71154 1.03095 5.83414 0.875 6 0.875C6.16586 0.875 6.28847 1.03095 6.35336 1.16564L7.97595 4.39107L11.5961 4.90855C11.7692 4.93691 12 5.02198 12 5.23464Z"
                  fill={allPath ? "white" : "#02150F"}
                />
              </svg>
              <h1 className="inter-semi fs-13 ms-1">4.9</h1>
            </div>
          </h1>
          <p className="l-black inter fs-13">Philadelphia, USA</p>
        </div>

        <h1 className="green-txt fs-15 inter ms-auto my-auto">Follow</h1>
      </div>
      <div className="d-flex mb-3">
        <img alt="" src={avatar4} className="message-dp" />
        <div className="ms-2 height-15">
          <h1
            style={{ color: allPath ? "white" : "" }}
            className="inter-semi fs-15 d-flex"
          >
            lauraJ
            <div className="d-flex align-items-start ms-2 justify-content-center">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 5.23464C12 5.36224 11.9062 5.48275 11.8125 5.5749L9.1947 8.08436L9.81487 11.6288C9.82215 11.6784 9.82215 11.7209 9.82215 11.7705C9.82215 11.9549 9.7356 12.125 9.52642 12.125C9.42548 12.125 9.32452 12.0895 9.23798 12.0399L6 10.367L2.76202 12.0399C2.66827 12.0895 2.57452 12.125 2.47356 12.125C2.26442 12.125 2.17067 11.9549 2.17067 11.7705C2.17067 11.7209 2.17789 11.6784 2.1851 11.6288L2.80528 8.08436L0.180289 5.5749C0.09375 5.48275 0 5.36224 0 5.23464C0 5.02198 0.223558 4.93691 0.403847 4.90855L4.02404 4.39107L5.64664 1.16564C5.71154 1.03095 5.83414 0.875 6 0.875C6.16586 0.875 6.28847 1.03095 6.35336 1.16564L7.97595 4.39107L11.5961 4.90855C11.7692 4.93691 12 5.02198 12 5.23464Z"
                  fill={allPath ? "white" : "#02150F"}
                />
              </svg>
              <h1 className="inter-semi fs-13 ms-1">4.9</h1>
            </div>
          </h1>
          <p className="l-black inter fs-13">Los Angeles, USA</p>
        </div>

        <h1 className="green-txt fs-15 inter ms-auto my-auto">Follow</h1>
      </div>
      <div className="d-flex mb-3">
        <img alt="" src={avatar1} className="message-dp" />
        <div className="ms-2 height-15">
          <h1
            style={{ color: allPath ? "white" : "" }}
            className="inter-semi fs-15 d-flex"
          >
            rachelK
            <div className="d-flex align-items-start ms-2 justify-content-center">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 5.23464C12 5.36224 11.9062 5.48275 11.8125 5.5749L9.1947 8.08436L9.81487 11.6288C9.82215 11.6784 9.82215 11.7209 9.82215 11.7705C9.82215 11.9549 9.7356 12.125 9.52642 12.125C9.42548 12.125 9.32452 12.0895 9.23798 12.0399L6 10.367L2.76202 12.0399C2.66827 12.0895 2.57452 12.125 2.47356 12.125C2.26442 12.125 2.17067 11.9549 2.17067 11.7705C2.17067 11.7209 2.17789 11.6784 2.1851 11.6288L2.80528 8.08436L0.180289 5.5749C0.09375 5.48275 0 5.36224 0 5.23464C0 5.02198 0.223558 4.93691 0.403847 4.90855L4.02404 4.39107L5.64664 1.16564C5.71154 1.03095 5.83414 0.875 6 0.875C6.16586 0.875 6.28847 1.03095 6.35336 1.16564L7.97595 4.39107L11.5961 4.90855C11.7692 4.93691 12 5.02198 12 5.23464Z"
                  fill={allPath ? "white" : "#02150F"}
                />
              </svg>
              <h1 className="inter-semi fs-13 ms-1">4.9</h1>
            </div>
          </h1>
          <p className="l-black inter fs-13">Toronto, CA</p>
        </div>

        <h1 className="green-txt fs-15 inter ms-auto my-auto">Follow</h1>
      </div>
      <div className="d-flex mb-3">
        <img alt="" src={avatar4} className="message-dp" />
        <div className="ms-2 height-15">
          <h1
            style={{ color: allPath ? "white" : "" }}
            className="inter-semi fs-15 d-flex"
          >
            davidW
            <div className="d-flex align-items-start ms-2 justify-content-center">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 5.23464C12 5.36224 11.9062 5.48275 11.8125 5.5749L9.1947 8.08436L9.81487 11.6288C9.82215 11.6784 9.82215 11.7209 9.82215 11.7705C9.82215 11.9549 9.7356 12.125 9.52642 12.125C9.42548 12.125 9.32452 12.0895 9.23798 12.0399L6 10.367L2.76202 12.0399C2.66827 12.0895 2.57452 12.125 2.47356 12.125C2.26442 12.125 2.17067 11.9549 2.17067 11.7705C2.17067 11.7209 2.17789 11.6784 2.1851 11.6288L2.80528 8.08436L0.180289 5.5749C0.09375 5.48275 0 5.36224 0 5.23464C0 5.02198 0.223558 4.93691 0.403847 4.90855L4.02404 4.39107L5.64664 1.16564C5.71154 1.03095 5.83414 0.875 6 0.875C6.16586 0.875 6.28847 1.03095 6.35336 1.16564L7.97595 4.39107L11.5961 4.90855C11.7692 4.93691 12 5.02198 12 5.23464Z"
                  fill={allPath ? "white" : "#02150F"}
                />
              </svg>
              <h1 className="inter-semi fs-13 ms-1">4.9</h1>
            </div>
          </h1>
          <p className="l-black inter fs-13">Monterrey, MX</p>
        </div>

        <h1 className="green-txt fs-15 inter ms-auto my-auto">Follow</h1>
      </div>
      <div className="d-flex ms-1 align-items-start side_links mb-3">
        <div
          style={{ color: allPath ? "#908C95" : "" }}
          className="align_center light_text_sm pe-1"
        >
          About<span>.</span>
        </div>
        <div
          style={{ color: allPath ? "#908C95" : "" }}
          className="align_center light_text_sm pe-1"
        >
          Help<span>.</span>
        </div>
        <div
          style={{ color: allPath ? "#908C95" : "" }}
          className="align_center light_text_sm pe-1"
        >
          Privacy<span>.</span>
        </div>
        <div
          style={{ color: allPath ? "#908C95" : "" }}
          className="align_center light_text_sm pe-1"
        >
          Terms<span>.</span>
        </div>
      </div>
      <div
        style={{ color: allPath ? "white" : "" }}
        className="inter fs-11 mt-1"
      >
        © 2023 SESHBUDDIES Social NETWORK CORPORATION.
      </div>
      {/* ___modal___ */}
    </div>
  );
};

export default SideMessage;
