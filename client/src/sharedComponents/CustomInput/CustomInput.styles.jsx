import styled from 'styled-components';

export const MainContainer = styled.div`
	position: relative;
	border: ${props => (props.border ? `3px solid ${props.border}` : '3px solid orange')};
	display: flex;
	align-items: center;
	justify-content: ${props => (props.center ? 'center' : 'flex-start')};
	padding: 0px 5px;
	background-color: ${props => (props.backGr ? props.theme.colors[props.backGr] : 'white')};
`;

export const Container = styled.input`
	width: 100%;
	padding: 5px 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	align-self: center;

	border-radius: ${props => (props.borderRadius ? props.borderRadius + 'px' : 'none')};
	height: ${props => (props.height ? props.height : '')};

	width: ${props => (props.width ? props.width : 'auto')};
	color: ${props => (props.color ? props.color : 'grey')};
	display: flex;
	align-items: center;
	font-size: 14px;
	white-space: pre-wrap;
	white-space: ${props => (props.wrap ? 'wrap' : 'nowrap')};
	background-color: inherit;

	outline: none;
	border: none;

	::placeholder {
		color: ${props => props.color};
		font-size: 13px;
		text-align: ${props => (props.center ? 'center' : '')};
	}
`;

export const LeftContainer = styled.div``;
export const RightContainer = styled.div``;

export const ComponentContainer = styled.div`
	position: absolute;
	top: 66px;
	left: -2px;
	z-index: 1111;
`;
