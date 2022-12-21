import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FooterInfo1, Navbar } from '../../components';
import { Header } from '../../components/Header/Header';
import { MailList } from '../../components';
import { FooterInfo2 } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useFetch } from '../../hooks/useFetch';

import './hotel.css';
import { Text } from '../../sharedComponents';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import { Reserve } from '../../components';

export const Hotel = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const location = useLocation();
	const id = location.pathname.split('/')[3];
	console.log(id);

	const { data, loading, error } = useFetch(`/hotels/find/${id}`);
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	const { _id, name, type, city, address, distance, photos, title, desc, rating, rooms, cheapestPrice } = data;
	const { date, options } = useContext(SearchContext);

	const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
	function dayDifference(date1, date2) {
		const timeDiff = Math.abs(date2.getTime() - date1.getTime());
		const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
		return diffDays;
	}
	const days = dayDifference(date[0].endDate, date[0].startDate);

	const handleOpen = i => {
		setSlideNumber(i);
		setOpen(true);
	};

	const handleMove = direction => {
		let newSlideNumber;

		if (direction === 'l') {
			newSlideNumber = slideNumber === 0 ? photos.length : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === photos.length ? 0 : slideNumber + 1;
		}

		setSlideNumber(newSlideNumber);
	};

	const handleClick = () => {
		if (user) {
			setOpenModal(true);
		} else {
			navigate('/login');
		}
	};
	return (
		<>
			<div className='headerContainer'>
				<Navbar />
				<Header type='list' />
			</div>
			{loading
				? 'loading'
				: data && (
						<div className='hotelContainer'>
							{open && (
								<div className='slider'>
									<FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
									<FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove('l')} />
									<div className='sliderWrapper'>
										<img src={photos[slideNumber]} alt='' className='sliderImg' />
									</div>
									<FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove('r')} />
								</div>
							)}
							<div className='hotelWrapper'>
								<button className='bookNow'>Zarezerwuj teraz !</button>
								<h1 className='hotelTitle'>{name}</h1>
								<div className='hotelAddress'>
									<FontAwesomeIcon icon={faLocationDot} />
									<span>{address}</span>
								</div>
								<span className='hotelDistance'>Excellent location – 500m from center</span>
								<span className='hotelPriceHighlight'>Zarezerwuj teraz a otrzymasz darmowy transport z lotniska.</span>
								<div className='hotelImages'>
									{photos?.map((photo, i) => (
										<div className='hotelImgWrapper' key={i}>
											<img onClick={() => handleOpen(i)} src={photo} alt='' className='hotelImg' />
										</div>
									))}
								</div>
								<div className='hotelDetails'>
									<div className='hotelDetailsTexts'>
										<h1 className='hotelTitle'>{name}</h1>
										<p className='hotelDesc'>{desc}</p>
									</div>
									<div className='hotelDetailsPrice'>
										<h1>Doskonały {days}</h1>
										<span>{desc}</span>
										<h2>
											<b>{days * cheapestPrice * options.room} zł</b> ({days} nocy)
										</h2>
										<button onClick={handleClick}>Zarezerwuj teraz !</button>
									</div>
								</div>
							</div>
							<MailList />
							<FooterInfo1 />

							<FooterInfo2 />
							{openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
						</div>
				  )}
		</>
	);
};
