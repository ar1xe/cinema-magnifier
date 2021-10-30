import React, { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import {
  HeaderWrapper,
  HeaderContainer,
  NavBar,
  BtnsNavBar,
} from "../header/HeaderStyledComponents";
import { Button } from "antd";

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" width={100} height={100} />
          </Link>
        </div>
        <NavBar>
          <span>
            <Link to="/">Movies</Link>
          </span>
          <span>
            <Link to="/serials">Serials</Link>
          </span>
          <span>
            <Link to="/people">People</Link>
          </span>
          <span>
            <Link to="/yet">Yet</Link>
          </span>
        </NavBar>
        <BtnsNavBar>
          <Link to={"/signin"}>
            {/* <button type="button">Sign In</button> */}
            <Button type="primary">Sign In</Button>
          </Link>
          <Link to={"/registration"}>
            {/* <button type="button">Registration</button> */}
            <Button type="primary">Registration</Button>
          </Link>
        </BtnsNavBar>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
