import React from "react";

import styled from "styled-components";
import { Flex, Text } from "../sharedComponents";
import { FeaturedItem } from "./FeaturedItem";

const MainContainer = styled.div`
  display: flex;
  max-width: 1280px;
  gap: 28px;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const TextContainer = styled.div``;

export const FeaturedList = ({
  img = "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/148981006.jpg?k=9166090226f0a31f52d948f49814c0db4f5b05868bfb8b0da0fbe04a8fba1301&o=&hp=1",
  title,
  price,
  rating
}) => {
  return (
    <MainContainer>
      <Text size="h4" marginBtm={2}>
        {title}
      </Text>
      <Container>
        <FeaturedItem src={img} price={price} rating={rating} />
        <FeaturedItem src={img} price={price} rating={rating} />
        <FeaturedItem src={img} price={price} rating={rating} />
        <FeaturedItem src={img} price={price} rating={rating} />
        <FeaturedItem src={img} price={price} rating={rating} />
      </Container>
    </MainContainer>
  );
};
