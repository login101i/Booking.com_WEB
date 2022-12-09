import React, { useContext } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from 'react-router-dom';
import { Button, Text, CustomIcon } from '../../sharedComponents';
import { AuthContext } from '../../context/AuthContext';
import { MainContainer, Container, LogoContainer, ButtonsContainer, PolandFlag, RedColor } from './Navbar.styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const { user, dispatch } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogout = async e => {
		e.preventDefault();
		try {
			await axios.put('auth/logout');
			dispatch({ type: 'LOGOUT' });
			navigate('/login');
		} catch (err) {
			console.log('Logout error', err);
		}
	};

	return (
		<MainContainer>
			<Container>
				<Link to='/'>
					<LogoContainer>
						<Text size='h4' white>
							Booking.com
						</Text>
					</LogoContainer>
				</Link>
				<ButtonsContainer>
					<CustomIcon icon={HelpOutlineIcon} color='white' />
					<Text title='true' uppercase white>
						pln
					</Text>
					<PolandFlag>
						<RedColor />
					</PolandFlag>
					<Button color='white'>Udostępnij obiekt</Button>
					{user ? (
						<>
							{' '}
							<Text white>Witaj {user} !</Text>
							<Button backGrWhite onClick={handleLogout}>
								Wyloguj się
							</Button>
						</>
					) : (
						<>
							<Button backGrWhite>Zarejestruj się</Button>
							<Link to='/login'>
								<Button backGrWhite>Zaloguj się</Button>
							</Link>
						</>
					)}
				</ButtonsContainer>
			</Container>
		</MainContainer>
	);
};
