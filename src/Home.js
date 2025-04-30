import React from 'react';
import styled from "styled-components";
import CreateButton from "./Component/CreateButton";
import LoginButton from "./Component/LoginButton";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>Welcome to PopX</Title>
        <Subtitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Subtitle>
        <div className="buttons-div">
          <NavLink to={'/register'}><CreateButton>Create Account</CreateButton></NavLink>
          <NavLink to={'/login'}><LoginButton>Already Registered? Login</LoginButton></NavLink>
        </div>
      </ContentWrapper>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Push content to the bottom */
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 100%;
  text-align: center;

  .buttons-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export default Home;
