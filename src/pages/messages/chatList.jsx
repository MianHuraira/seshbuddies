/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const ChatList = ({
  name,
  discrip,
  img,
  activeId,
  setActiveChatId,
  setShowChat,
  setChatLoading,
  id,
  time,
  notify,
  data,
  setChatDetail,
  setCheckMsg,
  setCheck,
  status,
  activeUser,
}) => {
  const [badge, setBadge] = useState(null);

  const toggleData = (chatData) => {
    setChatLoading(true);
    setChatDetail(chatData);
    setCheckMsg(true);
    setShowChat(true);
    setCheck(true);
    setActiveChatId(chatData?.id); // Set the active chat ID
    if (notify > 0) {
      setBadge("");
      // notifyUpdate(chatData?.sender_id);
    }
  };
  const isActive = id === activeId;
  // useEffect(() => {
  //     if (isActive) {
  //         toggleData(data)
  //     }
  // }, [activeId, isActive])

  const notifyUpdate = (id) => {};
  return (
    <div>
      <div
        className={`_link_  border-0 `}
        onClick={() => toggleData(data)}
        style={{ cursor: "pointer", padding: "0.6rem 0rem" }}
      >
        <div
          className={`d-flex align-items-center chat-list-link px-2 py-2 w-100 ${
            isActive ? "active" : ""
          }`}
        >
          <div>
            <div className={`${status ? "status_div00" : ""}`}>
              <div className="position-relative">
                <img src={img} alt="" className="chat_profile_img" />
                <span>
                  <span
                    className="noti_badges fs_06"
                    style={{ height: "22px", width: "22px" }}
                    id="chatbadge"
                  >
                    {badge === null ? notify : badge}
                  </span>
                </span>
                <div
                  className={`${activeUser ? "active_user00" : "off_user00"} `}
                ></div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center w-100 pe-1">
            <div className="ps-3 mt-1">
              <h4 className="my-0 chat_name00 mb-2">{name}</h4>
              <div className="chat_detail00 mt-1">{discrip}</div>
            </div>
            <div className="time_div00">
              <h6 className="chat_detail00" style={{ whiteSpace: "nowrap" }}>
                {time}
              </h6>
              <IoIosArrowForward style={{ color: "#BFBFBF" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
