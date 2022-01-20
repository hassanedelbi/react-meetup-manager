import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';
const MainNavigation = () => {
	const favoritesCtx = useContext(FavoritesContext);
	let favoritesNum = favoritesCtx.totalFavorites;
	return (
		<header className={classes.header}>
			<div className={classes.logo}>React Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to={'/'}>All Meetups</Link>
					</li>
					<li>
						<Link to={'/new-meetup'}>Add new meetup</Link>
					</li>
					<li>
						<Link to={'/favorites'}>
							My Favorites
							<span className={classes.badge}>{favoritesNum}</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
