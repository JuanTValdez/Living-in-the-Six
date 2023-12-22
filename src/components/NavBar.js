import React from 'react';
import '../styles/NavBar.css';
import Logo from '../images/logo.svg';

export default function NavBar() {
	return (
		<div>
			<nav className='nav'>
				<div className='logo'>
					<img src={Logo} alt='hh' />
				</div>
				{/* <div className='logo'>
					<p className='font-size-16'>LIVING</p>
					<p className='font-size-16'>IN THE</p>
					<p className='font-size-35 six'>6IX</p>
				</div> */}
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
