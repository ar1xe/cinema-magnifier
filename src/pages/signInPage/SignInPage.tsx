import React, { FC } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const SignInPageWrapper = styled.div`
  min-height: 70vh;
`;

const SignInPage: FC = () => {
  return (
    <>
      <Header />
      <SignInPageWrapper>
        <h2>SignInPage</h2>
      </SignInPageWrapper>
      <Footer />
    </>
  );
};

export default SignInPage;
