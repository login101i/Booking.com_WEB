import React from "react";

import styled from "styled-components";
import { Flex, Text , RatingContainer} from "../sharedComponents";

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
  height: 280px;
  transition: 0.3s all ease-in-out;

  & :hover {
    transform: scale(1.03);
    transition: 0.3s all ease-in-out;
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: 180px;
  max-width: 200px;
`;



export const FeaturedItem = ({
  img = "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/148981006.jpg?k=9166090226f0a31f52d948f49814c0db4f5b05868bfb8b0da0fbe04a8fba1301&o=&hp=1",
  price,
  rating
}) => {
  return (
    <MainContainer>
      <Image src={img} />
      <Text size="h5">Opole</Text>
      <Text>123</Text>
      <Flex>
        {rating && <RatingContainer>9.2</RatingContainer>}
        {price && <Text>Ceny już od 120zł</Text>}
      </Flex>
    </MainContainer>
  );
};
