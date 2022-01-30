import React, { FC, useState } from "react";
import styled from "styled-components";
import { Peoples } from "../peoplePage/PeoplePage";

const BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "?api_key=cc05b5a727e14d0c6339bc25125883bd";

const PeopleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 15px 30px 15px;
  width: 700px;
`;

const PeopleCardContent = styled.div`
  display: flex;
`;

const ImgAndNameActor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
`;

const FilmContent = styled.div`
  display: flex;
`;

const Film = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
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
  const [arr, setArr] = useState([""]);
  const [value, setValue] = useState("");

  const add = () => {
    setArr([...arr, value]);
  };

  // const inputValue = () => {
  //   setValue(event?.target?.value);
  // };

  return (
    <>
      <PeopleCardWrapper>
        <PeopleCardContent>
          <ImgAndNameActor>
            <div>
              <Img
                src={BASE_URL + profile_path + API_KEY}
                width={160}
                height={240}
              />
            </div>

            <NameContainer>{name}</NameContainer>
          </ImgAndNameActor>
          <DescriptionWrapper>
            <FilmContent>
              {known_for?.map((nameMov) => (
                <Film>
                  <span> {nameMov.original_title} </span>
                  <div>
                    <img
                      src={BASE_URL + nameMov.poster_path}
                      width={130}
                      height={190}
                      alt="111"
                    />
                  </div>
                  <span> {nameMov.release_date} </span>
                </Film>
              ))}
            </FilmContent>
          </DescriptionWrapper>
          <div>
            {/* <input value={value} onChange={inputValue} /> */}
            <input onClick={add} />
          </div>
        </PeopleCardContent>
      </PeopleCardWrapper>
    </>
  );
};

export default FavoriteActorsCard;
