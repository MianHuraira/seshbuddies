/* eslint-disable no-unused-vars */
import axios from "axios";
import { React, useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { selectUser } from "../Redux/Slices/AuthSlice";
import { useSelector } from 'react-redux';



const AddBioUser = ({ isOpen, onClose }) => {
  const [bioValue, setBioValue] = useState("");
  // const [resultData, setResultData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const user = useSelector(selectUser);

  const handleChange = (e) => {
    const value = e.target.value;
    setBioValue(value);
    setIsValid(value.trim() !== "");
  };

  

  const CreatBio = async () => {
    try {
      setLoading(true);
      const BioData = {
        bio: bioValue,
      };
      const res = await axios.put(global.BASEURL + "/users/add/bio", BioData, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": user?.token,
        },
      });
      toast.success("updated successfully");
    } catch (error) {
      console.error(error.message);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
      onClose();
      setBioValue("");
      setIsValid(false);
    }
  };

  return (
    <>
      <Modal
        show={isOpen}
        onHide={onClose}
        centered
        dialogClassName="modal_width"
      >
        <Modal.Header closeButton className="px-3 py-2 m-0 likes_modal_head">
          <Modal.Title className="m-auto black_text_lg inter-bold fs-18">
            Bio
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-light">
          <div>
            <Form.Control
              as="textarea"
              placeholder="Add bio"
              aria-label="With textarea"
              className="text_area"
              rows={5}
              onChange={handleChange}
              value={bioValue}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 modal-light">
          <Button
            disabled={!isValid || loading}
            onClick={CreatBio}
            className="btn-primary"
          >
            {loading ? (
              <Spinner
                style={{
                  width: "20px",
                  height: "20px",
                  marginTop: "3px",
                  borderWidth: "0.15em",
                }}
                animation="border"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              "Save"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddBioUser;
