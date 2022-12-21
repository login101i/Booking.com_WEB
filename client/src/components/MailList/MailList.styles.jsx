import styled from 'styled-components';

export const MainContainer = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
	flex-direction: column;
	padding: 0px 50px;
	padding: 16px 0px;
	align-items: center;
	display: flex;
	margin: 0 auto;
`;

export const CheckBoxContainer = styled.div`
	margin-top: 10px;
	display: flex;
	margin-left: ${props => (props.isMobile ? '0px' : '-130px')};
	display: flex;
`;

export const FormComponent = styled.form``;
