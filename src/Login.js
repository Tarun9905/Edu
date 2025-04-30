import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Check if both email and password fields are filled
  const isFormValid = email !== '' && password !== '';

  return (
    <Wrapper>
      <div className="login-container">
        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <form className="login-form">
          <div className="form-group form-group-rational">
            <label htmlFor="username" className="label-absolute">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group form-group-rational">
            <label htmlFor="password" className="label-absolute">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
            <CreateButton type="submit" className="submit-btn" disabled={!isFormValid}>
              <NavLink to="/profile">Create Account</NavLink>
            </CreateButton>
        </form>
      </div>
    </Wrapper>
  );
};

// Your own styled CreateButton
const CreateButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? 'rgb(185, 183, 188)' : '#7c3aed')};
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;
  width: 100%; 

  &:hover {
    background-color: ${({ disabled }) => (disabled ? 'rgb(185, 183, 188)' : '#5b21b6')};
  }

  /* Ensure NavLink takes up the entire button and is styled correctly */
  a {
    color: inherit; /* Inherit color from button */
    text-decoration: none; /* Remove underline */
    display: block; /* Make link take full width of the button */
    width: 100%;
    height: 100%;
    text-align: center; /* Center the text */
    padding: 5px 0; /* Adjust padding to center vertically */
  }

  a:hover {
    text-decoration: none; /* Remove underline on hover */
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  NavLink {
    color: #fff;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
  }

  .login-container {
    width: 100%;
    max-width: 300px;
    padding: 30px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;
  }

  p {
    color: #666;
  }

  .form-group-rational {
    position: relative;
  }

  .label-absolute {
    position: absolute;
    top: -20%;
    left: 15px;
    transform: translateY(-50%);
    background-color: #fff;
    padding: 0 5px;
    font-size: 14px;
    color: #7A23FF;
    border-radius: 14px;
    margin-top: 10px;
    z-index: 1;
  }

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 30px;
  }

  .login-form .form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  .login-form label {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .login-form input[type="text"],
  .login-form input[type="password"] {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    .login-container {
      padding: 25px 20px;
    }
    h1 {
      font-size: 22px;
    }
    .label-absolute {
      font-size: 13px;
    }
    .login-form input[type="text"],
    .login-form input[type="password"] {
      font-size: 13px;
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    .login-container {
      padding: 20px 15px;
    }
    h1 {
      font-size: 20px;
    }
    .login-form .form-group {
      margin-bottom: 15px;
    }
    .submit-btn {
      margin-top: 30px;
    }
  }
`;

export default Login;
