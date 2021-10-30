import React, { FC } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const StartPageWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartPage: FC = () => {
  return (
    <>
      <Header />
      <StartPageWrapper>
        <h2>START PAGE</h2>
      </StartPageWrapper>
      <Footer />
    </>
  );
};

export default StartPage;
