import React, { FC } from "react";
import styled from "styled-components";
import { People } from "./PeoplePage";

// export type CardItem = {
//   id: string;
//   name: string;
//   imgURL: string;
// };

const BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "?api_key=cc05b5a727e14d0c6339bc25125883bd";

const PeopleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 15px 30px 15px;
  border: solid 1.9px;
  border-radius: 15px;
  transition: all 3s;
  :hover {
    transition: 3s;
    transform: scale(1.1);
  }
`;

const Img = styled.img`
  border-radius: 15px 15px 5px 5px;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;

  color: #002640;
  transition: all 3s;
  :hover {
    transition: 3s;
    transform: translateX(-10px);
  }
`;

const PeopleCard: FC<People> = ({ name, profile_path }) => {
  return (
    <PeopleCardWrapper>
      <div>
        <Img src={BASE_URL + profile_path + API_KEY} width={160} height={240} />
      </div>
      <NameContainer>{name}</NameContainer>
    </PeopleCardWrapper>
  );
};

export default PeopleCard;
