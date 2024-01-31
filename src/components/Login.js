import React from 'react';
import GoogleAuth from './GoogleAuth.js';
import FacebookAuth from './FacebookAuth.js';
import Wave from '../images/wave2.svg';
import CloseBtn from '../images/times-circle-solid.svg';
import '../styles/Login.css';

export default function Login({ onRef, onOpen, onClose }) {
	return (
		// <div className='modal-login'>
		<dialog ref={onRef} className='login-container'>
			<div onClick={onClose} className='modal-overlay'></div>

			<div className='z-index-20'>
				<div className='header '>
					<img src={Wave} alt='' className='bg-img' />
					<img src={Wave} alt='' className='bg-img2' />
					<div className='grid-header'>
						<p className='member font-size-22'>Login to your account</p>

						<img
							className='close-btn'
							onClick={onClose}
							src={CloseBtn}
							alt=''
						/>
					</div>
				</div>
				<div className='login-wrapper'>
					<div className='media-sign-up'>
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
							<div className='not-member align-items-center '>
								<p className='required font-size-14'>Not a member?</p>
								<p className='required font-size-14'>Sign Up</p>
							</div>
							<div className='forgot-password  '>
								<p className='required font-size-14'>Forgot password?</p>
								<p className='required font-size-14'>Recovery</p>
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
