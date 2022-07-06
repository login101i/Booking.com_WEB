import React from "react";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";

import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  padding: 16px 0px;
  align-items: center;
`;

export const List = () => {
  return (
    <MainContainer>
      <Navbar />
      <Header type="list" />
    </MainContainer>
  );
};
