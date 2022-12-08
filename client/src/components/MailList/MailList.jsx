import { useRef } from 'react';
import Checkbox from '@mui/material/Checkbox';
import emailjs from '@emailjs/browser';
import { Flex, Text, CustomInput } from '../../sharedComponents';
import { Button } from '../../sharedComponents';
import { MainContainer, Container, CheckBoxContainer, FormComponent } from './MailList.styles';

export const MailList = () => {
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();
		console.log('wysylam email');

		emailjs.sendForm('service_2oylzol', 'template_sinar46', form.current, 'user_yhLAQa72YrZ8A042MInvV').then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			},
		);
	};
	return (
		<MainContainer>
			<Container>
				<Text size='h4' white>
					Zaszczędź czas i pieniądze!
				</Text>
				<Flex backGr='primary'>
					<Text size='h7' white marginBtm={4}>
						Zaprenumeruj biuletyn, aby zobaczyć Ukryte Oferty.
					</Text>
					<Text size='h7' white marginBtm={4}>
						Zaprenumeruj biuletyn, aby zobaczyć Ukryte Oferty
					</Text>
				</Flex>

				<Flex center backGr='primary'>
					<FormComponent ref={form} onSubmit={sendEmail}>
						<CustomInput placeholder='Twój email' height='34px' border='lightBlue' width='350px' />
					</FormComponent>
					<Button backGr='secondary' color='white' style={{ margin: '0px' }} onClick={sendEmail}>
						Zapisz mnie do listy
					</Button>
				</Flex>
				<CheckBoxContainer>
					<Checkbox
						size='medium'
						sx={{
							color: 'white',
							'&.Mui-checked': {
								color: 'white',
							},
						}}
					/>
					<Text white>Wyślij mi link aby dostać darmową aplikację Booking.com</Text>
				</CheckBoxContainer>
			</Container>
		</MainContainer>
	);
};
