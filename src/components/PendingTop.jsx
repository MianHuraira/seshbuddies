import React from 'react'

const PendingTop = () => {
    return (
        <div>
            <div className="bg-white px-3 pt-2 pb-3 radius_14 mt-3">
                <div className='d-flex justify-content-between mt-2'>
                    <div className='d-flex justify-content-center me-4 align-items-start flex-column '>
                        <p className='fs-12 sea_green_bg px-2 radius_14'>SHMOKE</p>
                        <h1 className='inter-medium fs-14 mt-2'>Oct 2, 2023, 4:20 PM</h1>
                        <p className='light_text fs-14 mt-1'>Central Park, New York</p>
                    </div>
                    <div className="d-flex align-items-end justify-content-end flex-column">
                        <p className='fs-13 bg_purple px-2 inter-medium radius_14'>Pending</p>
                    </div>
                </div>
                <div>
                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        <div className=' pending_status'>
                            <p className='light_text'>Strain</p>
                            <h1 className='black_text_md'>Blue Dream</h1>
                        </div>
                        <div className=' pending_status'>
                            <p className='light_text'>Sesh Type</p>
                            <h1 className='black_text_md'>Recreational</h1>
                        </div>
                        <div className='pending_status'>
                            <p className='light_text'>Utensil</p>
                            <h1 className='black_text_md'>Vaporizer</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendingTop
