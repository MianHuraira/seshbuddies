import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import SideMessage from "../components/side_message";
import ProfileSettings from "../components/ProfileSettings";

const AcountSuport = () => {
  return (
    <>
    <Container fluid="xxl">
        <Row className="w-100 h-100 p-0 pt-4">
          <Col lg="3" className=" overflow-hidden">
            <ProfileSettings />
          </Col>
          <Col lg="6" className="main_height no_scrollbar ps-5 overflow-y-auto">
            djskdj
          </Col>
          <Col lg="3" className=" overflow-hidden">
            <SideMessage />
          </Col>
        </Row>
      </Container>
    
    </>
  )
}

export default AcountSuport