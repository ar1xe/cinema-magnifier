import React, { FC, useCallback, useState } from "react";
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

const Circle = styled.div.attrs((props: { isLiked: boolean }) => props)`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => (props.isLiked ? `#a82525 ` : `#9b8e8e`)};
`;

const TitleBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`;

const PeopleCard: FC<CardPeopleProps> = ({
  name,
  profile_path,
  isLiked,
  id,
}) => {
  const [liked, setLiked] = useState(isLiked);
  const onLikeClick = useCallback(() => {
    setLiked((prevState) => !prevState);

    FavoriteService.addFavoriteElement({ name, profile_path, id }, "actors");
  }, [setLiked, id, profile_path, name]);

  return (
    <PeopleCardWrapper>
      <div>
        <Img src={BASE_URL + profile_path + API_KEY} width={160} height={240} />
      </div>
      <NameContainer>{name}</NameContainer>
      <div>
        <Button type="primary" onClick={onLikeClick}>
          <TitleBtn>
            {String(liked)}
            <Circle isLiked={liked} />
          </TitleBtn>
        </Button>
      </div>
    </PeopleCardWrapper>
  );
};

export default PeopleCard;
