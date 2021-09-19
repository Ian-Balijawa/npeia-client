import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import './playground.css';

const Playground = props => {
	const { photo, username } = props;
	const [toggle, setToggle] = useState(false);

	return (
		<>
			<div
				className='sidebar__container__close'
				onClick={() => setToggle(toggle => !toggle)}
			>
				{toggle ? (
					<img src='/images/icons/hambargar-open.png' alt='' />
				) : (
					<img src='/images/icons/hambargar-close.png' alt='' />
				)}
			</div>
			<div
				className={`sidebar__container ${toggle && 'sidebar__hidden'}`}
			>
				<div className={`sidebar__profile`}>
					<div className='sidebar__profile__pic'>
						<img
							src={photo || `/images/avatars/2.png`}
							alt='profile pricture'
						/>
					</div>
					<div className='sidebar__profile__meta'>
						<p>{`Welcome ${username || 'Essie'}`}</p>
						<p>Super Admin</p>
					</div>
				</div>
				<nav>
					<Link to={ROUTES.HOME}>
						<li> Overview</li>
					</Link>
					<Link to={ROUTES.HOME}>
						<li> Projects</li>
					</Link>
					<Link to={ROUTES.HOME}>
						<li> Meeting</li>
					</Link>
					<Link to={ROUTES.HOME}>
						<li>Message</li>
					</Link>
					<Link to={ROUTES.HOME}>
						<li>Customers</li>
					</Link>
					<Link to={ROUTES.HOME}>
						<li>Ticket</li>
					</Link>
					<Link to={ROUTES.HOME}>
						<li>Profile</li>
					</Link>
				</nav>
			</div>
		</>
	);
};

export default Playground;
