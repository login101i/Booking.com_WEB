import styled from 'styled-components';

export const MainContainer = styled.div`
	width: 100%;
	margin-top: ${props => (props.isMobile ? '125px' : '0px auto')};
	max-width: 1080px;
	display: flex;
	flex-direction: column;
	align-items: ${props => (props.isMobile ? 'center' : 'flex-start')};
	justify-content: center;
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
