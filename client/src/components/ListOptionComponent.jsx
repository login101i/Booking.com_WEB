import React from "react";

import styled from "styled-components";
import { Text, Flex } from "../sharedComponents";

const MainContainer = styled.div`
  border: 1px solid lightGrey;
  width: 100%;
  padding: 5px 10px;
`;
const TitleContainer = styled.div``;
export const ListOptionComponent = ({ title, children }) => {
  return (
    <MainContainer>
      <Flex column>
        <Text margin="0px 10px" bold>
          {title}
        </Text>
        {children}
      </Flex>
    </MainContainer>
  );
};
