import { Navbar } from '../../components/Navbar/Navbar';
import { Header } from '../../components/Header/Header';
import { Flex } from '../../sharedComponents';
import { FeaturedList, FooterInfo1, FooterInfo2, MailList, FeaturedHotels } from '../../components';
import { Container, HomeContainer } from '../HomePage/HomePage.styles';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../utils/screens';

export const HomePage = () => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<>
			<HomeContainer column>
				<Container isMobile={isMobile}>
					<Navbar />
					<Header />
				</Container>
				<FeaturedHotels />
			</HomeContainer>

			<Flex column center={!isMobile}>
				<FeaturedList title='Szukaj według rodzaju obiektu :' fetch={'api/hotels/countByType'} />
				<FeaturedList
					title='Świetne lokalizacje w centrum stolic :'
					fetch={'api/hotels/countByCity?cities=madrit,warszawa,kraków,berlin,gdańsk'}
				/>
				<FeaturedList title='Polska – odkryj to miejsce' fetch={'hotels/countByCity?cities=warszawa,poznań,zakopane,sopot,gdańsk'} />
			</Flex>

			<MailList />
			<FooterInfo1 />
			{!isMobile && <FooterInfo2 />}
		</>
	);
};
