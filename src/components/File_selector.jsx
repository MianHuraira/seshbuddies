import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Uploadimg from "../assets/logo/icons/uploadphoto.svg";
const FileSelector = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleChange = (event) => {
    const newSelectedFiles = Array.from(event.target.files);
    setSelectedFiles([...selectedFiles, ...newSelectedFiles]); // Append the new selected files to the existing selected files
  };
  const showFiles = () => {
    if (!selectedFiles || !selectedFiles.length) {
      return null;
    }
    return (
      <Container className="imgH00">
        <Row>
          {selectedFiles.map((file, index) => {
            const colSize = selectedFiles.length === 1 ? 12 : 6;
            const style = {
              width: "100%",
              height: selectedFiles.length === 1 ? "321px" : "161px",
            };
            return (
              <Col className="mb-2 position-relative" key={index} lg={colSize}>
                {file.type.startsWith("image/") ? (
                  <>
                    <img
                      className="radius_8"
                      style={style}
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      key={file.name}
                    />
                    <span
                      className="btn_close_img"
                      aria-hidden="true"
                      onClick={() => {
                        setSelectedFiles(
                          selectedFiles.filter((f) => f !== file)
                        );
                      }}
                    >
                      &times;
                    </span>
                  </>
                ) : file.type.startsWith("video/") ? (
                  <>
                    <video
                      style={style}
                      className="radius_8"
                      src={URL.createObjectURL(file)}
                      controls
                      key={file.name}
                    />
                    <span
                      className="btn_close_img"
                      aria-hidden="true"
                      onClick={() => {
                        setSelectedFiles(
                          selectedFiles.filter((f) => f !== file)
                        );
                      }}
                    >
                      &times;
                    </span>
                  </>
                ) : (
                  <p>Unsupported file type.</p>
                )}
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  };
  return (
    <div className="file-selector">
      <Form.Control
        as="textarea"
        aria-label="With textarea"
        rows={6}
        className="mb-3 text_area"
      />
      {showFiles()}
      {selectedFiles.length === 0 ? (
        <span class="btn input-button btn-file">
          <img src={Uploadimg} alt="" className="upload_img mt-4" />
          <h1 className="fs-14 black_text_lg inter-medium mt-1">
            Add Photos/Videos
          </h1>
          <p className="light_text fs-13">or drag and drop</p>

          <Form.Control multiple onChange={handleChange} type="file" />
        </span>
      ) : (
        <span class="btn btn-file d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center">
            <img src={Uploadimg} alt="" className="mt-1 me-1" />
            <h1 className="fs-14 black_text_lg inter-medium mt-1">
              Add Photos/Videos
            </h1>
          </div>
          <Form.Control multiple onChange={handleChange} type="file" />
        </span>
      )}
    </div>
  );
};
export default FileSelector;
