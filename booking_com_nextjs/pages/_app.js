import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../infrasctructure/theme';
import '../components/Reserve/reserve.css';
import '../pages/Authentication/loginPage.css';
import '../pages/Hotel/hotel.css';
import '../sharedComponents/Loader/loader.css';

import { SearchContextProvider } from '../context/SearchContext';
import { AuthContextProvider } from '../context/AuthContext';

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={appTheme}>
			<SearchContextProvider>
				<AuthContextProvider>
					<Component {...pageProps} />
				</AuthContextProvider>
			</SearchContextProvider>
		</ThemeProvider>
	);
}
