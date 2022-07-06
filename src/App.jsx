import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { HomePage } from "./pages/HomePage/HomePage";
import { Hotel } from "./pages/Hotel/Hotel";
import { List } from "./pages/List/List";
import { appTheme } from "./infrasctructure/theme";

const App = () => {
	return (
		<ThemeProvider theme={appTheme}>
			<Routes>
				<Route path="/" element={<HomePage />} exact/>
				
				<Route path="/hotels" element={<List />} exact/>
				<Route path="/hotel/:id" element={<Hotel />} />
			</Routes>
		</ThemeProvider>
	);
};

export default App;
