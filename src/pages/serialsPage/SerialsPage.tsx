import React, { FC } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const SerialsPageWrapper = styled.div`
  min-height: 70vh;
`;

const SerialsPage: FC = () => {
  return (
    <>
      <Header />
      <SerialsPageWrapper>
        <h2>SerialsPage</h2>
      </SerialsPageWrapper>
      <Footer />
    </>
  );
};

export default SerialsPage;
