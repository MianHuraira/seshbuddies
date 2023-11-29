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
  const [imagePaths, setImagePaths] = useState([]);
  const [loading, setLoading] = useState(false);

  const postTextHandle = (e) => {
    setText(e.target.value);
  };
  const MAX_FILES_LIMIT = 4;

  const handleChange = async (event) => {
    const newSelectedFiles = Array.from(event.target.files);

    if (selectedFiles.length + newSelectedFiles.length > MAX_FILES_LIMIT) {
      // Display a toast message or handle the exceeding limit as needed
      toast.error(`You can only select up to ${MAX_FILES_LIMIT} files.`);
      return;
    }

    setSelectedFiles([...selectedFiles, ...newSelectedFiles]);

    // Trigger API request here
    const formData = new FormData();
    newSelectedFiles.forEach((file) => {
      formData.append("image", file);
    });

    try {
      setLoading(true);
      const response = await axios.post(
        global.BASEURL + "/upload/images",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-auth-token": resultData.token,
          },
        }
      );
      console.log(response, "ok");
      setImagePaths((prevImagePaths) => [
        ...prevImagePaths,
        response.data.imagePath,
      ]);
    } catch (error) {
      console.error("Error uploading images:", error);
      toast.error("Error uploading images. Please try again.");
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  const handleRemove = (index) => {
    // Remove the file from selectedFiles
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);

    // Remove the corresponding path from imagePaths
    const newImagePaths = [...imagePaths];
    newImagePaths.splice(index, 1);
    setImagePaths(newImagePaths);
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
              {renderFile(file, index)}
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

  const renderFile = (file, index) => {
    const style = {
      width: "100%",
      height: selectedFiles.length === 1 ? "321px" : "161px",
    };
    return (
      <div className="position-relative" key={index}>
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
        <span className="btn_close_img" onClick={() => handleRemove(index)}>
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
      const formData = new FormData();
      formData.append("text", text);
      formData.append("location", "lahore");
      formData.append("lat", "123132");
      formData.append("lng", "32131232");

      imagePaths.forEach((path, index) => {
        formData.append("images", path);
      });

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

      toast.success(response.data.message);
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Error creating post. Please try again.");
    }

    onClose();
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
              <Form.Control
                accept="image/*"
                multiple
                onChange={handleChange}
                type="file"
              />
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
