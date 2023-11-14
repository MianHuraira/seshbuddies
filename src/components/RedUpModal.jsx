import React from "react";

import { Button, Modal } from "react-bootstrap";
import RedsUp from "../assets/logo/icons/redsUp.svg";
import Holding from "../assets/logo/icons/holding.svg";
import Dry from "../assets/logo/icons/dry.svg";

const RedUpModal = ({ show, handleClose }) => {
  const handleConfirmClick = () => {
    handleClose();
  };
  return (
    <>
      <Modal show={show} size="md" onHide={handleClose} centered>
        <Modal.Header
          closeButton
          className="px-4 hide_fcontrol py-2 likes_modal_head"
        >
          <Modal.Title className="mx-auto black_text_lg inter-bold fs-16 mt-1 ">
            Know Your Availability!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="pb-4"
          style={{ background: "rgba(238, 245, 242, 1)" }}
        >
          <button className="changeStateBtn state_border mt-1 mb-3 d-flex align-items-center justify-content-center text-left">
            <img
              alt=""
              src={RedsUp}
              style={{ width: "57px" }}
              className="me-2"
            />
            <div className="">
              <h1 className="fs-16 inter-semi">Re'd Up</h1>
              <p className=" height-20 mt-1 fs-15 inter-light">
                You’re full of greens and ready for Seshsions! Invite or get
                invited.
              </p>
            </div>
          </button>
          {/* ___________ */}
          <button className="changeStateBtn my-3 d-flex align-items-center justify-content-center text-left">
            <img
              alt=""
              src={Holding}
              style={{ width: "57px" }}
              className="me-2"
            />
            <div className="">
              <h1 className="fs-16 inter-semi">Holding</h1>
              <p className=" height-20 mt-1 fs-15 inter-light">
                You’re running low. Be picky with your Seshsions or look for a
                match!
              </p>
            </div>
          </button>
          {/* ___________ */}
          <button className="changeStateBtn mt-3 mb-4 d-flex align-items-center justify-content-center text-left">
            <img alt="" src={Dry} style={{ width: "57px" }} className="me-2" />
            <div className="">
              <h1 className="fs-16 inter-semi">Dry</h1>
              <p className=" height-20 mt-1 fs-15 inter-light">
                You’re out! Look for generous buddies or wait till you re-up.
              </p>
            </div>
          </button>
          <Button
            onClick={handleConfirmClick}
            className="btn-primary"
            style={{ padding: "12px 0" }}
          >
            Confirm
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RedUpModal;
