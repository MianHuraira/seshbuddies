import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileSettings from "../components/ProfileSettings";
import { Form } from "react-bootstrap";
import ComentIcon from "../assets/icons/commentIcon.svg";
import Aticon from "../assets/icons/at.svg";
import DirectIcon from "../assets/icons/directms.svg";
import MultiUser from "../assets/icons/multiIconuser.svg";
import PlayIcon from "../assets/icons/videoIconPlay.svg";

const Privacy = () => {
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
                  Privacy
                </p>
              </div>
              <section className="mt-3">
                <h5 className="pTitle00">Discoverability</h5>
                <div className="mt-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="titleN00">Private account</h3>
                    <Form.Check type="switch" id="custom-switch" />
                  </div>
                  <p className="profileCont00 mt-1">
                    With a private account, only users you approve can follow
                    you and watch your content. Your existing buddies won’t be
                    affected.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="titleN00">Activity status</h3>
                    <Form.Check type="switch" id="custom-switch" />
                  </div>
                  <p className="profileCont00 mt-1">
                    When this is turned on, you and the buddies you follow back
                    will see each other’s activity status. You will see each
                    other’s activity status only when both of you turn this on
                  </p>
                </div>
                <div className="mt-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="titleN00">Suggest your account to others</h3>
                    <Form.Check type="switch" id="custom-switch" />
                  </div>
                  <p className="profileCont00 mt-1">
                    Suggest your account to people you share mutual connections
                  </p>
                </div>
              </section>
              <h5 className="mt-5 sbHead00pro">Interactions</h5>
              <div className="d-flex align-items-center justify-content-between cursorP mb-4 mt-3">
                <div className="d-flex align-items-center">
                  <img src={ComentIcon} alt="" />
                  <h3 className="titleN00 ms-2">Comments</h3>
                </div>
                <div className="d-flex align-items-center">
                  <h5 className="me-2 sbEvr00">Everyone</h5>
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
              <div className="d-flex align-items-center justify-content-between cursorP mb-4">
                <div className="d-flex align-item-center">
                  <img src={Aticon} alt="" />
                  <h3 className="titleN00 ms-2">Mentions</h3>
                </div>
                <div className="d-flex align-items-center">
                  <h5 className="me-2 sbEvr00">Everyone</h5>
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

              <div className="d-flex align-items-center justify-content-between cursorP mb-4">
                <div className="d-flex align-items-center">
                  <img src={DirectIcon} alt="" />
                  <h3 className="titleN00 ms-2">Direct messages</h3>
                </div>
                <div className="d-flex align-items-center">
                  <h5 className="me-2 sbEvr00">Everyone</h5>
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
              <div className="d-flex align-items-center justify-content-between cursorP mb-4">
                <div className="d-flex align-items-center">
                  <img src={MultiUser} alt="" />
                  <h3 className="titleN00 ms-2">Following list</h3>
                </div>
                <div className="d-flex align-items-center">
                  <h5 className="me-2 sbEvr00">Everyone</h5>
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
              <div className="d-flex align-items-center justify-content-between cursorP mb-4">
                <div className="d-flex align-items-center">
                  <img src={PlayIcon} alt="" />
                  <h3 className="titleN00 ms-2">Post views</h3>
                </div>
                <div className="d-flex align-items-center">
                  <h5 className="me-2 sbEvr00">Everyone</h5>
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
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Privacy;
