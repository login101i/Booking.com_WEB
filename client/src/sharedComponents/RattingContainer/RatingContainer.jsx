import { MainContainer } from './RatingContainer.styles';

export const RatingContainer = ({ rating = 9.5, size = '22px' }) => {
	return <MainContainer size={size}>{rating}</MainContainer>;
};
