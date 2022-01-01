import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import FavoriteService from "../../services/FavoriteServices";
import { CardPeopleProps } from "../peoplePage/PeoplePage";
import { MovieCardProps } from "../startPage/StartPage";
import FavoriteActorsCard from "./FavoriteActorsCard";

const FavoritesPageWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FavoritesPage: FC = () => {
  const [favoriteActors, setFavoriteActors] = useState<CardPeopleProps[]>([]);
  const [favoriteMovies, setFavoriteMovies] = useState<MovieCardProps[]>([]);

  useEffect(() => {
    (async () => {
      const { actors, moviesS } = await FavoriteService.fetchFavorites();
      setFavoriteMovies(moviesS);
      setFavoriteActors(actors);
    })();
  }, [setFavoriteActors]);

  return (
    <>
      <Header />
      <FavoritesPageWrapper>
        {/* {favoriteActors.map((actor) => (
          <FavoriteActorsCard actor={actor} />
        ))} */}
        <p>asdasdasdasd</p>
      </FavoritesPageWrapper>
      <Footer />
    </>
  );
};

export default FavoritesPage;
