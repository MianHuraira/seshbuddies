import React, { useState } from "react";
import "../assets/css/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Createpost from "../components/createpost";
import SideMessage from "../components/side_message";
// import Story from "../components/story";
import TopStory from "../components/top_story";
import WatchReels from "../components/watch_reels";
import FollowBuddies from "../components/follow_buddies";
import { Container, Modal } from "react-bootstrap";
import CommentModal from "../components/comment_modal";
import Story from "../components/story";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Container className="top_padd" fluid="xxl">
        <Row className="w-100 h-100 p-0">
          <Col lg="3" className=" overflow-hidden">
            <Createpost />
          </Col>
          <Col lg="6" className="main_height no_scrollbar ps-5 overflow-y-auto">
            <div className="py-2 overflow-auto">
              <TopStory />
            </div>
            <div>
              <Story handleShow={handleShow} show={show} />
            </div>
            <h1 className="fs-16 inter-semi mb-3 ms-3">Watch Reels</h1>
            <div className=" overflow-auto">
              <WatchReels />
            </div>
            <div className=" overflow-auto">
              <FollowBuddies />
            </div>
          </Col>
          <Col lg="3" className=" overflow-hidden">
            <SideMessage />
          </Col>
        </Row>
      </Container>
      {/* ---modal--- */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="py-0">
          <Row>
            <Col
              sm={6}
              className="p-0"
              style={{ borderRight: "1px solid lightgray" }}
            >
              <Story />
            </Col>
            <Col sm={6} className="p-0">
              <CommentModal handleClose={handleClose} />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      {/* ___modal end--- */}
    </div>
  );
};

export default Home;
