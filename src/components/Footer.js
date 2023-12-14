import React from 'react';
import '../styles/Footer.css';
import Twitter from '../images/twitter_sml.svg';
import Facebook from '../images/facebook_sml.svg';
import Insta from '../images/instagram_icon.svg';

export default function Footer() {
	return (
		<div className='footer-container'>
			<div className='stay-connected'>
				<h5 className='font-size-22'> Stay Connected</h5>
				<p className='font-size-14'>
					Get social and stay up to date with all the newest listings!
				</p>
				<div className='media-links'>
					<img src={Twitter} alt='' />
					<img src={Facebook} alt='' />
					<img src={Insta} alt='' />
				</div>
			</div>{' '}
			<div className='subscribe'>
				<h5 className='font-size-22'>Subscribe</h5>
				<p className='font-size-14'>
					Receive tips, neighborhood guides, and general information to renting
					in the city.
				</p>
				<form action='' className=''>
					<input type='text' />
					<button className='iris-btn font-size-10'>Subscribe</button>
				</form>
				<div className='contact'>
					<p >Contact</p>
					<p>Terms</p>
					<p>Private Policy</p>
				</div>
			</div>
		</div>
	);
}
