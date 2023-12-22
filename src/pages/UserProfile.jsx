import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideMessage from "../components/side_message";
import ProfileSettings from "../components/ProfileSettings";
import MyProfile from "../components/User/MyProfile";

const UserProfile = () => {
  return (
    <div>
      <Container className="top_padd px-4" fluid="xxl">
        <Row className="h-100 p-0">
          <Col lg="3" md="3" className="sideHeight00 d-md-block d-none">
            <ProfileSettings />
          </Col>
          <Col
            lg="6"
            md="9"
            className="main_height no_scrollbar gx-5 overflow-y-auto"
          >
            <MyProfile />
          </Col>
          <Col lg="3" className="sideHeight00 d-lg-block d-none">
            <SideMessage />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
