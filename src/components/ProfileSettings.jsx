import React from "react";
import angle_right from "../assets/logo/icons/angle_right.svg";
import User from "../assets/icons/single_user.png";
import lock from "../assets/icons/lock.png";
import sheild from "../assets/icons/sheild.png";
import bell_icon from "../assets/icons/bell_icon.png";
import flag from "../assets/icons/flag.png";
import support from "../assets/icons/support_message.png";
import info_full from "../assets/icons/info_icon_full.png";
import bin from "../assets/icons/bin_icon.png";
import logout from "../assets/icons/logout_icon.png";
import { NavLink } from "react-router-dom";
const ProfileSettings = () => {
    return (
        <div className="ms-5 pb-5">

            <h1 className="inter-bold fs-14 mb-4 mt-3">Settings and privacy</h1>
            <div className="explore">
                <p className="semibold  l-black inter-medium fs-14">Security & Privacy</p>
                <NavLink to={"/account"} className="black_text_lg d-flex justify-content-between align-items-center w-100 border-0 bg-transparent mt-2">
                    <div className="d-flex align-items-center justify-content-center">
                        <img
                            alt=""
                            src={User}
                            className="me-2 profile_icon"
                            style={{ margin: "0px 2px" }}
                        />
                        <p className="inter-semi fs-14 my-2">Account</p>
                    </div>
                    <img alt="" src={angle_right} className="angle-right" />
                </NavLink>
                <div className="d-flex justify-content-between mt-1">
                    <div className="d-flex align-items-center justify-content-center">
                        <img alt="" src={lock} className="me-2 profile_icon" style={{marginLeft:'3px'}} />
                        <p className="my-2 inter-semi fs-14">Privacy</p>
                    </div>
                    <img alt="" src={angle_right} className="angle-right" />
                </div>
                <div className="d-flex justify-content-between mt-1">
                    <div className="d-flex black_text_lg align-items-center justify-content-between w-100">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={sheild} alt="" className=" ms-1 me-1 profile_icon" />
                            <p className="my-2 inter-semi fs-14">Security</p>
                        </div>
                        <img alt="" src={angle_right} className="angle-right" />
                    </div>
                </div>
            </div>
            <div className="explore">
                <p className="semibold  l-black inter-medium my-3 fs-14">Content & Display</p>
                <div className="black_text_lg d-flex justify-content-between">
                    <div className="d-flex align-items-center mb-4 justify-content-center">
                        <img
                            alt=""
                            src={bell_icon}
                            className="me-1 profile_icon"
                            style={{ margin: "0px 0px 0px 4px" }}
                        />
                        <p className="inter-semi fs-14 ">Notifications</p>
                    </div>
                    <img alt="" src={angle_right} className="angle-right" />
                </div>
            </div>
            <div className="explore">
                <p className="semibold  l-black inter-medium fs-14">Support & About</p>
                <div className="black_text_lg d-flex justify-content-between mt-2">
                    <div className="d-flex align-items-center justify-content-center">
                        <img
                            alt=""
                            src={flag}
                            className="me-1 ms-1 profile_icon"
                            style={{ margin: "0px 2px" }}
                        />
                        <p className="inter-semi fs-14 my-2">Report a problem</p>
                    </div>
                    <img alt="" src={angle_right} className="angle-right" />
                </div>
                <div className="d-flex justify-content-between mt-1">
                    <div className="d-flex align-items-center justify-content-center">
                        <img alt="" src={support} className="me-1 ms-1 profile_icon" />
                        <p className="my-2 inter-semi fs-14">Support</p>
                    </div>
                    <img alt="" src={angle_right} className="angle-right" />
                </div>
                <div className="d-flex justify-content-between mt-1">
                    <div className="d-flex black_text_lg align-items-center justify-content-between w-100">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={info_full} alt="" className="me-1 ms-1 profile_icon" />
                            <p className="my-2 inter-semi fs-14">About</p>
                        </div>
                        <img alt="" src={angle_right} className="angle-right" />
                    </div>
                </div>
            </div>
            <div className="explore">
                <p className="semibold  l-black inter-medium fs-14">Account</p>
                <div className="black_text_lg d-flex justify-content-between mt-2">
                    <div className="d-flex align-items-center justify-content-center">
                        <img
                            alt=""
                            src={User}
                            className="me-1 ms-1 profile_icon"
                            style={{ margin: "0px 2px" }}
                        />
                        <p className="inter-semi fs-14 my-2">User Information</p>
                    </div>
                    <img alt="" src={angle_right} className="angle-right" />
                </div>
                <div className="d-flex justify-content-between mt-1">
                    <div className="d-flex align-items-center justify-content-center">
                        <img alt="" src={lock} className="me-2 ms-1 profile_icon" />
                        <p className="my-2 inter-semi fs-14">Password</p>
                    </div>
                    <img alt="" src={angle_right} className="angle-right" />
                </div>
                <div className="d-flex justify-content-between mt-1">
                    <div className="d-flex black_text_lg align-items-center justify-content-between w-100">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={bin} alt="" className="me-1 ms-1 profile_icon" />
                            <p className="my-2 inter-semi fs-14">Deactivate or del account</p>
                        </div>
                        <img alt="" src={angle_right} className="angle-right" />
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-1">
                    <div className="d-flex black_text_lg align-items-center justify-content-between w-100">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={logout} alt="" className="me-1 ms-1 profile_icon" />
                            <p className="my-2 inter-semi fs-14">Log out</p>
                        </div>
                        <img alt="" src={angle_right} className="angle-right" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProfileSettings

