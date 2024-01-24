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
				<div className='font-size-30'>MODAL MODAL MODAL</div>
				<div className='media-login'>
					<GoogleAuth /> <FacebookAuth />
				</div>
			</div>
		</dialog>
		// </div>
	);
}
