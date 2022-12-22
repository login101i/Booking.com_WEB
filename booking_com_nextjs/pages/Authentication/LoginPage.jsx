import { useContext, useState } from 'react';
import bookingLogo from '../../assets/booking-logo.PNG';
import facebookLogo from '../../assets/facebook-icon.PNG';
import googleIcon from '../../assets/google-icon.PNG';
import phoneIcon from '../../assets/phone-success-icon.PNG';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { useFetch } from '../../hooks/useFetch';
import Link from 'next/link';
import Image from 'next/image';

export const LoginPage = () => {
	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
	});

	const { user, loading, error, dispatch } = useContext(AuthContext);
	const handleChange = e => {
		setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleLogin = async e => {
		e.preventDefault();
		dispatch({ type: 'LOGIN_START' });
		try {
			const res = await axios.post('api/auth/login', credentials);
			dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details.username });
			<Link href='/' />;
		} catch (err) {
			dispatch({ type: 'LOGIN_FAILURE', payload: err.response });
		}
	};

	return (
		<div>
			<header className='header'>
				<nav className='nav'>
					<div className='nav-icon'>
						<a href='/'>
							<Image src={bookingLogo} alt='logo' width={140} />
						</a>
					</div>
					<div className='nav-btns'>
						<div className='nav-btn burger-btn'>
							<i className='fa-solid fa-bars'></i> <i className='fa-solid fa-xmark'></i>
						</div>
						<div className='nav-btn nav-lang-btn'>
							<div></div>
						</div>
						<div className='nav-btn question-btn'>
							<div className='div-center'>?</div>
						</div>
					</div>
				</nav>
			</header>
			<main className='main div-center'>
				<div className='container'>
					<h2>Zaloguj się lub utwórz konto</h2>
					<div className='form'>
						<label htmlFor='email' className='form-label'>
							username: Maciej09, password: 123
						</label>

						<input type='text' placeholder='username' id='username' onChange={handleChange} className='form-input' />
						<input type='password' placeholder='password' id='password' onChange={handleChange} className='form-input' />

						<button disabled={loading} className='form-btn' onClick={handleLogin}>
							Kontynuuj za pomocą e-maila
						</button>
					</div>
					<div className='form-links'>
						<div className='links-info'>
							<div>lub skorzystaj z jednej z tych opcji</div>
						</div>
						<div className='link-acces'>
							<Link href='/'>
								<div className='link-icon '>
									<Image src={facebookLogo} alt='facebook Icon' width={40} height={40} />
								</div>
							</Link>
							<Link href='/'>
								<div className='link-icon'>
									<Image src={googleIcon} alt='google Icon' width={40} height={40} />
								</div>
							</Link>
							<Link href='/'>
								<div className='link-icon'>
									<Image src={phoneIcon} alt='phone Icon' width={40} height={40} />
								</div>
							</Link>
						</div>
					</div>
					<div className='form-footer'>
						<div className='footer-text-one footer-center'>
							<p>
								Zalogowanie się na swoje konto lub utworzenie go jest równoznaczne z akceptacją <a href='#'>Warunkow</a> oraz{' '}
								<a href='#'>Oświadczenia o ochronie prywatności.</a>
							</p>
						</div>
						<div className='footer-center'>
							<p>
								Wszelkie prawa zastrzeżone. <br />
								Prawa autorskie (2006-2022) - Booking.com
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};