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
				<input
					className='contact-input lrg-input'
					placeholder="Hi, i'd like to schedule a visit to your rental property. Please let me know when the best date and time would be. Thank you!"
					type='text'
				/>
			</form>
		</div>
	);
}