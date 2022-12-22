import styled from 'styled-components';

export const MainContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.primary};
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0px 50px;
	padding: 16px 0px;
	align-items: center;
`;

export const ListContainer = styled.div`
	width: 100%;
	max-width: 1280px;
	display: flex;
	flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
	margin-top: 30px;
`;

export const ListResultContainer = styled.div`
	flex: 3;
	margin-left: 20px;
`;
