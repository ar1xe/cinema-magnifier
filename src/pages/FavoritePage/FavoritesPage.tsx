import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import FavoriteService from "../../services/FavoriteServices";
import { CardPeopleProps, Info, Peoples } from "../peoplePage/PeoplePage";
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
  }, [setFavoriteActors]);

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
              original_name,
              first_air_date,
              known_for,
            }) => {
              return (
                <FavoriteActorsCard
                  name={name}
                  profile_path={profile_path}
                  id={id}
                  original_name={original_name}
                  first_air_date={first_air_date}
                  known_for={known_for}
                  key={id}
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
