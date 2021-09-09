import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Signin() {
	const history = useHistory();
	// const { firebase } = useContext(FirebaseContext);

	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const isInvalid = password === '' || emailAddress === '';

	const handleSignin = event => {
		event.preventDefault();

		// return firebase
		// 	.auth()
		// 	.signInWithEmailAndPassword(emailAddress, password)
		// 	.then(() => {
		// 		history.push(ROUTES.DASHBOARD);
		// 	})
		// 	.catch(error => {
		// 		setEmailAddress('');
		// 		setPassword('');
		// 		setError(error.message);
		// 	});
	};

	return (
		<>
			{' '}
			<Header hideSignin='true' hasBgColor='true' invertColor='true' />
			<Form>
				<Form.Title>Sign In</Form.Title>
				{error && <Form.Error data-testid='error'>{error}</Form.Error>}

				<Form.Base onSubmit={handleSignin} method='POST'>
					<Form.Input
						placeholder='Email address'
						value={emailAddress}
						onChange={({ target }) => setEmailAddress(target.value)}
					/>
					<Form.Input
						type='password'
						value={password}
						autoComplete='off'
						placeholder='Password'
						onChange={({ target }) => setPassword(target.value)}
					/>
					<Form.Submit
						disabled={isInvalid}
						type='submit'
						data-testid='sign-in'
					>
						Sign In
					</Form.Submit>
				</Form.Base>

				<Form.Text>
					New to NAPEIA?{' '}
					<Form.Link to='/signup'>Sign up now.</Form.Link>
				</Form.Text>
				<Form.TextSmall>
					This page is protected by Google reCAPTCHA to ensure you're
					not a bot. Learn more.
				</Form.TextSmall>
			</Form>
			<Footer />
		</>
	);
}
