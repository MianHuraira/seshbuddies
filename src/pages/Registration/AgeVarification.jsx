import React from "react";
import whiteLogo from "../../assets/logo/logo_white.png";
import { Button, Form } from "react-bootstrap";


const AgeVarification = () => {
  return (
    <>
      <div className="main_verifi_div">
        <div className="child_varif">
          <img className="mb-3" src={whiteLogo} alt="" />
          <h4 className="startUpHead text-center mt-4">Age Verfication</h4>
          <h5
            style={{ color: "#C8DED3" }}
            className="startUpCont text-center mt-3"
          >
            In some states you must be 18 or over to view <br /> cannabis
            information, SESHBUDDIES requires <br /> users to meet the legal age
            limit to access our <br />
            application.
          </h5>
          <h5 className="startUpCont text-center mt-5">
            When’s your birthday?
          </h5>
          {/* varification form start */}

          <Form className="mt-4">
            <div className="d-flex align-items-center">
              <Form.Group className="mb-3 me-2">
                <Form.Control
                  style={{ width: "5rem" }}
                  placeholder="MM"
                  className="age_inp"
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3 me-2">
                <Form.Control
                  style={{ width: "5rem" }}
                  placeholder="DD"
                  className="age_inp"
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  placeholder="YYYY"
                  className="age_inp"
                  type="text"
                />
              </Form.Group>
            </div>
            <h5 className="startUpCont text-center mt-5">
              I can confirm that I am 18 or over that I agree to the SESHBUDDIES
              <span style={{ color: "#32B744" }}> Terms of Use </span> and
              <span style={{ color: "#32B744" }}> Privacy Policy </span>
            </h5>

            <div className="d-flex align-items-center mt-5 mb-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <button type="btn" className="dec_btn ms-3">Decline</button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AgeVarification;
