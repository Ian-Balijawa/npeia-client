import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { FirebaseContext } from '../../context/firebase';
import '../styles/dashboard.css';

const HeaderDashboard = () => {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const user = firebase.auth().currentUser || {};

	return (
		<div className='main__header'>
			<div className='logo__input'>
				<Link to={ROUTES.HOME}>
					<img src='/images/logo.png' alt='logo' />
				</Link>
			</div>
			<div className='header__profile'>
				<div className='profile__alert'>
					<div>
						<svg
							className='alert__icon'
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
						</svg>
					</div>
					<div>Set Alert</div>
				</div>
				<div className='profile__name'>
					<div>
						<img
							src={`/images/avatars/${user.photoURL}.png`}
							alt='profile_picture'
						/>
					</div>
					<div>{user.displayName}</div>
					<button
						onClick={e => {
							e.preventDefault();
							firebase
								.auth()
								.signOut()
								.then(console.log('user logged out'));
							history.push(ROUTES.HOME);
						}}
					>
						Sign out
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeaderDashboard;
