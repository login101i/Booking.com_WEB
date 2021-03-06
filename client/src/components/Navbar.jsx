import React, { useContext } from "react";

import styled from "styled-components";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link } from "react-router-dom";

import { Button, Flex, Text, CustomIcon } from "../sharedComponents";
import { AuthContext } from "../context/AuthContext";

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
  width: 128px;
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
  const { user } = useContext(AuthContext);
  return (
    <MainContainer>
      <Container>
        <Link to="/">
          <LogoContainer>
            <Text size="h4" white>
              Booking.com
            </Text>
          </LogoContainer>
        </Link>

        <ButtonsContainer>
          <CustomIcon icon={HelpOutlineIcon} color="white" />
          <Text title uppercase white>
            pln
          </Text>
          <PolandFlag>
            <RedColor />
          </PolandFlag>
          <Button color="white">Udostępnij obiekt</Button>
          {user ? (
            <Text white>Witaj {user} !</Text>
          ) : (
            <>
              <Button backGrWhite>Zarejestruj się</Button>
              <Link to="/login">
                <Button backGrWhite>Zaloguj się</Button>
              </Link>
            </>
          )}
        </ButtonsContainer>
      </Container>
    </MainContainer>
  );
};
