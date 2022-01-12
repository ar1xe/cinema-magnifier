import React, { FC } from "react";
import styled from "styled-components";
import { Peoples } from "../peoplePage/PeoplePage";

const BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "?api_key=cc05b5a727e14d0c6339bc25125883bd";

const PeopleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 15px 30px 15px;
`;

const Img = styled.img`
  border-radius: 15px 15px 5px 5px;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #002640;
`;

const FavoriteActorsCard: FC<Peoples> = ({ name, profile_path, known_for }) => {
  return (
    <>
      <PeopleCardWrapper>
        <div>
          <Img
            src={BASE_URL + profile_path + API_KEY}
            width={160}
            height={240}
          />
        </div>
        <div></div>
        <NameContainer>{name}</NameContainer>

        <div>
          {known_for?.map((i) => (
            <p>{i.original_title}</p>
          ))}
        </div>
        <div>
          {known_for?.map((poster) => (
            <div>{BASE_URL + poster.poster_path}</div>
          ))}
        </div>

        {known_for?.map((i) => (
          <p>{i.release_date}</p>
        ))}
      </PeopleCardWrapper>
    </>
  );
};

export default FavoriteActorsCard;
