import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { pink, white } from "@mui/material/colors";

import styled from "styled-components";
import { Flex, Text, CustomInput } from "../sharedComponents";
import { Button } from "../sharedComponents";

const MainContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Container = styled.div`
  flex-direction: column;
  padding: 0px 50px;
  padding: 16px 0px;
  align-items: center;
  display: flex;
  margin: 0 auto;
`;

const CheckBoxContainer = styled.div`
  margin-top: 10px;
  display: flex;
  margin-left: -150px;
`;

export const MailList = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <MainContainer>
      <Container>
        <Text size="h4" white>
          Zaszczędź czas i pieniądze!
        </Text>
        <Text size="h7" white marginBtm={4}>
          Zarejestruj się a otrzymasz najlepsze oferty.
        </Text>
        <Flex center backGr="primary">
          <CustomInput
            placeholder="Twój email"
            height="34px"
            border="lightBlue"
            width="350px"
          />
          <Button backGr="secondary" color="white" style={{ margin: "0px" }}>
            Zarejestruj się
          </Button>
        </Flex>
        <CheckBoxContainer>
          <Checkbox
            size="medium"
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white"
              }
            }}
          />
          <Text white>
            Wyślij mi link aby dostać darmową aplikację Booking.com
          </Text>
        </CheckBoxContainer>
      </Container>
    </MainContainer>
  );
};
