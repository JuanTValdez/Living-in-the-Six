import React from 'react';
import '../styles/AccountSettings.css';

export default function AccountSettings() {
	return (
		<div className='settings-container'>
			<form action=''>
				<select className='dropdown font-size-13' name='' id=''>
					<option className='font-size-13' value=''>
						Select your 'hood'
					</option>
				</select>
				<select className='dropdown font-size-13' name='' id=''>
					<option className='font-size-13' value=''>
						Price range
					</option>
				</select>
				<select className='dropdown font-size-13' name='' id=''>
					<option className='font-size-13' value=''>
						Number of Bedrooms
					</option>
				</select>
				<button className='iris-btn font-size-10'>Search</button>
			</form>
			<h6>Account</h6>
			<h6>|</h6>
			<h6>Saved Listings</h6>
			<h1>Account settings</h1>
			<section>
				<h4>Personal Information</h4>
				<label htmlFor=''>Name</label>
				<input placeholder='John Smith' type='text' />
				<label htmlFor=''>Phone</label>
				<input placeholder='555-1018' type='text' />
				<label htmlFor=''></label>
				<input placeholder='jonh.smith@gmail.com' type='text' />
			</section>
		</div>
	);
}
