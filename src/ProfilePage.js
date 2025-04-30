import React from 'react'
import { FaCamera } from "react-icons/fa";
import styled from 'styled-components'

const ProfilePage = () => {
  return (
    <Wrapper>
      <div className='profile-main'>
        <p className='title'>Account Settings</p>
        <div  className='card'>
        <div className='profile-container'>
          <div className='profile'>
            <img src="images/profile-Picture.jpg" alt="Profile" />
            <FaCamera className='camera-icon'/>
          </div>
          <div className='profile-info'>
            <h2>Marry Doe</h2>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
          <p className='para'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
          <p className='hipen'>-----------------------------------------------------------</p>
          <p className='hipen1'>-----------------------------------------------------------</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
.profile-main{
  width:100%;
  height: 100%;
  width: 30rem;
  display: flex;
  flex-direction: column;
}

.hipen{
  font-weight: 20px;
  color:rgb(166, 166, 167);
  margin-bottom: 27rem;
}

.hipen1{
  font-weight: 20px;
  color:rgb(166, 166, 167);
}
  
.para{
  margin-left: 20px;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.profile-container {
  display: flex;
  align-items: start;
  // justify-content: center;
  margin-top: 20px;
  margin-left: 20px;
  gap: 15px;
}
.title{
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  margin-left: 20px;
  shadow: 10px 4px 10px rgba(0, 0, 0, 0.1);
}
.profile {
position: relative;
}

.camera-icon {
  position: absolute;
  bottom: 10px;
  left: 70px;
  font-size: 15px;
  color: #fff;
  background-color: #7c3aed;
  padding: 5px;
  border-radius: 40%;
}

.card { 
border-shadow: 0 14px 10px rgba(0, 0, 0, 0.1);
background-color: #f3f4f6;
width: 80%;
height: 100%;
}

h2{
  margin-top: 0px;
  margin-bottom: 0px;
}

.profile-info p{
  margin-top: 0px;
}
  
`

export default ProfilePage;
