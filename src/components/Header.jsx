/* eslint-disable no-unused-vars */
import { useState, React } from "react";
import "../assets/css/style.css";
import { Form, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import logo_text from "../assets/logo/logo-text.png";
import { useLocation } from "react-router-dom";
// import { BiSearch } from "react-icons/bi";
import logoWhite from "../assets/logo/logo_white.svg";
import LogoTextWhite from "../assets/logo/logo_text_white.svg";
import SearchIcon from "../assets/icons/search_icon.svg";
import SearchWhite from "../assets/icons/search_icon_white.svg";
import { FaClock, FaSearch } from "react-icons/fa";
import RecentIcon from "../assets/icons/recentIcon.svg";
import UpLeftArrow from "../assets/icons/upLeftArrow.svg";
import CrossIcon from "../assets/icons/blackCross.svg";
import StatusChange from "../assets/icons/StatusChange.svg";
import Profile from "./Profile";

import SideMessage from "../components/side_message";

const Header = () => {
  const [activeNavLink, setActiveNavLink] = useState("home");

  const handleNavLinkClick = (navLinkId) => {
    setActiveNavLink(navLinkId);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStatusChangeClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const location = useLocation();
  let getPath = location.pathname;

  let allPath = false;

  if (getPath === "/live_stream" || getPath === "/reels") {
    allPath = true;
  }

  let chngBg = "";

  if (getPath === "/reels" || getPath === "/live_stream") {
    chngBg = "nav_gbg";
  }

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const suggestionsData = [
    "suggestion1",
    "suggestion2",
    "apple",
    "asad",
    "ahmad",
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;

    let filteredSuggestions = [];

    if (value.trim() !== "") {
      // Combine recent searches and suggestions
      const combinedSuggestions = [
        ...recentSearches.map((search) => search.text),
        ...suggestionsData,
      ];

      filteredSuggestions = combinedSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
    }

    setQuery(value);
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    const isRecentSearch = recentSearches.some(
      (search) => search.text === suggestion
    );

    if (isRecentSearch) {
      // Handle the click on recent search (e.g., perform a special action)
      console.log("Clicked on recent search:", suggestion);
    } else {
      // Handle the click on regular suggestion
      console.log("Clicked on suggestion:", suggestion);
    }

    // Check if the suggestion is already in recent searches
    const isAlreadyInRecentSearches = recentSearches.some(
      (search) => search.text === suggestion
    );

    // If the suggestion is not already in recent searches, add it to recent searches
    if (!isAlreadyInRecentSearches) {
      setRecentSearches((prevSearches) => [
        { text: suggestion, time: new Date() },
        ...prevSearches,
      ]);
    }

    setQuery("");
    setSuggestions([]);
  };

  const handleRemoveRecentSearch = (text) => {
    const updatedRecentSearches = recentSearches.filter(
      (search) => search.text !== text
    );
    setRecentSearches(updatedRecentSearches);
  };

  return (
    <>
      <Navbar expand="lg" className={`nav_bg ${chngBg} nav_bar`}>
        <div className="container-xxl px-0">
          <Navbar.Brand className="d-flex align-items-center  ms-2">
            <NavLink to={"/"}>
              <img
                className="logo_icon"
                src={allPath ? logoWhite : logo}
                alt=""
              />
              <img
                className="logo_text ms-2"
                src={allPath ? LogoTextWhite : logo_text}
                alt=""
              />
            </NavLink>
          </Navbar.Brand>
          {/* search div */}
          <div className="mainS00 position-relative me-2">
            <NavLink
              to={"/search"}
              style={{
                backgroundColor: allPath ? "rgba(45, 61, 56, 0.3)" : "",
                width: "100%",
              }}
              className="search_div"
            >
              <img
                className="icon_size_tab search_icon me-2"
                src={allPath ? SearchWhite : SearchIcon}
                alt=""
              />
              <Form.Control
                type="text"
                className="hide_fcontrol d-none d-lg-block"
                placeholder="nickname, hashtag, music..."
                value={query}
                onChange={handleInputChange}
              />
            </NavLink>

            {suggestions.length > 0 && (
              <div className="searchDiv00">
                {suggestions.map((suggestion, index) => {
                  const isRecentSearch = recentSearches.some(
                    (search) => search.text === suggestion
                  );
                  return (
                    <p
                      className="d-flex align-items-center mb-2"
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <div className="reIcon00">
                        <img
                          src={isRecentSearch ? RecentIcon : SearchIcon}
                          alt=""
                        />
                      </div>
                      <h5 className="ms-2 suggText00">{suggestion}</h5>
                      {isRecentSearch ? (
                        <img
                          onClick={() => handleRemoveRecentSearch(suggestion)}
                          className="ms-auto cursorP"
                          src={CrossIcon}
                          alt=""
                        />
                      ) : (
                        <img
                          className="ms-auto cursorP"
                          src={UpLeftArrow}
                          alt=""
                        />
                      )}
                    </p>
                  );
                })}
              </div>
            )}
          </div>

          <div className="blank_div mx-2"></div>
          <div className={` ${allPath ? "item_nav" : "clr_chng nav_item"} `}>
            <NavLink
              className="me-3"
              onClick={() => handleNavLinkClick("home")}
              to={"/home"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M18.3 16.6669C18.3 16.8879 18.2122 17.0999 18.0559 17.2562C17.8996 17.4124 17.6877 17.5002 17.4667 17.5002H4.13332C3.91231 17.5002 3.70035 17.4124 3.54407 17.2562C3.38779 17.0999 3.29999 16.8879 3.29999 16.6669V7.90856C3.2999 7.78157 3.32884 7.65624 3.38458 7.54214C3.44033 7.42804 3.52142 7.3282 3.62165 7.25023L10.2883 2.06523C10.4346 1.95143 10.6147 1.88965 10.8 1.88965C10.9853 1.88965 11.1654 1.95143 11.3117 2.06523L17.9783 7.25023C18.0786 7.3282 18.1596 7.42804 18.2154 7.54214C18.2711 7.65624 18.3001 7.78157 18.3 7.90856V16.6669ZM6.63332 12.5002V14.1669H14.9667V12.5002H6.63332Z"
                  fill={allPath ? "white" : "#6C7774"}
                />
              </svg>
            </NavLink>
            <NavLink
              className="me-3"
              to={"/buddies"}
              onClick={() => handleNavLinkClick("user")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M6.63298 9.1665C6.14052 9.1665 5.65288 9.06951 5.19791 8.88105C4.74294 8.6926 4.32954 8.41637 3.98132 8.06815C3.63311 7.71993 3.35688 7.30654 3.16843 6.85157C2.97997 6.3966 2.88298 5.90896 2.88298 5.4165C2.88298 4.92405 2.97997 4.43641 3.16843 3.98144C3.35688 3.52647 3.63311 3.11307 3.98132 2.76485C4.32954 2.41663 4.74294 2.14041 5.19791 1.95196C5.65288 1.7635 6.14052 1.6665 6.63298 1.6665C7.62754 1.6665 8.58136 2.06159 9.28463 2.76485C9.98789 3.46811 10.383 4.42194 10.383 5.4165C10.383 6.41107 9.98789 7.36489 9.28463 8.06815C8.58136 8.77142 7.62754 9.1665 6.63298 9.1665ZM15.383 12.4998C14.4989 12.4998 13.6511 12.1486 13.026 11.5235C12.4008 10.8984 12.0496 10.0506 12.0496 9.1665C12.0496 8.28245 12.4008 7.4346 13.026 6.80948C13.6511 6.18436 14.4989 5.83317 15.383 5.83317C16.267 5.83317 17.1149 6.18436 17.74 6.80948C18.3651 7.4346 18.7163 8.28245 18.7163 9.1665C18.7163 10.0506 18.3651 10.8984 17.74 11.5235C17.1149 12.1486 16.267 12.4998 15.383 12.4998ZM15.383 13.3332C16.3775 13.3332 17.3314 13.7283 18.0346 14.4315C18.7379 15.1348 19.133 16.0886 19.133 17.0832V17.4998H11.633V17.0832C11.633 16.0886 12.0281 15.1348 12.7313 14.4315C13.4346 13.7283 14.3884 13.3332 15.383 13.3332ZM6.63298 9.99984C7.18015 9.99984 7.72197 10.1076 8.22749 10.317C8.73301 10.5264 9.19234 10.8333 9.57925 11.2202C9.96616 11.6071 10.2731 12.0665 10.4825 12.572C10.6919 13.0775 10.7996 13.6193 10.7996 14.1665V17.4998H2.46631V14.1665C2.46631 13.0614 2.9053 12.0016 3.6867 11.2202C4.4681 10.4388 5.52791 9.99984 6.63298 9.99984Z"
                  fill={allPath ? "white" : "#6C7774"}
                />
              </svg>
            </NavLink>
            <NavLink className="me-3" to={"/reels"}>
              <div className="main_noti_div">
                <div className="noti_div"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                >
                  <path
                    d="M1.2998 0.874512H6.07739L4.26071 4.20784H0.674805V1.49951C0.674805 1.15433 0.954627 0.874512 1.2998 0.874512Z"
                    fill={allPath ? "white" : "#6C7774"}
                  />
                  <path
                    d="M10.094 4.20784H5.6843L7.50098 0.874512H11.9107L10.094 4.20784Z"
                    fill={allPath ? "white" : "#6C7774"}
                  />
                  <path
                    d="M13.3343 0.874512L11.5176 4.20784H16.9248V1.49951C16.9248 1.15433 16.645 0.874512 16.2998 0.874512H13.3343Z"
                    fill={allPath ? "white" : "#6C7774"}
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9248 5.45784H0.674805V16.4995C0.674805 16.8447 0.954627 17.1245 1.2998 17.1245H16.2998C16.645 17.1245 16.9248 16.8447 16.9248 16.4995V5.45784ZM11.7165 11.0828L7.13314 8.16618V13.9995L11.7165 11.0828Z"
                    fill={allPath ? "white" : "#6C7774"}
                  />
                </svg>{" "}
              </div>
            </NavLink>
            <NavLink className="me-3" to={"sessions"}>
              <div className="main_noti_div">
                <div className="noti_div"></div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M2.46631 9.16683H19.133V16.6668C19.133 16.8878 19.0452 17.0998 18.8889 17.2561C18.7326 17.4124 18.5207 17.5002 18.2996 17.5002H3.29964C3.07863 17.5002 2.86667 17.4124 2.71039 17.2561C2.55411 17.0998 2.46631 16.8878 2.46631 16.6668V9.16683ZM14.9663 2.50016H18.2996C18.5207 2.50016 18.7326 2.58796 18.8889 2.74424C19.0452 2.90052 19.133 3.11248 19.133 3.3335V7.50016H2.46631V3.3335C2.46631 3.11248 2.55411 2.90052 2.71039 2.74424C2.86667 2.58796 3.07863 2.50016 3.29964 2.50016H6.63298V0.833496H8.29964V2.50016H13.2996V0.833496H14.9663V2.50016Z"
                    fill={allPath ? "white" : "#6C7774"}
                  />
                </svg>
              </div>
            </NavLink>
            <NavLink className="me-3" to={"/live_stream"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M14.1333 3.3335C14.3543 3.3335 14.5663 3.42129 14.7226 3.57757C14.8788 3.73385 14.9666 3.94582 14.9666 4.16683V7.66683L19.3108 4.62516C19.3733 4.58138 19.4466 4.55558 19.5227 4.55058C19.5988 4.54558 19.6748 4.56158 19.7425 4.59682C19.8101 4.63207 19.8668 4.68521 19.9063 4.75046C19.9459 4.8157 19.9667 4.89055 19.9666 4.96683V15.0335C19.9667 15.1098 19.9459 15.1846 19.9063 15.2499C19.8668 15.3151 19.8101 15.3683 19.7425 15.4035C19.6748 15.4387 19.5988 15.4547 19.5227 15.4497C19.4466 15.4447 19.3733 15.419 19.3108 15.3752L14.9666 12.3335V15.8335C14.9666 16.0545 14.8788 16.2665 14.7226 16.4228C14.5663 16.579 14.3543 16.6668 14.1333 16.6668H2.46663C2.24562 16.6668 2.03366 16.579 1.87738 16.4228C1.7211 16.2665 1.6333 16.0545 1.6333 15.8335V4.16683C1.6333 3.94582 1.7211 3.73385 1.87738 3.57757C2.03366 3.42129 2.24562 3.3335 2.46663 3.3335H14.1333ZM6.96663 7.35766C6.88979 7.35765 6.8153 7.38418 6.75577 7.43278C6.69625 7.48137 6.65534 7.54904 6.63997 7.62433L6.6333 7.69016V12.3085C6.63329 12.3625 6.6464 12.4157 6.67148 12.4635C6.69657 12.5112 6.73289 12.5522 6.77732 12.5829C6.82175 12.6136 6.87296 12.633 6.92655 12.6395C6.98014 12.6459 7.0345 12.6393 7.08497 12.6202L7.1458 12.5902L10.775 10.2802C10.8173 10.2531 10.853 10.2168 10.8793 10.1739C10.9056 10.1311 10.9219 10.0829 10.927 10.0329C10.932 9.98284 10.9257 9.93233 10.9085 9.88511C10.8912 9.83789 10.8635 9.79517 10.8275 9.76016L10.775 9.7185L7.1458 7.4085C7.09203 7.37517 7.02989 7.35782 6.96663 7.3585V7.35766Z"
                  fill={allPath ? "white" : "#6C7774"}
                />
              </svg>
            </NavLink>
          </div>
          <div className="blank_div mx-2"></div>

          <div className="d-flex align-items-center clr_chng lg_left">
            <NavLink
              to={"/notification"}
              style={{
                backgroundColor: allPath ? "rgba(45, 61, 56, 0.26)" : "",
              }}
              className="icon_div mx-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16.667 14.1665H18.3337V15.8332H1.66699V14.1665H3.33366V8.33317C3.33366 6.56506 4.03604 4.86937 5.28628 3.61913C6.53652 2.36888 8.23222 1.6665 10.0003 1.6665C11.7684 1.6665 13.4641 2.36888 14.7144 3.61913C15.9646 4.86937 16.667 6.56506 16.667 8.33317V14.1665ZM7.50033 17.4998H12.5003V19.1665H7.50033V17.4998Z"
                  fill={allPath ? "white" : "#6C7774"}
                />
              </svg>
            </NavLink>
            <NavLink
              to={"/chat"}
              style={{
                backgroundColor: allPath ? "rgba(45, 61, 56, 0.26)" : "",
              }}
              className="icon_div me-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M8.33366 2.5H11.667C13.4351 2.5 15.1308 3.20238 16.381 4.45262C17.6313 5.70286 18.3337 7.39856 18.3337 9.16667C18.3337 10.9348 17.6313 12.6305 16.381 13.8807C15.1308 15.131 13.4351 15.8333 11.667 15.8333V18.75C7.50033 17.0833 1.66699 14.5833 1.66699 9.16667C1.66699 7.39856 2.36937 5.70286 3.61961 4.45262C4.86986 3.20238 6.56555 2.5 8.33366 2.5Z"
                  fill={allPath ? "white" : "#6C7774"}
                />
              </svg>
            </NavLink>
            <img src={StatusChange} className="d-lg-none d-block me-3" alt="" />
            <Profile />
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
