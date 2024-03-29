import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Divider } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { MainContainer, ImageContainer } from './ListResultItem.styles';

import { Button, Flex, Text, CustomIcon, RatingContainer } from '../../sharedComponents';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../utils/screens';

export const ListResultItem = ({ item }) => {
	const { _id, name, type, city, address, distance, photos, title, desc, rating, rooms, cheapestPrice } = item;
	const img =
		'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/148981006.jpg?k=9166090226f0a31f52d948f49814c0db4f5b05868bfb8b0da0fbe04a8fba1301&o=&hp=1';
	const navigate = useNavigate();
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<MainContainer isMobile={isMobile}>
			<ImageContainer src={item.photos[0]} onClick={() => navigate(`/hotels/find/${_id}`)} isMobile={isMobile} />
			<Flex column margin={!isMobile && '0px 20px'} grow>
				<Text uppercase>{item.name}</Text>
				<Flex>
					<Text capitalize>{city}</Text>
					<Text>Pokaż na mapie</Text>
					<Text>{distance} m od centrum</Text>
				</Flex>
				<Text backGr='green' white size='h8' marginBtm={3}>
					Oferta limitowana
				</Text>
				<Flex height='140px'>
					{isMobile && (
						<Divider
							orientation={isMobile ? 'horizontal' : 'vertical'}
							sx={{
								color: 'green',
							}}
						/>
					)}
					<Flex column margin={!isMobile && '0px 20px'}>
						<Text wrap color='secondary' size='h7'>
							{desc.slice(0, 50)}... <br />
							Na naszej stronie zostały tylko 1
						</Text>
						<Text color='secondary' size='h8' marginBtm={3}>
							Łóżka: 1 podwójne lub 2 pojedyncze
						</Text>
						<Text color='success' size='h7'>
							Śniadanie wliczone w cenę
						</Text>
						<Text color='error' size='h7'>
							2 pokoje w tej cenie
						</Text>
					</Flex>
				</Flex>
			</Flex>
			<Flex column space>
				<Flex column>
					<Flex center space marginBtm='10px'>
						<Flex column>
							<Text>{rating >= 9 ? 'Znakomity' : 'Bardzo dobry'}</Text>
							<Text>90 opini</Text>
						</Flex>
						<RatingContainer rating={rating} size='28px' />
					</Flex>
					<Flex>
						<Text>Lokalizacja : </Text>
						<Text capitalize>{city}</Text>
					</Flex>
				</Flex>
				<Flex column>
					<Text size='h8'>3 noce, 2 dorosłych</Text>
					<Flex space>
						<Text color='error'>3 noce, 2 dorosłych</Text>
						<Text size='h6'>{cheapestPrice} zł</Text>
					</Flex>

					<Text size='h8'>3 noce, 2 dorosłych</Text>
				</Flex>
				<Button
					title='Zobacz dostępność'
					backGr='secondary'
					color='white'
					onClick={() => navigate(`/hotels/find/${_id}`)}
					rightIcon={<CustomIcon icon={ChevronRightIcon} color='white' size={22} />}
					margin='20px 0px'
				/>
			</Flex>
		</MainContainer>
	);
};
