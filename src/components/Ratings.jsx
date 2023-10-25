import React from 'react'
import stars from "../assets/logo/icons/star.svg";
import girl from "../assets/logo/orange-girl.svg";
import status_icon from "../assets/logo/icons/Status_Icon.svg";
// import dots from '../assets/logo/icons/3dots.svg'

const Ratings = () => {
    return (
        <div>
            <div className='bg-white px-3 py-2 radius_12 mb-2'>
                <div className="d-flex mt-2">
                    <div className="position-relative">
                        <img alt="" src={girl} className="message-dp" />
                        <img alt="" src={status_icon} className="status_plus" />
                    </div>
                    <div className="status ms-2">
                        <p className="inter-semi fs-15">steve.brown </p>
                        <h1 className="fs-14 align_center green-txt inter">
                            New York, USA<span>.</span>
                            <p className="ms-1 gray_text_md">5 min</p>
                        </h1>
                    </div>
                    <div className=" ms-auto d-flex justify-content-center align-items-center">
                        <div className="d-flex align-items-start me-3 justify-content-center">
                            <img alt="" src={stars} className="rating-star" />
                            <h1 className="black_text_md_bold ms-1">
                                4.9
                            </h1>
                        </div>
                        <p className='fs-12 blue-bg px-2 radius_14'>SHMOKE</p>
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
                <p className="black_text_md mt-2 ms-1">
                    Just tried the new Pineapple Express strain. 10/10 would recommend!
                    🍍🔥
                </p>
            </div>
            <div className='bg-white px-3 py-2 radius_12 mb-2'>
                <div className="d-flex mt-2">
                    <div className="position-relative">
                        <img alt="" src={girl} className="message-dp" />
                        <img alt="" src={status_icon} className="status_plus" />
                    </div>
                    <div className="status ms-2">
                        <p className="inter-semi fs-15">steve.brown </p>
                        <h1 className="fs-14 align_center green-txt inter">
                            New York, USA<span>.</span>
                            <p className="ms-1 gray_text_md">5 min</p>
                        </h1>
                    </div>
                    <div className=" ms-auto d-flex justify-content-center align-items-center">
                        <div className="d-flex align-items-start me-3 justify-content-center">
                            <img alt="" src={stars} className="rating-star" />
                            <h1 className="black_text_md_bold ms-1">
                                4.9
                            </h1>
                        </div>
                        <p className='fs-12 pink-bg px-2 radius_14'>MATCH</p>
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
                <p className="black_text_md mt-2 ms-1">
                    Just tried the new Pineapple Express strain. 10/10 would recommend!
                    🍍🔥
                </p>
            </div>
            <div className='bg-white px-3 py-2 radius_12 mb-2'>
                <div className="d-flex mt-2">
                    <div className="position-relative">
                        <img alt="" src={girl} className="message-dp" />
                        <img alt="" src={status_icon} className="status_plus" />
                    </div>
                    <div className="status ms-2">
                        <p className="inter-semi fs-15">steve.brown </p>
                        <h1 className="fs-14 align_center green-txt inter">
                            New York, USA<span>.</span>
                            <p className="ms-1 gray_text_md">5 min</p>
                        </h1>
                    </div>
                    <div className=" ms-auto d-flex justify-content-center align-items-center">
                        <div className="d-flex align-items-start me-3 justify-content-center">
                            <img alt="" src={stars} className="rating-star" />
                            <h1 className="black_text_md_bold ms-1">
                                4.9
                            </h1>
                        </div>
                        <p className='fs-12 skin-bg px-2 radius_14'>SMO</p>
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
                <p className="black_text_md mt-2 ms-1">
                    Just tried the new Pineapple Express strain. 10/10 would recommend!
                    🍍🔥
                </p>
            </div>
        </div>
    )
}

export default Ratings
