import React, { useRef } from 'react';
import GoogleAuth from './GoogleAuth.js';
import FacebookAuth from './FacebookAuth.js';
import '../styles/Login.css';

export default function Login() {
	const openedModal = useRef();
	

	const openModal = () => {
		openedModal.current.showModal();
	};

	const closeModal = () => {
		
		openedModal.current.close();
	};

	return (
		<div className='modal-login'>
			{/* <div className='modal-overlay'></div> */}
			<button onClick={openModal} className='font-size-22'>
				open modal
			</button>

			<dialog ref={openedModal} className='login-container'>
				<button onClick={closeModal} className='font-size-22'>
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
