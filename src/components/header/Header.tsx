import React, { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import {
  HeaderWrapper,
  HeaderContainer,
  NavBar,
  BtnsNavBar,
  LogoContainer,
} from "../header/HeaderStyledComponents";
import { Button } from "antd";

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer>
          <Link to="/">
            <img src={Logo} alt="logo" width={100} height={100} />
          </Link>
        </LogoContainer>
        <NavBar>
          <span>
            <Link to="/">Movies</Link>
          </span>
          <span>
            <Link to="/favorite">Favorites</Link>
          </span>
          <span>
            <Link to="/people">People</Link>
          </span>
          <span>
            <Link to="/other">Other</Link>
          </span>
        </NavBar>
        <BtnsNavBar>
          <Link to={"/signin"}>
            <Button type="primary">Sign In</Button>
          </Link>
          <Link to={"/registration"}>
            <Button type="primary">Registration</Button>
          </Link>
        </BtnsNavBar>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
