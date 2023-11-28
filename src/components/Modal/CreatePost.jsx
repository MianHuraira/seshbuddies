/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Uploadimg from "../../assets/logo/icons/uploadphoto.svg";
import axios from "axios";

const CreatePost = ({ isOpen, onClose }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [resultData, setResultData] = useState({});
  const [text, setText] = useState("");

  const postTextHandle = (e) => {
    setText(e.target.value);
  };

  const MAX_FILES_LIMIT = 4;

  const handleChange = (event) => {
    const newSelectedFiles = Array.from(event.target.files);

    if (selectedFiles.length + newSelectedFiles.length > MAX_FILES_LIMIT) {
      // Display a toast message or handle the exceeding limit as needed
      toast.error(`You can only select up to ${MAX_FILES_LIMIT} files.`);
      return;
    }

    setSelectedFiles([...selectedFiles, ...newSelectedFiles]);
  };
  const handleRemove = (file) => {
    setSelectedFiles(selectedFiles.filter((f) => f !== file));
  };

  const renderMedia = () => {
    if (!selectedFiles || selectedFiles.length === 0) {
      return null;
    }

    return (
      <Container className="imgH00">
        <Row>
          {selectedFiles.map((file, index) => (
            <Col key={index} lg={selectedFiles.length === 1 ? 12 : 6}>
              {renderFile(file)}
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

  const renderFile = (file) => {
    const style = {
      width: "100%",
      height: selectedFiles.length === 1 ? "321px" : "161px",
    };

    return (
      <div className="position-relative">
        {file.type.startsWith("image/") ? (
          <img
            className="radius_8 mb-2"
            style={style}
            src={URL.createObjectURL(file)}
            alt={file.name}
          />
        ) : file.type.startsWith("video/") ? (
          <video
            style={style}
            className="radius_8 mb-2"
            src={URL.createObjectURL(file)}
            controls
          />
        ) : (
          <p>Unsupported file type.</p>
        )}
        <span className="btn_close_img" onClick={() => handleRemove(file)}>
          &times;
        </span>
      </div>
    );
  };

  // api

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem("meraname");

    if (storedUserData) {
      // Parse the JSON data
      const parsedUserData = JSON.parse(storedUserData);
      setResultData(parsedUserData);
    }
  }, []);

  const createPost = async () => {
    try {
      // Create FormData object
      const formData = new FormData();

      // Append text to FormData
      formData.append("text", text);

      // Append each selected file to FormData
      selectedFiles.forEach((file, index) => {
        formData.append(`images`, file);
        console.log(file);
      });
      // formData.append("location", "lahore");
      // formData.append("lat", "123132");
      // formData.append("lng", "32131232");
      console.log(formData);
      // Send POST request to your API
      const response = await axios.post(
        global.BASEURL + "/post/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": resultData.token,
          },
        }
      );

      console.log("Response from the server:", response.data);

      // Optionally, do something with the response from the server
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle the error as needed
    }

    // onClose();
  };

  return (
    <>
      <Modal
        dialogClassName="rating_modal"
        show={isOpen}
        onHide={onClose}
        centered
      >
        <Modal.Header closeButton className="py-3 border-0">
          <Modal.Title className="fs-16 inter-bold">New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body className="upload_modal">
          <div className="file-selector">
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              rows={6}
              className="mb-3 text_area"
              value={text}
              onChange={postTextHandle}
            />

            {renderMedia()}
            <label className="w-100 mt-2 btn-file d-flex align-items-center justify-content-center">
              <div className="d-flex align-items-center justify-content-center">
                <img src={Uploadimg} alt="" className="mt-1 me-1" />
                <h1 className="fs-14 black_text_lg inter-medium mt-1">
                  Add Photos/Videos
                </h1>
              </div>
              <Form.Control multiple onChange={handleChange} type="file" />
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button onClick={createPost} className="btn-primary mt-3">
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreatePost;
