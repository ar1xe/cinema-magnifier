import React, { FC, useCallback, useEffect, useState } from "react";
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

interface GetMovieInterface {
  page: number;
  results: Movies[];
}

export interface Movies {
  id: string;
  title: string;
  popularity: number;
  overview: string;
  poster_path: string;
}

const StartPage: FC = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [page, setPage] = useState(1);

  const fetchMovies = useCallback(async (numPage) => {
    const currentMovie: GetMovieInterface = await StartPageServices.getMovies(
      numPage
    );
    setMovies((prevState: Movies[]) => prevState.concat(currentMovie.results));
  }, []);

  useEffect(() => {
    fetchMovies(page);
  }, [page, fetchMovies]);

  const changePagePlus = () => {
    setPage(page + 1);
  };

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
        <button type="button" onClick={changePagePlus}></button>
      </StartPageWrapper>
      <Footer />
    </>
  );
};

export default StartPage;
