import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import girl from "../assets/logo/Avatar3.svg";
import Avatar from "../assets/logo/Avatar.svg";
import Avatar2 from "../assets/logo/Avatar4.svg";
import Avatar3 from "../assets/logo/Avatar2.svg";
import stars from "../assets/logo/icons/star.svg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';


const Forbuddies = () => {
    // For you inner tabs___
    const [forYou, setActiveModalTab] = useState('tab1');
    const handtabsclick = (tab) => {
        setActiveModalTab(tab);
    };
    return (
        <div>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='swiper_tabs'>
                    <button
                        className={`nav-link ${forYou === 'tab1' ? 'active' : ''}`}
                        onClick={() => handtabsclick('tab1')} >
                        All
                    </button>
                </SwiperSlide>
                <SwiperSlide className='swiper_tabs'>
                    <button
                        className={`nav-link ${forYou === 'tab2' ? 'active' : ''}`}
                        onClick={() => handtabsclick('tab2')} >
                        Pending
                    </button>
                </SwiperSlide>
                <SwiperSlide className='swiper_tabs'>
                    <button
                        className={`nav-link ${forYou === 'tab3' ? 'active' : ''}`}
                        onClick={() => handtabsclick('tab3')} >
                        Accepted
                    </button>
                </SwiperSlide>
                <SwiperSlide className='swiper_tabs'>
                    <button
                        className={`nav-link ${forYou === 'tab4' ? 'active' : ''}`}
                        onClick={() => handtabsclick('tab4')} >
                        Ongoing
                    </button>
                </SwiperSlide>
                <SwiperSlide className='swiper_tabs'>
                    <button
                        className={`nav-link ${forYou === 'tab5' ? 'active' : ''}`}
                        onClick={() => handtabsclick('tab5')} >
                        Waiting for reivew
                    </button>
                </SwiperSlide>
                <SwiperSlide className='swiper_tabs'>
                    <button
                        className={`nav-link ${forYou === 'tab6' ? 'active' : ''}`}
                        onClick={() => handtabsclick('tab6')} >
                        Completed
                    </button>
                </SwiperSlide>
                <SwiperSlide className='swiper_tabs'>
                    <button
                        className={`nav-link ${forYou === 'tab7' ? 'active' : ''}`}
                        onClick={() => handtabsclick('tab7')} >
                        Declined
                    </button>
                </SwiperSlide>
            </Swiper>

            <div className="tab-content">

                <div className={`tab-pane px-2 ${forYou === 'tab1' ? 'active' : ''}`} id="tab1" >
                    <div className='mt-3'>
                        {/* ___request___ */}
                        <div className='bg-white px-3 pt-2 pb-3 radius_14 mt-3'>
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
                                        <img alt="" src={stars} style={{ width: '14px' }} />
                                        <h1 className="fs-14 inter-bold ms-1">
                                            4.9
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center mt-4'>
                                <div className='d-flex justify-content-center me-4 align-items-start flex-column '>
                                    <p className='fs-12 sea_green_bg px-2 radius_14'>SHMOKE</p>
                                    <h1 className='inter-medium fs-14 mt-2'>Oct 2, 2023, 4:20 PM</h1>
                                    <p className='light_text fs-14 mt-1'>Central Park, New York</p>
                                </div>
                                <div className='d-flex justify-content-end align-items-end'>

                                    <div className=' d-flex me-3'>
                                        <p className='fs-13 bg_purple px-2 inter-medium radius_14'>Invited</p>
                                    </div>
                                    <div>
                                        <div className='align_center'>
                                            <div className='me-3'>
                                                <p className='light_text mb-1 fs-12'>Strain</p>
                                                <h1 className='black_text_md inter-semi fs-11'>Blue Dream</h1>
                                            </div>
                                            <div className='me-3'>
                                                <p className='light_text mb-1 fs-12'>Sesh Type</p>
                                                <h1 className='black_text_md inter-semi fs-11'>Recreational</h1>
                                            </div>
                                            <div className='me-md-4 me-2'>
                                                <p className='light_text mb-1 fs-12'>Utensil</p>
                                                <h1 className='black_text_md inter-semi fs-11'>Vaporizer</h1>
                                            </div>
                                        </div>
                                        <p className='light_text fs-12 mt-2 mb-1'>Buddies</p>
                                        <div className='d-flex align-items-start'>
                                            <img src={girl} alt='' className='yourbuddies_img' />
                                            <img src={Avatar} alt='' className='yourbuddies_img' />
                                            <img src={Avatar2} alt='' className='yourbuddies_img' />
                                            <img src={Avatar3} alt='' className='yourbuddies_img' />
                                            <img src={Avatar} alt='' className='yourbuddies_img' />
                                            <img src={girl} alt='' className='yourbuddies_img' />
                                            <div className='yourbuddies_more'>+2</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='text_black_md fs-14'>Your response is pending.</p>
                            <div className='d-flex align-items-center justify-content-between mt-3'>
                                <button className='yourBuddyBtn3'>View Details</button>
                                <button className='yourBuddyBtn3'>Cancel</button>
                                <button className='yourBuddyBtn3 btnGreen'>Edit</button>
                            </div>
                        </div>
                        {/* ___request___ */}
                        {/* ___request___ */}
                        <div className='bg-white px-3 pt-2 pb-3 radius_14 mt-3'>
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
                                        <img alt="" src={stars} style={{ width: '14px' }} />
                                        <h1 className="fs-14 inter-bold ms-1">
                                            4.9
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center mt-4'>
                                <div className='d-flex justify-content-center me-4 align-items-start flex-column '>
                                    <p className='fs-12 sea_green_bg px-2 radius_14'>SHMOKE</p>
                                    <h1 className='inter-medium fs-14 mt-2'>Oct 2, 2023, 4:20 PM</h1>
                                    <p className='light_text fs-14 mt-1'>Central Park, New York</p>
                                </div>
                                <div className='d-flex justify-content-end align-items-end'>

                                    <div className=' d-flex me-3'>
                                        <p className='fs-13 bg_purple px-2 inter-medium radius_14'>Pending</p>
                                    </div>
                                    <div>
                                        <div className='align_center'>
                                            <div className='me-3'>
                                                <p className='light_text mb-1 fs-12'>Strain</p>
                                                <h1 className='black_text_md inter-semi fs-11'>Blue Dream</h1>
                                            </div>
                                            <div className='me-3'>
                                                <p className='light_text mb-1 fs-12'>Sesh Type</p>
                                                <h1 className='black_text_md inter-semi fs-11'>Recreational</h1>
                                            </div>
                                            <div className='me-md-4 me-2'>
                                                <p className='light_text mb-1 fs-12'>Utensil</p>
                                                <h1 className='black_text_md inter-semi fs-11'>Vaporizer</h1>
                                            </div>
                                        </div>
                                        <p className='light_text fs-12 mt-2 mb-1'>Buddies</p>
                                        <div className='d-flex align-items-start'>
                                            <img src={girl} alt='' className='yourbuddies_img' />
                                            <img src={Avatar} alt='' className='yourbuddies_img' />
                                            <img src={Avatar2} alt='' className='yourbuddies_img' />
                                            <img src={Avatar3} alt='' className='yourbuddies_img' />
                                            <img src={Avatar} alt='' className='yourbuddies_img' />
                                            <img src={girl} alt='' className='yourbuddies_img' />
                                            <div className='yourbuddies_more'>+2</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='text_black_md fs-14'>Your response is pending.</p>
                            <div className='d-flex align-items-center justify-content-between mt-3'>
                            <button className='yourBuddyBtn3'>View Details</button>
                                <button className='yourBuddyBtn3'>Cancel</button>
                                <button className='yourBuddyBtn3 btnGreen'>Edit</button>
                            </div>
                        </div>
                        {/* ___request___ */}
                    </div>


                </div>
                <div className={`tab-pane px-2 ${forYou === 'tab2' ? 'active' : ''}`} id="tab2" >
                    {/* ___request___ */}
                    <div className='bg-white px-3 pt-2 pb-3 radius_14 mt-3'>
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
                                    <img alt="" src={stars} style={{ width: '14px' }} />
                                    <h1 className="fs-14 inter-bold ms-1">
                                        4.9
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <div className='d-flex justify-content-center me-4 align-items-start flex-column '>
                                <p className='fs-12 sea_green_bg px-2 radius_14'>SHMOKE</p>
                                <h1 className='inter-medium fs-14 mt-2'>Oct 2, 2023, 4:20 PM</h1>
                                <p className='light_text fs-14 mt-1'>Central Park, New York</p>
                            </div>
                            <div className='d-flex justify-content-end align-items-end'>

                                <div className=' d-flex me-3'>
                                    <p className='fs-13 bg_purple px-2 inter-medium radius_14'>Invited</p>
                                </div>
                                <div>
                                    <div className='align_center'>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Strain</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Blue Dream</h1>
                                        </div>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Sesh Type</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Recreational</h1>
                                        </div>
                                        <div className='me-md-4 me-2'>
                                            <p className='light_text mb-1 fs-12'>Utensil</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Vaporizer</h1>
                                        </div>
                                    </div>
                                    <p className='light_text fs-12 mt-2 mb-1'>Buddies</p>
                                    <div className='d-flex align-items-start'>
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={Avatar2} alt='' className='yourbuddies_img' />
                                        <img src={Avatar3} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <div className='yourbuddies_more'>+2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='text_black_md fs-14'>Your response is pending.</p>
                        <div className='d-flex align-items-center justify-content-between mt-3'>
                            <NavLink to={"/Foubuddiespending"} className='yourBuddyBtn3'>View Details</NavLink>
                                <button className='yourBuddyBtn3'>Cancel</button>
                                <button className='yourBuddyBtn3 btnGreen'>Edit</button>
                        </div>
                    </div>
                    {/* ___request___ */}
                    {/* ___request___ */}
                    <div className='bg-white px-3 pt-2 pb-3 radius_14 mt-3'>
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
                                    <img alt="" src={stars} style={{ width: '14px' }} />
                                    <h1 className="fs-14 inter-bold ms-1">
                                        4.9
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <div className='d-flex justify-content-center me-4 align-items-start flex-column '>
                                <p className='fs-12 sea_green_bg px-2 radius_14'>SHMOKE</p>
                                <h1 className='inter-medium fs-14 mt-2'>Oct 2, 2023, 4:20 PM</h1>
                                <p className='light_text fs-14 mt-1'>Central Park, New York</p>
                            </div>
                            <div className='d-flex justify-content-end align-items-end'>

                                <div className=' d-flex me-3'>
                                    <p className='fs-13 bg_purple px-2 inter-medium radius_14'>Pending</p>
                                </div>
                                <div>
                                    <div className='align_center'>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Strain</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Blue Dream</h1>
                                        </div>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Sesh Type</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Recreational</h1>
                                        </div>
                                        <div className='me-md-4 me-2'>
                                            <p className='light_text mb-1 fs-12'>Utensil</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Vaporizer</h1>
                                        </div>
                                    </div>
                                    <p className='light_text fs-12 mt-2 mb-1'>Buddies</p>
                                    <div className='d-flex align-items-start'>
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={Avatar2} alt='' className='yourbuddies_img' />
                                        <img src={Avatar3} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <div className='yourbuddies_more'>+2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='text_black_md fs-14'>Your response is pending.</p>
                        <div className='d-flex align-items-center justify-content-between mt-3'>
                            <NavLink to={"/Foubuddiespending"} className='yourBuddyBtn3'>View Details</NavLink>
                            <button className='yourBuddyBtn3'>Cancel</button>
                            <button className='yourBuddyBtn3 btnGreen'>Edit</button>
                        </div>
                    </div>
                    {/* ___request___ */}
                </div>
                <div className={`tab-pane px-2 ${forYou === 'tab3' ? 'active' : ''}`} id="tab3" >
                    {/* ___Accepted___ */}
                    <div className='bg-white px-3 pt-2 pb-3 radius_14 mt-3'>
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
                                    <img alt="" src={stars} style={{ width: '14px' }} />
                                    <h1 className="fs-14 inter-bold ms-1">
                                        4.9
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <div className='d-flex justify-content-center me-4 align-items-start flex-column '>
                                <p className='fs-12 sea_green_bg px-2 radius_14'>SHMOKE</p>
                                <h1 className='inter-medium fs-14 mt-2'>Oct 2, 2023, 4:20 PM</h1>
                                <p className='light_text fs-14 mt-1'>Central Park, New York</p>
                            </div>
                            <div className='d-flex justify-content-end align-items-end'>

                                <div className=' d-flex me-3'>
                                    <p className='fs-13 bg_purple px-2 inter-medium radius_14'>Accepted</p>
                                </div>
                                <div>
                                    <div className='align_center'>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Strain</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Blue Dream</h1>
                                        </div>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Sesh Type</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Recreational</h1>
                                        </div>
                                        <div className='me-md-4 me-2'>
                                            <p className='light_text mb-1 fs-12'>Utensil</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Vaporizer</h1>
                                        </div>
                                    </div>
                                    <p className='light_text fs-12 mt-2 mb-1'>Buddies</p>
                                    <div className='d-flex align-items-start'>
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={Avatar2} alt='' className='yourbuddies_img' />
                                        <img src={Avatar3} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <div className='yourbuddies_more'>+2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='text_black_md fs-14'>Your response is pending.</p>
                        <div className='d-flex align-items-center justify-content-between mt-3'>
                        <button className='yourBuddyBtn3'>View Details</button>
                                <button className='yourBuddyBtn3'>Cancel</button>
                                <button className='yourBuddyBtn3 btnGreen'>Edit</button>
                        </div>
                    </div>
                    {/* ___Accepted___ */}
                </div>
                <div className={`tab-pane px-2 ${forYou === 'tab4' ? 'active' : ''}`} id="tab4" >
                    {/* ___Ongoing___ */}
                    <div className='bg-white px-3 pt-2 pb-3 radius_14 mt-3'>
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
                                    <img alt="" src={stars} style={{ width: '14px' }} />
                                    <h1 className="fs-14 inter-bold ms-1">
                                        4.9
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <div className='d-flex justify-content-center me-4 align-items-start flex-column '>
                                <p className='fs-12 sea_green_bg px-2 radius_14'>SHMOKE</p>
                                <h1 className='inter-medium fs-14 mt-2'>Oct 2, 2023, 4:20 PM</h1>
                                <p className='light_text fs-14 mt-1'>Central Park, New York</p>
                            </div>
                            <div className='d-flex justify-content-end align-items-end'>

                                <div className=' d-flex me-3'>
                                    <p className='fs-13 blue-bg px-2 inter-medium radius_14' style={{ color: '#302E7C' }}>Ongoing</p>
                                </div>
                                <div>
                                    <div className='align_center'>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Strain</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Blue Dream</h1>
                                        </div>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Sesh Type</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Recreational</h1>
                                        </div>
                                        <div className='me-md-4 me-2'>
                                            <p className='light_text mb-1 fs-12'>Utensil</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Vaporizer</h1>
                                        </div>
                                    </div>
                                    <p className='light_text fs-12 mt-2 mb-1'>Buddies</p>
                                    <div className='d-flex align-items-start'>
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={Avatar2} alt='' className='yourbuddies_img' />
                                        <img src={Avatar3} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <div className='yourbuddies_more'>+2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='text_black_md fs-14'>Your response is pending.</p>
                        <div className='d-flex align-items-center justify-content-between mt-3'>
                            <button className='yourBuddyBtn2'>View Details</button>
                            <button className='yourBuddyBtn2'>End Seshsion</button>
                        </div>
                    </div>
                    {/* ___Ongoing___ */}
                </div>
                <div className={`tab-pane px-2 ${forYou === 'tab5' ? 'active' : ''}`} id="tab5" >
                    {/* ___Wating for Review___ */}
                    <div className='bg-white px-3 pt-2 pb-3 radius_14 mt-3'>
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
                                    <img alt="" src={stars} style={{ width: '14px' }} />
                                    <h1 className="fs-14 inter-bold ms-1">
                                        4.9
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <div className='d-flex justify-content-center me-4 align-items-start flex-column '>
                                <p className='fs-12 sea_green_bg px-2 radius_14'>SHMOKE</p>
                                <h1 className='inter-medium fs-14 mt-2'>Oct 2, 2023, 4:20 PM</h1>
                                <p className='light_text fs-14 mt-1'>Central Park, New York</p>
                            </div>
                            <div className='d-flex justify-content-end align-items-end'>

                                <div className=' d-flex me-3'>
                                    <p className='fs-13 bg_purple px-2 inter-medium radius_14'>Waiting for reivew</p>
                                </div>
                                <div>
                                    <div className='align_center'>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Strain</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Blue Dream</h1>
                                        </div>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Sesh Type</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Recreational</h1>
                                        </div>
                                        <div className='me-md-4 me-2'>
                                            <p className='light_text mb-1 fs-12'>Utensil</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Vaporizer</h1>
                                        </div>
                                    </div>
                                    <p className='light_text fs-12 mt-2 mb-1'>Buddies</p>
                                    <div className='d-flex align-items-start'>
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={Avatar2} alt='' className='yourbuddies_img' />
                                        <img src={Avatar3} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <div className='yourbuddies_more'>+2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='text_black_md fs-14'>Your response is pending.</p>
                        <div className='d-flex align-items-center justify-content-between mt-3'>
                            <button className='yourBuddyBtn3'>View Details</button>
                            <button className='yourBuddyBtn3'>Skip</button>
                            <button className='yourBuddyBtn3 btnGreen'>Rate Experience</button>
                        </div>
                    </div>
                    {/* ___Wating for Review___ */}
                </div>
                <div className={`tab-pane px-2 ${forYou === 'tab6' ? 'active' : ''}`} id="tab6" >
                    {/* ___Completed___ */}
                    <div className='bg-white px-3 pt-2 pb-3 radius_14 mt-3'>
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
                                    <img alt="" src={stars} style={{ width: '14px' }} />
                                    <h1 className="fs-14 inter-bold ms-1">
                                        4.9
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <div className='d-flex justify-content-center me-4 align-items-start flex-column '>
                                <p className='fs-12 sea_green_bg px-2 radius_14'>SHMOKE</p>
                                <h1 className='inter-medium fs-14 mt-2'>Oct 2, 2023, 4:20 PM</h1>
                                <p className='light_text fs-14 mt-1'>Central Park, New York</p>
                            </div>
                            <div className='d-flex justify-content-end align-items-end'>

                                <div className=' d-flex me-3'>
                                    <p className='fs-13 bg_purple px-2 inter-medium radius_14'>Completed</p>
                                </div>
                                <div>
                                    <div className='align_center'>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Strain</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Blue Dream</h1>
                                        </div>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Sesh Type</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Recreational</h1>
                                        </div>
                                        <div className='me-md-4 me-2'>
                                            <p className='light_text mb-1 fs-12'>Utensil</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Vaporizer</h1>
                                        </div>
                                    </div>
                                    <p className='light_text fs-12 mt-2 mb-1'>Buddies</p>
                                    <div className='d-flex align-items-start'>
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={Avatar2} alt='' className='yourbuddies_img' />
                                        <img src={Avatar3} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <div className='yourbuddies_more'>+2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='text_black_md fs-14'>Your response is pending.</p>
                        <div className='d-flex align-items-center justify-content-between mt-3'>
                            <button className='yourBuddyBtn3'>View Details</button>
                            <button className='yourBuddyBtn3'>Skip</button>
                            <button className='yourBuddyBtn3 btnGreen'>Rate Experience</button>
                        </div>
                    </div>
                    {/* ___Completed___ */}
                </div>
                <div className={`tab-pane px-2 ${forYou === 'tab7' ? 'active' : ''}`} id="tab7" >
                    {/* ___Declined___ */}
                    <div className='bg-white px-3 pt-2 pb-3 radius_14 mt-3'>
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
                                    <img alt="" src={stars} style={{ width: '14px' }} />
                                    <h1 className="fs-14 inter-bold ms-1">
                                        4.9
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <div className='d-flex justify-content-center me-4 align-items-start flex-column '>
                                <p className='fs-12 sea_green_bg px-2 radius_14'>SHMOKE</p>
                                <h1 className='inter-medium fs-14 mt-2'>Oct 2, 2023, 4:20 PM</h1>
                                <p className='light_text fs-14 mt-1'>Central Park, New York</p>
                            </div>
                            <div className='d-flex justify-content-end align-items-end'>

                                <div className=' d-flex me-3'>
                                    <p className='fs-13 bg_purple px-2 inter-medium radius_14'>Declined</p>
                                </div>
                                <div>
                                    <div className='align_center'>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Strain</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Blue Dream</h1>
                                        </div>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Sesh Type</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Recreational</h1>
                                        </div>
                                        <div className='me-md-4 me-2'>
                                            <p className='light_text mb-1 fs-12'>Utensil</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Vaporizer</h1>
                                        </div>
                                    </div>
                                    <p className='light_text fs-12 mt-2 mb-1'>Buddies</p>
                                    <div className='d-flex align-items-start'>
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={Avatar2} alt='' className='yourbuddies_img' />
                                        <img src={Avatar3} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <div className='yourbuddies_more'>+2</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* ___Declined___ */}
                </div>
                <div className={`tab-pane px-2 ${forYou === 'tab8' ? 'active' : ''}`} id="tab8" >
                    {/* ___Expired___ */}
                    <div className='bg-white px-3 pt-2 pb-3 radius_14 mt-3'>
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
                                    <img alt="" src={stars} style={{ width: '14px' }} />
                                    <h1 className="fs-14 inter-bold ms-1">
                                        4.9
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <div className='d-flex justify-content-center me-4 align-items-start flex-column '>
                                <p className='fs-12 sea_green_bg px-2 radius_14'>SHMOKE</p>
                                <h1 className='inter-medium fs-14 mt-2'>Oct 2, 2023, 4:20 PM</h1>
                                <p className='light_text fs-14 mt-1'>Central Park, New York</p>
                            </div>
                            <div className='d-flex justify-content-end align-items-end'>

                                <div className=' d-flex me-3'>
                                    <p className='fs-13 bg_purple px-2 inter-medium radius_14'>Expired</p>
                                </div>
                                <div>
                                    <div className='align_center'>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Strain</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Blue Dream</h1>
                                        </div>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Sesh Type</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Recreational</h1>
                                        </div>
                                        <div className='me-md-4 me-2'>
                                            <p className='light_text mb-1 fs-12'>Utensil</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Vaporizer</h1>
                                        </div>
                                    </div>
                                    <p className='light_text fs-12 mt-2 mb-1'>Buddies</p>
                                    <div className='d-flex align-items-start'>
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={Avatar2} alt='' className='yourbuddies_img' />
                                        <img src={Avatar3} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <div className='yourbuddies_more'>+2</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* ___Expired___ */}
                </div>
                <div className={`tab-pane px-2 ${forYou === 'tab8' ? 'active' : ''}`} id="tab8" >
                    {/* ___Canceled___ */}
                    <div className='bg-white px-3 pt-2 pb-3 radius_14 mt-3'>
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
                                    <img alt="" src={stars} style={{ width: '14px' }} />
                                    <h1 className="fs-14 inter-bold ms-1">
                                        4.9
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <div className='d-flex justify-content-center me-4 align-items-start flex-column '>
                                <p className='fs-12 sea_green_bg px-2 radius_14'>SHMOKE</p>
                                <h1 className='inter-medium fs-14 mt-2'>Oct 2, 2023, 4:20 PM</h1>
                                <p className='light_text fs-14 mt-1'>Central Park, New York</p>
                            </div>
                            <div className='d-flex justify-content-end align-items-end'>

                                <div className=' d-flex me-3'>
                                    <p className='fs-13 bg_purple px-2 inter-medium radius_14'>Canceled</p>
                                </div>
                                <div>
                                    <div className='align_center'>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Strain</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Blue Dream</h1>
                                        </div>
                                        <div className='me-3'>
                                            <p className='light_text mb-1 fs-12'>Sesh Type</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Recreational</h1>
                                        </div>
                                        <div className='me-md-4 me-2'>
                                            <p className='light_text mb-1 fs-12'>Utensil</p>
                                            <h1 className='black_text_md inter-semi fs-11'>Vaporizer</h1>
                                        </div>
                                    </div>
                                    <p className='light_text fs-12 mt-2 mb-1'>Buddies</p>
                                    <div className='d-flex align-items-start'>
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={Avatar2} alt='' className='yourbuddies_img' />
                                        <img src={Avatar3} alt='' className='yourbuddies_img' />
                                        <img src={Avatar} alt='' className='yourbuddies_img' />
                                        <img src={girl} alt='' className='yourbuddies_img' />
                                        <div className='yourbuddies_more'>+2</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* ___Canceled___ */}
                </div>
            </div>
        </div>
    )
}

export default Forbuddies
