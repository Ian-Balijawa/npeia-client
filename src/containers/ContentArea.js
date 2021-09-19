import React from 'react';
import HeaderDashboard from '../components/HeaderDashboard';
import PaginationContainer from './Pagination';

export default function ContentArea(props) {
	const { displayName, photoURL } = props;
	return (
		<div className='content-area__container'>
			<HeaderDashboard displayName={displayName} photoURL={photoURL} />
			<PaginationContainer />
		</div>
	);
}
