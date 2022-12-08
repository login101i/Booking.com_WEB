import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import BedIcon from '@mui/icons-material/Bed';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SearchBarOptions } from '../index';
import { UseComponentVisible } from '../../utils/UseComponentVisible';
import { Flex, CustomIcon, CustomInput } from '../../sharedComponents';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { Shadow } from './SearchBar.styles';

export const SearchBar = () => {
	const [showDate, setShowDate] = useState();
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);
	const [openOptions, setOpenOptions] = useState();
	const [options, setOptions] = useState({
		adult: 2,
		children: 0,
		room: 1,
	});
	const [destination, setDestination] = useState('Gdzie się wybierasz ?');
	const { ref, isComponentVisible, setIsComponentVisible } = UseComponentVisible(showDate && openOptions);
	const navigate = useNavigate();

	const { dispatch } = useContext(SearchContext);

	const handleSearch = () => {
		dispatch({ type: 'NEW_SEARCH', payload: { destination, date, options } });
		navigate('/hotels', {
			state: {
				destination,
				date,
				options,
			},
		});
	};

	return (
		<div ref={ref}>
			<Flex>
				<CustomInput
					leftIcon={<CustomIcon color='grey' icon={BedIcon} />}
					placeholder={destination ? 'Gdzie się wybierasz?' : destination}
					onChange={e => {
						setDestination(e.target.value.toLowerCase());
					}}
					onKeyDown={e => {
						if (e.key === 'Enter') {
							handleSearch();
						}
					}}
				/>

				<CustomInput
					leftIcon={
						<CustomIcon
							color='grey'
							icon={CalendarMonthIcon}
							onClick={() => {
								setOpenOptions(false);
								setShowDate(!showDate);
							}}
						/>
					}
					placeholder={format(date[0].startDate, 'MM/dd/yyy') + ' do ' + format(date[0].endDate, 'MM/dd/yyy')}
					component={
						isComponentVisible &&
						showDate && (
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
					width='200px'
					center
				/>

				<CustomInput
					leftIcon={
						<CustomIcon
							color='grey'
							icon={PersonIcon}
							onClick={() => {
								setOpenOptions(!openOptions);
								setShowDate(false);
							}}
						/>
					}
					rightIcon={<CustomIcon color='grey' icon={ExpandMoreIcon} />}
					placeholder={options.adult + ' dorosłych * ' + options.children + ' dzieci * ' + options.room + ' pokój'}
					width='230px'
					component={isComponentVisible && openOptions && <SearchBarOptions options={options} setOptions={setOptions} />}
				/>
				<CustomInput width='auto' color='white' backGr='secondary' placeholder='Szukaj' center onClick={handleSearch} />
			</Flex>
		</div>
	);
};
