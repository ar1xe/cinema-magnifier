import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteService from "../../services/FavoriteServices";
import { CardPeopleProps } from "../peoplePage/PeoplePage";

const FavoriteActorsCard: FC = () => {
  const [favoriteActors, setFavoriteActors] = useState<CardPeopleProps[]>([]);

  useEffect(() => {
    (async () => {
      const { actors } = await FavoriteService.getFavoriteActors();
      setFavoriteActors(actors);
    })();
  }, []);
  return <div></div>;
};

export default FavoriteActorsCard;
