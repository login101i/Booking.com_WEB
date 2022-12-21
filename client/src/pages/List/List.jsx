import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { Header } from '../../components/Header/Header';
import { ListSearch, ListResultItem } from '../../components';
import { Flex, Text } from '../../sharedComponents';
import { useFetch } from '../../hooks/useFetch';
import { Loader } from '../../sharedComponents/Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../utils/screens';
import { MainContainer, Container, ListContainer, ListResultContainer } from './List.styles';

export const List = ({ route }) => {
	const [min, setMin] = useState(undefined);
	const [max, setMax] = useState(undefined);
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const { data, loading, reFetch } = useFetch(`api/hotels?city=${destination}&min=${min || 0}&max=${max || 1000}`);

	const handleSearch = () => {
		reFetch();
	};

	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<MainContainer>
			<Container>
				<Navbar />
				<Header type='list' />
			</Container>
			<ListContainer isMobile={isMobile}>
				<ListSearch location={location} setMin={setMin} setMax={setMax} handleSearch={handleSearch} setDestination={setDestination} />
				<ListResultContainer>
					{loading ? (
						<Loader />
					) : data.length === 0 ? (
						<Flex center>
							<Text size={isMobile ? "h7" : "h5"}>Nie znaleziono wyników. Spróbuj jeszcze raz.</Text>
						</Flex>
					) : (
						<>{data && data.map((item, index) => <ListResultItem item={item} key={index} />)}</>
					)}
				</ListResultContainer>
			</ListContainer>
		</MainContainer>
	);
};
