import React from "react";
import styled from "styled-components";
import BedIcon from "@mui/icons-material/Bed";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { Button, Flex, Text, CustomIcon } from "../sharedComponents";
import { SearchBar } from "./";

const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1080px;
  position: relative;
`;

const HeaderItemContainer = styled.div`
  margin-right: 30px;
  height: 44px;
  border-radius: 30px;
  display: flex;
  margin-left: 0px;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  padding: 5px 20px;

  border: ${(props) => (props.active ? "1px solid white" : "")};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blueHover};
  }
`;

export const SearchBarContainer = styled.div`
  position: absolute;
  bottom: -70px;
  left: 0px;
  width: 100%;
`;
export const Header = () => {
  const [active, setActive] = React.useState(false);

  return (
    <MainContainer>
      <Flex backGr="primary" height="100px">
        <HeaderItemContainer
          onClick={() => setActive("Pobyty")}
          active={active === "Pobyty"}
        >
          <Text color="white">
            <CustomIcon icon={BedIcon} color="white" />
            Pobyty
          </Text>
        </HeaderItemContainer>

        <HeaderItemContainer
          onClick={() => setActive("Loty")}
          active={active === "Loty"}
        >
          <Text color="white">
            <CustomIcon icon={AirplanemodeActiveIcon} color="white" />
            Loty
          </Text>
        </HeaderItemContainer>

        <HeaderItemContainer
          onClick={() => setActive("Wynajem samochodów")}
          active={active === "Wynajem samochodów"}
        >
          <Text color="white">
            <CustomIcon icon={DirectionsCarIcon} color="white" />
            Wynajem samochodów
          </Text>
        </HeaderItemContainer>
        <HeaderItemContainer
          onClick={() => setActive("Atrakcje")}
          active={active === "Atrakcje"}
        >
          <Text color="white">
            <CustomIcon icon={LocalTaxiIcon} color="white" />
            Atrakcje
          </Text>
        </HeaderItemContainer>
        <HeaderItemContainer
          onClick={() => setActive("Taksówki")}
          active={active === "Taksówki"}
        >
          <Text color="white">
            <CustomIcon icon={RemoveRedEyeIcon} color="white" />
            Taksówki lotniskowe
          </Text>
        </HeaderItemContainer>
      </Flex>
      <Flex backGr="primary" height="170px" column>
        <Text size="h3" marginBtm={3} color="white">
          Znajdź miejsce na kolejny pobyt
        </Text>
        <Text size="h5" color="white">
          Szukaj ofert hoteli, domów i wielu innych obiektów...
        </Text>
      </Flex>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
    </MainContainer>
  );
};
