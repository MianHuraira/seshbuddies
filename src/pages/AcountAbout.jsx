import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileSettings from "../components/ProfileSettings";
import GuidlineIcon from "../assets/icons/guidlineIcon.svg";
import TermIcon from "../assets/icons/termIcon.svg";
import PolicyIcon from "../assets/icons/policyIcon.svg";
import TeensIcon from "../assets/icons/teensIcon.svg";
import CopyWrite from "../assets/icons/copyWrite.svg";
const AcountAbout = () => {
  return (
    <>
      <Container fluid="xxl">
        <Row className="w-100 h-100 p-0 pt-4">
          <Col lg="3" className=" overflow-hidden">
            <ProfileSettings />
          </Col>
          <Col lg="6">
            <div className="bg-white h-100 p-4 radius_14">
              <div className="account_head pb-2">
                <p className="text-center black_text_lg inter-bold fs-16">
                  About
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between cursorP mb-3 mt-3">
                <div className="d-flex align-items-center">
                  <img src={GuidlineIcon} alt="" />
                  <h3 className="titleN00 ms-2">Community Guidelines</h3>
                </div>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.25L6.8523 7.1023C6.93281 7.18281 6.92996 7.31421 6.84602 7.39115L1 12.75"
                    stroke="#6C7774"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <div className="d-flex align-items-center justify-content-between cursorP mb-3">
                <div className="d-flex align-items-center">
                  <img src={TermIcon} alt="" />
                  <h3 className="titleN00 ms-2">Terms of Service</h3>
                </div>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.25L6.8523 7.1023C6.93281 7.18281 6.92996 7.31421 6.84602 7.39115L1 12.75"
                    stroke="#6C7774"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <div className="d-flex align-items-center justify-content-between cursorP mb-3">
                <div className="d-flex align-items-center">
                  <img src={PolicyIcon} alt="" />
                  <h3 className="titleN00 ms-2">Privacy Policy</h3>
                </div>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.25L6.8523 7.1023C6.93281 7.18281 6.92996 7.31421 6.84602 7.39115L1 12.75"
                    stroke="#6C7774"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <div className="d-flex align-items-center justify-content-between cursorP mb-3">
                <div className="d-flex align-items-center">
                  <img src={TeensIcon} alt="" />
                  <h3 className="titleN00 ms-2">
                    Privacy Highlights for Teens
                  </h3>
                </div>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.25L6.8523 7.1023C6.93281 7.18281 6.92996 7.31421 6.84602 7.39115L1 12.75"
                    stroke="#6C7774"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <div className="d-flex align-items-center justify-content-between cursorP mb-3">
                <div className="d-flex align-items-center">
                  <img src={CopyWrite} alt="" />
                  <h3 className="titleN00 ms-2">Copyright Policy</h3>
                </div>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.25L6.8523 7.1023C6.93281 7.18281 6.92996 7.31421 6.84602 7.39115L1 12.75"
                    stroke="#6C7774"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AcountAbout;
