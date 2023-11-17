import { React } from 'react';
import GoogleAuth from './GoogleAuth.js';

import '../styles/SignUp.css';

import Close from '../images/times-circle-solid.svg';

export default function SignUp() {
	return (
		<div className='sign-up-container'>
			<div className='member'>
				Become a Member
				<img className='close-btn' src={Close} alt=''></img>
			</div>
			<div className='media-sign-up'>
				<GoogleAuth />
				
			</div>
		</div>
	);
}
