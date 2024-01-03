import React from 'react';
import '../styles/Settings.css';

export default function AccountSettings() {
	return (
		<div className='settings-container'>
			<form className='dropdown-settings' action=''>
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

			<div className='options'>
				<p className='font-size-10'>Account</p>
				<p className='font-size-10'>|</p>
				<p className='font-size-10'>Saved Listings</p>
			</div>

			<h1 className='settings-headline-60 font-size-60'>Account settings</h1>
			<section>
				<div>
					<h4 className='info font-size-22'>Personal Information</h4>

					<div className='flex-col'>
						<label htmlFor='name'>Name</label>
						<input
							placeholder='John Smith'
							type='text'
							id='name'
							value='name'
						/>
					</div>
				</div>
				<div className='flex-col'>
					<label htmlFor=''>Phone</label>
					<input placeholder='555-1018' type='text' />
				</div>
				<div className='flex-col'>
					<label htmlFor=''>Email</label>
					<input placeholder='john.smith@gmail.com' type='text' />
				</div>
				<div>
					<section>
						<h4 className='info font-size-22'>Change Password</h4>
						<div className='flex-col'>
							<label htmlFor=''>Current Password</label>

							<input type='text' />
						</div>
						<div className='flex-col'>
							<label htmlFor=''>New Password</label>

							<input type='text' />
						</div>
						<div className='flex-col'>
							<label htmlFor=''>Repeat New Password</label>
							<input type='text' />
						</div>
					</section>
				</div>
			</section>

			{/* <section>
				<h4>Change Password</h4>
				<div className='flex-col'>
					<label htmlFor=''>Current Password</label>
					<input type='text' />
				</div>
				<div className='flex-col'>
					<label htmlFor=''>New Password</label>
					<input type='text' />
				</div>
				<div className='flex-col'>
					<label htmlFor=''>Repeat New Password</label>
					<input type='text' />
				</div>
			</section> */}
		</div>
	);
}
