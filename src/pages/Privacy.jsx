import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileSettings from "../components/ProfileSettings";

const Privacy = () => {
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
                  Privacy
                </p>
              </div>
              <div>
                <div className="d-flex align-items-center justify-content-between cursorP mb-2 mt-3">
                  <h3 className="titleN00">User Information</h3>
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
                <div className="d-flex align-items-center justify-content-between cursorP mb-2">
                  <h3 className="titleN00">Password</h3>
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
                <div className="d-flex align-items-center justify-content-between cursorP mb-2">
                  <h3 className="titleN00">Deactivate or delete account</h3>
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
