/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import avaatar2 from "../../assets/images/avatarImg.png";
import Copy from "../../assets/icons/copy.png";
import Pinpoint from "../../assets/logo/icons/pinpoint.svg";
import axios from "axios";

const ProfilUpdate = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Modal
        show={isOpen}
        onHide={onClose}
        centered
        dialogClassName="edit_profile_modal"
      >
        <Modal.Header closeButton className="px-3 py-2 m-0 border-0 Modal_btn">
          <Modal.Title className="me-auto black_text_lg inter-bold fs-16">
            Edit profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="labelHead00 form-label">Prfile Imgae</label>
          <div className="border-0 bg-white position-relative text-center">
            <input className="fileSect00" type="file" accept="image/*" />
            <img src={selectedImage || avaatar2} alt="" className="userPic2" />
          </div>
          <label className="labelHead00 form-label">Name</label>
          <Form.Control
            placeholder="Name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            className="radius_12 text_area form-control"
          />
          <div className="mt-2 d-flex align-items-center">
            <Form.Group className="w-100">
              <label className="labelHead00 form-label">Phone Number</label>
              <Form.Control
                placeholder="Phone"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className="radius_12 text_area form-control"
              />
            </Form.Group>
            <Form.Group className="w-100 ms-2">
              <label className="labelHead00 form-label">Email Address</label>
              <Form.Control
                placeholder="Enter Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className="radius_12 text_area form-control"
              />
            </Form.Group>
          </div>
          <label className="labelHead00 form-label mt-2">Username</label>
          <Form.Control
            placeholder="User Name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            className="radius_12 text_area form-control"
          />
          <div className="d-flex mt-2">
            <p className="black_text_lg fs-16 inter">
              SESHBUDDIES.io/@SESHBUDDIES
            </p>
            <img src={Copy} alt="" className="ms-1" style={{ width: "20px" }} />
          </div>
          <p className="cont_edit00 mt-2">
            Usernames can contain only letters, numbers, underscores, and
            periods. Changing your username will also change your profile link.
          </p>
          <p className="cont_edit00 mt-3">
            You can change your username once every 30 days.
          </p>
          <div className="d-flex align-items-center mt-2">
            <Form.Group class="w-100">
              <label className="labelHead00 form-label">Date of birth</label>
              <Form.Select
                aria-label="Default select example"
                className="radius_12 text_area selctClr form-control"
              >
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="w-100 ms-2 position-relative">
              <label className="labelHead00 form-label">Location</label>
              <Form.Control
                placeholder="Location"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className="radius_12 text_area form-control"
              />
              <img src={Pinpoint} alt="" className="pinpoint" />
            </Form.Group>
          </div>
          <div className="two_select w-100">
            <label className="labelHead00 form-label">Bio</label>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              rows={5}
              className="text_area inter"
            />
          </div>
          <div className="two_select w-100">
            <label className="labelHead00 form-label">URL</label>
            <Form.Control
              placeholder="https://"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="radius_12 text_area"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            //  onClick={updateProfile}

            className="btn-primary"
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfilUpdate;
