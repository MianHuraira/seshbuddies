import React from 'react'
import angle_right from "../assets/logo/icons/angle_right.svg";
import help_icon from "../assets/icons/help_icon.png";
import sheild_plus from "../assets/icons/sheild_plus_icon.png";

const Support = () => {
  return (
    <div>
    <div className='bg-white pt-4 px-4 radius_14'>
        <div className='account_head pb-2'>
            <p className='text-center black_text_lg inter-bold fs-16'>Support</p>
        </div>
        <div className='account_body'>
            <button className="black_text_lg d-flex justify-content-between align-items-center w-100 border-0 bg-transparent mt-2 mb-1">
                <div className="d-flex align-items-center justify-content-center">

                    <p className="inter-semi fs-17 my-2 align_center"> <img src={help_icon} alt='' className='sheild me-2'/>Help Center</p>
                </div>
                <img alt="" src={angle_right} className="angle-right" />
            </button>

            <div className="black_text_lg d-flex justify-content-between align-items-center w-100 border-0 bg-transparent mt-2 mb-1">
                <div className="d-flex align-items-center justify-content-center">

                    <p className="inter-semi align_center fs-17 my-2"><img src={sheild_plus} alt='' className='sheild2 me-2'/> Safety Center</p>
                </div>
                <img alt="" src={angle_right} className="angle-right" />
            </div>
        </div>
    </div>
</div>
  )
}

export default Support

