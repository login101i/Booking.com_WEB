import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
	font-size: ${(props) =>
		props.size
			? props.size
			: props.title
			? props.theme.fontSizes.title
			: "44px"};
	text-transform: ${(props) => (props.uppercase ? "uppercase" : "capitalize")};
	color: ${({ theme }) => theme.colors.white};
`;

export const Text = ({ title, size = 16, uppercase, children }) => {
	return (
		<MainContainer size={size} title={title} uppercase={uppercase}>
			{children}
		</MainContainer>
	);
};
