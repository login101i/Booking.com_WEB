import styled from 'styled-components';

export const MainContainer = styled.div`
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	cursor: pointer;
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;
`;

export const ImageContainer = styled.div`
	overflow: hidden;
	height: ${props => (props.isMobile ? '400px' : '200px')};
	max-width: 330px;
	min-width: 300px;
	margin-bottom: 20px;
	overflow: hidden;
	max-height: 240px;
	border: 1px solid rgba(163, 164, 167, 0.7);
	border-radius: 6px;

	-webkit-box-shadow: 2px 19px 21px -16px rgba(163, 164, 167, 1);
	-moz-box-shadow: 2px 19px 21px -16px rgba(163, 164, 167, 1);
	box-shadow: 2px 19px 21px -16px rgba(163, 164, 167, 1);
`;
export const Image = styled.img`
	object-fit: cover;
	height: 240px;
	width: 100%;
	filter: brightness(95%);
	transition: 0.25s all ease-in-out;
	:hover {
		transform: scale(1.05);
		filter: brightness(100%);
	}
`;
