import React from "react";

import styled from "styled-components";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { Button, Flex, Text, CustomIcon } from "../sharedComponents";

const MainContainer = styled.div`
	width: 100%;
	height: 70px;
	background-color: ${({ theme }) => theme.colors.primary};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	max-width: 1024px;
	width: 100%;
	border: 2px solid green;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const LogoContainer = styled.div`
	width: 200px;
`;
const Logo = styled.div`
	font-size: 33px;
	color: ${({ theme }) => theme.colors.white};
`;

const ButtonsContainer = styled.div``;

const PolandFlag = styled.div`
	height: 50px;
	width: 50px;
	background-color: white;
	position: relative;
	border-radius: 50%;
	overflow: hidden;
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
					<Logo>Booking.com</Logo>
				</LogoContainer>
				<ButtonsContainer>
					<Flex>
						<CustomIcon icon={HelpOutlineIcon} color="white"  />
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
