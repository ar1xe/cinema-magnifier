import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import FavoriteService from "../../services/FavoriteServices";
import { Peoples } from "../peoplePage/PeoplePage";
import { CardMovieProps } from "../startPage/StartPage";
import FavoriteActorsCard from "./FavoriteActorsCard";
import FavoriteMovieCard from "./FavoriteMovieCard";

const FavoritesPageWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MovieWrapper = styled.div`
  width: 1050px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ActorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FavoritesPage: FC = () => {
  const [favoriteActors, setFavoriteActors] = useState<Peoples[]>([]);
  const [favoriteMovies, setFavoriteMovies] = useState<CardMovieProps[]>([]);

  const fetchFavorites = useCallback(async () => {
    const { actors, movies } = await FavoriteService.fetchFavorites();
    setFavoriteMovies(movies);
    setFavoriteActors(actors);
  }, []);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const deleteFavoriteElement = useCallback(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return (
    <>
      <Header />
      <FavoritesPageWrapper>
        <ActorsWrapper>
          {favoriteActors.map(
            ({
              name,
              profile_path,
              id,
              original_title,
              release_date,
              known_for,
              notes,
            }) => {
              return (
                <FavoriteActorsCard
                  name={name}
                  profile_path={profile_path}
                  key={id}
                  id={id}
                  original_title={original_title}
                  release_date={release_date}
                  known_for={known_for}
                  notes={notes}
                  deleteFavoriteElement={deleteFavoriteElement}
                />
              );
            }
          )}
        </ActorsWrapper>
        <MovieWrapper>
          {favoriteMovies.map(
            ({ title, popularity, poster_path, overview, id }) => (
              <FavoriteMovieCard
                title={title}
                popularity={popularity}
                poster_path={poster_path}
                overview={overview}
                key={id}
                id={id}
              />
            )
          )}
        </MovieWrapper>
      </FavoritesPageWrapper>
      <Footer />
    </>
  );
};

export default FavoritesPage;
