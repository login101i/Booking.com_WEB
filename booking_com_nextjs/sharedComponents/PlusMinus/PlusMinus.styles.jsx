import styled from 'styled-components';

export const MainContainer = styled.button`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 23px;

	border: 1px solid #005999;
	border-radius: 3px;
	margin: 0px 15px;
	transition: 0.14s all ease-in-out;
	background-color: ${props => (props.disabled ? 'lightGrey' : 'white')};

	cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
	&:hover {
		background-color: lightblue;
	}
`;
