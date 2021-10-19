import React, { FC } from "react";
import styled from "styled-components";
import HeaderLogo from "../../assets/movies.svg";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  background-color: #a6b6ac;
  justify-content: center;
  // font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: #003464;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 1050px;
  height: 115px;
  justify-content: flex-start;
  align-items: center;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-left: 50px;
`;

const Header: FC = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <div>
            <img src={HeaderLogo} alt="logo" width={120} height={100} />
          </div>
          <NavBar>
            <span>Movies</span>
            <span>Serials</span>
            <span>People</span>
            <span>Yet</span>
          </NavBar>
        </HeaderContainer>
      </HeaderWrapper>
    </>
  );
};

export default Header;
