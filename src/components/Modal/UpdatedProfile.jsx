// ... (other imports)

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import avaatar2 from "../../assets/images/avatarImg.png";
import { selectUser, setUser } from "../Redux/Slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import CustomSnackbar from "../CustomSnackbar";

const UpdatedProfile = ({ openModal, closeModal, dataKey }) => {
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");
  const [dataValue, setDataValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const user = useSelector(selectUser);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  // snackbar ended

  const handleChange = (e) => {
    const value = e.target.value;
    setDataValue(value);
    setIsValid(value.trim() !== "");
  };

  const resetForm = () => {
    setDataValue("");
    setIsValid(false);
    setLoading(false);
  };

  //   api req

  const handleUpdate = async () => {
    const apiData = {
      [dataKey.toLowerCase()]: dataValue,
    };
    try {
      setLoading(true);
      const res = await axios.put(
        global.BASEURL + `/users/add/${dataKey.toLowerCase()}`,
        apiData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": user?.token,
          },
        }
      );

      const NewDataUser = res.data.user;

      if (NewDataUser) {
        const updatedUserObject = {
          ...userData.user,
          ...NewDataUser,
        };
        const updatedUserData = {
          ...userData,
          user: updatedUserObject,
        };
        dispatch(setUser(updatedUserData));
        setLoading(false);
        setSnackbarMessage(`Updated Successfully`);
        setSnackbarOpen(true);
        setSnackbarSeverity("success");
        resetForm();
        closeModal();
      }
    } catch (error) {
      console.error(error);
      setSnackbarMessage(error.response.data.message);
      setSnackbarOpen(true);
      setSnackbarSeverity("error");
    } finally {
      setLoading(false);
      resetForm();
    }
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
        backdrop="static"
        show={openModal}
        onHide={closeModal}
        centered
        // dialogClassName="modal_width"
      >
        <Modal.Header
          closeButton
          className="px-3 Modal_btn py-2 m-0 likes_modal_head"
        >
          <Modal.Title className="m-auto black_text_lg inter-bold fs-18">
            Edit {dataKey}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-light radius_8">
          <Form.Control
            placeholder={dataKey}
            type="text"
            className="w-100 text_area py-2 radius_10"
            value={dataValue}
            onChange={handleChange}
          />
          <div className="border-0">
            <button
              disabled={!isValid || loading}
              className={` mt-3 ${
                !isValid || loading ? "btn_disable" : "btn_default"
              }`}
              onClick={handleUpdate}
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
                "Update"
              )}
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdatedProfile;
