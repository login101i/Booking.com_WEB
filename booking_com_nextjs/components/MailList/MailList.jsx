import { useRef } from 'react';
import Checkbox from '@mui/material/Checkbox';
import emailjs from '@emailjs/browser';
import { Flex, Text, CustomInput } from '../../sharedComponents';
import { Button } from '../../sharedComponents';
import { MainContainer, Container, CheckBoxContainer, FormComponent } from './MailList.styles';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../utils/screens';

export const MailList = () => {
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
	const form = useRef();
	const isMobile = useMediaQuery({ maxWidth: screens.md });

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
			<Container isMobile={isMobile}>
				<Text size={isMobile ? 'h5' : 'h3'} white>
					Zaszczędź czas i pieniądze!
				</Text>
				<Flex backGr='primary' column={isMobile}>
					<Text size='h7' white marginBtm={4}>
						Zaprenumeruj biuletyn, aby zobaczyć ukryte oferty.
					</Text>
					<Text size='h7' white marginBtm={4}>
						Zaprenumeruj biuletyn, aby zobaczyć Ukryte Oferty
					</Text>
				</Flex>

				<Flex center backGr='primary' column={isMobile}>
					<FormComponent ref={form} onSubmit={sendEmail}>
						<CustomInput placeholder='Twój email' height='34px' border='lightBlue' width='320px' />
					</FormComponent>
					<Button
						backGr='secondary'
						color='white'
						style={{ margin: isMobile ? '10px 0px' : '0px' }}
						onClick={sendEmail}
						width={isMobile && '335px'}
					>
						Zapisz mnie do listy
					</Button>
				</Flex>
				<CheckBoxContainer isMobile={isMobile}>
					<Checkbox
						size='medium'
						sx={{
							color: 'white',
							'&.Mui-checked': {
								color: 'white',
							},
						}}
					/>
					<Text white wrap='true' size={isMobile && 'h7'}>
						Wyślij mi link aby dostać darmową aplikację Booking.com
					</Text>
				</CheckBoxContainer>
			</Container>
		</MainContainer>
	);
};
