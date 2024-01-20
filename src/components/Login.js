import React, { useRef } from 'react';
import GoogleAuth from './GoogleAuth.js';
import FacebookAuth from './FacebookAuth.js';
import '../styles/Login.css';

export default function Login({ onRef, onOpen, onClose }) {
	return (
		<div className='modal-login'>
			{/* <div className='modal-overlay'></div> */}
			<button onClick={onOpen} className='font-size-22'>
				open modal
			</button>

			<dialog ref={onRef} className='login-container'>
				<button onClick={onClose} className='font-size-22'>
					close modal
				</button>
				<div className='font-size-30'>MODAL MODAL MODAL</div>
				<div className='media-login'>
					<GoogleAuth /> <FacebookAuth />
				</div>
			</dialog>
		</div>
	);
}
