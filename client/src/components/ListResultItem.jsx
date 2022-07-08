import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Divider } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  Button,
  Flex,
  Text,
  CustomIcon,
  RatingContainer
} from "../sharedComponents";

const MainContainer = styled.div`
  flex: 3;
  border: 1px solid lightGrey;
  display: flex;
  padding: 20px;
  border-radius: 2px;
  margin-bottom: 18px;
`;

const ImageContainer = styled.img`
  object-fit: cover;
  height: 200px;
  max-width: 200px;
  cursor: pointer;
`;

export const ListResultItem = () => {
  const img =
    "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/148981006.jpg?k=9166090226f0a31f52d948f49814c0db4f5b05868bfb8b0da0fbe04a8fba1301&o=&hp=1";
  const navigate = useNavigate();
  return (
    <MainContainer>
      <ImageContainer src={img} onClick={() => navigate("/hotel/1")} />
      <Flex column margin="0px 20px" grow>
        <Text>Pokoje Krópówki 13- Hostel sabała</Text>
        <Flex>
          <Text>Krópówki</Text>
          <Text>Pokaż na mapie</Text>
          <Text>100 m od cetrum</Text>
        </Flex>
        <Text backGr="green" white size="h8" marginBtm={3}>
          Oferta limitowana
        </Text>
        <Flex height="120px">
          <Divider
            orientation="vertical"
            sx={{
              color: "white"
            }}
          />
          <Flex column margin="2px 10px">
            <Text color="secondary" size="h7">
              Pokój Dwuosobowy z 1 lub 2 łóżkami <br /> Na naszej stronie
              zostały tylko 1
            </Text>
            <Text color="secondary" size="h8" marginBtm={3}>
              Łóżka: 1 podwójne lub 2 pojedyncze
            </Text>
            <Text color="success" size="h7">
              Śniadanie wliczone w cenę
            </Text>
            <Text color="error" size="h7">
              2 pokoje w tej cenie
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex column space>
        <Flex column>
          <Flex center>
            <Flex column margin="0px 10px">
              <Text>Znakomiy</Text>
              <Text>90 opini</Text>
            </Flex>
            <RatingContainer rating={9.9} size="28px" />
          </Flex>
          <Text>Lokalizacja</Text>
        </Flex>
        <Flex column>
          <Text size="h8">3 noce, 2 dorosłych</Text>
          <Flex center>
            <Text color="error">3 noce, 2 dorosłych</Text>
            <Text size="h6">179 zł</Text>
          </Flex>

          <Text size="h8">3 noce, 2 dorosłych</Text>
        </Flex>
        <Button
          title="Zobacz dostępność"
          backGr="secondary"
          color="white"
          rightIcon={
            <CustomIcon icon={ChevronRightIcon} color="white" size={22} />
          }
        />
      </Flex>
    </MainContainer>
  );
};
