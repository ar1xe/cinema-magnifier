import React, { FC } from "react";

interface Tprops {
  id: string;
  name: string;
  imgURL: string;
}

const BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "?api_key=cc05b5a727e14d0c6339bc25125883bd";

const PeopleCard: FC<Tprops> = ({ name, imgURL }) => {
  return (
    <div>
      {name}
      <img src={BASE_URL + imgURL + API_KEY} />
    </div>
  );
};

export default PeopleCard;
