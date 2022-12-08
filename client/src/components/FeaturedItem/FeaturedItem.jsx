import { Flex, Text, RatingContainer } from '../../sharedComponents';
import { MainContainer, ImageContainer, Image } from './FeaturedItem.styles';

export const FeaturedItem = ({
	img = 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/148981006.jpg?k=9166090226f0a31f52d948f49814c0db4f5b05868bfb8b0da0fbe04a8fba1301&o=&hp=1',
	price,
	rating,
	availableNumber = 55,
	type,
	title,
	city,
	poland,
}) => {
	return (
		<MainContainer>
			<ImageContainer>
				<Image src={img} />
			</ImageContainer>
			<Flex column>
				<Text uppercase>{type === 'obiektów' ? '' : type}</Text>

				<Text capitalize> {title} </Text>

				<Text>
					{availableNumber} {type}
				</Text>
			</Flex>

			{poland ? (
				' '
			) : (
				<Flex>
					{rating && <RatingContainer rating={rating} />}
					{price && <Text>Ceny już od {price} zł</Text>}
				</Flex>
			)}
		</MainContainer>
	);
};
