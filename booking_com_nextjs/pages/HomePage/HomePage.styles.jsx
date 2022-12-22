import styled from 'styled-components';

export const HomeContainer = styled.div`
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
export const Container = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary};
	display: flex;
	flex-direction: column;
	padding: ${props => (props.isMobile ? '0px' : '0px 50px')}
	padding: 16px 0px;
	align-items: center;
	height:${props => (props.isMobile ? '420px' : '')};
	`;
