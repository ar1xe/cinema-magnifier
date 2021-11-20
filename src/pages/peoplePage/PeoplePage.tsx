import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PeopleService from "../../services/PeopleServices";
import PeopleCard from "./PeopleCard";
import { Button } from "antd";

const PeoplePageWrapper = styled.div`
  /* min-height: 70vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PeoplePageContainer = styled.div`
  width: 1050px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyleBtn = styled(Button)`
  width: 250px;
  margin-bottom: 30px;
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
        </PeoplePageContainer>
        <div>
          <StyleBtn type="primary" onClick={changePagePlus}>
            More...
          </StyleBtn>
        </div>
      </PeoplePageWrapper>
      <Footer />
    </>
  );
};

export default PeoplePage;
