import { BrowserRouter as Router } from 'react-router-dom';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
	return (
		<div>
			<Router>
				<MainNavigation />
				<main className={classes.main}>{props.children}</main>
			</Router>
		</div>
	);
};

export default Layout;
