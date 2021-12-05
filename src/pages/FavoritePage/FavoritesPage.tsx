import React, { FC } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const FavoritesPageWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FavoritesPage: FC = () => {
  return (
    <>
      <Header />
      <FavoritesPageWrapper>
        <h2>Favorites Page</h2>
      </FavoritesPageWrapper>
      <Footer />
    </>
  );
};

export default FavoritesPage;
