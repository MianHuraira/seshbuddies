/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";

import Uploadimg from "../../assets/logo/icons/uploadphoto.svg";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import CustomSnackbar from "../CustomSnackbar";
import MapIcon from "../../assets/icons/mapIcon.svg";
import LocationMap from "./LocationMap";

const CreatePost = ({ isOpen, onClose }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [resultData, setResultData] = useState({});
  const [text, setText] = useState("");
  const [mediaData, setMediaData] = useState([]);
  const [fileLoading, setFileLoading] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [location, setLocation] = useState("");

  const handleSave = (locationData) => {
    setLat(locationData.lat);
    setLng(locationData.lang);
    setLocation(locationData.location);
  };

  //
  const handleHide = () => {
    // Reset state values when hiding the modal
    setSelectedFiles([]);
    setText("");
    setLocation("");
    setLat("");
    setLng("");
  };

  // close snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  // post text handle
  const postTextHandle = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (text.trim() !== "" && selectedFiles.length > 0 && location) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [text, selectedFiles, location]);

  const MAX_FILES_LIMIT = 4;

  const handleChange = async (event) => {
    const newSelectedFiles = Array.from(event.target.files);
    const fileIndex = selectedFiles.length;

    if (selectedFiles.length + newSelectedFiles.length > MAX_FILES_LIMIT) {
      // Display a toast message or handle the exceeding limit as needed
      showSnackbar(
        `You can only select up to ${MAX_FILES_LIMIT} files.`,
        "error"
      );
      return;
    }

    setSelectedFiles([...selectedFiles, ...newSelectedFiles]);

    // Determine the file type based on file extension
    const fileType = newSelectedFiles.some((file) =>
      file.type.startsWith("video/")
    )
      ? "video"
      : "image";

    // Trigger API request here
    const apiEndpoint =
      fileType === "image" ? "/upload/images" : "/upload/video";

    const formData = new FormData();
    newSelectedFiles.forEach((file) => {
      const fieldName = fileType === "image" ? "image" : "video";
      formData.append(fieldName, file);
    });

    try {
      setFileLoading((prevFileLoading) => ({
        ...prevFileLoading,
        [fileIndex]: true, // Spinner shuru ho gaya
      }));
      const response = await axios.post(
        global.BASEURL + apiEndpoint,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-auth-token": resultData.token,
          },
        }
      );

      setMediaData((prevMediaData) => [
        ...prevMediaData,
        { url: response.data.imagePath, type: fileType },
      ]);

      setFileLoading((prevFileLoading) => ({
        ...prevFileLoading,
        [fileIndex]: false, // Spinner band ho gaya
      }));
    } catch (error) {
      console.error(`Error uploading ${fileType}:`, error);
      showSnackbar(`Error uploading ${fileType}. Please try again.`, "error");
    }
  };

  const handleRemove = (index) => {
    // Remove the file from selectedFiles
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);

    // Remove the corresponding path from mediaData
    const newMediaData = [...mediaData];
    newMediaData.splice(index, 1);
    setMediaData(newMediaData);
  };

  const renderMedia = () => {
    if (!selectedFiles || selectedFiles.length === 0) {
      return null;
    }

    return (
      <Container className="imgH00">
        <Row>
          {selectedFiles.map((file, index) => (
            <Col
              className="mb-2"
              key={index}
              lg={selectedFiles.length === 1 ? 12 : 6}
            >
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
      objectFit:"contain",
      height: selectedFiles.length === 1 ? "221px" : "161px",
    };
    const fileIndex = index;

    return (
      <div
        className="position-relative upMedia00"
        style={{ color: "white" }}
        key={index}
      >
        {fileLoading[fileIndex] && (
          <div className="text-center center_sp">
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
          </div>
        )}

        {file.type.startsWith("image/") ? (
          <img
            className="radius_8"
            style={style}
            src={URL.createObjectURL(file)}
            alt={file.name}
          />
        ) : file.type.startsWith("video/") ? (
          <video
            style={style}
            className="radius_8"
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
      const formData = {
        text: text,
        location: location,
        lat: lat,
        lng: lng,
      };

      const apiData = { ...formData, multimedia: mediaData };

      const response = await axios.post(
        global.BASEURL + "/post/create",
        apiData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": resultData.token,
          },
        }
      );

      showSnackbar(`${response.data.message}`, "success");
    } catch (error) {
      console.error("Error creating post:", error);
      showSnackbar(`Error creating post. Please try again.`, "error");
    }
    setSelectedFiles([]);
    setText("");
    setLocation("");
    setLat("");
    setLng("");

    onClose();
  };

  return (
    <>
      <CustomSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity} // or "error", "warning", "info", etc.
        onClose={handleSnackbarClose}
      />
      <Modal
        dialogClassName="rating_modal"
        show={isOpen}
        onHide={() => {
          handleHide();
          onClose();
        }}
        centered
      >
        <div className="h-100">
          {isMapVisible ? (
            <LocationMap
              onSave={handleSave}
              setIsMapVisible={setIsMapVisible}
            />
          ) : (
            <>
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
                  <h5 className="locationText00 mb-3">{location}</h5>

                  {renderMedia()}
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <label className="btn-file">
                      <div className="d-flex align-items-center justify-content-center">
                        <img src={Uploadimg} alt="" className="mt-1 me-1" />
                        <h1 className="fs-14 black_text_lg inter-medium mt-1">
                          Add Photos/Videos
                        </h1>
                      </div>
                      <Form.Control
                        multiple
                        onChange={handleChange}
                        type="file"
                      />
                    </label>
                    <div
                      onClick={() => setIsMapVisible(!isMapVisible)}
                      className={`mapDiv ms-3 cursorP ${
                        location ? "activeB" : ""
                      }`}
                    >
                      <img src={MapIcon} alt="MapIcon" />
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className="border-0">
                <Button
                  disabled={isButtonDisabled}
                  onClick={createPost}
                  className="btn-primary mt-3"
                >
                  Post
                </Button>
              </Modal.Footer>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default CreatePost;
