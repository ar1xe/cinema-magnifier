import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PeopleService from "../../services/PeopleServices";
import PeopleCard from "./PeopleCard";
import PeopleMoviePictures from "./PeopleMoviePictures";

const PeoplePageWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PeoplePageContainer = styled.div`
  width: 1050px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const PeoplePage: FC = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const curentPeople = await PeopleService.getPeoples();
        setPeople(curentPeople.results);
        console.log(curentPeople);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setPeople]);

  const [moviePictures, setMoviePictures] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const curentPaints = await PeopleService.getMoviePictures();
        setMoviePictures(curentPaints.results);
        console.log(curentPaints.results[0].known_for[0].title);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setMoviePictures]);

  return (
    <>
      <Header />
      <PeoplePageWrapper>
        <PeoplePageContainer>
          {people.map(({ name, profile_path, id }) => (
            <PeopleCard name={name} imgURL={profile_path} key={id} id={id} />
          ))}
          <div>
            {moviePictures.map(({ id, title }) => (
              <PeopleMoviePictures key={id} nameMovie={title} id={id} />
            ))}
          </div>
        </PeoplePageContainer>
      </PeoplePageWrapper>
      <Footer />
    </>
  );
};

export default PeoplePage;
