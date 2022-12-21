import { Navbar } from '../../components/Navbar/Navbar';
import { Header } from '../../components/Header/Header';
import { Flex } from '../../sharedComponents';
import { FeaturedList, FooterInfo1, FooterInfo2, MailList, FeaturedHotels } from '../../components';
import { Container } from './HomePage.styles';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../utils/screens';

export const HomePage = () => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<>
			<Flex column center>
				<Container isMobile={isMobile}>
					<Navbar />
					<Header />
				</Container>
				<FeaturedHotels />
				<FeaturedList title='Szukaj według rodzaju obiektu :' fetch={'api/hotels/countByType'} />
				<FeaturedList
					title='Świetne lokalizacje w centrum stolic'
					fetch={'api/hotels/countByCity?cities=madrit,warszawa,kraków,berlin,gdańsk'}
				/>
				<FeaturedList title='Polska – odkryj to miejsce' fetch={'hotels/countByCity?cities=warszawa,poznań,zakopane,sopot,gdańsk'} />
				<MailList />
				<FooterInfo1 />
				{!isMobile && <FooterInfo2 />}
			</Flex>
		</>
	);
};
