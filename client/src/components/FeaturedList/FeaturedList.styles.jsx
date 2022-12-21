import styled from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	max-width: 1280px;
	gap: 28px;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 40px;
	flex-wrap: wrap;
`;

export const Container = styled.div`
	display: flex;
	gap: 20px;
	width: 100%;
	flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
`;
