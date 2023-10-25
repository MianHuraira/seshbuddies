import React, { useState } from "react";
import girl from "../assets/logo/orange-girl.svg";
import Stars from "../assets/logo/icons/star.svg";
import plus_full from "../assets/logo/icons/Status-plus.svg";
import avatar1 from "../assets/logo/Avatar.svg";
import avatar2 from "../assets/logo/Avatar2.svg";
import avatar3 from "../assets/logo/Avatar3.svg";
import avatar4 from "../assets/logo/Avatar4.svg";
import { Button, Container, Modal } from "react-bootstrap";
import RedsUp from "../assets/logo/icons/redsUp.svg";
import Holding from "../assets/logo/icons/holding.svg";
import Dry from "../assets/logo/icons/dry.svg";
const SideMessage = () => {
       // ___modal___
       const [Status, ChangeStatus] = useState(false);
       const StatusBtnOpen = () => ChangeStatus(true);
       const StatusBtnClose = () => ChangeStatus(false);
       // ___modal___
  return (
    <div>
      <Container fluid="xxl" className="pe-4">
        <p className="semibold explore l-black text-start inter fs-15">
          It's you
        </p>
        <div className="d-flex mt-3">
          <img alt="" src={girl} className="message-dp" />
          <div className="ms-2 height-15">
            <h1 className="inter-semi fs-15">steve.brown</h1>
            <p className="l-black inter fs-13">Steve Brown</p>
          </div>
          <div className="d-flex align-items-start ms-2 justify-content-center">
            <img alt="" src={Stars} className="rating-star" />
            <h1 className="inter-semi fs-14 ms-1">4.9</h1>
          </div>
          <h1 className="green-txt fs-15 inter-semi ms-auto my-auto">Manage</h1>
        </div>
        <div className="d-flex mt-2">
          <img alt="" src={plus_full} className="message-dp" />
          <div className="ms-2">
            <h1 className="inter-semi fs-15">Re'd Up</h1>
            <p className="l-black inter fs-13">You're full of greens...</p>
          </div>
          <button onClick={StatusBtnOpen} className="fs-15 bg-transparent border-0 inter-semi ms-auto my-auto">Change</button>
        </div>
        <div className="d-flex mt-3 justify-content-between align-items-center">
          <p className="inter fs-15 l-black">Suggested for you</p>
          <p className="green-txt fs-13 inter-semi">See All</p>
        </div>
        <div className="d-flex mt-3">
          <img alt="" src={avatar1} className="message-dp" />
          <div className="ms-2 height-15">
            <h1 className="inter-semi fs-15 d-flex">
              bobS{" "}
              <div className="d-flex align-items-start ms-2 justify-content-center">
                <img alt="" src={Stars} className="rating-star" />
                <h1 className="inter-semi fs-13 ms-1">4.9</h1>
              </div>
            </h1>
            <p className="l-black inter fs-13">San Diego, USA</p>
          </div>

          <h1 className="green-txt fs-15 inter ms-auto my-auto">Follow</h1>
        </div>
        <div className="d-flex mt-3">
          <img alt="" src={avatar2} className="message-dp" />
          <div className="ms-2 height-15">
            <h1 className="inter-semi fs-15 d-flex">
              sarahG{" "}
              <div className="d-flex align-items-start ms-2 justify-content-center">
                <img alt="" src={Stars} className="rating-star" />
                <h1 className="inter-semi fs-13 ms-1">4.9</h1>
              </div>
            </h1>
            <p className="l-black inter fs-13">Puebla, MX</p>
          </div>

          <h1 className="green-txt fs-15 inter ms-auto my-auto">Follow</h1>
        </div>
        <div className="d-flex mt-3">
          <img alt="" src={avatar3} className="message-dp" />
          <div className="ms-2 height-15">
            <h1 className="inter-semi fs-15 d-flex">
              emilyC{" "}
              <div className="d-flex align-items-start ms-2 justify-content-center">
                <img alt="" src={Stars} className="rating-star" />
                <h1 className="inter-semi fs-13 ms-1">4.9</h1>
              </div>
            </h1>
            <p className="l-black inter fs-13">Philadelphia, USA</p>
          </div>

          <h1 className="green-txt fs-15 inter ms-auto my-auto">Follow</h1>
        </div>
        <div className="d-flex mt-3">
          <img alt="" src={avatar4} className="message-dp" />
          <div className="ms-2 height-15">
            <h1 className="inter-semi fs-15 d-flex">
              lauraJ{" "}
              <div className="d-flex align-items-start ms-2 justify-content-center">
                <img alt="" src={Stars} className="rating-star" />
                <h1 className="inter-semi fs-13 ms-1">4.9</h1>
              </div>
            </h1>
            <p className="l-black inter fs-13">Los Angeles, USA</p>
          </div>

          <h1 className="green-txt fs-15 inter ms-auto my-auto">Follow</h1>
        </div>
        <div className="d-flex mt-3">
          <img alt="" src={avatar1} className="message-dp" />
          <div className="ms-2 height-15">
            <h1 className="inter-semi fs-15 d-flex">
              rachelK
              <div className="d-flex align-items-start ms-2 justify-content-center">
                <img alt="" src={Stars} className="rating-star" />
                <h1 className="inter-semi fs-13 ms-1">4.9</h1>
              </div>
            </h1>
            <p className="l-black inter fs-13">Toronto, CA</p>
          </div>

          <h1 className="green-txt fs-15 inter ms-auto my-auto">Follow</h1>
        </div>
        <div className="d-flex mt-3">
          <img alt="" src={avatar4} className="message-dp" />
          <div className="ms-2 height-15">
            <h1 className="inter-semi fs-15 d-flex">
              davidW{" "}
              <div className="d-flex align-items-start ms-2 justify-content-center">
                <img alt="" src={Stars} className="rating-star" />
                <h1 className="inter-semi fs-13 ms-1">4.9</h1>
              </div>
            </h1>
            <p className="l-black inter fs-13">Monterrey, MX</p>
          </div>

          <h1 className="green-txt fs-15 inter ms-auto my-auto">Follow</h1>
        </div>
        <div className="d-flex ms-1 align-items-start side_links mt-2">
          <div className="align_center light_text_sm pe-1">
            About<span>.</span>
          </div>
          <div className="align_center light_text_sm pe-1">
            Help<span>.</span>
          </div>
          <div className="align_center light_text_sm pe-1">
            Privacy<span>.</span>
          </div>
          <div className="align_center light_text_sm pe-1">
            Terms<span>.</span>
          </div>
        </div>
        <div className="inter fs-11 mt-1">
          © 2023 SESHBUDDIES Social NETWORK CORPORATION.
        </div>
      </Container>
        {/* ___modal___ */}
        <Modal show={Status}
        size="md"
        onHide={StatusBtnClose}
        dialogClassName="rating_modal" centered>
        <Modal.Header closeButton className="px-4 hide_fcontrol py-2 likes_modal_head">
          <Modal.Title className="mx-auto black_text_lg inter-bold fs-16 mt-1 ">
            Know Your Availability!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='pb-4' style={{ background: 'rgba(238, 245, 242, 1)' }}>
          <button className="changeStateBtn state_border mt-1 mb-3 d-flex align-items-center justify-content-center text-left">
            <img alt=""
              src={RedsUp}
              style={{ width: "57px" }}
              className="me-2"
            />
            <div className=''>
              <h1 className='fs-16 inter-semi'>Re'd Up</h1>
              <p className=' height-20 mt-1 fs-15 inter-light'>You’re full of greens and ready for Seshsions! Invite or get invited.</p>
            </div>
          </button>
          {/* ___________ */}
          <button className="changeStateBtn my-3 d-flex align-items-center justify-content-center text-left">
            <img alt=""
              src={Holding}
              style={{ width: "57px" }}
              className="me-2"
            />
            <div className=''>
              <h1 className='fs-16 inter-semi'>Holding</h1>
              <p className=' height-20 mt-1 fs-15 inter-light'>You’re running low. Be picky with your Seshsions or look for a match!</p>
            </div>
          </button>
          {/* ___________ */}
          <button className="changeStateBtn mt-3 mb-4 d-flex align-items-center justify-content-center text-left">
            <img alt=""
              src={Dry}
              style={{ width: "57px" }}
              className="me-2"
            />
            <div className=''>
              <h1 className='fs-16 inter-semi'>Dry</h1>
              <p className=' height-20 mt-1 fs-15 inter-light'>You’re out! Look for generous buddies or wait till you re-up.</p>
            </div>
          </button>
          <Button className='btn-primary' style={{ padding: '12px 0' }}>Confirm</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SideMessage;
