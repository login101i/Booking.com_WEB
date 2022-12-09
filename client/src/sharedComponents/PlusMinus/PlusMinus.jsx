import { MainContainer } from './PlusMinus.styles';

export const PlusMinus = ({ sign, onClick, disabled }) => {
	return (
		<MainContainer onClick={onClick} disabled={disabled}>
			{sign}
		</MainContainer>
	);
};
