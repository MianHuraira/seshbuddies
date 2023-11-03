import React from "react";
import close from "../assets/logo/close.svg";
import avatar from "../assets/logo/yellow_girl.svg";
import heart from "../assets/logo/icons/heart.svg";
import Form from "react-bootstrap/Form";
import union from "../assets/logo/icons/union.svg";
import emoji from "../assets/logo/icons/emoji.svg";
import comment_upload from "../assets/logo/icons/comment_upload.svg";
import Colapse from "./colapse";

const Comment_modal = ({ handleClose }) => {
  return (
    <div className="d-flex p-0 flex-column justify-content-between">
      <div className="d-flex justify-content-between align-items-center mx-3 mt-3 mb-3">
        <h1 className="black_text_lg">35 Comments</h1>
        <button className="border-0 bg-white" onClick={handleClose}>
          <img alt="" src={close} className="close_btn"></img>
        </button>
      </div>
      <div className="pt-3 px-3 w-100 comment_block no_scrollbar overflow-y-auto overflow-x-hidden">
        <div className="d-flex align-items-start">
          <img alt="" src={avatar} className="comment_avatar" />
          <div className="w-100 ms-2">
            {/* <name & like section> */}
            <div className="d-flex justify-content-between align-items-center w-100">
              <div>
                <h1 className="black_text_md inter-semi">
                  Jane Doe<span className="light_text_sm ms-1">@Jane D</span>
                </h1>
              </div>
              <p className="gray_text_md justify_center">
                1h <img alt="" src={heart} className=" ms-2 mb-1 heart" />
              </p>
            </div>
            {/* <name & like section> */}

            {/* comment  */}
            <p className="black_text_md">Looks Like a great time!</p>
            {/* comment  */}
            <p className="black_text_md">
              2022-12-23
              <button className="border-0 green-txt bg-white inter-semi ms-2">
                Reply
              </button>
              <Colapse children={<Colapse />} />
            </p>

            {/* repl  y show */}
          </div>
        </div>

        <div className="d-flex align-items-start mt-3">
          <img alt="" src={avatar} className="comment_avatar" />
          <div className="w-100 ms-2">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div>
                <h1 className="black_text_md inter-semi">
                  Jane Doe<span className="light_text_sm ms-1">@Jane D</span>
                </h1>
              </div>
              <p className="gray_text_md justify_center">
                1h <img alt="" src={heart} className=" ms-2 mb-1 heart" />
              </p>
            </div>

            <p className="black_text_md">Looks Like a great time!</p>

            <p className="black_text_md">
              2022-12-23
              <button className="border-0 green-txt bg-white inter-semi ms-2">
                Reply
              </button>
            </p>
          </div>
        </div>

        <div className="d-flex align-items-start mt-3">
          <img alt="" src={avatar} className="comment_avatar" />
          <div className="w-100 ms-2">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div>
                <h1 className="black_text_md inter-semi">
                  Jane Doe<span className="light_text_sm ms-1">@Jane D</span>
                </h1>
              </div>
              <p className="gray_text_md justify_center">
                1h <img alt="" src={heart} className=" ms-2 mb-1 heart" />
              </p>
            </div>

            <p className="black_text_md">Looks Like a great time!</p>

            <p className="black_text_md">
              2022-12-23
              <button className="border-0 green-txt bg-white inter-semi ms-2">
                Reply
              </button>
            </p>
          </div>
        </div>

        <div className="d-flex align-items-start mt-3">
          <img alt="" src={avatar} className="comment_avatar" />
          <div className="w-100 ms-2">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div>
                <h1 className="black_text_md inter-semi">
                  Jane Doe<span className="light_text_sm ms-1">@Jane D</span>
                </h1>
              </div>
              <p className="gray_text_md justify_center">
                1h <img alt="" src={heart} className=" ms-2 mb-1 heart" />
              </p>
            </div>

            <p className="black_text_md">Looks Like a great time!</p>

            <p className="black_text_md">
              2022-12-23
              <button className="border-0 green-txt bg-white inter-semi ms-2">
                Reply
              </button>
            </p>
          </div>
        </div>

        <div className="d-flex align-items-start mt-3">
          <img alt="" src={avatar} className="comment_avatar" />
          <div className="w-100 ms-2">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div>
                <h1 className="black_text_md inter-semi">
                  Jane Doe<span className="light_text_sm ms-1">@Jane D</span>
                </h1>
              </div>
              <p className="gray_text_md justify_center">
                1h <img alt="" src={heart} className=" ms-2 mb-1 heart" />
              </p>
            </div>

            <p className="black_text_md">Looks Like a great time!</p>

            <p className="black_text_md">
              2022-12-23
              <button className="border-0 green-txt bg-white inter-semi ms-2">
                Reply
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="light_border_top">
        <div className="comment_input mt-2">
          <Form.Control
            type="text"
            className="w-100"
            id="comment_feild"
            placeholder="Add comment..."
            aria-describedby="comment_feild"
            name="comment_feild"
          />
          <div className="ms-auto d-flex align-items-center me-3">
            <div className="ms-3 cursorP">
              <img alt="" src={union} className="input_icon" />
            </div>
            <div className="ms-3 cursorP">
              <img alt="" src={emoji} className="input_icon" />
            </div>
            <div className="ms-3 cursorP">
              <img alt="" src={comment_upload} className="input_icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment_modal;
