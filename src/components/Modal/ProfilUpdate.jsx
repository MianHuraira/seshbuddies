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
import RightAngle from "../../assets/logo/icons/angle_right.svg";
import UpdatedProfile from "./UpdatedProfile";

const ProfilUpdate = ({ isOpen, onClose, setProfile }) => {
  const userData = useSelector(selectUser);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");
  const [selectedImageUrl, setSelectedImageUrl] = useState(
    userData?.user?.profilePicture || avaatar2
  );
  const [updateModal, setUpdateModal] = useState(false);
  const [dataKey, setDataKey] = useState("");
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  // snackbar ended

  const uploadProfile = async (imageFile) => {
    try {
      if (!userData?.token) {
        return;
      }
      setLoading(true);
      const formData = new FormData();
      formData.append("image", imageFile);

      const resp = await axios.post(
        global.BASEURL + "/upload/images",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-auth-token": userData?.token,
          },
        }
      );

      const succesData = resp.status === 201;
      const ResultData = resp.data.imagePath;
      if (succesData) {
        const ProfileData = {
          profilePicture: ResultData,
        };
        const response = await axios.put(
          global.BASEURL + "/users/add/profilePicture",
          ProfileData,
          {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": userData?.token,
            },
          }
        );
        const NewDataUser = response.data.user;

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
          setSnackbarMessage("Profile Updated");
          setSnackbarOpen(true);
          setSnackbarSeverity("success");
          setSelectedImageUrl(ResultData);
          setSelectedImage(null);
        }
      }
    } catch (error) {
      console.error(error);
      setSnackbarMessage(error);
      setSnackbarOpen(true);
      setSnackbarSeverity("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedImage) {
      uploadProfile(selectedImage);
    }
  }, [selectedImage]);

  // update data modal

  const HandleUpdateModal = (propKey) => {
    setUpdateModal(true);
    setDataKey(propKey);
    onClose();
  };
  const HandleUpdateModalClose = () => {
    setUpdateModal(false);
    setDataKey(null);
    setProfile(true);
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
          <label className="labelHead00 form-label">Prfile Image</label>
          <div className="border-0 bg-white position-relative text-center">
            {!loading ? (
              <input
                className="fileSect00 cursorP"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setSelectedImage(e.target.files[0]);
                  setSelectedImageUrl(URL.createObjectURL(e.target.files[0]));
                }}
              />
            ) : (
              ""
            )}

            {loading ? (
              <div className="text-center imagLoader00">
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
            ) : (
              ""
            )}
            <img src={selectedImageUrl} alt="" className="userPic2" />
          </div>
          <label className="labelHead00 form-label">Name</label>
          <div
            onClick={() => HandleUpdateModal("userName")}
            className="radius_12 text_area form-control d-flex align-items-center justify-content-between cursorP"
          >
            {userData?.user?.username}
            <img style={{ marginLeft: "auto" }} src={RightAngle} alt="" />
          </div>
          <p className="cont_edit00 mt-2">
            You can change your username once every 30 days.
          </p>

          <div
            onClick={() => HandleUpdateModal("bio")}
            className="two_select w-100 mt-1"
          >
            <label className="labelHead00 form-label">Bio</label>
            <div className="radius_12 text_area form-control d-flex align-items-center justify-content-between cursorP">
              {userData?.user?.bio}
              <img style={{ marginLeft: "auto" }} src={RightAngle} alt="" />
            </div>
          </div>
          <div
            onClick={() => HandleUpdateModal("url")}
            className="two_select w-100 mt-1 mb-2"
          >
            <label className="labelHead00 form-label">URL</label>
            <div className="radius_12 text_area form-control d-flex align-items-center justify-content-between cursorP">
              {userData?.user?.url}
              <img style={{ marginLeft: "auto" }} src={RightAngle} alt="" />
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <UpdatedProfile
        openModal={updateModal}
        closeModal={HandleUpdateModalClose}
        dataKey={dataKey}
      />
    </>
  );
};

export default ProfilUpdate;
