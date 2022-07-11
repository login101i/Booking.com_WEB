import React from "react";

import styled from "styled-components";
import { Flex, Text, RatingContainer } from "../sharedComponents";

const MainContainer = styled.div`
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  max-height: 240px;
  transition: 0.3s all ease-in-out;
`;

const Image = styled.img`
  object-fit: cover;
  height: 180px;
  max-width: 200px;

  & :hover {
    transform: scale(1.03);
    transition: 0.3s all ease-in-out;
  }
`;

export const FeaturedItem = ({
  img = "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/148981006.jpg?k=9166090226f0a31f52d948f49814c0db4f5b05868bfb8b0da0fbe04a8fba1301&o=&hp=1",
  price,
  rating,
  availableNumber = 55,
  type,
  title,
  city,
  poland
}) => {
  return (
    <MainContainer>
      <Image src={img} />
      <Flex column>
        <Text uppercase>{type === "obiektów" ? "" : type}</Text>

        <Text capitalize> {title} </Text>

        <Text>
          {availableNumber} {type}
        </Text>
      </Flex>

      {poland ? (
        " "
      ) : (
        <Flex>
          {rating && <RatingContainer rating={rating} />}
          {price && <Text>Ceny już od {price} zł</Text>}
        </Flex>
      )}
    </MainContainer>
  );
};
