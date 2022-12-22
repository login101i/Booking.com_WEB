import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = url => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		setLoading(true);

		setTimeout(() => {
			const fetchData = async () => {
				try {
					const res = await axios.get(url);
					setData(res.data);
				} catch (err) {
					setError(err);
				}
				setLoading(false);
			};
			fetchData();
		}, 500);
	}, []);

	const reFetch = async () => {
		setLoading(true);
		try {
			const res = await axios.get(url);
			setData(res.data);
		} catch (err) {
			setError(err);
		}
		setLoading(false);
	};

	return { data, loading, error, reFetch };
};
