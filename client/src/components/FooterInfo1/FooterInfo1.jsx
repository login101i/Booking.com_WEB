import { Text } from '../../sharedComponents';
import { Button } from '../../sharedComponents';
import { Divider } from '@mui/material';
import { Container, InfoContainer } from './FooterInfo1.styles';

export const FooterInfo1 = () => {
	return (
		<Container>
			<Button border='white' radius='5px' color='white'>
				Udostępnij obiekt
			</Button>
			<Divider
				sx={{
					color: 'white',
				}}
			/>
			<InfoContainer>
				<Text white>Wersja Mobilna</Text>
				<Text white>Twoje Konto </Text>
				<Text white>Wprowadzaj zmiany w rezerwacji online </Text>
				<Text white>Obsługa Klienta </Text>
				<Text white>Zostań naszym Pattnerem Afiliacyjnym </Text>
				<Text white>Booking.com dla Biznesu</Text>
			</InfoContainer>
		</Container>
	);
};
