import React from "react";

import styled from "styled-components";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { Button, Flex, Text, CustomIcon } from "../sharedComponents";

const MainContainer = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	margin-left: 80px;
	max-width: 1120px;
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
const LogoContainer = styled.div`
	width: 200px;
`;

const ButtonsContainer = styled.div`
	width: 800px;
`;

const PolandFlag = styled.div`
	height: 44px;
	width: 44px;
	background-color: white;
	position: relative;
	border-radius: 22px;
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
					<Text size="h4">Booking.com</Text>
				</LogoContainer>
				<ButtonsContainer>
					<Flex backGr="primary">
						<CustomIcon icon={HelpOutlineIcon} color="white" />
						<Text title uppercase color="white">
							pln
						</Text>
						<PolandFlag>
							<RedColor />
						</PolandFlag>
						<Button>Udostępnij obiekt</Button>
						<Button backGrWhite>Zarejestruj się</Button>
						<Button backGrWhite>Zaloguj się</Button>
					</Flex>
				</ButtonsContainer>
			</Container>
		</MainContainer>
	);
};
