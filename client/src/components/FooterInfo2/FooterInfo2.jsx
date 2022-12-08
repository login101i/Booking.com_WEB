import { Flex, Text } from '../../sharedComponents';
import { Container } from './FooterInfo2.styles';

export const FooterInfo2 = () => {
	return (
		<Container>
			<Flex column>
				<Text>Kraje</Text> <Text>Rejestrowanie sporów</Text>
				<Text>Rejony</Text> <Text>Zrównoważony rozwój </Text>
				<Text>Ciekawe miejsca</Text>
				<Text>Kraje</Text>
				<Text>Rejony</Text> <Text>Rejestrowanie </Text> <Text>Zrównoważony rozwój </Text> <Text>Rejestrowanie sporów</Text>
			</Flex>
			<Flex column>
				<Text>Ośrodko wypoczynkowe</Text> <Text>Rejestrowanie </Text>
				<Text>Rejestrowanie sporów</Text>
			</Flex>

			<Flex column>
				<Text>Rejestrowanie sporów</Text> <Text>Rejestrowanie </Text>
				<Text>wille</Text>
				<Text> Oferty sezonowe i wakacyjne</Text>
				<Text>Pendsjonaty</Text>
				<Text>Hotele</Text>
				<Text>Zasady współpracy </Text>
			</Flex>
			<Flex column>
				<Text>Oferty sezonowe i wakacyjne</Text> <Text>Oferty sezonowe i wakacyjne </Text> <Text>Rejestrowanie </Text>
			</Flex>
			<Flex column>
				<Text>Rejestrowanie sporów</Text>
				<Text>Zasady współpracy </Text>
				<Text>Zarządzaj ustawieniami plików cookie</Text> <Text>Rejestrowanie </Text> <Text>Zrównoważony rozwój </Text>{' '}
				<Text>Pytania dotyczące koronawirusa </Text> <Text>Centrum zasobów bezpieczeństwa</Text>
			</Flex>
		</Container>
	);
};
