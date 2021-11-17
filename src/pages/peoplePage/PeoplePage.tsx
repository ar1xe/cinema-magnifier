import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PeopleService from "../../services/PeopleServices";
import PeopleCard from "./PeopleCard";

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

interface GetPeoplesInterface {
  page: number;
  results: People[];
}

export type People = {
  id: string;
  name: string;
  profile_path: string;
};

const PeoplePage: FC = () => {
  const [people, setPeople] = useState<People[]>([]);
  // const [moviePictures, setMoviePictures] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPeople = useCallback(async (numPage) => {
    const curentPeople: GetPeoplesInterface = await PeopleService.getPeoples(
      numPage
    );
    setPeople((prevState: People[]) => prevState.concat(curentPeople.results));
  }, []);

  useEffect(() => {
    fetchPeople(page);
  }, [page, fetchPeople]);

  const changePagePlus = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Header />
      <PeoplePageWrapper>
        <PeoplePageContainer>
          {people.map(({ name, profile_path, id }) => (
            <PeopleCard
              name={name}
              key={id}
              id={id}
              profile_path={profile_path}
            />
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
      </PeoplePageWrapper>
      <Footer />
    </>
  );
};

export default PeoplePage;
