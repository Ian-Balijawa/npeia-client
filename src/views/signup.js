import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { Header } from '../components/accordion/styles/accordion';

export default function Register() {
	const history = useHistory();
	// const { firebase } = useContext(FirebaseContext);

	//MEMBERSHIP DETAILS
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [lastName, setLastName] = useState('');
	const [password, setPassword] = useState('');
	const [repassword, setRepassword] = useState('');
	const [phone, setPhone] = useState('');
	const [error, setError] = useState(null);

	const isInvalid = () => {
		return firstName === '' ||
			lastName === '' ||
			password === '' ||
			repassword !== password ||
			phone === '' ||
			email === ''
			? true
			: false;
	};

	const handleSignup = event => {
		event.preventDefault();

		// return firebase
		// 	.auth()
		// 	.createUserWithEmailAndPassword(emailAddress, password)
		// 	.then(result =>
		// 		result.user
		// 			.updateProfile({
		// 				displayName: firstName,
		// 				photoURL: Math.floor(Math.random() * 5) + 1,
		// 			})
		// 			.then(() => {
		// 				history.push(ROUTES.DASHBOARD);
		// 			})
		// 	)
		// 	.catch(error => {
		// 		setFirstName('');
		// 		setEmailAddress('');
		// 		setPassword('');
		// 		setError(error.message);
		// 	});
	};

	return (
		<>
			<Header />
			<Form>
				<Form.Title>Sign up</Form.Title>
				{error && <Form.Error>{error}</Form.Error>}

				<Form.Base onSubmit={handleSignup} method='POST'>
					<Form.Input
						placeholder='First Name'
						value={firstName}
						onChange={({ target }) => setFirstName(target.value)}
					/>
					<Form.Input
						placeholder='Last Name'
						value={lastName}
						onChange={({ target }) => setLastName(target.value)}
					/>
					<Form.Input
						type='text'
						value={email}
						placeholder='Email Address'
						onChange={({ target }) => setEmail(target.value)}
					/>
					<Form.Input
						type='password'
						value={password}
						placeholder='Password'
						onChange={({ target }) => setPassword(target.value)}
					/>
					<Form.Input
						type='password'
						value={repassword}
						placeholder='Confirm Password'
						onChange={({ target }) => setRepassword(target.value)}
					/>
					<Form.Submit
						disabled={isInvalid()}
						type='submit'
						data-testid='sign-up'
					>
						<Link to={ROUTES.DASHBOARD}>Sign up</Link>
					</Form.Submit>
				</Form.Base>

				<Form.Text>
					Already a user?{' '}
					<Form.Link to={ROUTES.SIGNIN}>Sign in.</Form.Link>
				</Form.Text>
				<Form.TextSmall>
					This page is protected by Google reCAPTCHA to ensure you're
					not a bot.
				</Form.TextSmall>
			</Form>
		</>
	);
}
