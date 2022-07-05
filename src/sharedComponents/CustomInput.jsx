import React from "react";
import styled from "styled-components";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import { Flex } from "../sharedComponents";

const Container = styled.div`
	border: 3px solid orange;
	padding: 5px 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) =>
		props.backGr ? props.theme.colors[props.backGr] : "white"};
	border-height: 1px;
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius + "px" : "none"};
	height: ${(props) => (props.height ? props.height : "")};
	width: ${(props) => (props.width ? props.width : "auto")};
	min-width: 220px;
	color: ${(props) => (props.color ? props.color : "grey")};
	display: flex;
	align-items: center;
	font-size: 15px;
`;

const LeftContainer = styled.div`
	margin-right: 15px;
`;
const RightContainer = styled.div`
	margin-left: 5px;
`;

export const CustomInput = ({
	borderRadius = "8px",
	width,
	leftIcon,
	rightIcon,
	height = "50px",
	backGr,
	color,
	children
}) => {
	return (
		<Container
			borderRadius={borderRadius}
			leftIcon={leftIcon}
			rightIcon={rightIcon}
			width={width}
			height={height}
			backGr={backGr}
			color={color}
		>
			<LeftContainer>{leftIcon}</LeftContainer>
			{children}
			{} <RightContainer> {rightIcon}</RightContainer>
		</Container>
	);
};
