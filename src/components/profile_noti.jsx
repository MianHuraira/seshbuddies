import React from "react";
// import angle_right from "../assets/logo/icons/angle_right.svg";
// import guidlines from "../assets/icons/guidlines.png";
// import terms from "../assets/icons/terms&service.png";
// import privacy_policy from "../assets/icons/privacy_policy.png";
// import highlights from "../assets/icons/prvacy_highlights.png";
// import copyright from "../assets/icons/copyright.png";

const Profile_noti = () => {
  return (
    <>
      <div className="bg-white h-100 p-4 radius_14">
        <div className="account_head pb-2">
          <p className="text-center black_text_lg inter-bold fs-16">Account</p>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-between cursorP mb-2 mt-3">
            <h3 className="titleN00">User Information</h3>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.25L6.8523 7.1023C6.93281 7.18281 6.92996 7.31421 6.84602 7.39115L1 12.75"
                stroke="#6C7774"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="d-flex align-items-center justify-content-between cursorP mb-2">
            <h3 className="titleN00">Password</h3>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.25L6.8523 7.1023C6.93281 7.18281 6.92996 7.31421 6.84602 7.39115L1 12.75"
                stroke="#6C7774"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="d-flex align-items-center justify-content-between cursorP mb-2">
            <h3 className="titleN00">Deactivate or delete account</h3>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.25L6.8523 7.1023C6.93281 7.18281 6.92996 7.31421 6.84602 7.39115L1 12.75"
                stroke="#6C7774"
                stroke-width="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile_noti;
