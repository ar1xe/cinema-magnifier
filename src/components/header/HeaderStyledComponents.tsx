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
  width: 1050px;
  height: 115px;
  justify-content: space-between;
  align-items: center;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

export const BtnsNavBar = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  button {
    width: 100px;
    height: 40px;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    color: #002640;
    border-radius: 20px;
    border-color: #8f3c3c;
    background-color: #90cdfb;
    cursor: pointer;
    a {
      color: #002640;
      text-decoration: none;
    }
  }
`;
