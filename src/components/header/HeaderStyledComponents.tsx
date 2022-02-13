import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  background-color: #002640;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 60%;
  height: 115px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const NavBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 50%;
  a {
    color: #ffffff;
    text-decoration: none;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const BtnsNavBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 25%;
  justify-content: space-around;
  button {
    width: 100px;
    height: 40px;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    color: #002640;
    border-radius: 30px;
    border-color: #8f3c3c;
    background-color: #90cdfb;
    cursor: pointer;
    a {
      color: #002640;
      text-decoration: none;
    }
  }
  @media (max-width: 415px) {
    width: 70%;
    display: flex;
    margin-top: 15px;
    justify-content: space-around;
    button {
      width: 85px;
      height: 25px;
      font-family: "Roboto", sans-serif;
      font-size: 10px;
      color: #002640;
      border-radius: 30px;
      border-color: #8f3c3c;
      background-color: #90cdfb;
      cursor: pointer;
      a {
        color: #002640;
      }
    }
  }
`;

export const LogoContainer = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;
