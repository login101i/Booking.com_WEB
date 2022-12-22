import styled from 'styled-components';

export const MainContainer = styled.div`
	flex: 3;
	border: 1px solid lightGrey;
	display: flex;
	flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
	padding: 16px;
	border-radius: 2px;
	margin-bottom: 18px;
	max-width: 90vw;
`;

export const ImageContainer = styled.img`
	object-fit: cover;
	height: 220px;
	max-width: ${props => (props.isMobile ? '100%' : '220px')};
	cursor: pointer;
	border: 1px solid rgba(163, 164, 167, 0.7);

	border-radius: 6px;
	-webkit-box-shadow: 2px 19px 21px -16px rgba(163, 164, 167, 1);
	-moz-box-shadow: 2px 19px 21px -16px rgba(163, 164, 167, 1);
	box-shadow: 2px 19px 21px -16px rgba(163, 164, 167, 1);
	margin-bottom: 20px;
`;
