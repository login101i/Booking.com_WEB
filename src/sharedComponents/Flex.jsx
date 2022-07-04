import React from "react";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.column ? "column" : "row")};
	align-items: center;
	justify-content: ${(props) => (props.space ? "space-between" : "center")};
`;

export const Flex = ({ column, space, children }) => {
	return (
		<Container column={column} space={space}>
			{children}
		</Container>
	);
};
