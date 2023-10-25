import React from 'react';
import UserProfile from "../../assets/images/userDetail.png"

const UserDetail = () => {
  return (
    <>
    <div className='user_deail000 mt-5 m-auto'> 
        <img className='detailimg000' src={UserProfile} alt="" />
        <h4 className='userName00 mt-3'>@BlazeMaster</h4>
        <p className='userInfo000 mt-3'>Cannabis enthusiast. Love to explore new strains and connect with like-minded people.</p>
        <h6 className='userInfo000 mt-2'>Joined January 2019</h6>
        <h6 className='userInfo000 mt-2'>24.5K Followers</h6>
    </div>
    </>
  )
}

export default UserDetail