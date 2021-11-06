import React, { FC } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import axios from "axios";

const PeoplePageWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BASE_URL = "https://api.themoviedb.org/3/";
const URL_PEOPLE = "person/popular";
const API_KEY = "?api_key=cc05b5a727e14d0c6339bc25125883bd";

const PeoplePage: FC = () => {
  axios.get(BASE_URL + URL_PEOPLE + API_KEY).then((response) => {
    console.log(response.data);
  });
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
