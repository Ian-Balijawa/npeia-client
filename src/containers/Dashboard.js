import React from 'react';
import Sidebar from '../components/Sidebar';
import ContentArea from './ContentArea';

export default function DashboardContainer() {
	const photoURL = Math.floor(Math.random(5) + 1);
	const handleSearch = e => {
		e.preventDefault();
		return null;
	};
	return (
		<div className='dashboard__container'>
			<Sidebar isAdmin={true} displayName=' Napeia' photoURL={photoURL} />
			<ContentArea
				photoURL={photoURL}
				displayName={' Napeia'}
				handleSearch={handleSearch}
			/>
		</div>
	);
}
