import React, { FC } from "react";
import styled from "styled-components";
import { CardPeopleProps } from "../peoplePage/PeoplePage";

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

const FavoriteActorsCard: FC<CardPeopleProps> = ({
  name,
  profile_path,
  id,
}) => {
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
        <NameContainer>{name}</NameContainer>
      </PeopleCardWrapper>
    </>
  );
};

export default FavoriteActorsCard;
