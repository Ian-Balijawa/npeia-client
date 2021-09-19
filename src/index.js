import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
import App from './App';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

render(
	<FirebaseContext.Provider value={{ firebase }}>
		<Router history={history}>
			<App />
		</Router>
	</FirebaseContext.Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
