import React from "react";
import "../assets/css/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Createpost from "../components/createpost";
import SideMessage from "../components/side_message";
import { Container } from "react-bootstrap";

const Reels = () => {
  return (
    <>
    <Container className="top_padd" fluid="xxl">
        <Row className="w-100 h-100 p-0">
          <Col lg="3" className=" overflow-hidden">
            <Createpost />
          </Col>
          <Col
            lg="6"
            className="main_height no_scrollbar ps-5 overflow-y-auto"
          ></Col>
          <Col lg="3" className=" overflow-hidden">
            <SideMessage />
          </Col>
        </Row>
      </Container>
    
    </>
  )
}

export default Reels