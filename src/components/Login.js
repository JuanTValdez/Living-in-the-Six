import React from 'react';
import GoogleAuth from './GoogleAuth.js';
import FacebookAuth from './FacebookAuth.js';
import '../styles/Login.css';

export default function Login() {
	return (
		<div className='modal-login'>
			<div className='modal-overlay'></div>
			<button className='font-size-22'>open modal</button>
			<button className='font-size-22'>close modal</button>
			<dialog data-modal className='login-container'>
				<div className='font-size-30'>MODAL MODAL MODAL</div>
				<div className='media-login'>
					<GoogleAuth /> <FacebookAuth />
				</div>
			</dialog>
		</div>
	);
}
