import React from "react";
import styled from "styled-components";

import { Navbar } from "../../components/Navbar";

const Container = styled.div`
	width: 100vw;
	height: 120px;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const HomePage = () => {
	return <Navbar />;
};
