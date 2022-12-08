import { Navbar } from '../../components/Navbar/Navbar';
import { Header } from '../../components/Header/Header';
import { Flex } from '../../sharedComponents';
import { FeaturedList, FooterInfo1, FooterInfo2, MailList, FeaturedHotels } from '../../components';
import useFetch from '../../hooks/useFetch';
import { Container } from './HomePage.styles';

export const HomePage = () => {
	return (
		<>
			<Flex column center>
				<Container>
					<Navbar />
					<Header />
				</Container>
				<FeaturedHotels />
				<FeaturedList title='Szukaj według rodzaju obiektu' fetch={'hotels/countByType'} />
				<FeaturedList
					title='Świetne lokalizacje w centrum stolic'
					fetch={'hotels/countByCity?cities=madrit,warszawa,kraków,berlin,gdańsk'}
				/>
				<FeaturedList title='Polska – odkryj to miejsce' fetch={'hotels/countByCity?cities=warszawa,poznań,zakopane,sopot,gdańsk'} />
				<MailList />
				<FooterInfo1 />
				<FooterInfo2 />
			</Flex>
		</>
	);
};
