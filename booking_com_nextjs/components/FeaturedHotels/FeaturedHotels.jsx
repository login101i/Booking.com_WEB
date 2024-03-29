import { useMediaQuery } from 'react-responsive';
import { useFetch } from '../../hooks/useFetch';
import { Text } from '../../sharedComponents';
import { Featured } from '../Featured/Featured';
import { FeaturedContainer } from './FeaturedHotels.styles';
import { screens } from '../../utils/screens';

export const FeaturedHotels = () => {
	const { data, loading } = useFetch('/hotels/countByCity?cities=poznań,kraków,warszawa');
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<>
			{loading ? (
				<Text>Loading</Text>
			) : (
				<>
					{data && (
						<FeaturedContainer isMobile={isMobile}>
							<Featured
								city='Poznań'
								availableHotels={data.list?.[0]}
								img='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/305169723.jpg?k=304479e105846887a7fa95115b4bf6c6e3edc6fbfbc955a0ff9f372fa968274b&o=&hp=1'
							/>
							<Featured
								city='Kraków'
								availableHotels={data.list?.[1]}
								img='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/74636225.jpg?k=8e61c76a504fc72addb3008c392d604bc25f545d4dc3ad81f879a3bc56ec2e37&o=&hp=1'
							/>
							<Featured
								city='Warszawa'
								availableHotels={data.list?.[2]}
								img='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/149029786.jpg?k=12c00af5fa587b1b56047f8e9d1896d56f3a428c6775a5135f2cdc1031f2c873&o=&hp=1'
							/>
						</FeaturedContainer>
					)}
				</>
			)}
		</>
	);
};
