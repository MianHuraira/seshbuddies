import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideMessage from "../components/side_message";
import ProfileSettings from "../components/ProfileSettings";
import { Form } from "react-bootstrap";
const AcountNotification = () => {
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
                  Notifications
                </p>
              </div>
              <section className="mt-3">
                <div className="mt-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="titleN00">In app notifications</h3>
                    <Form.Check type="switch" id="custom-switch" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="titleN00">Push notifications</h3>
                    <Form.Check type="switch" id="custom-switch" />
                  </div>
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
                <h5 className="mt-4 sbHead00pro">Interactions</h5>
                <div className="mt-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="titleN00">Likes</h3>
                    <Form.Check type="switch" id="custom-switch" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="titleN00">Comments</h3>
                    <Form.Check type="switch" id="custom-switch" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="titleN00">New buddies</h3>
                    <Form.Check type="switch" id="custom-switch" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="titleN00">Mentions and tags</h3>
                    <Form.Check type="switch" id="custom-switch" />
                  </div>
                </div>
                <h5 className="mt-4 sbHead00pro">Messages</h5>

                <div className="mt-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="titleN00">Direct messages</h3>
                    <Form.Check type="switch" id="custom-switch" />
                  </div>
                </div>
              </section>
            </div>
          </Col>
          <Col lg="3" className=" overflow-hidden">
            <SideMessage />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AcountNotification;
