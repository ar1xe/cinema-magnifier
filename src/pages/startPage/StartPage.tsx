import React, { FC } from "react";
import styled from "styled-components";

const StartPageWrapper = styled.div`
  min-height: 100vh;
`;

const StartPage: FC = () => {
  return (
    <StartPageWrapper>
      <h2>START PAGE</h2>
    </StartPageWrapper>
  );
};

export default StartPage;
