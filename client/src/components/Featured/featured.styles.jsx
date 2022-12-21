import styled from 'styled-components';

export const MainContainer = styled.div`
	overflow: hidden;
	border-radius: 10px;
	position: relative;
	height: ${props => (props.isMobile ? '200px' : '300px')};
	max-width: ${props => (props.isMobile ? '300px' : '330px')};
	cursor: pointer;
	border: 1px solid rgba(163, 164, 167, 0.7);
	transition: 0.25s all ease-in-out;

	-webkit-box-shadow: 2px 19px 21px -16px rgba(163, 164, 167, 1);
	-moz-box-shadow: 2px 19px 21px -16px rgba(163, 164, 167, 1);
	box-shadow: 2px 19px 21px -16px rgba(163, 164, 167, 1);

	:hover {
		transform: scale(1.03);
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	filter: brightness(80%);
	transition: 0.25s all ease-in-out;

	:hover {
		transform: scale(1.1);
		filter: brightness(95%);
	}
`;

export const TextContainer = styled.div`
	position: absolute;
	bottom: 20px;
	left: 20px;
`;
