import React, { FC } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const RegistrationPageWrapper = styled.div`
  min-height: 70vh;
`;

const RegistrationPage: FC = () => {
  return (
    <>
      <Header />
      <RegistrationPageWrapper>
        <h2>RegistrationPage</h2>
      </RegistrationPageWrapper>
      <Footer />
    </>
  );
};

export default RegistrationPage;
