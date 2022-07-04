import React from "react";
import styled from "styled-components";
import BedIcon from "@mui/icons-material/Bed";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { Button, Flex, Text, CustomIcon } from "../sharedComponents";

const MainContainer = styled.div`
	width: 100%;
	margin-left: 60px;
	max-width: 1120px;
`;

const HeaderItemContainer = styled.div`
	margin-right: 40px;
	height: 44px;
	border-radius: 30px;
	display: flex;
	margin-left: 10px;
	transition: 0.2s all ease-in-out;
	cursor: pointer;
	padding: 5px 20px;

	border: ${(props) => (props.active ? "1px solid white" : "")};

	&:hover {
		background-color: ${({ theme }) => theme.colors.blueHover};
	}
`;

export const Header = () => {
	const [active, setActive] = React.useState(false);
	console.log(
		"%cMyProject%cline:35%cactive",
		"color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
		"color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
		"color:#fff;background:rgb(222, 125, 44);padding:3px;border-radius:2px",
		active
	);
	return (
		<MainContainer>
			<Flex backGr="primary" height="100px">
				<HeaderItemContainer
					onClick={() => setActive("Pobyty")}
					active={active === "Pobyty"}
				>
					<Text>
						<CustomIcon icon={BedIcon} color="white" />
						Pobyty
					</Text>
				</HeaderItemContainer>

				<HeaderItemContainer
					onClick={() => setActive("Loty")}
					active={active === "Loty"}
				>
					<Text>
						<CustomIcon icon={AirplanemodeActiveIcon} color="white" />
						Loty
					</Text>
				</HeaderItemContainer>

				<HeaderItemContainer
					onClick={() => setActive("Wynajem samochodów")}
					active={active === "Wynajem samochodów"}
				>
					>
					<Text>
						<CustomIcon icon={DirectionsCarIcon} color="white" />
						Wynajem samochodów
					</Text>
				</HeaderItemContainer>
				<HeaderItemContainer
					onClick={() => setActive("Atrakcje")}
					active={active === "Atrakcje"}
				>
					>
					<Text>
						<CustomIcon icon={LocalTaxiIcon} color="white" />
						Atrakcje
					</Text>
				</HeaderItemContainer>
				<HeaderItemContainer
					onClick={() => setActive("Taksówki")}
					active={active === "Taksówki"}
				>
					<Text>
						<CustomIcon icon={RemoveRedEyeIcon} color="white" />
						Taksówki lotniskowe
					</Text>
				</HeaderItemContainer>
			</Flex>
			<Flex backGr="primary" height="170px" column>
				<Text size="h3" marginBtm={3}>
					Znajdź miejsce na kolejny pobyt
				</Text>
				<Text size="h5">
					Szukaj ofert hoteli, domów i wielu innych obiektów...
				</Text>
			</Flex>
		</MainContainer>
	);
};
