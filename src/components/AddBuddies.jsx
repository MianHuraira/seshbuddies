import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import avatar from '../assets/logo/Avatar.svg'
import stars from '../assets/logo/icons/star.svg'
import { Pagination } from 'swiper/modules';

const AddBuddies = () => {
    return (

        <div className=' overflow-auto'>
          
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    {/* ___buddies-card--- */}
                    <div className='buddies_card px-3 me-2'>
                        <div className='buddies_round'><img src={avatar} /></div>
                        <p className='inter-semi mt-1 fs-13'>Mary_Jane</p>
                        <div className='d-flex align-items-start mt-2  justify-content-center'>
                            <img src={stars} className='rating-star' />
                            <h1 className='fw-bold fs-12 ms-1 inter'>4.9</h1>
                        </div>
                        <p className='light_text_sm fs-11 mt-2'>Mutual Buddies <span>5</span> </p>
                        <button className='green-txt follow_buddy_btn inter-semi fs-14 mt-3'>Follow</button>
                    </div>
                    {/* ___buddies-card--- */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* ___buddies-card--- */}
                    <div className='buddies_card px-3 me-2'>
                        <div className='buddies_round'><img src={avatar} /></div>
                        <p className='inter-semi mt-1 fs-13'>Mary_Jane</p>
                        <div className='d-flex align-items-start mt-2  justify-content-center'>
                            <img src={stars} className='rating-star' />
                            <h1 className='fw-bold fs-12 ms-1 inter'>4.9</h1>
                        </div>
                        <p className='light_text_sm fs-11 mt-2'>Mutual Buddies <span>5</span> </p>
                        <button className='green-txt follow_buddy_btn inter-semi fs-14 mt-3'>Follow</button>
                    </div>
                    {/* ___buddies-card--- */}
                </SwiperSlide>

                <SwiperSlide>
                    {/* ___buddies-card--- */}
                    <div className='buddies_card px-3 me-2'>
                        <div className='buddies_round'><img src={avatar} /></div>
                        <p className='inter-semi mt-1 fs-13'>Mary_Jane</p>
                        <div className='d-flex align-items-start mt-2  justify-content-center'>
                            <img src={stars} className='rating-star' />
                            <h1 className='fw-bold fs-12 ms-1 inter'>4.9</h1>
                        </div>
                        <p className='light_text_sm fs-11 mt-2'>Mutual Buddies <span>5</span> </p>
                        <button className='green-txt follow_buddy_btn inter-semi fs-14 mt-3'>Follow</button>
                    </div>
                    {/* ___buddies-card--- */}
                </SwiperSlide>

                <SwiperSlide>
                    {/* ___buddies-card--- */}
                    <div className='buddies_card px-3 me-2'>
                        <div className='buddies_round'><img src={avatar} /></div>
                        <p className='inter-semi mt-1 fs-13'>Mary_Jane</p>
                        <div className='d-flex align-items-start mt-2  justify-content-center'>
                            <img src={stars} className='rating-star' />
                            <h1 className='fw-bold fs-12 ms-1 inter'>4.9</h1>
                        </div>
                        <p className='light_text_sm fs-11 mt-2'>Mutual Buddies <span>5</span> </p>
                        <button className='green-txt follow_buddy_btn inter-semi fs-14 mt-3'>Follow</button>
                    </div>
                    {/* ___buddies-card--- */}
                </SwiperSlide>

                <SwiperSlide>
                    {/* ___buddies-card--- */}
                    <div className='buddies_card px-3 me-2'>
                        <div className='buddies_round'><img src={avatar} /></div>
                        <p className='inter-semi mt-1 fs-13'>Mary_Jane</p>
                        <div className='d-flex align-items-start mt-2  justify-content-center'>
                            <img src={stars} className='rating-star' />
                            <h1 className='fw-bold fs-12 ms-1 inter'>4.9</h1>
                        </div>
                        <p className='light_text_sm fs-11 mt-2'>Mutual Buddies <span>5</span> </p>
                        <button className='green-txt follow_buddy_btn inter-semi fs-14 mt-3'>Follow</button>
                    </div>
                    {/* ___buddies-card--- */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* ___buddies-card--- */}
                    <div className='buddies_card px-3 me-2'>
                        <div className='buddies_round'><img src={avatar} /></div>
                        <p className='inter-semi mt-1 fs-13'>Mary_Jane</p>
                        <div className='d-flex align-items-start mt-2  justify-content-center'>
                            <img src={stars} className='rating-star' />
                            <h1 className='fw-bold fs-12 ms-1 inter'>4.9</h1>
                        </div>
                        <p className='light_text_sm fs-11 mt-2'>Mutual Buddies <span>5</span> </p>
                        <button className='green-txt follow_buddy_btn inter-semi fs-14 mt-3'>Follow</button>
                    </div>
                    {/* ___buddies-card--- */}
                </SwiperSlide>

                <SwiperSlide>
                    {/* ___buddies-card--- */}
                    <div className='buddies_card px-3 me-2'>
                        <div className='buddies_round'><img src={avatar} /></div>
                        <p className='inter-semi mt-1 fs-13'>Mary_Jane</p>
                        <div className='d-flex align-items-start mt-2  justify-content-center'>
                            <img src={stars} className='rating-star' />
                            <h1 className='fw-bold fs-12 ms-1 inter'>4.9</h1>
                        </div>
                        <p className='light_text_sm fs-11 mt-2'>Mutual Buddies <span>5</span> </p>
                        <button className='green-txt follow_buddy_btn inter-semi fs-14 mt-3'>Follow</button>
                    </div>
                    {/* ___buddies-card--- */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* ___buddies-card--- */}
                    <div className='buddies_card px-3 me-2'>
                        <div className='buddies_round'><img src={avatar} /></div>
                        <p className='inter-semi mt-1 fs-13'>Mary_Jane</p>
                        <div className='d-flex align-items-start mt-2  justify-content-center'>
                            <img src={stars} className='rating-star' />
                            <h1 className='fw-bold fs-12 ms-1 inter'>4.9</h1>
                        </div>
                        <p className='light_text_sm fs-11 mt-2'>Mutual Buddies <span>5</span> </p>
                        <button className='green-txt follow_buddy_btn inter-semi fs-14 mt-3'>Follow</button>
                    </div>
                    {/* ___buddies-card--- */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* ___buddies-card--- */}
                    <div className='buddies_card px-3 me-2'>
                        <div className='buddies_round'><img src={avatar} /></div>
                        <p className='inter-semi mt-1 fs-13'>Mary_Jane</p>
                        <div className='d-flex align-items-start mt-2  justify-content-center'>
                            <img src={stars} className='rating-star' />
                            <h1 className='fw-bold fs-12 ms-1 inter'>4.9</h1>
                        </div>
                        <p className='light_text_sm fs-11 mt-2'>Mutual Buddies <span>5</span> </p>
                        <button className='green-txt follow_buddy_btn inter-semi fs-14 mt-3'>Follow</button>
                    </div>
                    {/* ___buddies-card--- */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* ___buddies-card--- */}
                    <div className='buddies_card px-3 me-2'>
                        <div className='buddies_round'><img src={avatar} /></div>
                        <p className='inter-semi mt-1 fs-13'>Mary_Jane</p>
                        <div className='d-flex align-items-start mt-2  justify-content-center'>
                            <img src={stars} className='rating-star' />
                            <h1 className='fw-bold fs-12 ms-1 inter'>4.9</h1>
                        </div>
                        <p className='light_text_sm fs-11 mt-2'>Mutual Buddies <span>5</span> </p>
                        <button className='green-txt follow_buddy_btn inter-semi fs-14 mt-3'>Follow</button>
                    </div>
                    {/* ___buddies-card--- */}
                </SwiperSlide>


            </Swiper>
        </div>

    )
}

export default AddBuddies
