import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

import styled from "styled-components";
import AccountCircle from "@mui/icons-material/AccountCircle";
import BedIcon from "@mui/icons-material/Bed";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SearchBarOptions } from "./index";
import { UseComponentVisible } from "../utils/UseComponentVisible";

import {
  Button,
  Flex,
  Text,
  CustomIcon,
  CustomInput
} from "../sharedComponents";

const Shadow = styled.div`
  -webkit-box-shadow: -1px -5px 52px -26px rgba(66, 68, 90, 1);
  -moz-box-shadow: -1px -5px 52px -26px rgba(66, 68, 90, 1);
  box-shadow: -1px -5px 52px -26px rgba(66, 68, 90, 1);
`;

export const SearchBar = () => {
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
    room: 1
  });

  const { ref, isComponentVisible } = UseComponentVisible(
    showDate || openOptions
  );

  return (
    <div ref={ref}>
      <Flex>
        <CustomInput
          leftIcon={<CustomIcon color="grey" icon={BedIcon} />}
          placeholder="Gdzie się wybierasz?"
        />
        <CustomInput
          onClick={() => {
            setOpenOptions(false);
            setShowDate(!showDate);
          }}
          leftIcon={<CustomIcon color="grey" icon={CalendarMonthIcon} />}
          placeholder={
            format(date[0].startDate, "MM/dd/yyy") +
            " do " +
            format(date[0].endDate, "MM/dd/yyy")
          }
          component={
            isComponentVisible &&
            showDate && (
              <Shadow>
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              </Shadow>
            )
          }
          width="200px"
          center
        />

        <CustomInput
          onClick={() => {
            setOpenOptions(!openOptions);
            setShowDate(false);
          }}
          leftIcon={<CustomIcon color="grey" icon={PersonIcon} />}
          rightIcon={<CustomIcon color="grey" icon={ExpandMoreIcon} />}
          placeholder={
            options.adult +
            " dorosłych * " +
            options.children +
            " dzieci * " +
            options.room +
            " pokój"
          }
          width="230px"
          component={
            isComponentVisible &&
            openOptions && (
              <SearchBarOptions options={options} setOptions={setOptions} />
            )
          }
        />
        <CustomInput
          width="auto"
          color="white"
          backGr="secondary"
          placeholder="Szukaj"
          center
          
        />
      </Flex>
    </div>
  );
};
