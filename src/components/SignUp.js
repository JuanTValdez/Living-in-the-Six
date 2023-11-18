import { React } from 'react';
import GoogleAuth from './GoogleAuth.js';
import FacebookAuth from './FacebookAuth.js';
import Wave from '../images/wave2.svg'

import '../styles/SignUp.css';

import Close from '../images/times-circle-solid.svg';

export default function SignUp() {
	return (
		<div className='sign-up-container'>
			<div className='header '>
				<img src={Wave} alt='' className='bg-img' />
				<img src={Wave} alt='' className='bg-img2' />
				<div className='grid-header'>
					<p className='member font-size-22'>Become a Member</p>
					<img className='close-btn' src={Close} alt=''></img>
				</div>
			</div>

			<div className='media-sign-up'>
				<GoogleAuth />
				<FacebookAuth />
			</div>

			<div className='underline'></div>
			<p className='form-header font-size-18'>Continue with Email</p>
			<form className='sign-up-form'>
				<input placeholder='Name *' type='text' />
				<input placeholder='Phone *' type='text' />
				<input placeholder='Email *' type='text' />
				<input placeholder='Password *' type='text' />
				<input placeholder='Repeat Password *' type='text' />
			</form>
		</div>
	);
}
