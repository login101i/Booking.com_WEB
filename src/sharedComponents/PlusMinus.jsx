import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;

  border: 1px solid #005999;
  border-radius: 3px;
  margin: 0px 15px;
  transition: 0.14s all ease-in-out;

  &:hover {
    background-color: lightblue;
  }
`;

export const PlusMinus = ({ sign }) => {
  return <MainContainer>{sign}</MainContainer>;
};
