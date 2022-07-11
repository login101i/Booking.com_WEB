import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import BedIcon from "@mui/icons-material/Bed";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MapIcon from "@mui/icons-material/Map";
import { useFetch } from "../hooks/useFetch";

import { format } from "date-fns";

import {
  Button,
  Flex,
  Text,
  CustomIcon,
  CustomInput
} from "../sharedComponents";
import { DateRange } from "react-date-range";
import { SearchBarOptions } from "./SearchBarOptions";
import { UseComponentVisible } from "../utils/UseComponentVisible";
import { ListOptionComponent } from "./ListOptionComponent";
import { ListOptionItem } from "./ListOptionItem";

const Container = styled.div`
  flex: 1;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: orange;
  padding: 10px 20px;
  border-radius: 10px;
`;

export const ListSearch = ({ location, setMin, setMax, handleSearch }) => {
  const [destination, setDestination] = useState(location.state.destination);
  const [data, setData] = useState(location.state);
  const [openOptions, setOpenOptions] = useState();
  const [showStartDate, setShowStartDate] = useState();
  const [showEndDate, setShowEndDate] = useState();

  const [options, setOptions] = useState({
    adult: data.options.adult,
    children: data.options.children,
    room: data.options.room
  });
  const [date, setDate] = useState([
    {
      startDate: data.date[0].startDate,
      endDate: data.date[0].endDate,
      key: "selection"
    }
  ]);

  const Shadow = styled.div`
    -webkit-box-shadow: -1px -5px 52px -26px rgba(66, 68, 90, 1);
    -moz-box-shadow: -1px -5px 52px -26px rgba(66, 68, 90, 1);
    box-shadow: -1px -5px 52px -26px rgba(66, 68, 90, 1);
  `;

  const { ref, isComponentVisible, setIsComponentVisible } =
    UseComponentVisible(showStartDate && showEndDate && openOptions);
  return (
    <div ref={ref}>
      <Container>
        <Text size="h5">Szukaj</Text>
        <Text size="h8" margin="0px 0px 10px 0px">
          Cel podróży / nazwa obiektu
        </Text>

        <CustomInput
          placeholder={destination}
          leftIcon={<CustomIcon color="grey" icon={MapIcon} />}
        />
        <CustomInput
          placeholder={format(data.date[0].startDate, "MM/dd/yyy")}
          onClick={() => setShowStartDate(!showStartDate)}
          leftIcon={
            <CustomIcon
              color="grey"
              icon={CalendarMonthIcon}
              onClick={() => {
                setShowStartDate(!showStartDate);
                setShowEndDate(false);
                setOpenOptions(false);
              }}
            />
          }
          component={
            isComponentVisible &&
            showStartDate && (
              <Shadow>
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setData([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              </Shadow>
            )
          }
        />

        <CustomInput
          placeholder={format(data.date[0].endDate, "MM/dd/yyy")}
          leftIcon={
            <CustomIcon
              color="grey"
              icon={CalendarMonthIcon}
              onClick={() => {
                setShowEndDate(!showEndDate);
                setShowStartDate(false);
                setOpenOptions(false);
              }}
            />
          }
          component={
            isComponentVisible &&
            showEndDate && (
              <Shadow>
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setData([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={data.date}
                />
              </Shadow>
            )
          }
        />

        <CustomInput
          placeholder={
            data.options?.adult +
            " dorosłych * " +
            data.options?.children +
            " dzieci * " +
            data.options?.room +
            "pokój"
          }
          leftIcon={
            <CustomIcon
              color="grey"
              icon={PersonIcon}
              onClick={() => setOpenOptions(!openOptions)}
            />
          }
          component={
            isComponentVisible &&
            openOptions && (
              <SearchBarOptions
                options={data.options}
                setOptions={setOptions}tindtvn
                
              />
            )
          }
        />

        <CustomInput
          placeholder="maksymalna cena"
          leftIcon={<CustomIcon color="grey" icon={AttachMoneyIcon} />}
          onChange={(e) => setMax(e.target.value)}
        />
        <CustomInput
          placeholder="minimalna cena"
          leftIcon={<CustomIcon color="grey" icon={AttachMoneyIcon} />}
          onChange={(e) => setMin(e.target.value)}
        />

        <Flex backGr="orange" space>
          <Flex backGr="orange">
            <Checkbox />
            <Text size="h8">Domy i apartamenty na wyłączność</Text>
          </Flex>

          <CustomIcon icon={BedIcon} color="black" />
        </Flex>
        <Flex backGr="orange" space>
          <Flex backGr="orange">
            <Checkbox />
            <Text size="h8">Podróżuję służbowo</Text>
          </Flex>

          <CustomIcon icon={BedIcon} color="black" />
        </Flex>
        <Button
          title="szukaj"
          backGr="secondary"
          color="white"
          margin="20px 0px "
          onClick={handleSearch}
        />
      </Container>
      <Flex column margin="20px 0px">
        <ListOptionComponent title="Twój przedział cenowy (za noc)">
          <ListOptionItem />
          <ListOptionItem />
          <ListOptionItem />
          <ListOptionItem />
        </ListOptionComponent>
        <ListOptionComponent title="Popularne filtry">
          <ListOptionItem />
        </ListOptionComponent>
        <ListOptionComponent title="Zdrowie i bezpieczeństwa">
          <ListOptionItem />
          <ListOptionItem />
        </ListOptionComponent>
        <ListOptionComponent title="Twój przedział cenowy (za noc)">
          <ListOptionItem />
          <ListOptionItem />
          <ListOptionItem />
          <ListOptionItem />
        </ListOptionComponent>
        <ListOptionComponent title="Zdrowie i bezpieczeństwa">
          <ListOptionItem />
          <ListOptionItem />
        </ListOptionComponent>
      </Flex>
    </div>
  );
};
