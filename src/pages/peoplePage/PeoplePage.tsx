import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PeopleService from "../../services/PeopleServices";
import PeopleCard from "./PeopleCard";
// import PeopleMoviePictures from "./PeopleMoviePictures";

const PeoplePageWrapper = styled.div`
  /* min-height: 70vh; */
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
  // const [moviePictures, setMoviePictures] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const curentPeople = await PeopleService.getPeoples(page);

        setPeople(curentPeople.results);

        // setPeople((prevState) => [...prevState, ...curentPeople]);

        // setPeople((prevState) => prevState.concat(curentPeople));

        console.log(curentPeople);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setPeople, page]);

  const changePagePlus = () => {
    setPage(page + 1);
  };

  const changePageMinus = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <Header />
      <PeoplePageWrapper>
        <PeoplePageContainer>
          {people.map(({ name, profile_path, id }) => (
            <PeopleCard name={name} imgURL={profile_path} key={id} id={id} />
          ))}
          {/* <div>
            {moviePictures.map(({ id, title }) => (
              <PeopleMoviePictures key={id} nameMovie={title} id={id} />
            ))}
          </div> */}
        </PeoplePageContainer>
        <button type="button" onClick={changePagePlus}>
          ++++
        </button>
        <button type="button" onClick={changePageMinus}>
          ----
        </button>
      </PeoplePageWrapper>
      <Footer />
    </>
  );
};

export default PeoplePage;
