import React from "react";

import styled from "styled-components";
import useFetch from "../hooks/useFetch.js";

import { Flex, Text } from "../sharedComponents";

const MainContainer = styled.div`
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  height: 300px;
  max-width: 330px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export const Featured = ({ img, city, availableHotels }) => {
  return (
    <MainContainer>
      {!city ? (
        "Loading"
      ) : (
        <>
          <Image src={img} />
          <TextContainer>
            <Text white size="h3">
              {city}
            </Text>
            <Text white size="h4">
              {availableHotels}
            </Text>
          </TextContainer>
        </>
      )}
    </MainContainer>
  );
};
