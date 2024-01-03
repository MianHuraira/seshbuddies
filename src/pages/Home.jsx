/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../assets/css/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftSideBar from "../components/LeftSideBar";
import SideMessage from "../components/side_message";
import TopStory from "../components/top_story";
import WatchReels from "../components/watch_reels";
import FollowBuddies from "../components/follow_buddies";
import { Container, Modal } from "react-bootstrap";
import CommentModal from "../components/comment_modal";
import PostAll from "../components/PostAll";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="main_head00">
      <Container className="top_padd px-4" fluid="xxl">
        <Row className="h-100 p-0">
          <Col lg="3" md="3" className="sideHeight00 d-md-block d-none">
            <LeftSideBar />
          </Col>
          <Col
            lg="6"
            md="9"
            className="main_height no_scrollbar gx-5 overflow-y-auto"
          >
            <div className="py-2 overflow-auto">
              <TopStory />
            </div>
            <div>
              <PostAll handleShow={handleShow} show={show} />
            </div>
            {/* <h1 className="fs-16 inter-semi mb-3 ms-3">Watch Reels</h1> */}
            {/* <div className=" overflow-auto">
              <WatchReels />
            </div>
            <div className=" overflow-auto">
              <FollowBuddies />
            </div> */}
          </Col>
          <Col lg="3" className="sideHeight00 d-lg-block d-none">
            <SideMessage />
          </Col>
        </Row>
      </Container>
  
      </div>
    
    </>
  );
};

export default Home;
