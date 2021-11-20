import React, { FC } from "react";
import styled from "styled-components";
import Movies from "./StartPage";

interface Tprops {
  id: string;
  name: string;
  rating: number;
  description: string;
  imgURL: string;
}

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

const MovieCard: FC<Tprops> = ({ name, rating, imgURL, description }) => {
  return (
    <MovieCardWrapper>
      <HeaderContainer>
        <Header>{name}</Header>
      </HeaderContainer>
      <ImgContainer>
        <Img src={BASE_URL + imgURL + API_KEY} width={250} height={350} />
      </ImgContainer>
      <Description>
        <p>{description}</p>
      </Description>
      <Rating>
        <h4>Rating {rating}</h4>
      </Rating>
    </MovieCardWrapper>
  );
};

export default MovieCard;
