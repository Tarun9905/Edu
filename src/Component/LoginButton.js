import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: rgb(147, 88, 236);
  border: none;
  color: white;
  padding: 12px 30px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 300px;
  max-width: 90%; /* makes it shrink on smaller devices */

  &:hover {
    background-color: rgb(164, 116, 240);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 40px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 10px 10px;
  }
`;

const LoginButton = ({ children, type = "button" }) => {
  return (
    <StyledButton type={type}>
      {children}
    </StyledButton>
  );
};

export default LoginButton;

