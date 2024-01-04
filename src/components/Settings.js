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
				<h4 className='info font-size-22'>Personal Information</h4>
				<div className='flex-row-g20'>
					<div className=' flex-col'>
						<label htmlFor=''>NAME</label>
						<input className='input-1' placeholder='John Smith' type='text' />
					</div>

					<div className='flex-col'>
						<label htmlFor=''>PHONE</label>
						<input className='input-1' placeholder='555-1018' type='text' />
					</div>
					<div className='flex-col'>
						<label htmlFor=''>EMAIL</label>
						<input
							className='input-1'
							placeholder='john.smith@gmail.com'
							type='text'
						/>
					</div>
				</div>

				<form>
					<h4 className='info font-size-22'>Change Password</h4>
					<div className='flex-row-g20'>
						<div className='flex-col'>
							<label htmlFor=''>CURRENT PASSWORD</label>

							<input className='input-1' type='text' />
						</div>
						<div className=' flex-col'>
							<label htmlFor=''>NEW PASSWORD</label>

							<input className='input-1' type='text' />
						</div>
						<div className=' flex-col'>
							<label htmlFor=''>REPEAT NEW PASSWORD</label>
							<input className='input-1' type='text' />
						</div>
					</div>

					<div className='btn-wrapper'>
						<button className='dusk-btn font-size-10'>CANCEL</button>
						<button className='iris-btn font-size-10'>UPDATE</button>
					</div>
				</form>
			</section>
		</div>
	);
}
