import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const [agency, setAgency] = useState('');

  return (
    <Wrapper>
      <div className="register-container">
        <h1>Create your PopX account</h1>
        <form className="register-form">
          <div className="form-group form-group-rational">
            <label htmlFor="fullName" className='lable-obsalute'>Full Name<span> *</span></label>
            <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
          </div>

          <div className="form-group form-group-rational">
            <label htmlFor="phone" className='lable-obsalute'>Phone number<span> *</span></label>
            <input type="text" id="phone" name="phone" placeholder="Enter your phone number" required />
          </div>

          <div className="form-group form-group-rational">
            <label htmlFor="email" className='lable-obsalute'>Email address<span> *</span></label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group form-group-rational">
            <label htmlFor="password" className='lable-obsalute'>Password<span> *</span></label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>

          <div className="form-group form-group-rational">
            <label htmlFor="companyName" className='lable-obsalute'>Company name</label>
            <input type="text" id="companyName" name="companyName" placeholder="Enter your company name" />
          </div>

          <div className="form-group">
            <label>Are you an Agency?<span> *</span></label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={agency === 'yes'}
                  onChange={(e) => setAgency(e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={agency === 'no'}
                  onChange={(e) => setAgency(e.target.value)}
                />
                No
              </label>
            </div>
          </div>

          <CreateButton type="submit" className="submit-btn"><NavLink to="/profilepage">Create Account</NavLink></CreateButton>
        </form>
      </div>
    </Wrapper>
  );
};

const CreateButton = styled.button`
  background-color: #7A23FF;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 113px;

  &:hover {
    background-color: #7c3aed;
  }

  a {
    color: #fff;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
  }
`;


const Wrapper = styled.div`
  
.register-container {
  margin-top: 0px;
  max-width: 300px;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
}

.form-group-rational{
  position: relative;
}

.lable-obsalute{
  
  position: absolute;
  top: -20%;
  left: 15px;
  transform: translateY(-50%);
  background-color: #fff;
  padding: 0 5px;
  transition: 0.3s ease;
  z-index: 1;
  border-radius: 14px;
  font-size: 14px;
  margin-bottom: 5px;
  margin-top: 10px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #7A23FF;
}


h1 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 30px;
}

.register-form .form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.register-form label {
  font-size: 14px;
  margin-bottom: 5px;
}

.register-form label span {
  color: red;
}

.register-form input[type="text"],
.register-form input[type="email"],
.register-form input[type="password"] {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
}

.radio-group {
  display: flex;
  gap: 20px;
  margin-top: 8px;
}

.radio-group label {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
}

.radio-group input[type="radio"] {
  margin-right: 8px;
  accent-color: #8b5cf6; /* Purple color */
}

    @media (max-width: 768px) {
    .register-container {
      padding: 25px 20px;
    }
    h1 {
      font-size: 22px;
    }
    .lable-obsalute {
      font-size: 13px;
    }
    .register-form input[type="text"],
    .register-form input[type="email"],
    .register-form input[type="password"] {
      font-size: 13px;
      padding: 10px;
    }
    .radio-group {
      flex-direction: column;
      gap: 10px;
    }
  }

  @media (max-width: 480px) {
    .register-container {
      padding: 20px 15px;
    }
    h1 {
      font-size: 20px;
    }
    .register-form .form-group {
      margin-bottom: 15px;
    }
    .submit-btn {
      margin-top: 30px;
    }
  }
`;
export default Register;

