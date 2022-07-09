import React from "react";
import { useLocation } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";

import { ListSearch, ListResultItem } from "../../components";

import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  padding: 16px 0px;
  align-items: center;
`;

const ListContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  margin-top: 30px;
`;

const ListResultContainer = styled.div`
  flex: 3;
  margin-left: 20px;
`;

export const List = ({ route }) => {
  const location = useLocation();
 

  return (
    <MainContainer>
      <Container>
        <Navbar />
        <Header type="list" />
      </Container>
      <ListContainer>
        <ListSearch location={location} />
        <ListResultContainer>
          <ListResultItem />
          <ListResultItem />
          <ListResultItem />
          <ListResultItem />
          <ListResultItem />
        </ListResultContainer>
      </ListContainer>
    </MainContainer>
  );
};
