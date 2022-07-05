import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
	width: 200px;
	height: 40px;
	border: 2px solid white;
	color: ${(props) =>
		props.backGrWhite ? props.theme.colors.primary : props.theme.colors.white};
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) =>
		props.backGrWhite
			? "white"
			: props.backGr
			? props.theme.colors[props.backGr]
			: "transparent"};
	margin: 2px 10px;
	padding: 5px 10px;
	border: ${(props) => props.backGrWhite && props.theme.colors.primary};
	cursor: pointer;
	color: ${(props) => (props.color ? props.color : "black")};
`;
export const Button = ({ backGrWhite, backGr, color, children }) => {
	return (
		<ButtonContainer backGrWhite={backGrWhite} color={color} backGr={backGr}>
			{children}
		</ButtonContainer>
	);
};
