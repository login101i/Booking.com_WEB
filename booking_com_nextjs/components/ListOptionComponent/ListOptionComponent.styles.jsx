import styled from 'styled-components';

export const MainContainer = styled.div`
	border: 1px solid lightGrey;
	width: ${props => (props.isMobile ? 'calc(100vw-40px)' : '100%')};
	padding: 5px 10px;
	transition: 0.3s all ease-in-out;
	margin: ${props => (props.isMobile ? '0px 20px;' : '')};
`;

export const Container = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:100%:
`;
