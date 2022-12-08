import styled from 'styled-components';

export const MainContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 1080px;
	position: relative;
`;

export const HeaderItemContainer = styled.div`
	margin-right: 30px;
	height: 44px;
	border-radius: 30px;
	display: flex;
	margin-left: 0px;
	transition: 0.2s all ease-in-out;
	cursor: pointer;
	padding: 5px 20px;
	width: 100%;
	border: ${props => (props.active ? '1px solid white' : '')};
	&:hover {
		background-color: ${({ theme }) => theme.colors.blueHover};
	}
`;
