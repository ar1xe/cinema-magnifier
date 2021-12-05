import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MovieCard from "./MovieCard";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/selectors/moviesSelectors";
import { fetchMovies } from "../../redux/saga/actions/movieActions";

const StartPageWrapper = styled.div`
  width: 100%;
  /* min-height: 70vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MoviesContainer = styled.div`
  width: 1050px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyleBtn = styled(Button)`
  width: 250px;
  margin-bottom: 30px;
`;

export interface CardMovieProps extends MovieCardProps {
  addFavoriteMovie: (id: string) => void;
}

export interface MovieCardProps {
  id: string;
  name: string;
  rating: number;
  description: string;
  imgURL: string;
}

export interface GetMovieInterface {
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
  const dispatch = useDispatch();
  const movies: Movies[] = useSelector(getMovies);
  // const moviesLoading: boolean = useSelector(
  //   (state: RootState) => state.moviesState.moviesLoading
  // );
  const [page, setPage] = useState(1);
  const [favoriteMovieArr, setFavoriteMovieArr] = useState<number[]>([]);

  const addFavoriteMovie = useCallback(
    (id) => {
      setFavoriteMovieArr(favoriteMovieArr.concat([id]));
    },
    [favoriteMovieArr, setFavoriteMovieArr]
  );

  const arrMovieTest = () => {
    for (let index = favoriteMovieArr.length - 1; index >= 0; index--) {
      if (favoriteMovieArr.indexOf(favoriteMovieArr[index]) !== index)
        favoriteMovieArr.splice(index, 1);
    }
  };
  arrMovieTest();

  useEffect(() => {
    dispatch({ type: fetchMovies.type, payload: page });
  }, [page, dispatch]);

  const changePagePlus = () => {
    setPage(page + 1);
  };

  console.log(favoriteMovieArr);

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
              addFavoriteMovie={addFavoriteMovie}
            />
          ))}
        </MoviesContainer>
        <div>
          <StyleBtn type="primary" onClick={changePagePlus}>
            More...
          </StyleBtn>
        </div>
      </StartPageWrapper>
      <Footer />
    </>
  );
};

export default StartPage;
