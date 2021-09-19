import React from 'react';

const Pagination = props => {
	return (
		<div className='pagination__container'>
			<p>Available Schools</p>
			<div className='pagination-btns'>
				<button className='btn-all'>All</button>
				<div className='btn-group'>
					<button>Recent</button>
					<button>Top</button>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
