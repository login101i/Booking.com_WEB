import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
	font-size: ${(props) =>
		props.size
			? props.theme.fontSizes[props.size] 
			: props.title
			? props.theme.fontSizes.title
			: "44px"};
	text-transform: ${(props) => (props.uppercase ? "uppercase" : "")};
	color: ${(props) =>
		props.color ? props.color : props.theme.colors.text.primary};
	display: flex;
	align-items: center;
	margin-bottom: ${(props)=>props.marginBtm ? props.theme.space[props.marginBtm] : ""}
`;

export const Text = ({ title, size = 16, uppercase, marginBtm,children }) => {
	return (
		<MainContainer
			size={size}
			title={title}
			marginBtm={marginBtm}
			uppercase={uppercase}
		>
			{children}
		</MainContainer>
	);
};
