import { useRef, useState } from 'react';
// import NavBar from '../components/NavBar.js';
import Signup from '../components/SignUp.js';
import Login from '../components/Login.js';
import Footer from '../components/Footer.js';
import '../styles/NavBar.css';

import '../styles/Home.css';
import Logo from '../images/logo.svg';
import LibertyVillage from '../images/home-libvillage.svg';
import Cabbagetown from '../images/home-cabbage.svg';
import Cityplace from '../images/home-cityplace.svg';
import MagnifyGlass from '../images/benefit1.svg';
import Envelope from '../images/benefit-2.svg';
import Clock from '../images/benefit-3.svg';
export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	// const openModal = () => {
	// 	setIsModalOpen(true);
	// };

	// const closeModal = () => {
	// 	setIsModalOpen(false);
	// };
	const openLoginModal = useRef();
	const openSignupModal = useRef();

	// Opens modal base on clicked targets innerHTML.
	const openModal = (data) => {
		if (data.target.innerHTML === 'Sign Up') {
			openSignupModal.current.showModal();
		}

		if (data.target.innerHTML === 'Log in') {
			openLoginModal.current.showModal();
		}
		console.log(data.target);
	};

	const closeModal = () => {
		openSignupModal.current.close();
		openLoginModal.current.close();
	};

	return (
		<>
			{/* MAKE SIGNUP WORK WITH NEW MODAL SYSTEM */}
			{isModalOpen}
			<Signup onRef={openSignupModal} onClose={closeModal} />
			<Login onRef={openLoginModal} onClose={closeModal} />
			<nav className='nav'>
				<img className='logo' src={Logo} alt='hh' />

				<ul className='font-size-30'>
					<li>
						<button onClick={openModal} className='dusk-btn'>
							Log in
						</button>
					</li>
					<li className='signup-btn'>
						<button onClick={openModal} className='iris-btn'>
							Sign Up
						</button>
					</li>
				</ul>
			</nav>
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
			<section className='section-1-container'>
				<h1 className='headline-60 headline font-size-60'>
					No longer known as TDOT or T.O., The 6ix has taken over
				</h1>
				<h5 className='sub-heading font-size-22'>
					Why is Toronto called the 6?
				</h5>
				<p className='headline-info font-size-16'>
					Before 1998, Toronto was a much smaller municipality and formed part
					of Metropolitan Toronto. When the city amalgamated that year, Toronto
					grew to encompass the former municipalities of York, East York, North
					York, Etobicoke, and Scarborough. Whether it's presented as the 6, the
					6ix or the Six, Toronto is now called the 6, much to the chagrin of
					about 98% of Torontonians. Toronto is called the 6 thanks to Forest
					Hill 'hood rapper Drake, who refers to his hometown as the 6 when he
					named his album, Views from the 6.
				</p>
			</section>
			<div className='heading-2-wrapper'>
				<h1 className='headline-60 font-size-60'>
					Start your search now to find your next rental in the 6ix!
				</h1>
			</div>
			<div className='section-2-container'>
				<h1 className='headline-60 font-size-60'>
					Check out some of our member's preferred neighborhoods!
				</h1>
				<div className='grid-container'>
					<div>
						<h1 className='neighborhood font-size-22'>Liberty Village</h1>
						<p className='headline-info font-size-16'>
							Its location is considered one of its finest assets being a
							10-minute walk to the Lakeshore, 15-minute streetcar ride to the
							financial core and a 20-minute walk from the
							entertainment/fashion/gallery districts of King St. West.
						</p>{' '}
						<p className='headline-info font-size-16'>
							Over 20 new restaurants have opened in the past 3 years, providing
							the residents and workers in the community with many eclectic
							places to dine and enjoy their developing neighborhood.
						</p>{' '}
						<p className='headline-info font-size-16'>
							{' '}
							<p className='headline-info font-size-16'>
								Many Canadian and US design and technology firms have located to
								Liberty Village, creating many jobs for the increasing number of
								citizens that have moved into the growing neighborhood.
							</p>
						</p>
					</div>
					<img src={LibertyVillage} alt='Liberty Village Condos' />

					<img src={Cabbagetown} alt='Cabbagetown homes' />
					<div>
						<h1 className='neighborhood font-size-22'>Cabbage Town</h1>
						<p className='headline-info font-size-16'>
							Cabbagetown is one of Toronto's most popular neighborhoods. Its
							residents come from a wide variety of backgrounds, however they
							all share a strong sense of community spirit and pride in their
							neighborhood.
						</p>{' '}
						<p className='headline-info font-size-16'>
							{' '}
							This community spirit is put on display every September during the
							Cabbagetown Fall Festival that runs for an entire weekend and
							features a mini marathon, historical walking tours, a parade and a
							community wide yard sale.
						</p>{' '}
						<p className='headline-info font-size-16'>
							The neighborhood is home to many artists, musicians, journalists
							and writers. Other residents include professors, doctors and
							social workers, many affiliated with the nearby University of
							Toronto. Proximity to the financial district and downtown core
							have also made the area popular.
						</p>
					</div>
					<div>
						<h1 className='neighborhood font-size-22'>Cityplace</h1>
						<p className='headline-info font-size-16'>
							Professional singles and couples are flocking to CityPlace, one of
							Toronto's newest neighborhoods. CityPlace is a master planned
							community situated on 45 acres of prime downtown Toronto real
							estate. CityPlace encompasses 5.4 million square feet of
							residential and commercial space making this one of the highest
							density neighborhoods in Toronto. Residents enjoy a commute free
							live, work and play lifestyle.
						</p>{' '}
						<p className='headline-info font-size-16'>
							{' '}
							At the heart of this urban development is Artspace, an outdoor
							public art gallery featuring installations and sculptures
							dispersed throughout the neighborhood. The focal point of the
							neighborhood is Canoe Landing Park, an 8 acre park dotted with a
							myriad of art installations.
						</p>
					</div>
					<img src={Cityplace} alt='Cityplace Skyline' />
				</div>
				<h1 className='headline-60 font-size-60'>
					Why our members loving Loving In The 6ix
				</h1>

				<div className='info-icons'>
					<div>
						<img src={MagnifyGlass} alt='d' />
						<p className='font-size-22'>Search the city's hottest listing</p>
					</div>
					<div>
						<img src={Envelope} alt='d' />
						<p className='font-size-22'>
							Contact the owner with a single click{' '}
						</p>
					</div>
					<div>
						<img src={Clock} alt='d' />
						<p className='font-size-22'>Save time and get what you want</p>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
