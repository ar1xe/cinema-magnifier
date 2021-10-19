import React, { FC } from "react";
import styled from "styled-components";
import HeaderLogo from "../../assets/movies.svg";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  background-color: #82d8ee;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 1050px;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const Header: FC = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <div>
            <img src={HeaderLogo} alt="logo" />
          </div>
          <div>
            <span>movies</span>
            <span>serials</span>
          </div>
        </HeaderContainer>
      </HeaderWrapper>
      {/* <div>
        <img src={HeaderLogo} alt="logo" />
      </div> */}
    </>
  );
};

export default Header;
