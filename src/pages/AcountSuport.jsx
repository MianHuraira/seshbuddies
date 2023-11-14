import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileSettings from "../components/ProfileSettings";
import helpCenter from "../assets/icons/subtractIcon.svg";
import SafetyIcon from "../assets/icons/safetyIcon.svg";

const AcountSuport = () => {
  return (
    <>
      <Container fluid="xxl">
        <Row className="w-100 h-100 p-0 pt-4">
          <Col lg="3" className=" overflow-hidden">
            <ProfileSettings />
          </Col>
          <Col lg="6" className="ps-5">
            <div className="bg-white h-100 p-4 radius_24">
              <div className="account_head pb-2">
                <p className="text-center black_text_lg inter-bold fs-16">
                  Support
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between cursorP mb-3 mt-3">
                <div className="d-flex align-items-center">
                  <img src={helpCenter} alt="" />
                  <h3 className="titleN00 ms-2">Help Center</h3>
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
                  <img src={SafetyIcon} alt="" />
                  <h3 className="titleN00 ms-2">Safety Center</h3>
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

export default AcountSuport;
