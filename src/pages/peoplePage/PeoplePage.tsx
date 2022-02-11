import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PeopleCard from "./PeopleCard";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeoples } from "../../redux/saga/actions/peoplesActions";
import { getPeoples } from "../../redux/selectors/peoplesSelectors";
import FavoriteService from "../../services/FavoriteServices";
import { getPeopleSearch } from "../../redux/selectors/searchPeopleSelector";
import { fetchSearchPeoples } from "../../redux/saga/actions/searchPeoplesAction";
import { animateScroll as scroll } from "react-scroll";
import { UpCircleTwoTone } from "@ant-design/icons";

const { Search } = Input;

const PeoplePageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PeoplePageContainer = styled.div`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const SearchContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleBtn = styled(Button)`
  width: 250px;
  margin-bottom: 30px;
`;

const CustomSearch = styled(Search)`
  width: 60%;
  box-sizing: border-box;
  outline: none;
  margin-top: 30px;
  height: 60px;
`;

const ButtonScroll = styled(UpCircleTwoTone)`
  font-size: 50px;
  position: fixed;
  bottom: 12px;
  right: 15%;
`;

export interface CardPeopleProps extends Peoples {
  addFavoriteActor?: (id: string) => void;
  isLiked?: boolean;
}

export interface GetPeoplesInterface {
  page: number;
  results: Peoples[];
}

export interface Peoples {
  notes?: Note[];
  id: string;
  profile_path: string;
  name: string;
  popularity?: number;
  known_for?: Info[];
  original_title?: string;
  release_date?: string;
  poster_path?: string;
  deleteFavoriteElement?: () => void;
}

export interface Note {
  id: string;
  value: string;
}

export interface Info {
  original_title: string;
  release_date: string;
  poster_path?: string;
}

const PeoplePage: FC = () => {
  const dispatch = useDispatch();
  const people: Peoples[] = useSelector(getPeoples);
  const [page, setPage] = useState(1);
  const [currentFavorites, setCurrentFavorite] = useState<Peoples[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchFavoritesPeoples = async () => {
      const { actors } = await FavoriteService.fetchFavorites();
      setCurrentFavorite(actors);
    };
    fetchFavoritesPeoples();
  }, []);

  useEffect(() => {
    dispatch({ type: fetchPeoples.type, payload: page });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickShowMore = () => {
    setPage(page + 1);
    if (Boolean(query) && query !== "undefined") {
      return dispatch({
        type: fetchSearchPeoples.type,
        payload: { page: page + 1, query },
      });
    }
    dispatch({ type: fetchPeoples.type, payload: page + 1 });
  };

  const onSearchChange = useCallback(
    ({ nativeEvent: { data: searchString } }) => {
      setQuery((prevState) => prevState + searchString);
    },
    []
  );

  const onSearch = useCallback(
    (searchString) => {
      if (Boolean(searchString) && searchString !== "undefined") {
        setPage(1);
        return dispatch({
          type: fetchSearchPeoples.type,
          payload: { page: 1, query: searchString },
        });
      }
      setQuery("");
      dispatch({ type: fetchPeoples.type, payload: 1 });
    },
    [dispatch]
  );

  const customScroll = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Header />
      <PeoplePageWrapper>
        <SearchContainer>
          <CustomSearch
            placeholder="Search actors..."
            allowClear
            onSearch={onSearch}
            onChange={onSearchChange}
          />
        </SearchContainer>
        <PeoplePageContainer>
          {people.map(({ name, profile_path, id, known_for }) => {
            const isLiked = currentFavorites.some((elem) => elem.id === id);
            return (
              <PeopleCard
                name={name}
                key={id}
                id={id}
                profile_path={profile_path}
                isLiked={isLiked}
                known_for={known_for}
              />
            );
          })}
        </PeoplePageContainer>
        <div>
          <StyleBtn type="primary" onClick={onClickShowMore}>
            More...
          </StyleBtn>
        </div>
      </PeoplePageWrapper>
      <ButtonScroll onClick={customScroll} />
      <Footer />
    </>
  );
};

export default PeoplePage;
