import React, { FC } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const OtherPageWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OtherPage: FC = () => {
  return (
    <>
      <Header />
      <OtherPageWrapper>
        <h2>OtherPage</h2>
      </OtherPageWrapper>
      <Footer />
    </>
  );
};

export default OtherPage;
