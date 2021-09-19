import React from 'react';

const HeaderDashboard = props => {
	const { displayName, photoURL, handleSearch } = props;
	return (
		<div className='header-dashboard__container'>
			<div className='input-logo'>
				<img src='/images/icons/logo192.png' alt='logo' />
				<input
					type='text'
					name='search'
					id=''
					placeholder='Search'
					handleSearch={handleSearch}
				/>
			</div>
			<div className='header-dashboard__profile'>
				<img
					src={`/images/avatars/${photoURL}.png`}
					alt='profile picture'
				/>
				<p> {displayName || ' User'}</p>
				<button>Sign out</button>
			</div>
		</div>
	);
};

export default HeaderDashboard;
