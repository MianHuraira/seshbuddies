/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { Modal } from "react-bootstrap";

import angle_right from "../../assets/logo/icons/angle_right.svg";
import alert_success from "../../assets/logo/alert-success.svg";
import icon_info from "../../assets/logo/icons/icn-info.svg";
import icon_start from "../../assets/logo/icons/icn-eye-off.svg";

const PostReport = ({ isOpen, onClose }) => {
  const [successModal, setSuccessModal] = useState("");
  const SuccesModaolHandle = () => {
    setSuccessModal(true);
    onClose();
  };

  const handleClose = () => {
    setSuccessModal(false);
  };
  return (
    <>
      <Modal
        show={isOpen}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="modal_width"
      >
        <Modal.Header closeButton className="px-3 py-2 m-0 likes_modal_head">
          <Modal.Title className="m-auto black_text_lg inter-bold fs-16 mt-1">
            Report
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-2">
            <h1 className="inter-bold fs-16 mb-2">
              Why are you reporting this post?
            </h1>
            <p className="inter fs-15 height-20 mb-4">
              Your report is anonymous, except if you're reporting an
              intellectual property infringement. If someone is in immediate
              danger, call the local emergency services - don't wait.
            </p>
            <div>
              <button className="report_btn mt-2" onClick={SuccesModaolHandle}>
                I just don't like it <img src={angle_right} alt="" />
              </button>
              <button className="report_btn mt-2 " onClick={SuccesModaolHandle}>
                It's spam <img src={angle_right} alt="" />
              </button>
              <button className="report_btn mt-2 " onClick={SuccesModaolHandle}>
                Nudity or sexual activity <img src={angle_right} alt="" />
              </button>
              <button className="report_btn mt-2 " onClick={SuccesModaolHandle}>
                Hate speech or symbols <img src={angle_right} alt="" />
              </button>
              <button className="report_btn mt-2 " onClick={SuccesModaolHandle}>
                Violence or dangerous organisations
                <img src={angle_right} alt="" />
              </button>
              <button className="report_btn mt-2" onClick={SuccesModaolHandle}>
                Bullying or harassment <img src={angle_right} alt="" />
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* succes modal  */}

      <Modal
        show={successModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="modal_width"
      >
        <Modal.Header closeButton className="px-4 m-0 py-2 likes_modal_head">
          <Modal.Title className="mx-auto ps-3 black_text_lg inter-bold fs-16 mt-1 ">
            Thanks
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 d-flex align-items-center justify-content-center">
            <img
              alt=""
              src={alert_success}
              style={{ width: "40px" }}
              className="me-3 "
            />
          </div>
          <h1 className="black_text_lg text-center inter-bold mt-3 fs-18">
            Thanks for letting us know
          </h1>
          <p className="black_text_md text-center mt-2 mb-3 fs-16">
            We use these reports to:
          </p>
          <div>
            <div className="report_success_btn mt-2 d-flex align-items-center justify-content-center text-left">
              <img
                alt=""
                src={icon_info}
                style={{ width: "22px" }}
                className="me-2"
              />
              Understand problems that people are having with different types of
              content on SESHBUDDIES.
            </div>
            <div className="report_success_btn mt-2 d-flex align-items-center justify-content-center text-left">
              <img
                alt=""
                src={icon_start}
                style={{ width: "22px" }}
                className="me-2"
              />
              Understand problems that people are having with different types of
              content on SESHBUDDIES.
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PostReport;
