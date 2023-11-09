import React, { useState } from "react";
import "../assets/css/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Createpost from "../components/createpost";
import SideMessage from "../components/side_message";
import { Container, Modal } from "react-bootstrap";
import CommentModal from "../components/comment_modal";
import Story from "../components/story";
import reel_girl from "../assets/logo/reel_girl.svg";
import girl from "../assets/logo/orange-girl.svg";
import avatar from "../assets/logo/Avatar.svg";
import stars from "../assets/logo/icons/star.svg";
import WatchReels from "../components/watch_reels";
import { Swiper, SwiperSlide } from "swiper/react";
import Status_icon from "../assets/icons/status_icon.png";
import HashIcon from "../assets/icons/hash_icon.png";
import EyeIcon from "../assets/icons/eye_icon.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Search = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [Likes, setLike] = useState(false);
  const Likes_btn_close = () => setLike(false);
  const Likes_btn_open = () => setLike(true);

  const [activeModalTab, setActiveModalTab] = useState("tab1");
  const handleModalClick = (tab) => {
    setActiveModalTab(tab);
  };

  
  return (
    <div>
      <Container className="top_padd" fluid="xxl">
        <Row className="w-100 h-100 p-0">
          <Col lg="3" className=" overflow-hidden">
            <Createpost />
          </Col>
          <Col lg="6" className="main_height no_scrollbar ps-5 overflow-y-auto">
            <ul
              className="nav nav-tabs border-0 mb-2 p-2"
              style={{ borderRadius: "999px" }}
            >
              <li className="nav-item search_tab">
                <button
                  className={`nav-link ${
                    activeModalTab === "tab1" ? "active" : ""
                  }`}
                  onClick={() => handleModalClick("tab1")}
                >
                  Top
                </button>
              </li>
              <li className="nav-item search_tab">
                <button
                  className={`nav-link ${
                    activeModalTab === "tab2" ? "active" : ""
                  }`}
                  onClick={() => handleModalClick("tab2")}
                >
                  Buddies
                </button>
              </li>
              <li className="nav-item search_tab">
                <button
                  className={`nav-link ${
                    activeModalTab === "tab3" ? "active" : ""
                  }`}
                  onClick={() => handleModalClick("tab3")}
                >
                  Reels
                </button>
              </li>
              <li className="nav-item search_tab">
                <button
                  className={`nav-link ${
                    activeModalTab === "tab4" ? "active" : ""
                  }`}
                  onClick={() => handleModalClick("tab4")}
                >
                  LIVE
                </button>
              </li>
              <li className="nav-item search_tab">
                <button
                  className={`nav-link ${
                    activeModalTab === "tab5" ? "active" : ""
                  }`}
                  onClick={() => handleModalClick("tab5")}
                >
                  Hashtags
                </button>
              </li>
            </ul>

            {/* tab content  */}
            <div className="tab-content mt-3">
              <div
                className={`tab-pane px-2 ${
                  activeModalTab === "tab1" ? "active" : ""
                }`}
                id="tab1"
              >
                <h5 className="item_hed">Buddies</h5>
                <div className="overflow-auto">
                  <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={0}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper py-3"
                  >
                    <SwiperSlide>
                      <div className="buddies_card px-3 me-2">
                        <div className="buddies_round position-relative">
                          <img alt="" src={avatar} />
                          <img
                            style={{
                              top: "20px",
                              width: "17px",
                              height: "17px",
                            }}
                            className="status_icon"
                            src={Status_icon}
                            alt=""
                          />
                        </div>
                        <p className="inter-semi mt-1 fs-13">Mary_Jane</p>
                        <div className="d-flex align-items-start mt-2  justify-content-center">
                          <img alt="" src={stars} className="rating-star" />
                          <h1 className="fw-bold fs-12 ms-1 inter">4.9</h1>
                        </div>

                        <button className="green-txt follow_buddy_btn inter-semi fs-14 mt-3">
                          Follow
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="buddies_card px-3 me-2">
                        <div className="buddies_round position-relative">
                          <img alt="" src={avatar} />
                          <img
                            style={{
                              top: "20px",
                              width: "17px",
                              height: "17px",
                            }}
                            className="status_icon"
                            src={Status_icon}
                            alt=""
                          />
                        </div>
                        <p className="inter-semi mt-1 fs-13">Mary_Jane</p>
                        <div className="d-flex align-items-start mt-2  justify-content-center">
                          <img alt="" src={stars} className="rating-star" />
                          <h1 className="fw-bold fs-12 ms-1 inter">4.9</h1>
                        </div>

                        <button className="green-txt follow_buddy_btn inter-semi fs-14 mt-3">
                          Follow
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="buddies_card px-3 me-2">
                        <div className="buddies_round position-relative">
                          <img alt="" src={avatar} />
                          <img
                            style={{
                              top: "20px",
                              width: "17px",
                              height: "17px",
                            }}
                            className="status_icon"
                            src={Status_icon}
                            alt=""
                          />
                        </div>
                        <p className="inter-semi mt-1 fs-13">Mary_Jane</p>
                        <div className="d-flex align-items-start mt-2  justify-content-center">
                          <img alt="" src={stars} className="rating-star" />
                          <h1 className="fw-bold fs-12 ms-1 inter">4.9</h1>
                        </div>

                        <button className="green-txt follow_buddy_btn inter-semi fs-14 mt-3">
                          Follow
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="buddies_card px-3 me-2">
                        <div className="buddies_round position-relative">
                          <img alt="" src={avatar} />
                          <img
                            style={{
                              top: "20px",
                              width: "17px",
                              height: "17px",
                            }}
                            className="status_icon"
                            src={Status_icon}
                            alt=""
                          />
                        </div>
                        <p className="inter-semi mt-1 fs-13">Mary_Jane</p>
                        <div className="d-flex align-items-start mt-2  justify-content-center">
                          <img alt="" src={stars} className="rating-star" />
                          <h1 className="fw-bold fs-12 ms-1 inter">4.9</h1>
                        </div>

                        <button className="green-txt follow_buddy_btn inter-semi fs-14 mt-3">
                          Follow
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="buddies_card px-3 me-2">
                        <div className="buddies_round position-relative">
                          <img alt="" src={avatar} />
                          <img
                            style={{
                              top: "20px",
                              width: "17px",
                              height: "17px",
                            }}
                            className="status_icon"
                            src={Status_icon}
                            alt=""
                          />
                        </div>
                        <p className="inter-semi mt-1 fs-13">Mary_Jane</p>
                        <div className="d-flex align-items-start mt-2  justify-content-center">
                          <img alt="" src={stars} className="rating-star" />
                          <h1 className="fw-bold fs-12 ms-1 inter">4.9</h1>
                        </div>

                        <button className="green-txt follow_buddy_btn inter-semi fs-14 mt-3">
                          Follow
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="buddies_card px-3 me-2">
                        <div className="buddies_round position-relative">
                          <img alt="" src={avatar} />
                          <img
                            style={{
                              top: "20px",
                              width: "17px",
                              height: "17px",
                            }}
                            className="status_icon"
                            src={Status_icon}
                            alt=""
                          />
                        </div>
                        <p className="inter-semi mt-1 fs-13">Mary_Jane</p>
                        <div className="d-flex align-items-start mt-2  justify-content-center">
                          <img alt="" src={stars} className="rating-star" />
                          <h1 className="fw-bold fs-12 ms-1 inter">4.9</h1>
                        </div>

                        <button className="green-txt follow_buddy_btn inter-semi fs-14 mt-3">
                          Follow
                        </button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                {/* reels start */}

                <h5 className="item_hed mt-3">Reels</h5>
                <div className=" overflow-auto mt-3">
                  <WatchReels />
                </div>

                <h5 className="item_hed mt-3">Live</h5>
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper mt-3"
                >
                  <SwiperSlide>
                    <button className="border-0 reel_img me-2 position-relative">
                      <img
                        alt=""
                        src={reel_girl}
                        className="reel_girl radius_8"
                      />
                      <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
                        <div className="d-flex align-items-center">
                          <div className="live_div_main">Live</div>
                          <div className="eye_div_main ms-2">
                            <img className="me-2" src={EyeIcon} alt="" />
                            235
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <img alt="" src={avatar} className="user_img me-1" />{" "}
                          <p className="text-white inter fs-11">Steve.brown</p>
                        </div>
                      </div>
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button className="border-0 reel_img me-2 position-relative">
                      <img
                        alt=""
                        src={reel_girl}
                        className="reel_girl radius_8"
                      />
                      <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
                        <div className="d-flex align-items-center">
                          <div className="live_div_main">Live</div>
                          <div className="eye_div_main ms-2">
                            <img className="me-2" src={EyeIcon} alt="" />
                            235
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <img alt="" src={avatar} className="user_img me-1" />{" "}
                          <p className="text-white inter fs-11">Steve.brown</p>
                        </div>
                      </div>
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button className="border-0 reel_img me-2 position-relative">
                      <img
                        alt=""
                        src={reel_girl}
                        className="reel_girl radius_8"
                      />
                      <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
                        <div className="d-flex align-items-center">
                          <div className="live_div_main">Live</div>
                          <div className="eye_div_main ms-2">
                            <img className="me-2" src={EyeIcon} alt="" />
                            235
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <img alt="" src={avatar} className="user_img me-1" />{" "}
                          <p className="text-white inter fs-11">Steve.brown</p>
                        </div>
                      </div>
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button className="border-0 reel_img me-2 position-relative">
                      <img
                        alt=""
                        src={reel_girl}
                        className="reel_girl radius_8"
                      />
                      <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
                        <div className="d-flex align-items-center">
                          <div className="live_div_main">Live</div>
                          <div className="eye_div_main ms-2">
                            <img className="me-2" src={EyeIcon} alt="" />
                            235
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <img alt="" src={avatar} className="user_img me-1" />{" "}
                          <p className="text-white inter fs-11">Steve.brown</p>
                        </div>
                      </div>
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button className="border-0 reel_img me-2 position-relative">
                      <img
                        alt=""
                        src={reel_girl}
                        className="reel_girl radius_8"
                      />
                      <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
                        <div className="d-flex align-items-center">
                          <div className="live_div_main">Live</div>
                          <div className="eye_div_main ms-2">
                            <img className="me-2" src={EyeIcon} alt="" />
                            235
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <img alt="" src={avatar} className="user_img me-1" />{" "}
                          <p className="text-white inter fs-11">Steve.brown</p>
                        </div>
                      </div>
                    </button>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div
                className={`tab-pane px-2 ${
                  activeModalTab === "tab2" ? "active" : ""
                }`}
                id="tab2"
              >
                <div className="d-flex mb-3 justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <img alt="" src={girl} className="likes_dp" />
                    <div className="ms-3 height-30 me-4">
                      <p className="black_text_lg inter-semi fs-15">
                        trailblaze
                      </p>
                      <div className="d-flex align-items-start">
                        <img alt="" src={stars} className="rating-star" />
                        <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                      </div>
                    </div>
                  </div>
                  <button className="follow_modalbtn Likes_active">
                    Follow
                  </button>
                </div>
                <div className="d-flex mb-3 justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <img alt="" src={girl} className="likes_dp" />
                    <div className="ms-3 height-30 me-4">
                      <p className="black_text_lg inter-semi fs-15">
                        trailblaze
                      </p>
                      <div className="d-flex align-items-start">
                        <img alt="" src={stars} className="rating-star" />
                        <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                      </div>
                    </div>
                  </div>
                  <button className="follow_modalbtn Likes_active">
                    Follow
                  </button>
                </div>
                <div className="d-flex mb-3 justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <img alt="" src={girl} className="likes_dp" />
                    <div className="ms-3 height-30 me-4">
                      <p className="black_text_lg inter-semi fs-15">
                        trailblaze
                      </p>
                      <div className="d-flex align-items-start">
                        <img alt="" src={stars} className="rating-star" />
                        <h1 className="black_text_md_bold ms-1 fs-14">4.9</h1>
                      </div>
                    </div>
                  </div>
                  <button className="follow_modalbtn Likes_active">
                    Follow
                  </button>
                </div>
              </div>
              <div
                className={`tab-pane px-2 ${
                  activeModalTab === "tab3" ? "active" : ""
                }`}
                id="tab3"
              >
                <div className=" overflow-auto mt-3">
                  <WatchReels />
                </div>
              </div>
              <div
                className={`tab-pane px-2 ${
                  activeModalTab === "tab4" ? "active" : ""
                }`}
                id="tab4"
              >
                <Row>
                  <Col className="mb-3" lg="3">
                    <button className="border-0 reel_img me-2 position-relative">
                      <img
                        alt=""
                        src={reel_girl}
                        className="reel_girl radius_8"
                      />
                      <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
                        <div className="d-flex align-items-center">
                          <div className="live_div_main">Live</div>
                          <div className="eye_div_main ms-2">
                            <img className="me-2" src={EyeIcon} alt="" />
                            235
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <img alt="" src={avatar} className="user_img me-1" />{" "}
                          <p className="text-white inter fs-11">Steve.brown</p>
                        </div>
                      </div>
                    </button>
                  </Col>
                  <Col className="mb-3" lg="3">
                    <button className="border-0 reel_img me-2 position-relative">
                      <img
                        alt=""
                        src={reel_girl}
                        className="reel_girl radius_8"
                      />
                      <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
                        <div className="d-flex align-items-center">
                          <div className="live_div_main">Live</div>
                          <div className="eye_div_main ms-2">
                            <img className="me-2" src={EyeIcon} alt="" />
                            235
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <img alt="" src={avatar} className="user_img me-1" />{" "}
                          <p className="text-white inter fs-11">Steve.brown</p>
                        </div>
                      </div>
                    </button>
                  </Col>
                  <Col className="mb-3" lg="3">
                    <button className="border-0 reel_img me-2 position-relative">
                      <img
                        alt=""
                        src={reel_girl}
                        className="reel_girl radius_8"
                      />
                      <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
                        <div className="d-flex align-items-center">
                          <div className="live_div_main">Live</div>
                          <div className="eye_div_main ms-2">
                            <img className="me-2" src={EyeIcon} alt="" />
                            235
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <img alt="" src={avatar} className="user_img me-1" />{" "}
                          <p className="text-white inter fs-11">Steve.brown</p>
                        </div>
                      </div>
                    </button>
                  </Col>
                  <Col className="mb-3" lg="3">
                    <button className="border-0 reel_img me-2 position-relative">
                      <img
                        alt=""
                        src={reel_girl}
                        className="reel_girl radius_8"
                      />
                      <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
                        <div className="d-flex align-items-center">
                          <div className="live_div_main">Live</div>
                          <div className="eye_div_main ms-2">
                            <img className="me-2" src={EyeIcon} alt="" />
                            235
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <img alt="" src={avatar} className="user_img me-1" />{" "}
                          <p className="text-white inter fs-11">Steve.brown</p>
                        </div>
                      </div>
                    </button>
                  </Col>
                  <Col className="mb-3" lg="3">
                    <button className="border-0 reel_img me-2 position-relative">
                      <img
                        alt=""
                        src={reel_girl}
                        className="reel_girl radius_8"
                      />
                      <div className=" reel-text h-100 justify-content-between d-flex flex-column p-2">
                        <div className="d-flex align-items-center">
                          <div className="live_div_main">Live</div>
                          <div className="eye_div_main ms-2">
                            <img className="me-2" src={EyeIcon} alt="" />
                            235
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <img alt="" src={avatar} className="user_img me-1" />{" "}
                          <p className="text-white inter fs-11">Steve.brown</p>
                        </div>
                      </div>
                    </button>
                  </Col>
                </Row>
              </div>
              <div
                className={`tab-pane px-2 ${
                  activeModalTab === "tab5" ? "active" : ""
                }`}
                id="tab5"
              >
                <div
                  onClick={Likes_btn_open}
                  className="d-flex align-items-center justify-content-between mb-3"
                >
                  <div className="d-flex align-items-center">
                    <div className="hash_div">
                      <img src={HashIcon} alt="" />
                    </div>
                    <h5 className="ms-3 hash_con">#BlazeAndPraise</h5>
                  </div>
                  <h6 className="hash_view_con">445.5B views</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <div className="hash_div">
                      <img src={HashIcon} alt="" />
                    </div>
                    <h5 className="ms-3 hash_con">#BlazeAndPraise</h5>
                  </div>
                  <h6 className="hash_view_con">445.5B views</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <div className="hash_div">
                      <img src={HashIcon} alt="" />
                    </div>
                    <h5 className="ms-3 hash_con">#BlazeAndPraise</h5>
                  </div>
                  <h6 className="hash_view_con">445.5B views</h6>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="3" className=" overflow-hidden">
            {" "}
            <SideMessage />
          </Col>
        </Row>
      </Container>
      {/* ---modal--- */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="py-0">
          <Row>
            <Col
              sm={6}
              className="p-0"
              style={{ borderRight: "1px solid lightgray" }}
            >
              <Story />
            </Col>
            <Col sm={6} className="p-0">
              <CommentModal handleClose={handleClose} />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* //// */}

      <Modal
        show={Likes}
        onHide={Likes_btn_close}
        backdrop="static"
        centered
        keyboard={false}
        dialogClassName="rating_modal"
      >
        <Modal.Header closeButton className="px-3 py-2 likes_modal_head">
          <Modal.Title className="m-auto black_text_lg inter-bold fs-16 mt-1">
            Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=" py-2 px-4  overflow-y-auto no_scrollbar">
          <div className="d-flex align-items-center justify-content-between flex-column mb-3">
            <div className="hash_div">
              <img src={HashIcon} alt="" />
            </div>
            <h5 className="ms-3 mt-3 hash_con">#BlazeAndPraise</h5>

            <h6 className="hash_view_con mt-3">445.5B views</h6>
            <button className="btn_default mt-3">Use this hashtag</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>

    // modal
  );
};

export default Search;
