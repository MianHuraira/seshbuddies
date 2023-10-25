import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import ProfileSettings from '../components/ProfileSettings';
// import AccountComponent from '../components/AccountComponent';
// import Support from '../components/Support';
// import ProfileAbout from '../components/ProfileAbout';
import ProfileNoti from '../components/profile_noti';
const UserAccount = () => {
    return (
        <div>
            <Container fluid="xxl">
                <Row className="w-100 h-100 p-0 pt-4">
                    <Col lg="3" className=" overflow-hidden">
                        <ProfileSettings />
                    </Col>
                    <Col lg="6" className="centered_height no_scrollbar ps-5 overflow-y-auto">
                        {/* <AccountComponent/> */}
                        {/* <Support/> */}
                        {/* <ProfileAbout /> */}
                        <ProfileNoti/>
                    </Col>
                    <Col lg="3" className=" overflow-hidden">
                        {" "}
                        {/* <SideMessage />{" "} */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserAccount

