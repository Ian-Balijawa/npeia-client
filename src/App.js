import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import 'normalize-css';
import * as ROUTES from './constants/routes';

import Register from './pages/register';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={ROUTES.HOME} exact component={Register} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
