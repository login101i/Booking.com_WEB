import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";

import { ListSearch, ListResultItem } from "../../components";
import { Text } from "../../sharedComponents";

import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";

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
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);



  const {data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 1000}`
  );
  console.log(data)

  const handleSearch = () => {
    console.log("actualisation")
    reFetch();
  };

  return (
    <MainContainer>
      <Container>
        <Navbar />
        <Header type="list" />
      </Container>
      <ListContainer>
        <ListSearch location={location} setMin={setMin} setMax={setMax} handleSearch={handleSearch} />
        <ListResultContainer>
          {loading ? (
            "loading"
          ) : (
            <>
              {data &&
                data.map((item, index) => (
                  <ListResultItem item={item} key={index} />
                ))}
            </>
          )}
        </ListResultContainer>
      </ListContainer>
    </MainContainer>
  );
};
