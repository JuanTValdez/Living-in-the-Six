// import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.js';
import '../styles/Home.css';

export default function Home() {
	// const [data, setData] = useState();
	// const options = {
	// 	method: 'GET',
	// 	headers: {
	// 		accept: 'application/json',
	// 		'REPLIERS-API-KEY': 'REPLIERS-API-KEY: pNWk2VQ5bGdSk1uHUC2lFOL2cdd6T6',
	// 	},
	// };

	// useEffect(() => {
	// 		fetch('https://sandbox.repliers.io/listings/deleted', options)
	// 		.then((response) => response.json())
	// 		.then((response) => console.log('RESPONSE: ', response))
	// 		.catch((err) => console.error(err));
	// }, []);

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
			<h1 className='headline font-size-60'>
				No longer known as TDOT or T.O., The 6ix has taken over
			</h1>
			<h5 className='sub-heading'>Why is Toronto called the 6</h5>
			<p className='headline-info'>
				Before 1998, Toronto was a much smaller municipality and formed part of
				Metropolitan Toronto. When the city amalgamated that year, Toronto grew
				to encompass the former municipalities of York, East York, North York,
				Etobicoke, and Scarborough. Whether it's presented as the 6, the 6ix or
				the Six, Toronto is now called the 6, much to the chagrin of about 98%
				of Torontonians. Toronto is called the 6 thanks to Forest Hill 'hood
				rapper Drake, who refers to his hometown as the 6 when he named his
				album, Views from the 6.
			</p>
		</>
	);
}
