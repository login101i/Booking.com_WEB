import styled from 'styled-components'


export const ButtonContainer = styled.button`
	width: auto;
	height: 40px;
	border: 2px solid white;
	color: ${props => (props.backGrWhite ? props.theme.colors.primary : props.theme.colors.white)};
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${props => (props.backGrWhite ? 'white' : props.backGr ? props.theme.colors[props.backGr] : 'transparent')};
	margin: ${props => (props.margin ? props.margin : '2px 10px')};
	padding: 5px 20px;
	border: ${props => props.backGrWhite && props.theme.colors.primary};
	cursor: pointer;
	color: ${props => (props.color ? props.color : 'black')};
	border-radius: ${props => (props.radius ? props.radius : '')};
	font-size: 20px;
`;