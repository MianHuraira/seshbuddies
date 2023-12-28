import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import SideMessage from "../components/side_message";
import LeftSideBar from "../components/LeftSideBar";
import stars from "../assets/logo/icons/star.svg";
import girl from "../assets/logo/orange-girl.svg";
import angle_down from "../assets/logo/icons/angle_down_green.svg";
import FiveStars from "../assets/logo/icons/five_stars.svg";
import PendingTop from "../components/PendingTop";
import Success_icon from "../assets/logo/icons/tick_success.svg";
import PendingUsers from "../components/Pending_users";

const Pending = () => {
  // __hide first show second modal  ___
  const showSuccess = () => {
    rating(false); // Close the first modal
    ShowNotification(true); // Open the second modal
  };

  const [Success, ShowNotification] = useState(false);
//   const Success_open = () => ShowNotification(true);
  const Success_close = () => ShowNotification(false);
  // ____rate modal___
  const [rate, rating] = useState(false);
  const Rating_close = () => rating(false);
  const Rating_open = () => rating(true);
  // ____rate modal___
  return (
    <div>
      <Container fluid="xxl">
        <Row className="w-100 h-100 p-0 pt-4">
          <Col lg="3" className=" overflow-hidden">
            <LeftSideBar />
          </Col>
          <Col
            lg="6"
            className="main_height no_scrollbar ps-5 overflow-y-auto"
          >
            <div>
              <PendingTop />
              <div className="px-3">
                <h1 className="black_text_lg inter-medium mt-2">Description</h1>
                <p className="light_text inter fs-14 mt-2">
                  BlazeMaster invites you to a casual SHMOKE Seshsion with
                  friends. This is a chill hangout to relax and enjoy some
                  Purple Haze. No need to bring your stash; just come and have a
                  good time.
                </p>
                <div className="d-flex justify-content-between">
                  <h1 className="black_text_lg inter-medium mt-2">Location</h1>
                  <h1 className="black_text_lg green-txt inter-medium mt-2">
                    Get directions
                  </h1>
                </div>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435616.1667436883!2d73.87167104039509!3d31.46227254806441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fde40e954753%3A0xb8ea639d79127a78!2sLahore%20City%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697630815013!5m2!1sen!2s"
                    allowfullscreen={""}
                    style={{ width: "100%", height: "146px" }}
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Lahore City Map"
                    className="mt-2"
                  ></iframe>
                </div>
                <PendingUsers />
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <button className="border-0 inter fs-15 green-txt">
                    View 3 More <img src={angle_down} alt="" />
                  </button>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3 pb-4">
                  <button className="yourBuddyBtn2">Skip</button>
                  <button
                    onClick={Rating_open}
                    className="yourBuddyBtn2 btnGreen"
                  >
                    Rate Experience
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="3" className=" overflow-hidden">
            {" "}
            <SideMessage />{" "}
          </Col>
        </Row>
      </Container>

      {/* ___rate modal___ */}
      <Modal show={rate} onHide={Rating_close} dialogClassName="rating_modal">
        <Modal.Header closeButton className="px-3 py-2 likes_modal_head">
          <Modal.Title className="m-auto black_text_lg inter-bold fs-16 mt-1">
            Rate Experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="rating_modal_body pt-0 overflow-y-auto"
          style={{ backgroundColor: "#eef5f2" }}
        >
          <PendingTop />
          <p className="light_text inter fs-13 text-center my-2">
            Completed on September 30, 2023, 6:00 PM
          </p>
          {/* Seshsion rating   */}
          <div className="bg-white px-3 pt-2 pb-3 radius_14 mt-3">
            <h1 className="inter-medium black_text_md mt-2">
              Rate the Seshsion
            </h1>
            <div className="d-flex justify-content-evenly mt-2">
              <div className="d-flex flex-column rating_seshsion align-items-center justify-content-center">
                <p className="ms-1 inter fs-13 mb-1">Quality</p>
                <img src={FiveStars} alt="" />
              </div>
              <div className="d-flex flex-column rating_seshsion align-items-center justify-content-center">
                <p className="ms-1 inter fs-13 mb-1">Quality</p>
                <img src={FiveStars} alt="" />
              </div>
              <div className="d-flex flex-column rating_seshsion align-items-center justify-content-center">
                <p className="ms-1 inter fs-13 mb-1">Rollies</p>
                <img src={FiveStars} alt="" />
              </div>
            </div>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              className="mt-1 text_area radius_12"
              style={{ height: "90px" }}
            />
            <Button className="btn-primary mt-2">Submit</Button>
          </div>
          {/* Seshsion rating   */}
          {/* Seshsion rating   */}
          <div className="bg-white px-3 pt-2 pb-3 radius_14 mt-3">
            <h1 className="inter-medium black_text_md mt-2">Rate the Host</h1>
            <div className="d-flex justify-content-evenly mt-2">
              <div className="d-flex flex-column rating_seshsion align-items-center justify-content-center">
                <p className="ms-1 inter fs-13 mb-1">Quality</p>
                <img src={FiveStars} alt="" />
              </div>
              <div className="d-flex flex-column rating_seshsion align-items-center justify-content-center">
                <p className="ms-1 inter fs-13 mb-1">Quality</p>
                <img src={FiveStars} alt="" />
              </div>
              <div className="d-flex flex-column rating_seshsion align-items-center justify-content-center">
                <p className="ms-1 inter fs-13 mb-1">Rollies</p>
                <img src={FiveStars} alt="" />
              </div>
            </div>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              className="mt-1 text_area radius_12"
              style={{ height: "90px" }}
            />
            <Button className="btn-primary mt-2">Submit</Button>
          </div>
          {/* Seshsion rating   */}

          <PendingTop />
          <p className="light_text inter fs-13 text-center my-2">
            Completed on September 30, 2023, 6:00 PM
          </p>
          {/* ___session_rating___ */}
          <div className="bg-white px-3 pt-2 pb-3 radius_14 mt-3">
            <h1 className="inter-medium black_text_md mt-2">
              Rate the Seshsion
            </h1>
            <div className="d-flex justify-content-evenly mt-2">
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.9</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.5</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Rollies</p>
                <p className="ms-1 green-txt inter fs-11">4.0</p>
              </div>
            </div>
            <p className="black_text_lg fs-14 height-20 mt-2">
              Awesome Seshsion. The quality was great, and the amount was just
              right!
            </p>
          </div>
          {/* ___session_rating___ */}
          {/* ___Host_rating___ */}
          <div className="bg-white px-3 pt-2 pb-3 radius_14 mt-3">
            <h1 className="inter-medium black_text_md mt-2">
              Rate the Seshsion
            </h1>
            <div className="d-flex justify-content-evenly mt-2">
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.9</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.5</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Rollies</p>
                <p className="ms-1 green-txt inter fs-11">4.0</p>
              </div>
            </div>
            <p className="black_text_lg fs-14 height-20 mt-2">
              Awesome Seshsion. The quality was great, and the amount was just
              right!
            </p>
          </div>
          {/* ___Host_rating___ */}
          {/* ___Host_rating___ */}
          <div className="bg-white px-3 pt-2 pb-3 radius_14 mt-3">
            <h1 className="inter-medium black_text_md mt-2">Rate the Host</h1>
            <div className="d-flex mt-2 mb-3">
              <div>
                <img alt="" src={girl} className="message-dp" />
              </div>
              <div className="status ms-2">
                <p className="inter-semi fs-14">steve.brown </p>
                <h1 className="fs-13 align_center light_text inter-medium">
                  New York, USA
                </h1>
              </div>
            </div>
            <div className="d-flex justify-content-evenly mt-2">
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.9</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.5</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Rollies</p>
                <p className="ms-1 green-txt inter fs-11">4.0</p>
              </div>
            </div>
            <p className="black_text_lg fs-14 height-20 mt-2">
              BlazeMaster did a great job initiating this. Could have used a
              better rolling technique.
            </p>
          </div>
          {/* ___Host_rating___ */}
          {/* other buddies */}
          <p className="black_text_md fs-14 mt-2">Rate Other Buddies</p>
          {/* buddies */}
          <div className="bg-white px-3 pt-2 pb-3 radius_14 mt-3">
            <div className="d-flex mt-2 mb-3">
              <div>
                <img alt="" src={girl} className="message-dp" />
              </div>
              <div className="status ms-2">
                <p className="inter-semi fs-14">steve.brown </p>
                <h1 className="fs-13 align_center light_text inter-medium">
                  New York, USA
                </h1>
              </div>
            </div>
            <div className="d-flex justify-content-evenly mt-2">
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.9</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.5</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Rollies</p>
                <p className="ms-1 green-txt inter fs-11">4.0</p>
              </div>
            </div>
            <p className="black_text_lg fs-14 height-20 mt-2">
              BlazeMaster did a great job initiating this. Could have used a
              better rolling technique.
            </p>
          </div>
          {/* buddies */}
          {/* buddies */}
          <div className="bg-white px-3 pt-2 pb-3 radius_14 mt-3">
            <div className="d-flex mt-2 mb-3">
              <div>
                <img alt="" src={girl} className="message-dp" />
              </div>
              <div className="status ms-2">
                <p className="inter-semi fs-14">steve.brown </p>
                <h1 className="fs-13 align_center light_text inter-medium">
                  New York, USA
                </h1>
              </div>
            </div>
            <div className="d-flex justify-content-evenly mt-2">
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.9</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.5</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Rollies</p>
                <p className="ms-1 green-txt inter fs-11">4.0</p>
              </div>
            </div>
            <p className="black_text_lg fs-14 height-20 mt-2">
              BlazeMaster did a great job initiating this. Could have used a
              better rolling technique.
            </p>
          </div>
          {/* buddies */}
          {/* buddies */}
          <div className="bg-white px-3 pt-2 pb-3 radius_14 mt-3">
            <div className="d-flex mt-2 mb-3">
              <div>
                <img alt="" src={girl} className="message-dp" />
              </div>
              <div className="status ms-2">
                <p className="inter-semi fs-14">steve.brown </p>
                <h1 className="fs-13 align_center light_text inter-medium">
                  New York, USA
                </h1>
              </div>
            </div>
            <div className="d-flex justify-content-evenly mt-2">
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.9</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.5</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Rollies</p>
                <p className="ms-1 green-txt inter fs-11">4.0</p>
              </div>
            </div>
            <p className="black_text_lg fs-14 height-20 mt-2">
              BlazeMaster did a great job initiating this. Could have used a
              better rolling technique.
            </p>
          </div>
          {/* buddies */}
          {/* buddies */}
          <div className="bg-white px-3 pt-2 pb-3 radius_14 mt-3">
            <div className="d-flex mt-2 mb-3">
              <div>
                <img alt="" src={girl} className="message-dp" />
              </div>
              <div className="status ms-2">
                <p className="inter-semi fs-14">steve.brown </p>
                <h1 className="fs-13 align_center light_text inter-medium">
                  New York, USA
                </h1>
              </div>
            </div>
            <div className="d-flex justify-content-evenly mt-2">
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.9</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.5</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Rollies</p>
                <p className="ms-1 green-txt inter fs-11">4.0</p>
              </div>
            </div>
            <p className="black_text_lg fs-14 height-20 mt-2">
              BlazeMaster did a great job initiating this. Could have used a
              better rolling technique.
            </p>
          </div>
          {/* buddies */}
          {/* buddies */}
          <div className="bg-white px-3 pt-2 pb-3 radius_14 mt-3">
            <div className="d-flex mt-2 mb-3">
              <div>
                <img alt="" src={girl} className="message-dp" />
              </div>
              <div className="status ms-2">
                <p className="inter-semi fs-14">steve.brown </p>
                <h1 className="fs-13 align_center light_text inter-medium">
                  New York, USA
                </h1>
              </div>
            </div>
            <div className="d-flex justify-content-evenly mt-2">
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.9</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Quality</p>
                <p className="ms-1 green-txt inter fs-11">4.5</p>
              </div>
              <div className="d-flex desc align-items-center justify-content-center">
                <img alt="" src={stars} className="inter rating-star" />
                <p className="ms-1 inter fs-11">Rollies</p>
                <p className="ms-1 green-txt inter fs-11">4.0</p>
              </div>
            </div>
            <p className="black_text_lg fs-14 height-20 mt-2">
              BlazeMaster did a great job initiating this. Could have used a
              better rolling technique.
            </p>
          </div>
          {/* buddies */}
          {/* ___Other buddies___ */}
          <Button onClick={showSuccess} className="btn-primary mt-2">
            Done
          </Button>
        </Modal.Body>
      </Modal>

      {/* ___Success_Modal____ */}
      <Modal
        show={Success}
        size="sm"
        onHide={Success_close}
        dialogClassName="rating_modal"
        centered
      >
        <Modal.Header
          closeButton
          className="px-2 hide_fcontrol py-2 likes_modal_head"
        >
          <Modal.Title className="m-auto black_text_lg inter-bold fs-14 mt-1 ps-4 ">
            All Done
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-4" style={{ backgroundColor: "#eef5f2" }}>
          <div className="w-100 me-2 d-flex align-items-center mt-5 justify-content-center">
            <img alt="" src={Success_icon} className=" modal_Success_img" />
          </div>
          <h1 className="black_text_lg text-center inter-bold mt-3 mb-1 fs-15 w-75 m-auto">
            Review Submitted
          </h1>
          <p className="text-center inter fs-14 ">
            Review Submitted for SHMOKE Seshsion!
          </p>
          <Button className="btn-primary mt-5">Done</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Pending;
