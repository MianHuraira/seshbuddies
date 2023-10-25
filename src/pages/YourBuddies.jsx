import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import Createpost from '../components/createpost'
import SideMessage from '../components/side_message'
import stars from "../assets/logo/icons/star.svg";
import girl from "../assets/logo/orange-girl.svg";
import StarElement from "../assets/logo/icons/star_element_green.svg";
import AlertWarning from "../assets/logo/icons/alert_warning.svg";
const YourBuddies = () => {

    // ___modal___
    const [RejectConfirm, ShowNotification] = useState(false);
    const Notificationpen = () => ShowNotification(true);
    const NotificationClose = () => ShowNotification(false);
    // ___modal___
    // const [activeTab, setActiveTab] = useState('tab1');
    // const handleTabClick = (tab) => {
    //     setActiveTab(tab);
    // };
    const [activeModalTab, setActiveModalTab] = useState('tab1');
    const handleModalClick = (tab) => {
        setActiveModalTab(tab);
    };
    return (

        <div>
            <div>
                <Container className='top_padd' fluid="xxl">
                    <Row className="w-100 h-100 p-0">
                        <Col lg="3" className=" overflow-hidden">
                            <Createpost />
                        </Col>
                        <Col lg="6" className="main_height no_scrollbar overflow-y-auto">
                            <div>
                                <ul className="nav nav-tabs ModalNav mb-2 p-2" style={{ borderRadius: '999px' }} >
                                    <li className="nav-item nav_item_modal">
                                        <button
                                            className={`nav-link ${activeModalTab === 'tab1' ? 'active' : ''}`}
                                            onClick={() => handleModalClick('tab1')} >
                                            Requests
                                        </button>
                                    </li>
                                    <li className="nav-item nav_item_modal">
                                        <button
                                            className={`nav-link ${activeModalTab === 'tab2' ? 'active' : ''}`}
                                            onClick={() => handleModalClick('tab2')} >
                                            My Buddies
                                        </button>
                                    </li>
                                    <li className="nav-item nav_item_modal">
                                        <button
                                            className={`nav-link ${activeModalTab === 'tab3' ? 'active' : ''}`}
                                            onClick={() => handleModalClick('tab3')} >
                                            Suggested
                                        </button>
                                    </li>
                                </ul>
                                <div>
                                    <div className="tab-content mt-2">

                                        <div className={`tab-pane px-2 ${activeModalTab === 'tab1' ? 'active' : ''}`} id="tab2" >

                                            {/* ___empty Requests___ */}
                                            <div className='align_center flex-column my-5'>
                                                <img src={StarElement} alt='' />
                                                <h1 className='fs-17 inter-bold mt-3 mb-2'>No Requests</h1>
                                                <p className='text-center  m-auto fs-15 w-75'>While you don't have any pending buddy requests, why not connect with some of these suggested buddies?</p>
                                            </div>
                                            {/* ___empty Requests___ */}

                                            {/* ___request___ */}
                                            <div className='bg-white px-3 pt-2 pb-3 radius_12 mb-2'>
                                                <div className="d-flex mt-2">
                                                    <div className="">
                                                        <img alt="" src={girl} className="message-dp" />
                                                    </div>
                                                    <div className="status ms-2">
                                                        <p className="inter-semi fs-14">steve.brown </p>
                                                        <h1 className="fs-13 align_center inter light_text">
                                                            New York, USA
                                                        </h1>
                                                    </div>
                                                    <div className=" ms-auto d-flex justify-content-center align-items-center">
                                                        <div className="d-flex align-items-start me-2 justify-content-center">
                                                            <img alt="" src={stars} className="rating-star" />
                                                            <h1 className="fs-13 inter-bold ms-1">
                                                                4.9
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-evenly mt-3">
                                                    <div className="d-flex desc align-items-center justify-content-center">
                                                        <img alt="" src={stars} className="inter rating-star" />
                                                        <p className="ms-1 inter fs-11">Quality</p>
                                                        <p className="ms-1 green-txt inter fs-11">4.9</p>
                                                    </div>
                                                    <div className="d-flex desc align-items-center justify-content-center">
                                                        <img alt="" src={stars} className="inter rating-star" />
                                                        <p className="ms-1 inter fs-11">Quality</p>
                                                        <p className="ms-1 green-txt inter fs-11">4.5</p>
                                                    </div>
                                                    <div className="d-flex desc align-items-center justify-content-center">
                                                        <img alt="" src={stars} className="inter rating-star" />
                                                        <p className="ms-1 inter fs-11">Rollies</p>
                                                        <p className="ms-1 green-txt inter fs-11">4.0</p>
                                                    </div>
                                                </div>
                                                <p className="black_text_md fs-13 my-2 ms-1">
                                                    Love to explore new strains! 🍃
                                                </p>
                                                <div className='d-flex justify-content-between'>
                                                    <button className='reject_btn w_45' onClick={Notificationpen}>Reject</button>
                                                    <Button className='btn-primary w_45'>Accept</Button>
                                                </div>
                                            </div>
                                            {/* ___request___ */}
                                            {/* ___request___ */}
                                            <div className='bg-white px-3 pt-2 pb-3 radius_12 mb-2'>
                                                <div className="d-flex mt-2">
                                                    <div className="">
                                                        <img alt="" src={girl} className="message-dp" />
                                                    </div>
                                                    <div className="status ms-2">
                                                        <p className="inter-semi fs-14">steve.brown </p>
                                                        <h1 className="fs-13 align_center inter light_text">
                                                            New York, USA
                                                        </h1>
                                                    </div>
                                                    <div className=" ms-auto d-flex justify-content-center align-items-center">
                                                        <div className="d-flex align-items-start me-2 justify-content-center">
                                                            <img alt="" src={stars} className="rating-star" />
                                                            <h1 className="fs-13 inter-bold ms-1">
                                                                4.9
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-evenly mt-3">
                                                    <div className="d-flex desc align-items-center justify-content-center">
                                                        <img alt="" src={stars} className="inter rating-star" />
                                                        <p className="ms-1 inter fs-11">Quality</p>
                                                        <p className="ms-1 green-txt inter fs-11">4.9</p>
                                                    </div>
                                                    <div className="d-flex desc align-items-center justify-content-center">
                                                        <img alt="" src={stars} className="inter rating-star" />
                                                        <p className="ms-1 inter fs-11">Quality</p>
                                                        <p className="ms-1 green-txt inter fs-11">4.5</p>
                                                    </div>
                                                    <div className="d-flex desc align-items-center justify-content-center">
                                                        <img alt="" src={stars} className="inter rating-star" />
                                                        <p className="ms-1 inter fs-11">Rollies</p>
                                                        <p className="ms-1 green-txt inter fs-11">4.0</p>
                                                    </div>
                                                </div>
                                                <p className="black_text_md fs-13 my-2 ms-1">
                                                    Love to explore new strains! 🍃
                                                </p>
                                                <div className='d-flex justify-content-between'>
                                                    <button className='reject_btn w_45'>Reject</button>
                                                    <Button className='btn-primary w_45'>Accept</Button>
                                                </div>
                                            </div>
                                            {/* ___request___ */}
                                            {/* ___request___ */}
                                            <div className='bg-white px-3 pt-2 pb-3 mb-2 radius_12 mb-2'>
                                                <div className="d-flex mt-2">
                                                    <div className="">
                                                        <img alt="" src={girl} className="message-dp" />
                                                    </div>
                                                    <div className="status ms-2">
                                                        <p className="inter-semi fs-14">steve.brown </p>
                                                        <h1 className="fs-13 align_center inter light_text">
                                                            New York, USA
                                                        </h1>
                                                    </div>
                                                    <div className=" ms-auto d-flex justify-content-center align-items-center">
                                                        <div className="d-flex align-items-start me-2 justify-content-center">
                                                            <img alt="" src={stars} className="rating-star" />
                                                            <h1 className="fs-13 inter-bold ms-1">
                                                                4.9
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-evenly mt-3">
                                                    <div className="d-flex desc align-items-center justify-content-center">
                                                        <img alt="" src={stars} className="inter rating-star" />
                                                        <p className="ms-1 inter fs-11">Quality</p>
                                                        <p className="ms-1 green-txt inter fs-11">4.9</p>
                                                    </div>
                                                    <div className="d-flex desc align-items-center justify-content-center">
                                                        <img alt="" src={stars} className="inter rating-star" />
                                                        <p className="ms-1 inter fs-11">Quality</p>
                                                        <p className="ms-1 green-txt inter fs-11">4.5</p>
                                                    </div>
                                                    <div className="d-flex desc align-items-center justify-content-center">
                                                        <img alt="" src={stars} className="inter rating-star" />
                                                        <p className="ms-1 inter fs-11">Rollies</p>
                                                        <p className="ms-1 green-txt inter fs-11">4.0</p>
                                                    </div>
                                                </div>
                                                <p className="black_text_md fs-13 my-2 ms-1">
                                                    Love to explore new strains! 🍃
                                                </p>
                                                <div className='d-flex justify-content-between'>
                                                    <button className='reject_btn w_45'>Reject</button>
                                                    <Button className='btn-primary w_45'>Accept</Button>
                                                </div>
                                            </div>
                                            {/* ___request___ */}
                                        </div>
                                        <div className={`tab-pane px-2 ${activeModalTab === 'tab2' ? 'active' : ''}`} id="tab2" >
                                            {/* ___request___ */}
                                            <div className='bg-white px-3 pt-2 pb-3 mb-2 radius_12 mb-2'>
                                                <div className="d-flex mt-2">
                                                    <div className="">
                                                        <img alt="" src={girl} className="message-dp" />
                                                    </div>
                                                    <div className="status ms-2">
                                                        <p className="inter-semi fs-14">steve.brown </p>
                                                        <h1 className="fs-13 align_center inter light_text">
                                                            New York, USA
                                                        </h1>
                                                    </div>
                                                    <div className=" ms-auto d-flex justify-content-center align-items-center">
                                                        <div className="d-flex align-items-start me-2 justify-content-center">
                                                            <img alt="" src={stars} className="rating-star" />
                                                            <h1 className="fs-13 inter-bold ms-1">
                                                                4.9
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-evenly mt-3">
                                                    <div className="d-flex desc align-items-center justify-content-center">
                                                        <img alt="" src={stars} className="inter rating-star" />
                                                        <p className="ms-1 inter fs-11">Quality</p>
                                                        <p className="ms-1 green-txt inter fs-11">4.9</p>
                                                    </div>
                                                    <div className="d-flex desc align-items-center justify-content-center">
                                                        <img alt="" src={stars} className="inter rating-star" />
                                                        <p className="ms-1 inter fs-11">Quality</p>
                                                        <p className="ms-1 green-txt inter fs-11">4.5</p>
                                                    </div>
                                                    <div className="d-flex desc align-items-center justify-content-center">
                                                        <img alt="" src={stars} className="inter rating-star" />
                                                        <p className="ms-1 inter fs-11">Rollies</p>
                                                        <p className="ms-1 green-txt inter fs-11">4.0</p>
                                                    </div>
                                                </div>
                                                <p className="black_text_md fs-13 my-2 ms-1">
                                                    Love to explore new strains! 🍃
                                                </p>
                                                <div className='d-flex justify-content-between'>
                                                    <button className='reject_btn w_45'>Say Hello👋</button>
                                                    <button className='reject_btn w_45'>Create Seshsion</button>

                                                </div>
                                            </div>
                                            {/* ___request___ */}
                                        </div>
                                        <div className={`tab-pane px-2 ${activeModalTab === 'tab3' ? 'active' : ''}`} id="tab3">
                                            {/* ___request___ */}
                                            <div className='bg-white px-3 pt-2 pb-3 radius_12 mb-2'>
                                                <div className="d-flex mt-2">
                                                    <div className="">
                                                        <img alt="" src={girl} className="message-dp" />
                                                    </div>
                                                    <div className="status ms-2">
                                                        <p className="inter-semi fs-14">steve.brown </p>
                                                        <h1 className="fs-13 align_center inter light_text">
                                                            New York, USA
                                                        </h1>
                                                    </div>
                                                    <div className=" ms-auto d-flex justify-content-center align-items-center">
                                                        <div className="d-flex align-items-start me-2 justify-content-center">
                                                            <img alt="" src={stars} className="rating-star" />
                                                            <h1 className="fs-13 inter-bold ms-1">
                                                                4.9
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-evenly mt-3">
                                                    <div className="d-flex desc align-items-center justify-content-center">
                                                        <img alt="" src={stars} className="inter rating-star" />
                                                        <p className="ms-1 inter fs-11">Quality</p>
                                                        <p className="ms-1 green-txt inter fs-11">4.9</p>
                                                    </div>
                                                    <div className="d-flex desc align-items-center justify-content-center">
                                                        <img alt="" src={stars} className="inter rating-star" />
                                                        <p className="ms-1 inter fs-11">Quality</p>
                                                        <p className="ms-1 green-txt inter fs-11">4.5</p>
                                                    </div>
                                                    <div className="d-flex desc align-items-center justify-content-center">
                                                        <img alt="" src={stars} className="inter rating-star" />
                                                        <p className="ms-1 inter fs-11">Rollies</p>
                                                        <p className="ms-1 green-txt inter fs-11">4.0</p>
                                                    </div>
                                                </div>
                                                <p className="black_text_md fs-13 my-2 ms-1">
                                                    Love to explore new strains! 🍃
                                                </p>
                                                <div className='d-flex justify-content-between'>
                                                    <button className='reject_btn w_45'>Follow</button>
                                                    <Button className='btn-primary w_45'>Add Buddy</Button>
                                                </div>
                                            </div>
                                            {/* ___request___ */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" className=" overflow-hidden">
                            <SideMessage />
                        </Col>
                    </Row>
                </Container>

                {/* ___modal___ */}
                <Modal show={RejectConfirm}
                    size="sm"
                    onHide={NotificationClose}
                    dialogClassName='' centered>
                    <Modal.Header closeButton className="px-4 hide_fcontrol py-2 likes_modal_head">
                        <Modal.Title className="mx-auto black_text_lg inter-bold fs-14 mt-1 ">
                            Confirm
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-4'>
                        <div className="w-100 d-flex align-items-center mt-3 justify-content-center">
                            <img alt=""
                                src={AlertWarning}
                                className="me-2"
                            />
                        </div>
                        <h1 className='black_text_lg inter-bold text-center mb-2 mt-3'>Reject Buddy Request?</h1>
                        <h1 className="black_text_lg text-center inter mb-4 fs-13 w-90 m-auto">
                            Are you sure you want to reject the buddy request from [@Nickname]? This action cannot be undone.
                        </h1>
                        <Button className='btn-primary'>Confirm</Button>
                    </Modal.Body>
                </Modal>


            </div>
        </div>
    )
}

export default YourBuddies
