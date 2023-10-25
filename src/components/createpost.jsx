import React, { useState } from "react";
import edit from "../assets/logo/icons/edit.svg";
import comp from "../assets/logo/icons/compass.svg";
import bolt from "../assets/logo/icons/bolt.svg";
import like from "../assets/logo/icons/Like.svg";
import user_add from "../assets/logo/icons/user-add.svg";
import angle_right from "../assets/logo/icons/angle_right.svg";
import Pinpoint from "../assets/logo/icons/pinpoint.svg";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button, Modal } from "react-bootstrap";
import FileSelector from "./File_selector";
import alert_success from "../assets/logo/alert-success.svg";
const Createpost = () => {
  const [Success, ShowNotification] = useState(false);
  // const Success_open = () => ShowNotification(true);
  const Success_close = () => ShowNotification(false);

  const showSuccess = () => {
    shmoke(false);
    ShowNotification(true);
  };

  const [createpost, setShow] = useState(false);
  const Post_open = () => setShow(true);
  const Post_close = () => setShow(false);
  // ___Modal___
  const [SHMOKE, shmoke] = useState(false);
  const Shmoke_open = () => shmoke(true);
  const Shmoke_close = () => shmoke(false);
  // ___Modal___
  return (
    <div className="ms-5">
      <button
        onClick={Post_open}
        className="oval w-100 d-flex align-items-center justify-content-center"
      >
        <img alt="" src={edit} className="edit me-1" />
        <p className="fs-14 inter fw-bold">Create new post</p>
      </button>

      <div className="explore">
        <p className="semibold  l-black inter fs-14 mt-3">Explore</p>
        <NavLink
          to={"/ForYou"}
          className="black_text_lg d-flex justify-content-between mt-2"
        >
          <div className="d-flex ">
            <img
              alt=""
              src={comp}
              className="me-2 icon"
              style={{ margin: "0px 2px" }}
            />
            <p className="inter-bold fs-14 my-2">For You</p>
          </div>
          <img alt="" src={angle_right} className="angle-right" />
        </NavLink>
        <div className="d-flex justify-content-between mt-1">
          <div className="d-flex ">
            <img alt="" src={bolt} className="me-2 ms-1 icon2" />
            <p className="my-2 inter-bold fs-14">Trending</p>
          </div>
          <img alt="" src={angle_right} className="angle-right" />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <NavLink
            to={"/buddies"}
            className="d-flex black_text_lg align-items-center justify-content-between w-100"
          >
            <div className="d-flex align-items-center">
              <img src={like} alt="" className="me-1 icon" />
              <p className="my-2 inter-bold fs-14">Your Buddies</p>
            </div>
            <img alt="" src={angle_right} className="angle-right" />
          </NavLink>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <div className="d-flex ">
            <img alt="" src={user_add} className="me-2 icon" />
            <p className="my-2 inter-bold fs-14">Following</p>
          </div>
          <img alt="" src={angle_right} className="angle-right" />
        </div>
      </div>

      <div>
        <p className="mb-1 mt-3 l-black inter-semi fs-15">Start your seshion</p>

        <button
          onClick={Shmoke_open}
          className="green-bg mt-2 shession-oval w-100 border-0 d-flex align-items-center justify-content-between"
        >
          <div>
            <h1 className="fs-13 inter-semi black text-start">SHMOKE</h1>
            <p className="fs-11 inter mt-1">Invite a buddy for a chill sesh.</p>
          </div>
          <img alt="" src={angle_right} className=" angle-med" />
        </button>
        <div className="skin-bg mt-2 shession-oval d-flex align-items-center justify-content-between">
          <div>
            <h1 className="fs-13 inter-semi black">MATCH</h1>
            <p className="fs-11 inter mt-1">
              Find a buddy to match your strain and vibe.
            </p>
          </div>
          <img alt="" src={angle_right} className=" angle-med" />
        </div>
        <div className="blue-bg mt-2 shession-oval d-flex align-items-center justify-content-between">
          <div>
            <h1 className="fs-13 inter-semi black">DROP</h1>
            <p className="fs-11 inter mt-1">
              Running low? Invite buddies to contribute.
            </p>
          </div>
          <img alt="" src={angle_right} className=" angle-med" />
        </div>
        <div className="pink-bg mt-2 shession-oval d-flex align-items-center justify-content-between">
          <div>
            <h1 className="fs-13 inter-semi black">SMO</h1>
            <p className="fs-11 inter mt-1">
              Out of stash? Request a 'Smoke Me Out.'
            </p>
          </div>
          <img alt="" src={angle_right} className=" angle-med" />
        </div>
      </div>

      <Modal
        dialogClassName="rating_modal"
        show={createpost}
        onHide={Post_close}
        centered
      >
        <Modal.Header closeButton className="py-3 border-0">
          <Modal.Title className="fs-16 inter-bold">New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body className="upload_modal">
          <FileSelector />
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button className="btn-primary mt-3">Post</Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={SHMOKE}
        onHide={Shmoke_close}
        dialogClassName="Shmoke_modal_body"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fs-15 inter-bold">
            Start a New SHMOKE Seshsion!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="green-bg mt-2 shession-oval w-100 border-0 d-flex align-items-center justify-content-between">
            <div>
              <h1 className="fs-13 inter-semi black text-start">SHMOKE</h1>
              <p className="fs-11 inter mt-1">
                Invite a buddy for a chill sesh.
              </p>
            </div>
            <img alt="" src={angle_right} className=" angle-med" />
          </div>
          <h1 className="black_text_lg mt-2">Seshsion Name</h1>
          <div>
            <Form.Control
              placeholder="Enter seshion name"
              aria-label="Enter seshion name"
              aria-describedby="basic-addon1"
              className="radius_12 mt-2 light_text text_area py-2 position-relative"
            />
          </div>
          <div className="d-flex align-items-center mt-3 justify-content-between">
            <div className="three_select">
              <p className="inter fs-14">Sesh Type</p>
              <Form.Select
                aria-label="Default select example"
                className="radius_12 text_area py-2 light_text"
              >
                <option className="">Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="three_select">
              <p className="inter fs-14">Strain</p>
              <Form.Select
                aria-label="Default select example"
                className="radius_12 text_area py-2 light_text"
              >
                <option className="">Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="three_select">
              <p className="inter fs-14">Utensils</p>
              <Form.Select
                aria-label="Default select example"
                className="radius_12 text_area py-2 light_text"
              >
                <option className="">Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>
          <p className="mt-2">Location</p>
          <div className=" position-relative">
            <Form.Control
              placeholder="Choose location"
              aria-label="Choose location"
              aria-describedby="basic-addon1"
              className="radius_12 text_area mt-2 light_text py-2"
            />
            <img src={Pinpoint} alt="" className="pinpoint" />
          </div>
          <p className="mt-2">Date & Time</p>
          <div className="d-flex align-items-center justify-content-between">
            <div className="two_select">
              <Form.Select
                aria-label="Default select example"
                className="radius_12 text_area py-2 light_text"
              >
                <option className="">Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="two_select">
              <Form.Select
                aria-label="Default select example"
                className="radius_12 text_area py-2 light_text"
              >
                <option className="">Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>
          <p className="mt-2">Description</p>
          <div>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              className="mt-1 text_area"
              Rows={4}
            />
          </div>
          <p className="mt-2">Invite Buddies</p>
          <div>
            <Form.Control
              placeholder="@"
              aria-label="@"
              aria-describedby="basic-addon1"
              className="py-2"
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button className="btn-primary" onClick={showSuccess}>
            Create Seshsion
          </Button>
        </Modal.Footer>
      </Modal>
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
          <Modal.Title className="m-auto black_text_lg inter-bold fs-16 mt-1 ps-4 ">
            Thanks
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-0">
          <div className="w-100 me-2 d-flex align-items-center mt-1 justify-content-center">
            <img alt="" src={alert_success} className=" alert_Success_img" />
          </div>
          <h1 className="black_text_lg text-center inter-bold mt-3 fs-15 w-75 m-auto">
            Seshsion Created Successfully!
          </h1>
          <p className="text-center inter fs-14 mt-3">
            Your SHMOKE Seshsion 'Chill & Blaze' has been created and invites
            have been sent.
          </p>
          <div className="d-flex align-items-center justify-content-between mt-4 pb-3">
            <button className="yourBuddyBtn2 bg-transparent">Go to Home</button>
            <button className="yourBuddyBtn2 btnGreen">View Details</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Createpost;
