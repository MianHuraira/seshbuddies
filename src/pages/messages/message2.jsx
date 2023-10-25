/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useRef } from "react";
import "./chat.css";
import ChatList from "./chatList";
import { Container, Form } from "react-bootstrap";
import ChatMessageList from "./chatMessageList";
import { useState } from "react";
import profileAvatar from "../../assets/logo/Avatar.svg";
import { Search } from "react-feather";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";

import logoMarck from "../../assets/logo/logoMarck.svg";
import UserDetail from "./UserDetail";

const Message2 = () => {
  const [status, setStatus] = useState("true");
  const [activeUser, setActiveUser] = useState("true");

  const chatlist = [
    {
      id: 1,
      profile: profileAvatar,
      studentName: "GreenGuru",
      discp: "Let’s try the new strain tomorrow!",
      time: "2m",
      notify: "",
      status: true,
      activeUser: true,
    },
    {
      id: 2,
      profile: profileAvatar,
      studentName: "Cameron ",
      discp: "What's the progress on that task?",
      time: "2m",
      notify: "1",
      status: false,
      activeUser: true,
    },
    {
      id: 3,
      profile: profileAvatar,
      studentName: "Cameron Williamson",
      discp: "What's the progress on that task?",
      time: "2m",
      notify: "2",
      status: true,
      activeUser: true,
    },
    {
      id: 4,
      profile: profileAvatar,
      studentName: "Cameron",
      discp: "What's the progress on that task?",
      time: "2m",
      notify: "3",
      status: true,
      activeUser: false,
    },
    {
      id: 5,
      profile: profileAvatar,
      studentName: "Cameron Williamson",
      discp: "What's the progress on that task?",
      time: "2m",
      notify: "2",
      status: false,
      activeUser: true,
    },
    {
      id: 6,
      profile: profileAvatar,
      studentName: "Cameron",
      discp: "What's the progress on that task?",
      time: "2m",
      notify: "3",
      status: false,
      activeUser: true,
    },
    {
      id: 7,
      profile: profileAvatar,
      studentName: "Cameron Williamson",
      discp: "What's the progress on that task?",
      time: "2m",
      notify: "2",
      status: false,
      activeUser: true,
    },
    {
      id: 8,
      profile: profileAvatar,
      studentName: "Cameron",
      discp: "What's the progress on that task?",
      time: "2m",
      notify: "3",
      status: false,
      activeUser: false,
    },
  ];
  const [chatLoading, setChatLoading] = useState(false);
  const [chatDetail, setChatDetail] = useState();
  const [localData, setLocalData] = useState(null);
  const [reload, setReload] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [checkMsg, setCheckMsg] = useState(false);
  const [check, setCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeChatId, setActiveChatId] = useState(null);
  const [checkLoading, setCheckLoading] = useState(true);
  const { state } = useLocation();
  const [checkUser, setCheckUser] = useState([]);
  const { businessData, investorData } = state ? state : {};
  // const userData = JSON.parse(window.localStorage.getItem('globasity_user_data'))
  let chatArray = [];
  // const getChatList = async () => {
  //     setReload(false)
  //     const body = new FormData()
  //     body.append('type', 'chat_list')
  //     body.append('user_id', userData?.user_id)
  //     await apiRequest({ body })
  //         .then((result) => {
  //             const arr = []
  //             const data = result.chat
  //             if (userData.user_type === "business") {
  //                 // setChatlist(data)
  //                 if (data) {
  //                     data.forEach(element => {
  //                         arr.push(element)
  //                     });
  //                     const obj = {
  //                         sender_id: investorData?.id,
  //                         sender_name: investorData?.name,
  //                         sender_img: investorData?.thumb,
  //                         msg: "",
  //                         date: "",
  //                         timestamp: "",
  //                         unseen: 0,
  //                     };
  //                     // Check if the data with the same sender_id already exists in chatlist
  //                     const dataExists = arr.some((element) => element.sender_id === obj.sender_id);
  //                     if (!dataExists) {
  //                         arr.push(obj)
  //                         setChatlist(arr);
  //                     } else {
  //                         setChatlist(data)
  //                     }
  //                 } else {
  //                     const obj = {
  //                         sender_id: investorData?.id,
  //                         sender_name: investorData?.name,
  //                         sender_img: investorData?.thumb,
  //                         msg: "",
  //                         date: "",
  //                         timestamp: "",
  //                         unseen: 0,
  //                     };
  //                     const dataExists = chatArray.some((element) => element.sender_id === obj.sender_id);

  //                     if (!dataExists) {
  //                         chatArray.push(obj)
  //                         setChatlist((prevData) => [...prevData, obj]);
  //                     }
  //                 }
  //             } else {
  //                 if (data) {
  //                     data.forEach(element => {
  //                         arr.push(element)
  //                     });
  //                     const obj = {
  //                         sender_id: businessData?.user?.id,
  //                         sender_name: businessData?.user?.name,
  //                         sender_img: businessData?.thumb,
  //                         msg: "",
  //                         date: "",
  //                         timestamp: "",
  //                         unseen: 0,
  //                     };
  //                     // Check if the data with the same sender_id already exists in chatlist
  //                     const dataExists = arr.some((element) => element.sender_id === obj.sender_id);
  //                     if (!dataExists) {
  //                         arr.push(obj)
  //                         setChatlist(arr);
  //                     } else {
  //                         setChatlist(data)
  //                     }
  //                 } else {
  //                     const obj = {
  //                         sender_id: businessData?.user?.id,
  //                         sender_name: businessData?.user?.name,
  //                         sender_img: businessData?.thumb,
  //                         msg: "",
  //                         date: "",
  //                         timestamp: "",
  //                         unseen: 0,
  //                     };
  //                     const dataExists = chatArray.some((element) => element.sender_id === obj.sender_id);

  //                     if (!dataExists) {
  //                         chatArray.push(obj)
  //                         setChatlist((prevData) => [...prevData, obj]);
  //                     }
  //                 }
  //             }

  //         }).catch((err) => {
  //             console.log(err)
  //         });
  // }
  // useEffect(() => {
  //     if (reload === true)
  //         getChatList()
  // }, [reload])
  // useEffect(() => {
  //     getChatList()
  // }, [])
  return (
    <Container fluid={"lg"} className="px-0 top_padd">
      <div>
        <div className="bg-lightgray">
          <div>
            <div className="chat_grid">
              <div className={`chat_screen`}>
                <div className="pb-1">
                  <div className="d-flex align-items-center justify-content-between px-3">
                    <h4 className="my-4  msg_text">Messages</h4>
                    <div className="d-flex align-items-center">
                      <div className="clos_chat_btn">
                        <IoBagOutline />
                      </div>
                      <div className="logomark_chat mx-2">
                        <img src={logoMarck} alt="" />
                        <h3>940</h3>
                      </div>
                      <div className="clos_chat_btn">
                        <FaBars />
                      </div>
                    </div>
                  </div>
                  <hr style={{ color: "#EDEEF0" }} className="mb-1" />
                  <div className="position-relative main_searchD">
                    <div className="search_icon ">
                      <Search />
                    </div>
                    <Form.Control
                      type="search"
                      className="search ps-5 py-2 rounded-3"
                      placeholder="Search Your course"
                    />
                  </div>
                  <hr style={{ color: "#EDEEF0" }} className="my-1" />
                  <div className="chat_height_contol scrolbar px-3">
                    {
                      <>
                        {chatlist?.map((chat, index) => (
                          <Fragment key={index}>
                            <ChatList
                              id={chat?.id}
                              img={
                                chat?.sender_img
                                  ? `${chat.profile}`
                                  : profileAvatar
                              }
                              name={chat?.studentName}
                              notify={chat?.notify}
                              discrip={chat?.discp}
                              time={chat?.time}
                              data={chat}
                              setChatDetail={setChatDetail}
                              setCheckMsg={setCheckMsg}
                              setCheck={setCheck}
                              setShowChat={setShowChat}
                              setChatLoading={setChatLoading}
                              activeId={activeChatId}
                              setActiveChatId={setActiveChatId}
                              status={chat.status}
                              activeUser={chat.activeUser}
                            />
                          </Fragment>
                        ))}
                      </>
                    }
                  </div>
                </div>
              </div>
              <div
                className={`chat_screen ${showChat ? "" : "d_chat_none"} `}
                id="chatScreen"
              >
                {check ? (
                  <ChatMessageList
                    chatDetail={chatDetail && chatDetail}
                    setReload={setReload}
                    setCheckMsg={setCheckMsg}
                    checkMsg={checkMsg}
                    setChatLoading={setChatLoading}
                    setShowChat={setShowChat}
                  />
                ) : (
                  <div className="display_flex2 flex-column h-100 w-100">
                    <BiSolidMessageRounded style={{ fontSize: "30px" }} />
                    <h4 className="ms-2 my-0 msg_s00">Select a message</h4>
                    <h6
                      style={{ color: "#2D3D38" }}
                      className="text-center mt-2"
                    >
                      Choose from your existing conversations, start a new one,
                      or just keep swimming.
                    </h6>
                  </div>
                )}
              </div>
              <div className="profile_detail00 d-none d-lg-block chat_screen">
                <UserDetail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Message2;
