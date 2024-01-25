import React from 'react';
import GoogleAuth from './GoogleAuth.js';
import FacebookAuth from './FacebookAuth.js';
import '../styles/Login.css';

export default function Login({ onRef, onOpen, onClose }) {
	return (
		// <div className='modal-login'>
		<dialog ref={onRef} className='login-container'>
			<div onClick={onClose} className='modal-overlay'></div>

			<div className='z-index-20'>
				<button onClick={onClose} className='font-size-22'>
					close modal
				</button>
				<div className='login-wrapper'>
					<div className='oath-logins'>
						<GoogleAuth />
						<FacebookAuth />
					</div>
					<div className='form-login'>
						<p
							className='form-header font-size-18
				'>
							Continue with Email
						</p>

						<form className='sign-up-form' method='GET'>
							<input
								className='input-style'
								placeholder='Email *'
								type='text'
							/>
							<input
								className='input-style'
								placeholder='Password *'
								type='text'
							/>

							<h5 className='required full-length font-size-10 align-right'>
								* required fields
							</h5>
						</form>
					</div>
				</div>
			</div>
		</dialog>
		// </div>
	);
}
