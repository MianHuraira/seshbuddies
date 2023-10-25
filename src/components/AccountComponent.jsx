import React, { useState } from 'react'
import angle_right from "../assets/logo/icons/angle_right.svg";
import { Button,Modal,Form } from 'react-bootstrap';
import Pinpoint from "../assets/logo/icons/pinpoint.svg";
import Copy from "../assets/icons/copy.png";
const AccountComponent = () => {
    
    const [Edit, setProfile] = useState(false);
    const Profile_open = () => setProfile(true);
    const Profile_close = () => setProfile(false);
    return (
        <div>
            <div className='bg-white pt-4 px-4 radius_14'>
                <div className='account_head pb-2'>
                    <p className='text-center black_text_lg inter-bold fs-16'>Account</p>
                </div>
                <div className='account_body'>
                    <button onClick={Profile_open} className="black_text_lg d-flex justify-content-between align-items-center w-100 border-0 bg-transparent mt-2 mb-1">
                        <div className="d-flex align-items-center justify-content-center">

                            <p className="inter-semi fs-17 my-2">User Information</p>
                        </div>
                        <img alt="" src={angle_right} className="angle-right" />
                    </button>

                    <div className="black_text_lg d-flex justify-content-between align-items-center w-100 border-0 bg-transparent mt-2 mb-1">
                        <div className="d-flex align-items-center justify-content-center">

                            <p className="inter-semi fs-17 my-2">Password</p>
                        </div>
                        <img alt="" src={angle_right} className="angle-right" />
                    </div>
                    <div className="black_text_lg d-flex justify-content-between align-items-center w-100 border-0 bg-transparent mt-2 mb-1">
                        <div className="d-flex align-items-center justify-content-center">

                            <p className="inter-semi fs-17 my-2">Deactivate or delete account</p>
                        </div>
                        <img alt="" src={angle_right} className="angle-right" />
                    </div>
                </div>
            </div>
            <Modal show={Edit} onHide={Profile_close}
                centered
                size="lg"
                dialogClassName='edit_profile_modal'
            >
                <Modal.Header closeButton className="px-3 py-2 m-0 border-0 Modal_btn">
                    <Modal.Title className="me-auto black_text_lg inter-bold fs-16">
                        Edit profile
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='align_center flex-column'>
                    <p className="mt-2 text-start inter w-100 mb-1">Name</p>
                    <div className="d-flex align-items-center w-100 justify-content-between">
                        <div className="two_select w-100">
                            <Form.Control
                                placeholder="John Doe"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className="radius_12 text_area py-2 inter light_text"
                            />
                        </div>
                    </div>
                    <div className="d-flex align-items-center w-100 justify-content-between">
                        <div className="two_select">
                            <p className="mt-2 text-start inter w-100 mb-1">Phone Number</p>
                            <Form.Control
                                placeholder="+1 316 322 0000"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className="radius_12 text_area py-2 inter light_text"
                            />
                        </div>
                        <div className="two_select">
                            <p className="mt-2 text-start inter w-100 mb-1">Email Address</p>
                            <Form.Control
                                placeholder="mailsesh@SESHBUDDIES.io"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className="radius_12 text_area py-2 inter light_text"
                            />
                        </div>
                    </div>
                    <div className="d-flex align-items-center w-100 justify-content-between">
                        <div className="two_select w-100">
                            <p className="mt-2 text-start inter w-100 mb-1">Username</p>
                            <Form.Control
                                placeholder="John Doe"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className="radius_12 text_area py-2 inter light_text"
                            />
                        </div>
                    </div>
                    <div className='align_center me-auto mt-3'>
                        <p className='black_text_lg fs-16 inter'>SESHBUDDIES.io/@SESHBUDDIES</p>
                        <img src={Copy} alt='' className='ms-1' style={{ width: '20px' }} />
                    </div>
                    <div className='w-100'>
                        <p className=' fs-15 inter-light text-left mt-2 inter mb-3'>Usernames can contain only letters, numbers, underscores, and periods. Changing your username will also change your profile link.</p>
                        <p className=' fs-15 inter-light text-left mt-2 inter mb-3'>You can change your username once every 30 days.</p>
                    </div>
                    <div className="d-flex align-items-center w-100 justify-content-between">
                        <div className="two_select">
                            <p className="mt-2 text-start w-100 mb-1 inter">Date of birth</p>

                            <Form.Select aria-label="Default select example" className="radius_12 text_area py-2 inter light_text">
                                <option className="">Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className="two_select position-relative">
                            <p className="mt-2 text-start w-100 mb-1 inter">Location</p>
                            <Form.Select aria-label="Default select example" className="radius_12 inter text_area py-2 light_text">
                                <option className="">Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <img src={Pinpoint} alt="" className="pinpoint" />

                        </div>
                    </div>
                    <div className="two_select w-100">
                        <p className="mt-2 text-start w-100 mb-1 inter  ">Bio</p>
                        <Form.Control as="textarea" aria-label="With textarea" rows={5} className='text_area inter' />
                    </div>
                    <div className="two_select w-100">
                            <p className="mt-2 text-start w-100 mb-1 inter">URL</p>
                            <Form.Control
                                placeholder="https://"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className="radius_12 text_area inter py-2 light_text"
                            />
                        </div>
                </Modal.Body>
                <Modal.Footer>
     <Button className='btn-primary'>Save</Button>
        </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AccountComponent
