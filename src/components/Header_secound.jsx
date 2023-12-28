import { React } from "react";
import "../assets/css/style.css";
import { Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import logoWhite from "../assets/logo/logo_white.svg";
import logo_text from "../assets/logo/logo-text.png";
import LogoTextWhite from "../assets/logo/logo_text_white.svg";
import infoIcon from "../assets/icons/info_icon.png";
const Header_secound = () => {
  const location = useLocation();
  const pathGet = location.pathname;
 
  return (
    <>
      <Navbar expand="lg" className="nav_bar_sec">
        <div className="container-fluid">
          <Navbar.Brand className="d-flex align-items-center  ms-2">
            <NavLink to={"/home"}>
              <img
                className="logo_icon"
                src={
                  pathGet === "/" || pathGet === "/age_varifi"
                    ? logoWhite
                    : logo
                }
                alt=""
              />
              <img
                className="logo_text ms-2"
                src={pathGet === "/" || pathGet === "/age_varifi" ? LogoTextWhite : logo_text}
                alt=""
              />
            </NavLink>
          </Navbar.Brand>
          <div className="d-flex align-items-center">
            <img
              style={{ width: "18px", height: "18px" }}
              src={infoIcon}
              alt=""
            />
            <h5
              style={{ color: pathGet === "/age_varifi" ? "white" : "#908c95" }}
              className="ms-2 help_text"
            >
              Help
            </h5>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Header_secound;
