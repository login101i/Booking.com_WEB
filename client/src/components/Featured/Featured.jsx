import { Text } from '../../sharedComponents';
import { MainContainer, Image, TextContainer } from './featured.styles';

export const Featured = ({ img, city, availableHotels }) => {
	return (
		<MainContainer>
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
