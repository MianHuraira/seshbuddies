/* eslint-disable no-unused-vars */
import axios from "axios";
import { React, useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { selectUser } from "../Redux/Slices/AuthSlice";
import { useSelector } from 'react-redux';


const AddUrlUser = ({ isOpen, onClose }) => {
  const [urlValue, setUrlValue] = useState("");
  // const [resultData, setResultData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const user = useSelector(selectUser);

  const handleChange = (e) => {
    const value = e.target.value;
    setUrlValue(value);
    setIsValid(value.trim() !== "");
  };


  const CreatBio = async () => {
    try {
      setLoading(true);
      const BioData = {
        url: urlValue,
      };
      const res = await axios.put(global.BASEURL + "/users/add/url", BioData, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": user?.token,
        },
      });
      toast.success("updated successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      onClose();
      setUrlValue("");
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
        <Modal.Header
          closeButton
          className="px-3 Modal_btn py-2 m-0 likes_modal_head"
        >
          <Modal.Title className="m-auto black_text_lg inter-bold fs-18">
            Add URL
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-light">
          <div>
            <Form.Control
              placeholder="https://"
              type="url"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="text_area py-2 radius_10"
              onChange={handleChange}
              value={urlValue}
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

export default AddUrlUser;
