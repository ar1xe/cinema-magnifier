import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { CardPeopleProps } from "./PeoplePage";
import FavoriteService from "../../services/FavoriteServices";

const BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "?api_key=cc05b5a727e14d0c6339bc25125883bd";

const PeopleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 15px 30px 15px;
  /* border: solid 1.9px;
  border-radius: 15px;
  transition: all 3s;
  :hover {
    transition: 3s;
    transform: scale(1.1);
  } */
`;

const Img = styled.img`
  border-radius: 15px 15px 5px 5px;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;

  color: #002640;
  /* transition: all 3s;
  :hover {
    transition: 3s;
    transform: translateX(-10px);
  } */
`;

const SVG = styled.div.attrs((props: { isLiked: boolean }) => props)`
  #heart {
    fill: ${(props) => (props.isLiked ? `red` : `white`)};
  }
  display: flex;
  justify-content: center;
  width: 130px;
`;

const PeopleCard: FC<CardPeopleProps> = ({
  name,
  profile_path,
  isLiked = false,
  id,
  known_for,
}) => {
  const [liked, setLiked] = useState(false);
  const onLikeClick = useCallback(() => {
    setLiked((prevState) => !prevState);

    FavoriteService.addFavoriteElement(
      { name, profile_path, id, known_for },
      "actors"
    );
  }, [setLiked, id, profile_path, name, known_for]);

  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked, setLiked]);

  return (
    <PeopleCardWrapper>
      <div>
        <Img src={BASE_URL + profile_path + API_KEY} width={160} height={240} />
      </div>
      <NameContainer>{name}</NameContainer>
      <div></div>
      <div>
        <Button type="primary" onClick={onLikeClick}>
          <SVG isLiked={liked}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              viewBox="0 0 512 512"
            >
              <title>Heart</title>
              <path
                id="heart"
                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </SVG>
        </Button>
      </div>
    </PeopleCardWrapper>
  );
};

export default PeopleCard;
