import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MovieCard from "./MovieCard";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/selectors/moviesSelectors";
import { fetchMovies } from "../../redux/saga/actions/movieActions";
import FavoriteService from "../../services/FavoriteServices";
import { Input } from "antd";

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

const InputWrapper = styled.div`
  margin-top: 25px;
`;

export interface CardMovieProps extends Movies {
  addFavoriteMovie?: (id: string) => void;
  isLiked?: boolean;
}

export interface GetMovieInterface {
  page: number;
  results: Movies[];
}

export interface MovieCardProps {
  id: string;
  name: string;
  rating: number;
  description: string;
  imgURL: string;
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
  const [page, setPage] = useState(1);
  const [currentFavorites, setCurrentFavorite] = useState<Movies[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    (async () => {
      const { moviesS } = await FavoriteService.fetchFavorites();
      setCurrentFavorite(moviesS);
    })();
  }, []);

  useEffect(() => {
    dispatch({ type: fetchMovies.type, payload: page });
  }, [page, dispatch]);

  const changePagePlus = () => {
    setPage(page + 1);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(value.toLocaleLowerCase());
  });

  return (
    <>
      <Header />
      <StartPageWrapper>
        <InputWrapper>
          <form>
            <Input
              type="text"
              placeholder="Search movies..."
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
          </form>
        </InputWrapper>
        <MoviesContainer>
          {filteredMovies.map(
            ({ title, poster_path, popularity, id, overview }) => {
              const isLiked = currentFavorites.some((elem) => elem.id === id);
              return (
                <MovieCard
                  title={title}
                  poster_path={poster_path}
                  popularity={popularity}
                  overview={overview}
                  key={id}
                  id={id}
                  isLiked={isLiked}
                />
              );
            }
          )}
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
