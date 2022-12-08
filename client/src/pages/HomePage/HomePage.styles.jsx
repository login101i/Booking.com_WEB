import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary};
	display: flex;
	flex-direction: column;
	padding: 0px 50px;
	padding: 16px 0px;
	align-items: center;
`;
