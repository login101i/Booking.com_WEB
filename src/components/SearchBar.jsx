import React from "react";

import styled from "styled-components";
import AccountCircle from "@mui/icons-material/AccountCircle";
import BedIcon from "@mui/icons-material/Bed";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	Button,
	Flex,
	Text,
	CustomIcon,
	CustomInput
} from "../sharedComponents";

export const SearchBar = () => {
	return (
		<Flex>
			<CustomInput leftIcon={<CustomIcon color="grey" icon={BedIcon} />}>
				Gdzie się wybierasz?
			</CustomInput>
			<CustomInput
				leftIcon={<CustomIcon color="grey" icon={CalendarMonthIcon} />}
			>
				Zameldowanie
			</CustomInput>
			<CustomInput
				leftIcon={<CustomIcon color="grey" icon={CalendarMonthIcon} />}
			>
				Wymeldowanie
			</CustomInput>
			<CustomInput
				leftIcon={<CustomIcon color="grey" icon={PersonIcon} />}
				rightIcon={<CustomIcon color="grey" icon={ExpandMoreIcon} />}
			>
				Ilość osób
			</CustomInput>
			<CustomInput width="300px" color="white" backGr="primary">
				Szukaj
			</CustomInput>
		</Flex>
	);
};
