import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import * as ROUTES from './constants/routes';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
import Register from './views/Register';
import Signin from './views/signin';
import Signup from './views/signup.js';
import Dashboard from './views/Dashboard';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
	ReactGA.set({ page });
	ReactGA.pageview(page);
};

const App = () => {
	const childRef = useRef();
	let location = useLocation();

	useEffect(() => {
		const page = location.pathname;
		document.body.classList.add('is-loaded');
		childRef.current.init();
		trackPage(page);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return (
		<ScrollReveal
			ref={childRef}
			children={() => (
				<Switch>
					<AppRoute
						exact
						path={ROUTES.HOME}
						component={Home}
						layout={LayoutDefault}
					/>
					<AppRoute
						exact
						path={ROUTES.REGISTER}
						component={Register}
					/>
					<AppRoute exact path={ROUTES.SIGNIN} component={Signin} />
					<AppRoute exact path={ROUTES.SIGNUP} component={Signup} />
					<AppRoute
						exact
						path={ROUTES.DASHBOARD}
						component={Dashboard}
					/>
				</Switch>
			)}
		/>
	);
};

export default App;
