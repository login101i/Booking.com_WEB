import styled from 'styled-components';

export const FeaturedContainer = styled.div`
	max-width: 1080px;
	justify-content: space-between;
	flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
	align-items: center;
	display: flex;
	margin-top: 100px;
	gap: 20px;
	margin-bottom: 50px;
`;
