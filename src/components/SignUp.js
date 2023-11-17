import { React } from 'react';
import GoogleAuth from './GoogleAuth.js';
import FacebookAuth from './FacebookAuth.js';

import '../styles/SignUp.css';

import Close from '../images/times-circle-solid.svg';

export default function SignUp() {
	return (
		<div className='sign-up-container'>
			<div className='header font-size-22'>
				<p className='member'>Become a Member</p>
				<img className='close-btn' src={Close} alt=''></img>
			</div>
			
			<div className='media-sign-up'>
				<GoogleAuth />
				<FacebookAuth />
			</div>
		</div>
	);
}
