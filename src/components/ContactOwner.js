import React from 'react';
import '../styles/ContactOwner.css';

export default function ContactOwner() {
	return (
		<div className='contact-form'>
			<h1 className='owner-title font-size-22'>Contact Owner</h1>
			<form action=''>
				<input className='contact-input' placeholder='Name * ' type='text' />
				<input className='contact-input' placeholder='Phone *' type='text' />
				<input className='contact-input' placeholder='Email *' type='text' />
				<textarea
					className='contact-input lrg-input'
					placeholder="Hi, i'd like to schedule a visit to your rental property. Please let me know when the best date and time would be. Thank you!t"
					type='text'
				/>
			</form>
			<p className='font-size-12 align-right'>* required fields</p>
			<div className='btn-wrapper'>
				<button className='dusk-btn font-size-12 gotham-bold'>CANCEL</button>
				<button className='iris-btn font-size-12 gotham-bold'>SEND</button>
			</div>
		</div>
	);
}
