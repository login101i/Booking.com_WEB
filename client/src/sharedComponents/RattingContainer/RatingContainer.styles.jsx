import styled from 'styled-components';

export const MainContainer = styled.div`
	width: ${props => props.size};
	height: ${props => props.size};
	background-color: ${props => props.theme.colors.primary};
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	margin-right: 12px;
	font-size: 13px;
`;
