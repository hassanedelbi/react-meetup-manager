import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import { FavoritesContextProvider } from './store/favorites-context';
function App() {
	return (
		<FavoritesContextProvider>
			<Layout>
				<Routes>
					<Route path='/' element={<AllMeetupsPage />} />
					<Route path='/new-meetup' element={<NewMeetupPage />} />
					<Route path='/favorites' element={<FavoritesPage />} />
				</Routes>
			</Layout>
		</FavoritesContextProvider>
	);
}

export default App;
