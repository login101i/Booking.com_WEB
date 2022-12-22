import { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FooterInfo1, Navbar } from '../../components';
import { Header } from '../../components/Header/Header';
import { FooterInfo2 } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useFetch } from '../../hooks/useFetch';
import { Loader } from '../../sharedComponents/Loader/Loader';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import { Reserve } from '../../components';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../utils/screens';

export const Hotel = () => {
	const [slideNumber, setSlideNumber] = useState(0);

	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const location = useLocation();
	const id = location.pathname.split('/')[3];

	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	const { date, options } = useContext(SearchContext);

	const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
	function dayDifference(date1, date2) {
		const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
		const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
		return diffDays;
	}
	const days = dayDifference(date[0]?.endDate, date[0]?.startDate) || 4;

	const handleOpen = i => {
		setSlideNumber(i);
		setOpen(true);
	};

	const handleMove = direction => {
		let newSlideNumber;

		if (direction === 'l') {
			newSlideNumber = slideNumber === 0 ? data[0].photos.length - 1 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === data[0].photos.length - 1 ? 0 : slideNumber + 1;
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
	const { data, loading, error } = useFetch(`/api/hotels/find/62cbd0cb5b3594b5725d25ca`);

	useEffect(() => {
		console.log('hellooo');
	}, [data]);
	const { _id, name, type, city, address, distance, photos, title, desc, rating, rooms, cheapestPrice } = data;

	const isMobile = useMediaQuery({ maxWidth: screens.md });

	return (
		<>
			<div className='headerContainer'>
				<Navbar />
				<Header type='list' />
			</div>
			{loading ? (
				<Loader />
			) : (
				data.length > 0 && (
					<div className='hotelContainer'>
						{open && !isMobile && (
							<div className='slider'>
								<FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
								<FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove('l')} />
								<div className='sliderWrapper'>{<img src={data[0].photos[slideNumber]} alt='hotel Images' className='sliderImg' />}</div>
								<FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove('r')} />
							</div>
						)}
						<div className='hotelWrapper '>
							<div className='hotelMainInfo'>
								<h1 className='hotelTitle'>{name}</h1>
								<div className='hotelAddress'>
									<FontAwesomeIcon icon={faLocationDot} />
									<span>{data[0].city + ' ulica ' + data[0].address}</span>
								</div>
								<div className='hotelDistance'>Wspaniała lokalizacja – {data[0].distance} od centrum</div>
								<div className='hotelPriceHighlight'>Zarezerwuj teraz a otrzymasz darmowy transport z lotniska.</div>
							</div>
							<div className={`hotelImages ${isMobile} && mobileHotelImgWrapper `}>
								{data[0].photos?.map((photo, i) => (
									<div className='hotelImgWrapper' key={i}>
										<img onClick={() => handleOpen(i)} src={photo} alt='' className='hotelImg' />
									</div>
								))}
							</div>
							<div className={`hotelDetails ${isMobile} && column `}>
								<div className='hotelDetailsTexts'>
									<h1 className='hotelTitle'>{data[0].name}</h1>
									<p className='hotelDesc'>{data[0].desc}</p>
								</div>
								<div className='hotelDetailsPrice'>
									<h1>Doskonały na {days} noce.</h1>
									<span>{desc}</span>
									<h2>
										<b>{days * data[0].cheapestPrice * options.room} zł</b> ({days} noce)
									</h2>
									<button onClick={handleClick}>Zarezerwuj teraz !</button>
								</div>
							</div>
						</div>
						<FooterInfo1 />
						{!isMobile && <FooterInfo2 />}
						{openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
					</div>
				)
			)}
		</>
	);
};
