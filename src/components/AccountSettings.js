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
		</div>
	);
}
