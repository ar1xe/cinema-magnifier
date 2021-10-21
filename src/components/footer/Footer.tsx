import React, { FC } from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import FB from "../../assets/facebook.svg";
import Mail from "../../assets/mail.svg";
import Reddit from "../../assets/reddit.svg";
import Setting from "../../assets/setting.svg";

const FooterWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  background-color: #002640;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

const FooterContainer = styled.div`
  display: flex;
  width: 1050px;
  height: 200px;
  align-items: center;
  justify-content: space-between;
`;

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <img src={Logo} alt="logo" width={80} height={80} />
        <img src={FB} alt="logo" width={80} height={80} />
        <img src={Mail} alt="logo" width={80} height={80} />
        <img src={Reddit} alt="logo" width={80} height={80} />
        <img src={Setting} alt="logo" width={80} height={80} />

        <div></div>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
