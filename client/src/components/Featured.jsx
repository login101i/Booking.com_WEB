import React from "react";

import styled from "styled-components";

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

export const Featured = ({ img }) => {
  return (
    <MainContainer>
      <Image src={img} />
      <TextContainer>
        <Text white size="h3">
          Opole
        </Text>
        <Text white size="h4">
          123
        </Text>
      </TextContainer>
    </MainContainer>
  );
};
