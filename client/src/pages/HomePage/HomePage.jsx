import React from "react";
import styled from "styled-components";

import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { Flex, Text } from "../../sharedComponents";
import { Featured } from "../../components/Featured";
import {
  FeaturedList,
  FooterInfo1,
  FooterInfo2,
  MailList,
  FeaturedHotels
} from "../../components";
import useFetch from "../../hooks/useFetch";

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  padding: 16px 0px;
  align-items: center;
`;

const FeaturedContainer = styled.div`
  max-width: 1080px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-top: 100px;
  gap: 20px;
  margin-bottom: 50px;
`;

export const HomePage = () => {
  return (
    <>
      <Flex column center>
        <Container>
          <Navbar />
          <Header />
        </Container>
        <FeaturedHotels />
        <FeaturedList
          title="Szukaj według rodzaju obiektu"
          fetch={"/hotels/countByType"}
        />
        <FeaturedList
          title="Świetne lokalizacje w centrum stolic"
          fetch={"/hotels/countByCity?cities=madrit,warszawa,kraków,berlin,gdańsk"}
        />
        <FeaturedList
          title="Polska – odkryj to miejsce"
          fetch={"/hotels/countByCity?cities=warszawa,poznań,zakopane,sopot,gdańsk"}
        />
        <MailList />
        <FooterInfo1 />
        <FooterInfo2 />
      </Flex>
    </>
  );
};
