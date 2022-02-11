import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  background-color: #002640;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 60%;
  height: 190px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 850px) {
    img {
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 650px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }
`;
