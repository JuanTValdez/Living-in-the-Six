import React from 'react';
import GoogleAuth from './GoogleAuth.js';
import FacebookAuth from './FacebookAuth.js';
import CloseBtn from '../images/times-circle-solid.svg';
import '../styles/Login.css';

export default function Login({ onRef, onOpen, onClose }) {
	return (
		// <div className='modal-login'>
		<dialog ref={onRef} className='login-container'>
			<div onClick={onClose} className='modal-overlay'></div>

			<div className='z-index-20'>
				<img
					src={CloseBtn}
					onClick={onClose}
					className='close-btn font-size-22'
					alt=''></img>
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
							<div className='not-member align-items-center'>
								<p className='font-size-14'>Not a member?</p>
								<p className='font-size-14'>Sign Up</p>
							</div>
							<div className='forgot-password align-items-center'>
								<p className=' font-size-14'>Forgot password?</p>
								<p className='font-size-14'>Recovery</p>
								<button className='iris-btn font-size-10'>Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</dialog>
		// </div>
	);
}
