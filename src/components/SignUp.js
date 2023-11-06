import React from 'react';
import '../styles/SignUp.css';
import Close from '../images/times-circle-solid.svg';

export default function SignUp() {
	return (
		<div className='sign-up-container'>
			<div className='media-sign-up'>
				<div className='member'>
					Become a Member<img className='close-btn' src={Close}></img>
				</div>
			</div>
		</div>
	);
}
