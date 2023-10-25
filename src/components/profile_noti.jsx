import React from "react";
// import angle_right from "../assets/logo/icons/angle_right.svg";
// import guidlines from "../assets/icons/guidlines.png";
// import terms from "../assets/icons/terms&service.png";
// import privacy_policy from "../assets/icons/privacy_policy.png";
// import highlights from "../assets/icons/prvacy_highlights.png";
// import copyright from "../assets/icons/copyright.png";
import { Form } from "react-bootstrap";

const Profile_noti = () => {
  return (
    <div>
      <div className="bg-white pt-4 px-4 radius_14">
        <div className="account_head pb-2">
          <p className="text-center black_text_lg inter-bold fs-16">
            Notifications
          </p>
        </div>
        <div className="account_body">
          <div className="black_text_lg d-flex justify-content-between align-items-center w-100 border-0 bg-transparent mt-2 mb-1">
            <div className="d-flex align-items-center justify-content-center">
              <p className="inter-semi fs-17 my-2 align_center">
                In app notifications
              </p>
            </div>
            <Form.Check 
              type="switch"
              id="custom-switch"
              className="text_area"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_noti;
