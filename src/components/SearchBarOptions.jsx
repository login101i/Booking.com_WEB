import React, { useState } from "react";
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

export const SearchBarOptions = ({ setOptions, options}) => {
  const handleOption = (name, operation) => {
    setOptions((prevState) => {
      return {
        ...prevState,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1
      };
    });
  };
  return (
    <OptionsContainer>
      <Flex space height="60px">
        <Text>Dorośli</Text>
        <Flex center>
          <PlusMinus
            disabled={options.adult <= 1}
            sign="-"
            onClick={() => handleOption("adult", "d")}
          />
          <Text>{options.adult}</Text>
          <PlusMinus sign="+" onClick={() => handleOption("adult", "i")} />
        </Flex>
      </Flex>
      <Flex space height="60px">
        <Text>Dzieci</Text>
        <Flex>
          <PlusMinus
            disabled={options.children < 1}
            sign="-"
            onClick={() => handleOption("children", "d")}
          />
          <Text>{options.children}</Text>
          <PlusMinus sign="+" onClick={() => handleOption("children", "i")} />
        </Flex>
      </Flex>
      <Flex space height="60px">
        <Text>Pokoje</Text>
        <Flex>
          <PlusMinus
            disabled={options.room <= 1}
            sign="-"
            onClick={() => handleOption("room", "d")}
          />
          <Text>{options.room}</Text>
          <PlusMinus sign="+" onClick={() => handleOption("room", "i")} />
        </Flex>
      </Flex>
    </OptionsContainer>
  );
};
