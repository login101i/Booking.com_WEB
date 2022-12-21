import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import BedIcon from '@mui/icons-material/Bed';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MapIcon from '@mui/icons-material/Map';

import { format } from 'date-fns';

import { Button, Flex, Text, CustomIcon, CustomInput } from '../../sharedComponents';
import { DateRange } from 'react-date-range';
import { SearchBarOptions } from '../SearchBarOption/SearchBarOptions';
import { UseComponentVisible } from '../../utils/UseComponentVisible';
import { ListOptionComponent } from '../ListOptionComponent/ListOptionComponent';
import { ListOptionItem } from '../ListOptionItem/ListOptionItem';
import { Container, Shadow } from './ListSearch.styles';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../utils/screens';

export const ListSearch = ({ location, setMin, setMax, handleSearch, setDestination }) => {
	const destination = useState(location.state.destination);
	const [data, setData] = useState(location.state);
	const [openOptions, setOpenOptions] = useState();
	const [showStartDate, setShowStartDate] = useState();
	const [showEndDate, setShowEndDate] = useState();
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	const [options, setOptions] = useState({
		adult: data.options.adult,
		children: data.options.children,
		room: data.options.room,
	});
	const [date, setDate] = useState([
		{
			startDate: data.date[0].startDate,
			endDate: data.date[0].endDate,
			key: 'selection',
		},
	]);

	const { ref, isComponentVisible } = UseComponentVisible(showStartDate && showEndDate && openOptions);

	return (
		<div ref={ref}>
			<Container isMobile={isMobile}>
				<Text size='h5'>Szukaj</Text>
				<Text size='h8' margin='0px 0px 10px 0px'>
					Cel podróży / nazwa obiektu
				</Text>

				<CustomInput
					placeholder={destination}
					leftIcon={<CustomIcon color='grey' icon={MapIcon} />}
					onKeyDown={e => {
						if (e.key === 'Enter') {
							handleSearch();
						}
					}}
					onChange={e => {
						setDestination(e.target.value.toLowerCase());
					}}
				/>
				<CustomInput
					placeholder={format(date[0].startDate, 'MM/dd/yyy') + ' do ' + format(date[0].endDate, 'MM/dd/yyy')}
					onClick={() => setShowStartDate(!showStartDate)}
					leftIcon={
						<CustomIcon
							color='grey'
							icon={CalendarMonthIcon}
							onClick={() => {
								setShowStartDate(!showStartDate);
								setShowEndDate(false);
								setOpenOptions(false);
							}}
						/>
					}
					component={
						isComponentVisible &&
						showStartDate && (
							<Shadow>
								<DateRange
									editableDateInputs={true}
									onChange={item => setDate([item.selection])}
									moveRangeOnFirstSelection={false}
									ranges={date}
								/>
							</Shadow>
						)
					}
				/>

				<CustomInput
					placeholder={data.options?.adult + ' dorosłych * ' + data.options?.children + ' dzieci * ' + data.options?.room + 'pokój'}
					leftIcon={<CustomIcon color='grey' icon={PersonIcon} onClick={() => setOpenOptions(!openOptions)} />}
					component={isComponentVisible && openOptions && <SearchBarOptions options={options} setOptions={setOptions} />}
				/>

				<CustomInput
					placeholder='maksymalna cena'
					leftIcon={<CustomIcon color='grey' icon={AttachMoneyIcon} />}
					onChange={e => setMax(e.target.value)}
					onKeyDown={e => {
						if (e.key === 'Enter') {
							handleSearch();
						}
					}}
				/>
				<CustomInput
					placeholder='minimalna cena'
					leftIcon={<CustomIcon color='grey' icon={AttachMoneyIcon} />}
					onChange={e => setMin(e.target.value)}
					onKeyDown={e => {
						if (e.key === 'Enter') {
							handleSearch();
						}
					}}
				/>

				<Flex backGr='orange' space>
					<Flex backGr='orange'>
						<Checkbox />
						<Text size='h8'>Domy i apartamenty na wyłączność</Text>
					</Flex>

					<CustomIcon icon={BedIcon} color='black' />
				</Flex>
				<Flex backGr='orange' space>
					<Flex backGr='orange'>
						<Checkbox />
						<Text size='h8'>Podróżuję służbowo</Text>
					</Flex>

					<CustomIcon icon={BedIcon} color='black' />
				</Flex>
				<Button title='szukaj' backGr='secondary' color='white' margin='20px 0px ' onClick={handleSearch} />
			</Container>
			<Flex column margin='20px 0px'>
				<ListOptionComponent title='Twój przedział cenowy (za noc)'>
					<ListOptionItem />
					<ListOptionItem />
					<ListOptionItem />
					<ListOptionItem />
				</ListOptionComponent>
				<ListOptionComponent title='Popularne filtry'>
					<ListOptionItem />
				</ListOptionComponent>
				<ListOptionComponent title='Zdrowie i bezpieczeństwa'>
					<ListOptionItem />
					<ListOptionItem />
				</ListOptionComponent>
				<ListOptionComponent title='Twój przedział cenowy (za noc)'>
					<ListOptionItem />
					<ListOptionItem />
					<ListOptionItem />
					<ListOptionItem />
				</ListOptionComponent>
				<ListOptionComponent title='Zdrowie i bezpieczeństwa'>
					<ListOptionItem />
					<ListOptionItem />
				</ListOptionComponent>
			</Flex>
		</div>
	);
};
