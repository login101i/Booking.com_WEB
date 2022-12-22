import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BedIcon from '@mui/icons-material/Bed';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Flex, Text, CustomIcon } from '../../sharedComponents';
import { SearchBar } from '..';
import { MainContainer, HeaderItemContainer } from './Header.styles';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../utils/screens';
export const Header = ({ type }) => {
	const [active, setActive] = useState(false);
	const [searchBarTop, setSearchBarTop] = useState(false);

	const isMobile = useMediaQuery({ maxWidth: screens.md });
	const SearchBarContainer = styled.div`
		position: ${searchBarTop ? 'fixed' : 'absolute'};

		top: ${searchBarTop ? '0px' : '300px'};
		top: ${isMobile && '20px'};

		z-index: 111;
		margin-left: '20px';
		width: 'auto';
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
		<MainContainer isMobile={isMobile}>
			{!isMobile && (
				<Flex backGr='primary' height={isMobile ? '600px' : '80px'}>
					<HeaderItemContainer onClick={() => setActive('Pobyty')} active={active === 'Pobyty'} isMobile={isMobile}>
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
			)}
			{type !== 'list' && (
				<>
					{!isMobile && (
						<Flex backGr='primary' height='170px' column margin='0px 20px'>
							<Text size='h3' marginBtm={3} white>
								Znajdź miejsce na kolejny pobyt
							</Text>
							<Text size='h5' white>
								Szukaj ofert hoteli, domów i wielu innych obiektów...
							</Text>
						</Flex>
					)}
					{isMobile ? (
						<Flex margin="20px 0px">
							<SearchBar />
						</Flex>
					) : (
						<SearchBarContainer>
							<SearchBar />
						</SearchBarContainer>
					)}
				</>
			)}
		</MainContainer>
	);
};
