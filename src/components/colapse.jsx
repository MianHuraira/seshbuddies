import { React, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import avatar from "../assets/logo/yellow_girl.svg";
import heart from "../assets/logo/icons/heart.svg";
import angle_down from "../assets/logo/icons/angle_down.svg";
const Colapse = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <button
          className="border-0 bg-white black_text_md green-txt"
          onClick={() => setOpen(!open)}
          aria-controls="reply"
          aria-expanded={open}
        >
          View replies (4)
          <img alt="" src={angle_down} className="ms-1" />
        </button>
        <Collapse in={open}>
          {/* <comment> */}
          <div id="reply" className="">
            {/* <comment> block */}
            <div className="d-flex align-items-start  mt-3">
              {" "}
              <img alt="" src={avatar} className="comment_avatar" />
              <div className="w-100 ms-2">
                {/* <name & like section> */}
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div>
                    {" "}
                    <h1 className="black_text_md inter-semi">
                      Jane Doe
                      <span className="light_text_sm ms-1">@Jane D</span>
                    </h1>
                  </div>
                  <p className="gray_text_md justify_center">
                    1h <img alt="" src={heart} className=" ms-2 mb-1 heart" />
                  </p>
                </div>
                {/* comment  */}
                <p className="black_text_md">Looks Like a great time!</p>
                {/* comment  */}
                <div className="black_text_md">
                  2022-12-23
                  <button className="border-0 green-txt bg-white inter-semi ms-2">
                    Reply
                  </button>
                </div>
                {children}
              </div>
            </div>
            {/* <comment> block end*/}
            {/* <comment> block */}
            <div className="d-flex align-items-start  mt-2">
              {" "}
              <img alt="" src={avatar} className="comment_avatar" />
              <div className="w-100 ms-2">
                {/* <name & like section> */}
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div>
                    {" "}
                    <h1 className="black_text_md inter-semi">
                      Jane Doe
                      <span className="light_text_sm ms-1">@Jane D</span>
                    </h1>
                  </div>
                  <p className="gray_text_md justify_center">
                    1h <img alt="" src={heart} className=" ms-2 mb-1 heart" />
                  </p>
                </div>
                {/* comment  */}
                <p className="black_text_md">
                  This is why I love this community 🌿
                </p>
                {/* comment  */}
                <p className="black_text_md">
                  2022-12-23
                  <button className="border-0 green-txt bg-white inter-semi ms-2">
                    Reply
                  </button>
                </p>
              </div>
            </div>
            {/* <comment> block end*/}
            {/* <comment> block */}
            <div className="d-flex align-items-start  mt-2">
              {" "}
              <img alt="" src={avatar} className="comment_avatar" />
              <div className="w-100 ms-2">
                {/* <name & like section> */}
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div>
                    {" "}
                    <h1 className="black_text_md inter-semi">
                      Jane Doe
                      <span className="light_text_sm ms-1">@Jane D</span>
                    </h1>
                  </div>
                  <p className="gray_text_md justify_center">
                    1h <img alt="" src={heart} className=" ms-2 mb-1 heart" />
                  </p>
                </div>
                {/* comment  */}
                <p className="black_text_md">Looks Like a great time!</p>
                {/* comment  */}
                <p className="black_text_md">
                  2022-12-23
                  <button className="border-0 green-txt bg-white inter-semi ms-2">
                    Reply
                  </button>
                </p>
              </div>
            </div>
            {/* <comment> block end*/}
            {/* <comment> block */}
            <div className="d-flex align-items-start  mt-2">
              {" "}
              <img alt="" src={avatar} className="comment_avatar" />
              <div className="w-100 ms-2">
                {/* <name & like section> */}
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div>
                    {" "}
                    <h1 className="black_text_md inter-semi">
                      Jane Doe
                      <span className="light_text_sm ms-1">@Jane D</span>
                    </h1>
                  </div>
                  <p className="gray_text_md justify_center">
                    1h <img alt="" src={heart} className=" ms-2 mb-1 heart" />
                  </p>
                </div>
                {/* comment  */}
                <p className="black_text_md">Looks Like a great time!</p>
                {/* comment  */}
                <p className="black_text_md">
                  2022-12-23
                  <button className="border-0 green-txt bg-white inter-semi ms-2">
                    Reply
                  </button>
                </p>
              </div>
            </div>
            {/* <comment> block end*/}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Colapse;
