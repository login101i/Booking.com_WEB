import React, { useState, useEffect } from "react";
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

export const Header = ({ type }) => {
  const [active, setActive] = useState(false);
  const [searchBarTop, setSearchBarTop] = useState(false);



  const SearchBarContainer = styled.div`
    position: ${searchBarTop ? "fixed" : "absolute"};
    top: ${searchBarTop ? "0px" : "230px"};
    z-index: 111;

    margin-left: 20px;
  `;

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    console.log(winScroll);
    if (winScroll > 345) {
      setSearchBarTop(true);
    } else {
      setSearchBarTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [searchBarTop]);

  return (
    <MainContainer>
      <Flex backGr="primary" height="80px">
        <HeaderItemContainer
          onClick={() => setActive("Pobyty")}
          active={active === "Pobyty"}
        >
          <Text white>
            <CustomIcon icon={BedIcon} color="white" />
            Pobyty
          </Text>
        </HeaderItemContainer>

        <HeaderItemContainer
          onClick={() => setActive("Loty")}
          active={active === "Loty"}
        >
          <Text white>
            <CustomIcon icon={AirplanemodeActiveIcon} color="white" />
            Loty
          </Text>
        </HeaderItemContainer>

        <HeaderItemContainer
          onClick={() => setActive("Wynajem samochod??w")}
          active={active === "Wynajem samochod??w"}
        >
          <Text white>
            <CustomIcon icon={DirectionsCarIcon} color="white" />
            Wynajem samochod??w
          </Text>
        </HeaderItemContainer>
        <HeaderItemContainer
          onClick={() => setActive("Atrakcje")}
          active={active === "Atrakcje"}
        >
          <Text white>
            <CustomIcon icon={LocalTaxiIcon} color="white" />
            Atrakcje
          </Text>
        </HeaderItemContainer>
        <HeaderItemContainer
          onClick={() => setActive("Taks??wki")}
          active={active === "Taks??wki"}
        >
          <Text white>
            <CustomIcon icon={RemoveRedEyeIcon} color="white" />
            Taks??wki lotniskowe
          </Text>
        </HeaderItemContainer>
      </Flex>
      {type !== "list" && (
        <>
          <Flex backGr="primary" height="170px" column>
            <Text size="h3" marginBtm={3} white>
              Znajd?? miejsce na kolejny pobyt
            </Text>
            <Text size="h5" white>
              Szukaj ofert hoteli, dom??w i wielu innych obiekt??w...
            </Text>
          </Flex>
          <SearchBarContainer>
            <SearchBar />
          </SearchBarContainer>
        </>
      )}
    </MainContainer>
  );
};
