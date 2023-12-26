/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Form, ListGroup } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "./Redux/Slices/AuthSlice";
import avatarImg from "../assets/images/avatarImg.png";
import Spinner from "react-bootstrap/Spinner";

const MentionUser = ({ mentionValue, onUserSelect, selectedUserIds }) => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector(selectUser);
  //   slice selected user
  const filteredUsers = users.filter(
    (user) => !selectedUserIds.includes(user._id)
  );

  const userTag = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(global.BASEURL + `/users/usertags`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userData?.token,
        },
      });
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (mentionValue === "mentionProp") {
      userTag();
    } else {
      setUsers([]);
    }
  }, [mentionValue, query, userData?.token]);

  return (
    <div className="position-relative">
      {isLoading ? (
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
      ) : (
        filteredUsers.length > 0 && (
          <div className="mainTag00">
            {filteredUsers.map((user, index) => (
              <div
                className="mb-2 d-flex cursorP align-items-center"
                onClick={() => {
                  onUserSelect(user); // Call the onUserSelect callback
                }}
                key={index}
              >
                <img
                  className="searcimg00 me-2"
                  src={user?.profilePicture || avatarImg}
                  alt=""
                />
                <div className="d-flex flex-column">
                  <h4 className="userNamesearc00">{user.username}</h4>
                  <h5 className="userdessearc00">{user.username}</h5>
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default MentionUser;
