import styled from 'styled-components'


export const MainContainer = styled.div`
	overflow: hidden;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	cursor: pointer;
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;
	max-height: 240px;
`;

export const ImageContainer = styled.div`
	overflow: hidden;
	height: 200px;
	max-width: 200px;
`;
export const Image = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
	filter: brightness(95%);
	transition: 0.25s all ease-in-out;

	:hover {
		transform: scale(1.05);
		filter: brightness(100%);
	}
`;