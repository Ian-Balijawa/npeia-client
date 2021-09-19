import React from 'react';
import classNames from 'classnames';
import './sidebar.css';

export default function Sidebar(props) {
	const { displayName, isAdmin, photoURL } = props;
	const classes = classNames('sidebar__container');

	return (
		<div className={classes}>
			<div className='sidebar__profile'>
				<div className='image__container'>
					<img
						src={`/images/avatars/${photoURL}.png`}
						alt='profile pic'
					/>
				</div>
				<p>Welcome{displayName}</p>
				<p>{isAdmin && 'Super Admin'}</p>
			</div>
			<ul>
				<li>list item</li>
				<li>list item </li>
				<li>list item</li>
				<li>list item</li>
			</ul>
		</div>
	);
}
