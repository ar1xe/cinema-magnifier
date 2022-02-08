import React, { FC } from "react";
import { FrownOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Button } from "antd";
import { Link } from "react-router-dom";

const EmptyIMG = styled(FrownOutlined)`
  font-size: 200px;
  color: #002640;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  margin-bottom: 30px;
  span {
    color: #002640;
    font-size: 30px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin-top: 30px;
`;

const Buttons = styled(Button)`
  font-size: 16px;
`;

const EmptyFavorites: FC = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <span> FAVORITES IS EMPTY</span>
        </Header>

        <EmptyIMG rotate={50} />
        <ButtonsContainer>
          <Link to="/">
            <Buttons type="link">Movie page</Buttons>
          </Link>
          <Link to="/people">
            <Buttons type="link">Actors page</Buttons>
          </Link>
        </ButtonsContainer>
      </Wrapper>
    </>
  );
};

export default EmptyFavorites;
