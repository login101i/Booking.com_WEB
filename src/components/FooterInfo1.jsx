import React from "react";

import styled from "styled-components";
import { Flex, Text, CustomInput } from "../sharedComponents";
import { Button } from "../sharedComponents";
import { Divider } from "@mui/material";

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  padding: 0px 50px;
  padding: 16px 0px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const FooterInfo1 = () => {
  return (
    <Container>
      <Button border="white" radius="5px" color="white">
        Udostępnij obiekt
      </Button>
      <Divider
        sx={{
          color: "white"
        }}
      />
      <InfoContainer>
        <Text white>Wersja Mobilna</Text>
        <Text white>Twoje Konto </Text>
        <Text white>Wprowadzaj zmiany w rezerwacji online </Text>
        <Text white>Obsługa Klienta </Text>
        <Text white>Zostań naszym Pattnerem Afiliacyjnym </Text>
        <Text white>Booking.com dla Biznesu</Text>
      </InfoContainer>
    </Container>
  );
};
