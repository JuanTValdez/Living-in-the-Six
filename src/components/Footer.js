import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
	return (
		<div className='footer-container'>
			<div className='stay-connected'>
				<h5> Stay Connected</h5>
				<p>Get social and stay up to date with all the newest listings!</p>
			</div>{' '}
			<div className='subscribe'>
				<h5>Subscribe</h5>
				<p>
					Receive tips, neighbourhood guides, and general information to renting
					in the city.
				</p>
			</div>
		</div>
	);
}
