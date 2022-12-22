import styled from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	max-width: 1340px;
	gap: 15px;
	justify-content: flex-start;
	flex-direction: column;
	margin-bottom: 40px;
	flex-wrap: wrap;
	align-items: flex-start;
	margin: 0px 20px 20px 20px;
	overflow: scroll;
	position: relative;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const Container = styled.div`
	display: flex;
	overflow: scroll !important;
	gap: 20px;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const OpacityContainer = styled.div`
	background: rgb(255, 255, 255);
	background: linear-gradient(280deg, rgba(255, 255, 255, 0.8) 0%, rgba(22, 35, 238, 0) 80%);
	position: absolute;
	top: 0;
	right: 0;
	width: 10%;
	height: 100%;
`;
