import React from 'react';
import GoogleAuth from './GoogleAuth.js';
import FacebookAuth from './FacebookAuth.js';

export default function Login({ onRef, onOpen, onClose }) {
	return (
		<dialog ref={onRef} className='modal-login'>
			<dialog ref={onRef} className='login-container'>
				<div onClick={onClose} className='modal-overlay'></div>
				<button onClick={onClose} className='font-size-22'>
					close modal
				</button>
				<div className='font-size-30'>MODAL MODAL MODAL</div>
				<div className='media-login'>
					<GoogleAuth /> <FacebookAuth />
				</div>
			</dialog>
		</dialog>
	);
}
