import { Flex, Text, PlusMinus } from '../../sharedComponents';
import { OptionsContainer } from './SearchBarOption.styles';

export const SearchBarOptions = ({ setOptions, options }) => {
	const handleOption = (name, operation) => {
		setOptions(prevState => {
			return {
				...prevState,
				[name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
			};
		});
	};
	return (
		<OptionsContainer>
			<Flex space height='60px'>
				<Text>Dorośli</Text>
				<Flex center>
					<PlusMinus disabled={options.adult <= 1} sign='-' onClick={() => handleOption('adult', 'd')} />
					<Text>{options.adult}</Text>
					<PlusMinus sign='+' onClick={() => handleOption('adult', 'i')} />
				</Flex>
			</Flex>
			<Flex space height='60px'>
				<Text>Dzieci</Text>
				<Flex>
					<PlusMinus disabled={options.children < 1} sign='-' onClick={() => handleOption('children', 'd')} />
					<Text>{options.children}</Text>
					<PlusMinus sign='+' onClick={() => handleOption('children', 'i')} />
				</Flex>
			</Flex>
			<Flex space height='60px'>
				<Text>Pokoje</Text>
				<Flex>
					<PlusMinus disabled={options.room <= 1} sign='-' onClick={() => handleOption('room', 'd')} />
					<Text>{options.room}</Text>
					<PlusMinus sign='+' onClick={() => handleOption('room', 'i')} />
				</Flex>
			</Flex>
		</OptionsContainer>
	);
};
