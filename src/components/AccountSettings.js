import React from 'react';
import '../styles/AccountSettings.css';

export default function AccountSettings() {
	return (
		<div className='settings-container'>
			<form action=''>
				<select name='' id=''>
					<option className= value=''>Select your 'hood'</option>
				</select>
				<select name='' id=''>
					<option value=''>Price range</option>
				</select>
				<select name='' id=''>
					<option value=''>Number of Bedrooms</option>
				</select>
				<button className='iris-btn font-size-10'>Search</button>
			</form>
		</div>
	);
}
