import { useMediaQuery } from 'react-responsive';
import { Text } from '../../sharedComponents';
import { MainContainer, Image, TextContainer } from './featured.styles';
import { screens } from '../../utils/screens';

export const Featured = ({ img, city, availableHotels }) => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<MainContainer isMobile={isMobile}>
			{!city ? (
				'Loading'
			) : (
				<>
					<Image src={img} />
					<TextContainer>
						<Text white size='h3'>
							{city}
						</Text>
						<Text white size='h4'>
							{availableHotels}
						</Text>
					</TextContainer>
				</>
			)}
		</MainContainer>
	);
};
