import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HomePage } from './pages/HomePage/HomePage';
import { Hotel } from './pages/Hotel/Hotel';
import { List } from './pages/List/List';
import { LoginPage } from './pages/Authentication/LoginPage';
import { appTheme } from './infrasctructure/theme';
import './styles.css';

const App = () => {
	return (
		<ThemeProvider theme={appTheme}>
			<Routes>
				<Route path='/' element={<HomePage />} exact />
				<Route path='/hotels' element={<List />} exact />
				<Route path='/hotels/find/:id' element={<Hotel />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</ThemeProvider>
	);
};

export default App;
