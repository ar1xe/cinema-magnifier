import React, { FC } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import axios from "axios";

const StartPageWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BASE_URL = "https://api.themoviedb.org/3/";
const MOVIES = "movie/top_rated";
const API_KEY = "?api_key=cc05b5a727e14d0c6339bc25125883bd";

const StartPage: FC = () => {
  axios.get(BASE_URL + MOVIES + API_KEY).then((response) => {
    console.log(response.data);
  });

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
