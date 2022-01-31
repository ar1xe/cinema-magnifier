import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MovieCard from "./MovieCard";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/saga/actions/movieActions";
import { getMovies } from "../../redux/selectors/moviesSelectors";
import FavoriteService from "../../services/FavoriteServices";
import { getMovieSearch } from "../../redux/selectors/searchMovieSelector";
import { fetchSearchMovies } from "../../redux/saga/actions/searchMoviesAction";
import SearchServices from "../../services/SearchServices";

const { Search } = Input;

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

const CustomSearch = styled(Search)`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  margin-top: 30px;
  height: 60px;
  width: 550px;
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
  const [query, setQuery] = useState("");
  const searchMovies: Movies[] = useSelector(getMovieSearch);

  useEffect(() => {
    const fetchFavoritesMovies = async () => {
      const { movies: favoritesMovies } =
        await FavoriteService.fetchFavorites();
      setCurrentFavorite(favoritesMovies);
    };
    fetchFavoritesMovies();
  }, []);

  useEffect(() => {
    dispatch({ type: fetchMovies.type, payload: page });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickShowMore = () => {
    setPage(page + 1);
    if (Boolean(query)) {
      return dispatch({
        type: fetchSearchMovies.type,
        payload: { page: page + 1, query },
      });
    }
    dispatch({ type: fetchMovies.type, payload: page + 1 });
  };

  const onSearchChange = useCallback(
    ({ nativeEvent: { data: searchString } }) => {
      setQuery(searchString);
    },
    []
  );

  const onSearch = useCallback(
    (searchString) => {
      if (Boolean(searchString)) {
        return dispatch({
          type: fetchSearchMovies.type,
          payload: { page, query: searchString },
        });
      }
      setQuery("");
    },
    [page, dispatch]
  );

  return (
    <>
      <Header />
      <StartPageWrapper>
        <div>
          <CustomSearch
            placeholder="Search movies..."
            allowClear
            onSearch={onSearch}
            onChange={onSearchChange}
          />
        </div>
        <InputWrapper></InputWrapper>
        <MoviesContainer>
          {movies.map(({ title, poster_path, popularity, id, overview }) => {
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
          })}
        </MoviesContainer>
        <div>
          <StyleBtn type="primary" onClick={onClickShowMore}>
            More...
          </StyleBtn>
        </div>
      </StartPageWrapper>
      <Footer />
    </>
  );
};

export default StartPage;
