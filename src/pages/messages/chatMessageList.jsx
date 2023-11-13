/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import ChatMessage from "./chatMessage";
import { Link } from "react-router-dom";
import { ChevronLeft, Send } from "react-feather";
import { useState } from "react";
import { useEffect } from "react";
// import { createChat, getChat, updateChat } from '../api/instructor.js/chat'
import profileAvatar from "../../assets/logo/Avatar.svg";
import { Spinner } from "react-bootstrap";
import { Fragment } from "react";
import SendIcon from "../../assets/icons/send_icon.svg";
import { AiOutlinePlus } from "react-icons/ai";
import { BsImage, BsThreeDots } from "react-icons/bs";

const ChatMessageList = ({
  chatDetail,
  setShowChat,
  setCheckMsg,
  checkMsg,
  setReload,
}) => {
  const userData = JSON.parse(
    window.localStorage.getItem("globasity_user_data")
  );
  const [chatMsg, setChatMsg] = useState([
    {
      id: 1,
      message: "Can you meet me?",
      time: "2:33am",
      left: true,
    },
    {
      id: 2,
      message: "Yeah ,maybe tomorrow you can go to the location to see it live",
      time: "2:33am",
      left: false,
    },
    {
      id: 3,
      message: "Can you meet me?",
      time: "2:33am",
      left: true,
    },
    {
      id: 4,
      message: "Can you meet me?",
      time: "2:34am",
      left: true,
    },
    {
      id: 5,
      message: "No....",
      time: "2:34am",
      left: false,
    },
  ]);
  const [timeStamp, setTimeStamp] = useState("");
  const chatMessagesRef = useRef(null);
  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const getFormattedTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = String(hours % 12 || 12).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };
  const currentDate = new Date();
  const formattedDate = getFormattedDate(currentDate);
  const formattedTime = getFormattedTime(currentDate);
  // useEffect(() => {
  //     if (checkMsg === true) {
  //         setCheckMsg(false)
  //         setChatMsg([])
  //     }
  //     if (chatDetail) {
  //         getChatData()
  //     }
  // }, [chatDetail])

  // const getChatData = async () => {
  //     const data = {
  //         to_chat_id: chatDetail?.sender_id,
  //         user_id: userData.user_id,
  //     };
  //     const body = new FormData()
  //     body.append('type', 'getchat')
  //     body.append('user_id', data.user_id)
  //     body.append('to_chat_id', data.to_chat_id)
  //     await apiRequest({ body })
  //         .then((result) => {
  //             const reversedChatArray = [...result.chat].reverse();
  //             setChatMsg(reversedChatArray);
  //         }).catch((err) => {
  //             console.log(err)
  //         });
  // };
  // useEffect(() => {
  //     if (chatMessagesRef.current) {
  //         chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
  //         window.scrollTo(0, chatMessagesRef.current.scrollHeight);
  //     }
  // }, [chatMessagesRef.current]);
  const sendMessage = async (e) => {
    e.preventDefault();
    const input = document.getElementById("chatInput");
    const message = input.value;
    const data = {
      //   sender_id: userData.user_id,
      time: formattedTime,
      //   datetime: formattedDate,
      message: message,
    };
    setChatMsg([...chatMsg, data]);
    chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    const scrollTimeout = setTimeout(() => {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }, 0.00000001);
    // const body = new FormData()
    // body.append('type', 'sendmsg')
    // body.append('user_id', data.sender_id)
    // body.append('msg', data.msg)
    // body.append('to_chat_id', chatDetail?.sender_id)
    // await apiRequest({ body })
    //     .then((result) => {
    //         if (result.result) {
    //             setReload(true)
    //             setTimeStamp(result.timestamp)
    //             getChatData()
    //             clearTimeout(scrollTimeout)
    //         }
    //     }).catch((err) => {
    //         console.log(err)
    //     });
    input.value = "";
  };
  // useEffect(() => {
  //     const intervalId = setInterval(() => {
  //         const data = {
  //             sender_id: userData.user_id,
  //             time: formattedTime,
  //             datetime: formattedDate,
  //             // msg: message,
  //         }
  //         const body = new FormData()
  //         body.append('type', 'checkmsg')
  //         body.append('user_id', data.sender_id)
  //         body.append('to_chat_id', chatDetail?.sender_id)
  //         body.append('timestamp', timeStamp)
  //         apiRequest({ body })
  //             .then((result) => {
  //                 if (result.result) {
  //                     setTimeStamp(result.timestamp)
  //                     getChatData()
  //                 }
  //             }).catch((err) => {
  //                 console.log(err)
  //             });
  //     }, 1000);
  //     return () => clearInterval(intervalId);
  // }, [chatDetail]);
  return (
    <div className="chat_height position-relative">
      <div className="px-3 py-2 boxshadow">
        <Link to="" className="display_flex _link_">
          <div
            className="d_left_button"
            onClick={() => {
              setShowChat(false);
            }}
          >
            <ChevronLeft />
          </div>
          <div className="d-flex align-items-center justify-content-between w-100 my-2">
            <h5 className="chatName000">BlazeMaster</h5>
            <BsThreeDots style={{ color: "#000000" }} />
          </div>
          <div className="ps-3">
            <h5 className="chat_detail fs_09">{chatDetail?.name}</h5>
          </div>
        </Link>
      </div>

      <div className="position-relative">
        <div ref={chatMessagesRef} className="chat-messages scrolbar px-2 py-3">
          {chatMsg?.reverse()?.map((msg, index) => (
            <Fragment key={index}>
              <ChatMessage
                left={msg?.left}
                message={msg?.message}
                date={"12/2/1999"}
                time={`${msg?.time}`}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <form onSubmit={sendMessage}>
        <div className="position-absolute ps-2 bottom-0 d-flex align-items-center w-100">
          <div className="me-3">
            <AiOutlinePlus style={{ fontSize: "30px", cursor: "pointer" }} />
          </div>
          <div>
            <BsImage style={{ fontSize: "30px", cursor: "pointer" }} />
          </div>
          <div className="d-flex w-100 my-3 mx-3">
            <div className="position-relative chatInp000 w-100 me-1">
              <input
                type="text"
                id="chatInput"
                required
                className="form-control border-0 ps-2 py-2 fs_10 "
                placeholder="Try to..."
              />
            </div>
            <button className="send_btn rounded-3" type="submit">
              <img src={SendIcon} alt="" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatMessageList;
