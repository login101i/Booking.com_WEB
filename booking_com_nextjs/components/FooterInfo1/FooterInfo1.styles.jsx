import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.secondary};
	display: flex;
	padding: 0px 50px;
	padding: 16px 0px;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
	gap: 20px;
	width: 100%;
	justify-content: space-evenly;
	margin-top: 10px;
	padding:20px;
`;
