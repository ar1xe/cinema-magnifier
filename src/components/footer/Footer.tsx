import React, { FC } from "react";
import Logo from "../../assets/logo.svg";
import FB from "../../assets/facebook.svg";
import Mail from "../../assets/mail.svg";
import Reddit from "../../assets/reddit.svg";
import Setting from "../../assets/setting.svg";
import { FooterWrapper, FooterContainer } from "./FooterStyledComponents";

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
