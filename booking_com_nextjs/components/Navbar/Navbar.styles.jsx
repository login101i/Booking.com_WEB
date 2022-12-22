import styled from 'styled-components';

export const MainContainer = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	margin-left: ${props => (props.isMobile ? '0px' : '20px')};
	max-width: 1080px;
	margin-bottom: 16px;
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
	align-items: ${props => (props.isMobile ? 'center' : '')};
`;
export const LogoContainer = styled.div`
	width: 200px;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

export const ButtonsContainer = styled.div`
	width: ${props => (props.isMobile ? '100%' : '80%')};
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
`;

export const PolandFlag = styled.div`
	height: 28px;
	width: 28px;
	background-color: white;
	position: relative;
	border-radius: 14px;
	overflow: hidden;
	margin: 0 25px;
`;
export const RedColor = styled.div`
	background-color: red;
	height: 50px;
	width: 50px;
	position: absolute;
	top: 50%;
	left: 0%;
`;
