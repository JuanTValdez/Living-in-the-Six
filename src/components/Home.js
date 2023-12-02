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
					<p classname='font-size-16'>
						Looking for a new apartment in Toronto can be a hassle, but using
						our website can make your search a lot easier and faster!
					</p>
					<form className='flex-col homepage-form'>
						<select className='dropdown' value='hoods' required>
							<option value='' disabled selected hidden>
								Select your hood
							</option>
							<option value=''>My Hood</option>
							<option value=''>Your Hood</option>
							<option value=''>Their Hood</option>
						</select>
						<select className='dropdown' type='dropdown' />
						<select className='dropdown' type='dropdown' />
						<button>Search</button>
					</form>
				</div>
			</div>
		</>
	);
}
