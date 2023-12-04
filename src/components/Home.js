import React from 'react';
import NavBar from '../components/NavBar.js';
import '../styles/Home.css';

export default function Home() {
	return (
		<>
			<NavBar />
			<div className='gradient'>
				<div className='form-container'>
					<h1 className='font-size-60'>Find your way home</h1>
					<p className='font-size-16'>
						Looking for a new apartment in Toronto can be a hassle, but using
						our website can make your search a lot easier and faster!
					</p>
					<form className='flex-col homepage-form'>
						<select className='dropdown font-size-13' value='hoods' required>
							<option value='change' disabled selected hidden>
								Select your hood
							</option>
							<option className='font-size-13' value=''>
								My 'Hood'
							</option>
							<option className='font-size-13' value=''>
								Your Hood
							</option>
							<option className='font-size-13' value=''>
								Their Hood
							</option>
						</select>
						<select className='dropdown font-size-13' type='dropdown'>
							<option
								className='font-size-13'
								value='change'
								disabled
								selected
								hidden>
								Price
							</option>
						</select>{' '}
						<select className='dropdown font-size-13' type='dropdown'>
							<option
								className='font-size-13'
								value='change'
								disabled
								selected
								hidden>
								Number of bedrooms
							</option>
						</select>
						<button className='iris-btn font-size-10'>Search</button>
					</form>
				</div>
			</div>
		</>
	);
}
