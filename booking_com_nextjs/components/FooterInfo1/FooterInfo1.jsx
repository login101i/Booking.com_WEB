import { Text } from '../../sharedComponents';
import { Button } from '../../sharedComponents';
import { Divider } from '@mui/material';
import { Container, InfoContainer } from './FooterInfo1.styles';
import { screens } from '../../utils/screens';
import { useMediaQuery } from 'react-responsive';

export const FooterInfo1 = () => {
	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<Container isMobile={isMobile}>
			<Button border='white' radius='5px' color='white'>
				Udostępnij obiekt
			</Button>
			<Divider
				sx={{
					color: 'white',
				}}
			/>
			<InfoContainer isMobile={isMobile}>
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
