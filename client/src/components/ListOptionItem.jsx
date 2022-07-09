import React from "react";
import Checkbox from "@mui/material/Checkbox";

import { Flex, Text } from "../sharedComponents";
export const ListOptionItem = () => {
  return (
    <Flex space>
      <Flex>
        <Checkbox onClick={console.log("check")}/>
        <Text>Text here</Text>
      </Flex>

      <Text size="h7">147</Text>
    </Flex>
  );
};
