import React from 'react';
import NavBar from '../components/NavBar.js';
import '../styles/Home.css';

export default function Home() {
	return (
		<>
			<NavBar />
			<div className='gradient'>
				<div className='container'>
					<h1>Find your way home</h1>
					<p>
						Looking for a new apartment in Toronto can be a hassle, but using
						our website can make your search a lot easier and faster!
					</p>
					<form className='flex-col'>
						<select value='hoods' required>
							<option value='' disabled selected hidden>
								Select your hood
							</option>
							<option value=''>My Hood</option>
							<option value=''>Your Hood</option>
							<option value=''>Their Hood</option>
						</select>
						<select type='dropdown' />
						<select type='dropdown' />
						<button>Search</button>
					</form>
				</div>
			</div>
		</>
	);
}
