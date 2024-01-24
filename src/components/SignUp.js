import { React, useRef } from 'react';
import GoogleAuth from './GoogleAuth.js';
import FacebookAuth from './FacebookAuth.js';
import Wave from '../images/wave2.svg';

import '../styles/SignUp.css';

import Close from '../images/times-circle-solid.svg';

export default function SignUp({ onRef, isOpen, onClose }) {
	return (
		// <dialog open>

		<dialog onRef={} className='sign-up-container '>
			<div className='modal-close-overlay'></div>

			<div className='header '>
				<img src={Wave} alt='' className='bg-img' />
				<img src={Wave} alt='' className='bg-img2' />
				<div className='grid-header'>
					<p className='member font-size-22'>Become a Member</p>

					<img className='close-btn' src={Close} alt='' />
				</div>
			</div>

			<div className='media-sign-up'>
				<GoogleAuth />
				<FacebookAuth />
			</div>
			<div className='underline'></div>
			<p className='form-header font-size-18'>Continue with Email</p>
			<form className='sign-up-form' method='GET'>
				<input className='input-style' placeholder='Name *' type='text' />
				<input className='input-style' placeholder='Phone *' type='text' />
				<input
					className='input-style full-length'
					placeholder='Email *'
					type='text'
				/>
				<input className='input-style' placeholder='Password *' type='text' />
				<input
					className='input-style'
					placeholder='Repeat Password *'
					type='text'
				/>

				<h5 className='required full-length font-size-10 align-right'>
					* required fields
				</h5>

				<label className='required font-size-14' htmlFor=''>
					I'm a*
				</label>

				<div className='align-item-baseline'>
					<input type='radio' name='tenant-type' />
					<label
						className='radio-label required font-size-14 '
						htmlFor='Renter'>
						Renter
					</label>

					<input type='radio' name='tenant-type' />
					<label className='radio-label required font-size-14' htmlFor='Renter'>
						Landlord
					</label>
				</div>
			</form>

			<div className='have-account'>
				<div>
					<span className='required font-size-14'>
						Already have an account?
					</span>{' '}
					<a
						style={{
							fontWeight: 'bold',
							color: '#6363b7',
							letterSpacing: '2px',
							lineHeight: '3.6px',
						}}
						className='gotham-book font-size-10'
						href='localhost:3000'>
						LOGIN
					</a>{' '}
				</div>
				<button className='register gotham-book font-size-10'>REGISTER</button>
			</div>

			{/* <dialog open className='sign-up-container '>
				 <div className='modal-close-overlay'></div> 
				<div className='header '>
					<img src={Wave} alt='' className='bg-img' />
					<img src={Wave} alt='' className='bg-img2' />
					<div className='grid-header'>
						<p className='member font-size-22'>Become a Member</p>
						
						<img className='close-btn' src={Close} alt='' />
					</div>
				</div>
				<div className='media-sign-up'>
					<GoogleAuth />
					<FacebookAuth />
				</div>
				<div className='underline'></div>
				<p className='form-header font-size-18'>Continue with Email</p>
				<form className='sign-up-form' method='GET'>
					<input className='input-style' placeholder='Name *' type='text' />
					<input className='input-style' placeholder='Phone *' type='text' />
					<input
						className='input-style full-length'
						placeholder='Email *'
						type='text'
					/>
					<input className='input-style' placeholder='Password *' type='text' />
					<input
						className='input-style'
						placeholder='Repeat Password *'
						type='text'
					/>

					<h5 className='required full-length font-size-10 align-right'>
						* required fields
					</h5>

					<label className='required font-size-14' htmlFor=''>
						I'm a*
					</label>

					<div className='align-item-baseline'>
						<input type='radio' name='tenant-type' />
						<label
							className='radio-label required font-size-14 '
							htmlFor='Renter'>
							Renter
						</label>

						<input type='radio' name='tenant-type' />
						<label
							className='radio-label required font-size-14'
							htmlFor='Renter'>
							Landlord
						</label>
					</div>
				</form>
				<div className='have-account'>
					<div>
						<span className='required font-size-14'>
							Already have an account?
						</span>{' '}
						<a
							style={{
								fontWeight: 'bold',
								color: '#6363b7',
								letterSpacing: '2px',
								lineHeight: '3.6px',
							}}
							className='gotham-book font-size-10'
							href='localhost:3000'>
							LOGIN
						</a>{' '}
					</div>
					<button className='register gotham-book font-size-10'>
						REGISTER
					</button>
				</div> 
			</dialog> */}
		</dialog>
	);
}
