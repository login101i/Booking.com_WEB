import { useFetch } from '../../hooks/useFetch';
import { Text, DirectionArrows } from '../../sharedComponents';
import { FeaturedItem } from '../FeaturedItem/FeaturedItem';
import { MainContainer, Container } from './FeaturedList.styles';

export const FeaturedList = ({
	img = 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/148981006.jpg?k=9166090226f0a31f52d948f49814c0db4f5b05868bfb8b0da0fbe04a8fba1301&o=&hp=1',
	title,
	price,
	rating,
	fetch,
}) => {
	const { data, loading } = useFetch(fetch);
	console.log(data);

	const poland = title.includes('Polska');

	const images = [
		'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
		'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg',
		'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg',
		'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
		'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg',
	];
	return (
		<MainContainer>
			{loading ? (
				'loading '
			) : (
				<>
					<Text size='h4' marginBtm={2}>
						{title}
					</Text>
					<DirectionArrows>
						<Container>
							{data &&
								images.map((img, index) => (
									<FeaturedItem
										img={data.objects ? data.objects?.[index][0]?.photos[0] : img}
										availableNumber={fetch.includes('cities') ? null : data[index]?.city ? null : data[index]?.count}
										type={fetch.includes('cities') ? null : data.objects?.[index]?.city ? null : data[index]?.type}
										key={index}
										rating={fetch.includes('cities') ? data.objects?.[index][0]?.rating : data[index]?.rating ? data[index]?.rating : null}
										title={poland ? data.objects?.[index][0]?.city : data.objects ? data.objects?.[index][index]?.name : null}
										price={
											fetch.includes('cities')
												? data.objects?.[index][0]?.cheapestPrice
												: data[index]?.cheapestPrice
												? data[index]?.cheapestPrice
												: null
										}
										poland={poland}
									/>
								))}
						</Container>
					</DirectionArrows>
				</>
			)}
		</MainContainer>
	);
};
