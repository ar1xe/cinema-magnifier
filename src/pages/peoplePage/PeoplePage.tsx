import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PeopleCard from "./PeopleCard";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchPeoples } from "../../redux/saga/actions/peoplesActions";
import { getPeoples } from "../../redux/selectors/peoplesSelectors";

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

export interface GetPeoplesInterface {
  page: number;
  results: Peoples[];
}

export type Peoples = {
  id: string;
  name: string;
  profile_path: string;
};

const PeoplePage: FC = () => {
  const dispatch = useDispatch();
  const people: Peoples[] = useSelector(getPeoples);
  const peoplesLoading: boolean = useSelector(
    (state: RootState) => state.peoplesState.peoplesLoading
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({ type: fetchPeoples.type, payload: page });
  }, [page, dispatch]);

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
