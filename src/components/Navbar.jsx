import React from "react";

import styled from "styled-components";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { Button, Flex, Text, CustomIcon } from "../sharedComponents";

const MainContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  margin-left: 20px;
  max-width: 1080px;
  margin-bottom: 16px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonsContainer = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PolandFlag = styled.div`
  height: 28px;
  width: 28px;
  background-color: white;
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  margin: 0 25px;
`;
const RedColor = styled.div`
  background-color: red;
  height: 50px;
  width: 50px;
  position: absolute;
  top: 50%;
  left: 0%;
`;

export const Navbar = () => {
  return (
    <MainContainer>
      <Container>
        <LogoContainer>
          <Text size="h4" white>
            Booking.com
          </Text>
        </LogoContainer>
        <ButtonsContainer>
          <CustomIcon icon={HelpOutlineIcon} white />
          <Text title uppercase white>
            pln
          </Text>
          <PolandFlag>
            <RedColor />
          </PolandFlag>
          <Button color="white">Udostępnij obiekt</Button>
          <Button backGrWhite>Zarejestruj się</Button>
          <Button backGrWhite>Zaloguj się</Button>
        </ButtonsContainer>
      </Container>
    </MainContainer>
  );
};
