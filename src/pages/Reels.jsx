import React, { useState } from "react";
import "../assets/css/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Createpost from "../components/createpost";
import { Container } from "react-bootstrap";
import Video from "../assets/video/startUpVideo.mp4";
import LiveProfile from "../assets/images/livePro.png";
import statusIcon from "../assets/icons/status_icon22.png";
import MsgIcon from "../assets/icons/msgIconL00.svg";
import ShairIcon from "../assets/icons/shairIcon.svg";
import SongIocn from "../assets/icons/songIcon.svg";
import whiteLeaf from "../assets/icons/whiteLeaf.svg";
import greenLeaf from "../assets/icons/greenLeaf.svg";
import grenHeart from "../assets/icons/grenHeart.svg";

// ///////////////

import closeBtn from "../assets/logo/close.svg";
import avatar from "../assets/logo/yellow_girl.svg";
import heart from "../assets/logo/icons/heart.svg";
import Form from "react-bootstrap/Form";
import union from "../assets/logo/icons/union.svg";
import emoji from "../assets/logo/icons/emoji.svg";
import comment_upload from "../assets/logo/icons/comment_upload.svg";
import Colapse from "../components/colapse";

const Session = () => {
  const [like, setLike] = useState(false);
  const [msg, setMsg] = useState(false);
  const [likeComnt, setLikeComnt] = useState(false);

  const likeHandle = () => {
    setLike(!like);
  };

  const msgShow = () => {
    setMsg(!msg);
  };

  const hideMsg = () => {
    setMsg(false);
  };
  const likeComment = () => {
    setLikeComnt(!likeComnt);
  };

  return (
    <>
    <div className="main_head00">


      <Container className="top_padd px-4" fluid="xxl">
        <Row className="h-100 p-0">
          <Col lg="3" md="3" className="sideHeight00 d-md-block d-none">
            <Createpost />
          </Col>
          <Col
            lg="6"
            md="9"
            className="main_height no_scrollbar gx-5 overflow-y-auto"
          >
            <div className="d-flex align-items-end">
              <div>
                <div className="video_div position-relative">
                  <video className="video_size" autoPlay src={Video} />
                  <div className="video_head_icon">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img className="LiveProImg" src={LiveProfile} alt="" />
                        <div className="ms-2 d-flex align-items-center">
                          <h3 className="userNameLive">steve.brown</h3>
                          <h5 className="liveRang00 ms-2">4h</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-3 d-flex align-items-center flex-column">
                <div className="mb-4 position-relative cursorP">
                  <img
                    style={{ width: "36px", height: "36px" }}
                    src={LiveProfile}
                    alt=""
                  />
                  <img className="stat00" src={statusIcon} alt="" />
                </div>
                <div className="mb-4 d-flex align-items-center flex-column cursorP">
                  <div onClick={likeHandle} className="mb-2">
                    <img src={like ? greenLeaf : whiteLeaf} alt="" />
                  </div>
                  <h5 className="contM">2.2M</h5>
                </div>
                <div className="mb-4 d-flex align-items-center flex-column cursorP">
                  <div onClick={msgShow} className=" mb-2">
                    <img src={MsgIcon} alt="" />
                  </div>
                  <h5 className="contM">9193</h5>
                </div>
                <div className="mb-4 d-flex align-items-center flex-column cursorP">
                  <div className=" mb-2">
                    <img src={ShairIcon} alt="" />
                  </div>
                  <h5 className="contM">9193</h5>
                </div>
                <div className="d-flex align-items-center flex-column cursorP">
                  <div className="sonDov">
                    <img style={{ width: "13px" }} src={SongIocn} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" className="sideHeight00 d-lg-block d-none">
            <div
              className={`${
                msg ? "d-block" : "d-none"
              } main_comnt_div00 d-flex p-0 bg-white flex-column justify-content-between`}
            >
              <div className="d-flex justify-content-between align-items-center mx-3 mt-3 mb-3">
                <h1 className="black_text_lg">35 Comments</h1>
                <img
                  className="cursorP"
                  onClick={hideMsg}
                  src={closeBtn}
                  alt=""
                />
              </div>
              <div className="pt-3 px-3 w-100 comment_block no_scrollbar overflow-y-auto overflow-x-hidden">
                <div className="d-flex align-items-start">
                  <img alt="" src={avatar} className="comment_avatar" />
                  <div className="w-100 ms-2">
                    {/* <name & like section> */}
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h1 className="black_text_md inter-semi">
                          Jane Doe
                          <span className="light_text_sm ms-1">@Jane D</span>
                        </h1>
                      </div>
                      <div className="gray_text_md justify_center">
                        1h
                        <img
                          onClick={likeComment}
                          alt=""
                          src={likeComnt ? grenHeart : heart}
                          className="ms-2 mb-1 heart"
                        />
                      </div>
                    </div>
                    {/* <name & like section> */}

                    {/* comment  */}
                    <p className="black_text_md">Looks Like a great time!</p>
                    {/* comment  */}
                    <div className="black_text_md">
                      2022-12-23
                      <button className="border-0 green-txt bg-white inter-semi ms-2">
                        Reply
                      </button>
                      <Colapse children={<Colapse />} />
                    </div>

                    {/* repl  y show */}
                  </div>
                </div>

                <div className="d-flex align-items-start mt-3">
                  <img alt="" src={avatar} className="comment_avatar" />
                  <div className="w-100 ms-2">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h1 className="black_text_md inter-semi">
                          Jane Doe
                          <span className="light_text_sm ms-1">@Jane D</span>
                        </h1>
                      </div>
                      <div className="gray_text_md justify_center">
                        1h
                        <img alt="" src={heart} className=" ms-2 mb-1 heart" />
                      </div>
                    </div>

                    <p className="black_text_md">Looks Like a great time!</p>

                    <div className="black_text_md">
                      2022-12-23
                      <button className="border-0 green-txt bg-white inter-semi ms-2">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-start mt-3">
                  <img alt="" src={avatar} className="comment_avatar" />
                  <div className="w-100 ms-2">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h1 className="black_text_md inter-semi">
                          Jane Doe
                          <span className="light_text_sm ms-1">@Jane D</span>
                        </h1>
                      </div>
                      <div className="gray_text_md justify_center">
                        1h
                        <img alt="" src={heart} className=" ms-2 mb-1 heart" />
                      </div>
                    </div>

                    <p className="black_text_md">Looks Like a great time!</p>

                    <div className="black_text_md">
                      2022-12-23
                      <button className="border-0 green-txt bg-white inter-semi ms-2">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-start mt-3">
                  <img alt="" src={avatar} className="comment_avatar" />
                  <div className="w-100 ms-2">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h1 className="black_text_md inter-semi">
                          Jane Doe
                          <span className="light_text_sm ms-1">@Jane D</span>
                        </h1>
                      </div>
                      <div className="gray_text_md justify_center">
                        1h
                        <img alt="" src={heart} className=" ms-2 mb-1 heart" />
                      </div>
                    </div>

                    <p className="black_text_md">Looks Like a great time!</p>

                    <div className="black_text_md">
                      2022-12-23
                      <button className="border-0 green-txt bg-white inter-semi ms-2">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-start mt-3">
                  <img alt="" src={avatar} className="comment_avatar" />
                  <div className="w-100 ms-2">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h1 className="black_text_md inter-semi">
                          Jane Doe
                          <span className="light_text_sm ms-1">@Jane D</span>
                        </h1>
                      </div>
                      <div className="gray_text_md justify_center">
                        1h
                        <img alt="" src={heart} className=" ms-2 mb-1 heart" />
                      </div>
                    </div>

                    <p className="black_text_md">Looks Like a great time!</p>

                    <div className="black_text_md">
                      2022-12-23
                      <button className="border-0 green-txt bg-white inter-semi ms-2">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="light_border_top">
                <div className="comment_input mt-2 mb-2">
                  <Form.Control
                    type="text"
                    id="comment_feild"
                    placeholder="Add comment..."
                    aria-describedby="comment_feild"
                    name="comment_feild"
                  />
                  <div className="ms-auto me-3">
                    <img alt="" src={union} className="input_icon cursorP" />
                    <img
                      alt=""
                      src={emoji}
                      className="input_icon mx-2 cursorP"
                    />
                    <img
                      alt=""
                      src={comment_upload}
                      className="input_icon cursorP"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default Session;
