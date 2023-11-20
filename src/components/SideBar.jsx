import React from "react";
import "../assets/css/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Createpost from "../components/createpost";
import SideMessage from "../components/side_message";
import { Container } from "react-bootstrap";

const SideBar = ({childern}) => {
  return (
    <div>
      <Container className="top_padd px-4" fluid="xxl">
        <Row className="w-100 h-100 p-0">
          <Col lg="3" md="3" className=" overflow-hidden">
            <Createpost />
          </Col>
          <Col
            lg="6"
            md="9"
            className="main_height no_scrollbar gx-5 overflow-y-auto"
          >{childern}</Col>
          <Col lg="3" className="overflow-hidden d-lg-block d-none">
            <SideMessage />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SideBar;
