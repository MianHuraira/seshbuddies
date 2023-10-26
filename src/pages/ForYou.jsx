import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Createpost from '../components/createpost'
import SideMessage from '../components/side_message'
import ForYouInner from '../components/ForYouInner';
import Forbuddies from '../components/Forbuddies';

const ForYou = () => {
    // ___for you/For buddies___
    const [activeModalTab, setActiveModalTab] = useState('tab1');
    const handleModalClick = (tab) => {
        setActiveModalTab(tab);
    };
    // ___for you/For buddies__
    return (

        <div>
            <div>
                <Container fluid="xxl">
                    <Row className="w-100 h-100 p-0 pt-4">
                        <Col lg="3" className=" overflow-hidden">
                            <Createpost />
                        </Col>
                        <Col lg="6" className="centered_height no_scrollbar overflow-y-auto">
                            {/* ___FOR YOU / FOR BUDDIES TABS___ */}
                            <div>
                                <ul className="nav nav-tabs ModalNav mb-2 p-2" style={{ borderRadius: '999px' }} >
                                    <li className="nav-item foryouTabs">
                                        <button
                                            className={`nav-link ${activeModalTab === 'tab1' ? 'active' : ''}`}
                                            onClick={() => handleModalClick('tab1')} >
                                            For you
                                        </button>
                                    </li>
                                    <li className="nav-item foryouTabs">
                                        <button
                                            className={`nav-link ${activeModalTab === 'tab2' ? 'active' : ''}`}
                                            onClick={() => handleModalClick('tab2')} >
                                            For buddies
                                        </button>
                                    </li>

                                </ul>
                                <div>
                                    <div className="tab-content mt-2">

                                        <div className={`tab-pane px-2 ${activeModalTab === 'tab1' ? 'active' : ''}`} id="tab1" >
                                            {/* FOR YOU INNER TABS____ */}
                                            <ForYouInner />
                                            {/* FOR YOU INNER TABS EnD____ */}
                                        </div>
                                        <div className={`tab-pane px-2 ${activeModalTab === 'tab2' ? 'active' : ''}`} id="tab2" >
                                            <Forbuddies/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ___FOR YOU / FOR BUDDIES TABS___ */}

                        </Col>
                        <Col lg="3" className=" overflow-hidden">
                            <SideMessage />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ForYou
