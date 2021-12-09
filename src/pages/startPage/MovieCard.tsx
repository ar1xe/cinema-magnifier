import React, { FC, useCallback, useState } from "react";
import styled from "styled-components";
import FavoriteService from "../../services/FavoriteServices";
import { CardMovieProps } from "./StartPage";
import { Button } from "antd";

const BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "?api_key=cc05b5a727e14d0c6339bc25125883bd";

const MovieCardWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 40px 0 40px 0;
  border: solid 1.9px;
  border-radius: 15px;
  transition: all 3s;
  :hover {
    transition: 3s;
    transform: scale(1.1);
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 17px;
  height: 70px;
`;

const Header = styled.h3`
  color: #002640;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 3s;
  :hover {
    transition: 3s;
    transform: translateX(-10px);
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  border-radius: 15px;
  transition: all 1s;
  :hover {
    transition: 1s;
    transform: scale(1.1);
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
  height: 150px;
  margin: 30px 0 15px 0;
  padding: 0 10px 0 10px;
  opacity: 0.6;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  font-size: 17px;
  transition: all 1s;
  :hover {
    transition: 1s;
    transform: scale(1.1) rotate(3deg);
  }
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
  width: 130px;
`;

const MovieCard: FC<CardMovieProps> = ({
  title,
  popularity,
  poster_path,
  overview,
  isLiked,
  id,
}) => {
  const [liked, setLiked] = useState(isLiked);
  const onLikeClick = useCallback(() => {
    setLiked((prevState) => !prevState);

    FavoriteService.addFavoriteElement(
      { title, popularity, poster_path, overview, id },
      "moviesS"
    );
  }, [setLiked, title, popularity, poster_path, overview, id]);
  return (
    <MovieCardWrapper>
      <HeaderContainer>
        <Header>{title}</Header>
      </HeaderContainer>
      <ImgContainer>
        <Img src={BASE_URL + poster_path + API_KEY} width={250} height={350} />
      </ImgContainer>
      <Description>
        <p>{overview}</p>
      </Description>
      <Rating>
        <h4>Rating {popularity}</h4>
      </Rating>

      <Button type="primary" onClick={onLikeClick}>
        <TitleBtn>
          <Circle isLiked={liked} />
        </TitleBtn>
      </Button>
    </MovieCardWrapper>
  );
};

export default MovieCard;
