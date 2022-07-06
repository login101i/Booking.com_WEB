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
  MailList
} from "../../components";

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

        <FeaturedContainer>
          <Featured img="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/305169723.jpg?k=304479e105846887a7fa95115b4bf6c6e3edc6fbfbc955a0ff9f372fa968274b&o=&hp=1" />
          <Featured img="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/74636225.jpg?k=8e61c76a504fc72addb3008c392d604bc25f545d4dc3ad81f879a3bc56ec2e37&o=&hp=1" />
          <Featured img="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/149029786.jpg?k=12c00af5fa587b1b56047f8e9d1896d56f3a428c6775a5135f2cdc1031f2c873&o=&hp=1" />
        </FeaturedContainer>
        <FeaturedList title="Szukaj według rodzaju obiektu" />
        <FeaturedList
          title="Świetne kierunki na wakacje na plaży"
          price={true}
          rating={true}
        />
        <FeaturedList
          title="Poszukaj inspiracji na kolejną podróż"
          price={true}
          rating={true}
        />
        <MailList />
        <FooterInfo1 />
        <FooterInfo2 />
      </Flex>
    </>
  );
};
