import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PeopleService from "../../services/PeopleServices";
import PeopleCard from "./PeopleCard";

const PeoplePageWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

  return (
    <>
      <Header />
      <PeoplePageWrapper>
        <h2>PeoplePage</h2>
        <div>
          {people.map(({ name, profile_path, id }) => (
            <PeopleCard name={name} imgURL={profile_path} key={id} id={id} />
          ))}
        </div>
      </PeoplePageWrapper>
      <Footer />
    </>
  );
};

export default PeoplePage;
