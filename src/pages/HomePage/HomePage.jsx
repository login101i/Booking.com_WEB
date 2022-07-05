import React from "react";
import styled from "styled-components";

import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { Flex } from "../../sharedComponents";

const Container = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary};
	display: flex;
	flex-direction: column;
	padding: 0px 50px;
	padding: 16px 0px;
	align-items: center;
`;

export const HomePage = () => {
	return (
		<Container>
			<Navbar />
			<Header />;
		</Container>
	);
};
