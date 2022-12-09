import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BedIcon from '@mui/icons-material/Bed';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Flex, Text, CustomIcon } from '../../sharedComponents';
import { SearchBar } from '..';
import { MainContainer, HeaderItemContainer, SearchBarContainer } from './Header.styles';

export const Header = ({ type }) => {
	const [active, setActive] = useState(false);
	const [searchBarTop, setSearchBarTop] = useState(false);

	const SearchBarContainer = styled.div`
		position: ${searchBarTop ? 'fixed' : 'absolute'};
		top: ${searchBarTop ? '0px' : '230px'};
		z-index: 111;

		margin-left: 20px;
	`;

	const listenToScroll = () => {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		if (winScroll > 345) {
			setSearchBarTop(true);
		} else {
			setSearchBarTop(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', listenToScroll);
		return () => window.removeEventListener('scroll', listenToScroll);
	}, [searchBarTop]);

	return (
		<MainContainer>
			<Flex backGr='primary' height='80px'>
				<HeaderItemContainer onClick={() => setActive('Pobyty')} active={active === 'Pobyty'}>
					<Text white>
						<CustomIcon icon={BedIcon} color='white' />
						Pobyty
					</Text>
				</HeaderItemContainer>

				<HeaderItemContainer onClick={() => setActive('Loty')} active={active === 'Loty'}>
					<Text white>
						<CustomIcon icon={AirplanemodeActiveIcon} color='white' />
						Lot
					</Text>
				</HeaderItemContainer>

				<HeaderItemContainer onClick={() => setActive('Wynajem samochodów')} active={active === 'Wynajem samochodów'}>
					<Text white>
						<CustomIcon icon={DirectionsCarIcon} color='white' />
						Wynajem samochodów
					</Text>
				</HeaderItemContainer>
				<HeaderItemContainer onClick={() => setActive('Atrakcje')} active={active === 'Atrakcje'}>
					<Text white>
						<CustomIcon icon={LocalTaxiIcon} color='white' />
						Atrakcje
					</Text>
				</HeaderItemContainer>
				<HeaderItemContainer onClick={() => setActive('Taksówki')} active={active === 'Taksówki'}>
					<Text white>
						<CustomIcon icon={RemoveRedEyeIcon} color='white' />
						Taksówki na lotnisku
					</Text>
				</HeaderItemContainer>
			</Flex>
			{type !== 'list' && (
				<>
					<Flex backGr='primary' height='170px' column margin='0px 20px'>
						<Text size='h3' marginBtm={3} white>
							Znajdź miejsce na kolejny pobyt
						</Text>
						<Text size='h5' white>
							Szukaj ofert hoteli, domów i wielu innych obiektów...
						</Text>
					</Flex>
					<SearchBarContainer>
						<SearchBar />
					</SearchBarContainer>
				</>
			)}
		</MainContainer>
	);
};
