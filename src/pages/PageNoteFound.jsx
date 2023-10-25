import React from "react";
import NotFound from "../assets/images/pagNotFound.png";
import { NavLink } from "react-router-dom";

const PageNoteFound = () => {
  return (
    <>
      <div className="main_div_login">
        <div className="login_main p-4">
          <img
            style={{ width: "100px", height: "100px" }}
            src={NotFound}
            alt=""
          />
          <h2 className="pag_head mt-3">Page Not Found</h2>
          <p className="page_sbhead mt-3">
            Oops! 😖 The requested URL was not found on this server.
          </p>
          <NavLink to={"/home"} className="btn_default text-center mt-3">
            Back To Home
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default PageNoteFound;
