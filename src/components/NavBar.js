import React from 'react';
import '../styles/NavBar.css';
import Logo from '../images/logo.svg';

export default function NavBar() {
	return (
		<div>
			<nav className='nav'>
				<img className='logo' src={Logo} alt='hh' />

				<ul className='font-size-30'>
					<li>
						<button className='dusk-btn'>Log in</button>
					</li>
					<li className='signup-btn'>
						<button className='iris-btn'>Sign Up</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}
