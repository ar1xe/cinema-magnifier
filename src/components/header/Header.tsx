import React, { FC } from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.svg";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  background-color: #002640;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 1050px;
  height: 115px;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
`;

const BtnsNavBar = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  button {
    width: 100px;
    height: 40px;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    color: #002640;
    border-radius: 20px;
    border-color: #8f3c3c;
    background-color: #90cdfb;
  }
`;

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div>
          <img src={Logo} alt="logo" width={100} height={100} />
        </div>
        <NavBar>
          <span>Movies</span>
          <span>Serials</span>
          <span>People</span>
          <span>Yet</span>
        </NavBar>
        <BtnsNavBar>
          <button type="button">Sig In</button>
          <button type="button">Registration</button>
        </BtnsNavBar>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
