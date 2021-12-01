import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PeopleCard from "./PeopleCard";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { fetchPeoples } from "../../redux/saga/actions/peoplesActions";
import { getPeoples } from "../../redux/selectors/peoplesSelectors";
import PeopleMoviePictures from "./PeopleMoviePictures";

const PeoplePageWrapper = styled.div`
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

export interface PeopleWithFunction extends Peoples {
  addFavoriteActor: any;
}

export interface GetPeoplesInterface {
  page: number;
  results: Peoples[];
}

export type Peoples = {
  id: string;
  profile_path: string;
  name: string;
};
const PeoplePage: FC = () => {
  const dispatch = useDispatch();
  const people: Peoples[] = useSelector(getPeoples);
  // const peoplesLoading: boolean = useSelector(
  //   (state: RootState) => state.peoplesState.peoplesLoading
  // );
  const [page, setPage] = useState(1);
  const [favoriteActiorArr, setFavoriteActiorArr] = useState<number[]>([]);

  const addFavoriteActor = useCallback(
    (id) => {
      console.log(id);

      // favoriteActiorArr.push(id);
      setFavoriteActiorArr(favoriteActiorArr.concat([id]));
    },
    [favoriteActiorArr, setFavoriteActiorArr]
  );

  useEffect(() => {
    dispatch({ type: fetchPeoples.type, payload: page });
  }, [page, dispatch]);

  const changePagePlus = () => {
    setPage(page + 1);
  };

  console.log(favoriteActiorArr);

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
              addFavoriteActor={addFavoriteActor}
            />
          ))}
        </PeoplePageContainer>
        <div>
          <StyleBtn type="primary" onClick={changePagePlus}>
            More...
          </StyleBtn>
        </div>
        <PeopleMoviePictures id={"asdasd"} nameMovie={"asdasdas"} />
      </PeoplePageWrapper>
      <Footer />
    </>
  );
};

export default PeoplePage;
