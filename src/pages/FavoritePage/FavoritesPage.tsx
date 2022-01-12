import React, { FC, useEffect, useState } from "react";
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

const ActorsWrapper = styled.div`
  display: flex;
`;

const FavoritesPage: FC = () => {
  const [favoriteActors, setFavoriteActors] = useState<Peoples[]>([]);
  const [favoriteMovies, setFavoriteMovies] = useState<CardMovieProps[]>([]);

  useEffect(() => {
    (async () => {
      const { actors, moviesS } = await FavoriteService.fetchFavorites();
      setFavoriteMovies(moviesS);
      setFavoriteActors(actors);
    })();
  }, [setFavoriteActors, setFavoriteMovies]);

  console.log(favoriteActors);

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
              poster_path,
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
                  poster_path={poster_path}
                />
              );
            }
          )}
        </ActorsWrapper>
        <div>
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
        </div>
      </FavoritesPageWrapper>
      <Footer />
    </>
  );
};

export default FavoritesPage;
