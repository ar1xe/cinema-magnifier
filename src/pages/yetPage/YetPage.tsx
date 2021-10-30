import React, { FC } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const YetPageWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const YetPage: FC = () => {
  return (
    <>
      <Header />
      <YetPageWrapper>
        <h2>YetPage</h2>
      </YetPageWrapper>
      <Footer />
    </>
  );
};

export default YetPage;
