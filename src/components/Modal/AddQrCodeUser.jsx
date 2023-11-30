import React from "react";
import { Modal } from "react-bootstrap";
import CodeQR from "../../assets/icons/code_QR.png";
const AddQrCodeUser = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        show={isOpen}
        onHide={onClose}
        centered
        dialogClassName="modal_width"
      >
        <Modal.Header closeButton className="px-3 py-2 m-0 border-0 Modal_btn">
          <Modal.Title className="me-auto black_text_lg inter-bold fs-16">
            My QR Code
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="align_center flex-column">
          <div className="code_qr">
            <img src={CodeQR} alt="" />
          </div>
          <h1 className="black_text_lg inter-bold fs-20 text-center mt-5">
            @BlazeBuddy
          </h1>
          <h2 className="light_text fs-15 inter text-center mt-2">
            Status: Re'd Up
          </h2>
          <p className="light_text fs-15 inter text-center mt-3 mb-3">
            Share your QR Code with your buddies to connect instantly! Just scan
            the code, and you're connected. No need to search for usernames or
            numbers.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddQrCodeUser;
