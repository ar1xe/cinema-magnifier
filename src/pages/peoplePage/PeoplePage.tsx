import React, { FC } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const PeoplePageWrapper = styled.div`
  min-height: 70vh;
`;

const PeoplePage: FC = () => {
  return (
    <>
      <Header />
      <PeoplePageWrapper>
        <h2>PeoplePage</h2>
      </PeoplePageWrapper>
      <Footer />
    </>
  );
};

export default PeoplePage;
