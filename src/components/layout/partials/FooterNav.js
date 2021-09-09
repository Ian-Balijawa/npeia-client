import React from 'react';
import classNames from 'classnames';

const FooterNav = ({ className, ...props }) => {
	const classes = classNames('footer-nav', className);

	return (
		<nav {...props} className={classes}>
			<ul className='list-reset'>
				<h5>Contact Us</h5>
				<li>privateschools@npeia.com</li> <br />
				<li>P.O.BOX 14072, Mengo KAMPALA</li> <br />
				<li>+256751455918 / 0774650033/ 0772888739 </li>
			</ul>
		</nav>
	);
};

export default FooterNav;
