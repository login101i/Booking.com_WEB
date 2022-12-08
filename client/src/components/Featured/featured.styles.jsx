import styled from 'styled-components';

export const MainContainer = styled.div`
	overflow: hidden;
	border-radius: 10px;
	position: relative;
	height: 300px;
	max-width: 330px;
	cursor: pointer;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	filter: brightness(75%);
	transition: 0.25s all ease-in-out;

	:hover {
		transform: scale(1.1);
	}
`;

export const TextContainer = styled.div`
	position: absolute;
	bottom: 20px;
	left: 20px;
`;
