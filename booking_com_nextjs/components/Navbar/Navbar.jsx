import React, { useContext } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Link from 'next/link';
import { Button, Text, CustomIcon } from '../../sharedComponents';
import { AuthContext } from '../../context/AuthContext';
import { MainContainer, Container, LogoContainer, ButtonsContainer, PolandFlag, RedColor } from './Navbar.styles';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../utils/screens';

export const Navbar = () => {
	const { user, dispatch } = useContext(AuthContext);

	const handleLogout = async e => {
		e.preventDefault();
		try {
			await axios.put('api/auth/logout');
			dispatch({ type: 'LOGOUT' });
			<Link href='/login' />;
		} catch (err) {
			console.log('Logout error', err);
		}
	};

	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<MainContainer isMobile={isMobile}>
			<Container isMobile={isMobile}>
				<Link href='/'>
					<LogoContainer>
						<Text size='h4' white>
							Booking.com
						</Text>
					</LogoContainer>
				</Link>
				<ButtonsContainer isMobile={isMobile}>
					{!isMobile && (
						<>
							<CustomIcon icon={HelpOutlineIcon} color='white' />
							<Text title='true' uppercase white>
								pln
							</Text>
							<PolandFlag>
								<RedColor />
							</PolandFlag>
						</>
					)}
					<Button color='white' width={isMobile && '340px'}>
						Udostępnij obiekt
					</Button>
					{user ? (
						<>
							{' '}
							<Text white>Witaj {user} !</Text>
							<Button backGrWhite onClick={handleLogout} width={isMobile && '340px'}>
								Wyloguj się
							</Button>
						</>
					) : (
						<>
							<Button backGrWhite width={isMobile && '340px'}>
								Zarejestruj się
							</Button>
							<Link href='/login'>
								<Button backGrWhite width={isMobile && '340px'}>
									Zaloguj się
								</Button>
							</Link>
						</>
					)}
				</ButtonsContainer>
			</Container>
		</MainContainer>
	);
};
