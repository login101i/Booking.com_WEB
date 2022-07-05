import React from "react";
import styled from "styled-components";

import {
  Button,
  Flex,
  Text,
  CustomIcon,
  CustomInput,
  PlusMinus
} from "../sharedComponents";

export const OptionsContainer = styled.div`
  width: 300px;
  height: 110px;
  background-color: white;
  padding: 20px 21px;
  height: 100%;
  -webkit-box-shadow: -1px -5px 52px -26px rgba(66, 68, 90, 1);
  -moz-box-shadow: -1px -5px 52px -26px rgba(66, 68, 90, 1);
  box-shadow: -1px -5px 52px -26px rgba(66, 68, 90, 1);
`;

export const SearchBarOptions = () => {
  return (
    <OptionsContainer>
      <Flex space height="60px">
        <Text>Dorośli</Text>
        <Flex center>
          <PlusMinus sign="-" />
          <Text>2</Text>
          <PlusMinus sign="+" />
        </Flex>
      </Flex>
      <Flex space height="60px">
        <Text>Dzieci</Text>
        <Flex>
          <PlusMinus sign="-" />
          <Text>0</Text>
          <PlusMinus sign="+" />
        </Flex>
      </Flex>
      <Flex space height="60px">
        <Text>Pokoje</Text>
        <Flex>
          <PlusMinus sign="-" />
          <Text>0</Text>
          <PlusMinus sign="+" />
        </Flex>
      </Flex>
    </OptionsContainer>
  );
};
