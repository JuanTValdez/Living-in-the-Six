import { React } from 'react';
import GoogleAuth from './GoogleAuth.js';
import FacebookAuth from './FacebookAuth.js';

import '../styles/SignUp.css';

import Close from '../images/times-circle-solid.svg';

export default function SignUp() {
	return (
		<div className='sign-up-container'>
			<div className='header '>
				<p className='member font-size-22'>Become a Member</p>
				<img className='close-btn' src={Close} alt=''></img>
			</div>

			<div className='media-sign-up'>
				<GoogleAuth />
				<FacebookAuth />
			</div>

			<div className='underline'></div>
			<p className='form-header font-size-18'>Continue with Email</p>
			<form className='sign-up-form'>
				<input type='text' />
				<input type='text' />
				<input type='text' />
				<input type='text' />
				<input type='text' />
			</form>
		</div>
	);
}
