import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import StartPageServices from "../../services/StartPageServices";
import MovieCard from "./MovieCard";

const StartPageWrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
`;

const MoviesContainer = styled.div`
  width: 1050px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StartPage: FC = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const curentMovies = await StartPageServices.getMovies();
        setMovies(curentMovies.results);
        console.log(curentMovies);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setMovies]);

  return (
    <>
      <Header />
      <StartPageWrapper>
        <MoviesContainer>
          {movies.map(({ title, poster_path, popularity, id, overview }) => (
            <MovieCard
              name={title}
              imgURL={poster_path}
              rating={popularity}
              description={overview}
              key={id}
              id={id}
            />
          ))}
        </MoviesContainer>
      </StartPageWrapper>
      <Footer />
    </>
  );
};

export default StartPage;
