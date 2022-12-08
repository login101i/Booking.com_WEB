import React, { useContext } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from 'react-router-dom';
import { Button, Text, CustomIcon } from '../../sharedComponents';
import { AuthContext } from '../../context/AuthContext';
import { MainContainer, Container, LogoContainer, ButtonsContainer, PolandFlag, RedColor } from './Navbar.styles';

export const Navbar = () => {
	const { user } = useContext(AuthContext);
	console.log(user);
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
						<Text white>Witaj {user.username} !</Text>
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
