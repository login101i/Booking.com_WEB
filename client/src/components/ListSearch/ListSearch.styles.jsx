import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	position: sticky;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: orange;
	padding: 10px 20px;
	border-radius: 10px;
`;

export const Shadow = styled.div`
	-webkit-box-shadow: -1px -5px 52px -26px rgba(66, 68, 90, 1);
	-moz-box-shadow: -1px -5px 52px -26px rgba(66, 68, 90, 1);
	box-shadow: -1px -5px 52px -26px rgba(66, 68, 90, 1);
`;
