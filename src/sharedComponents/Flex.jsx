import React from "react";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.column ? "column" : "row")};

	justify-content: ${(props) => (props.space ? "space-between" : "")};
	width: ${(props) => (props.width ? props.width : "100%")};

	background-color: ${(props) =>
		props.backGr ? props.theme.colors[props.backGr] : props.theme.colors.white};
	height: ${(props) => (props.height ? props.height : "auto")};
	margin: ${(props) => (props.margin ? props.margin : "")};
`;

export const Flex = ({
	column,
	space,
	width,
	height,
	backGr,
	margin,
	children
}) => {
	return (
		<Container
			column={column}
			space={space}
			width={width}
			backGr={backGr}
			height={height}
			margin={margin}
		>
			{children}
		</Container>
	);
};
