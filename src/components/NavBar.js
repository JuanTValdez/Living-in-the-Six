import React from 'react';
import '../styles/NavBar.css';

export default function NavBar() {
	
	return (
		<div>
			<nav className='nav'>
				<div className='logo'>
					<p className='font-size-16'>LIVING</p>
					<p className='font-size-16'>IN THE</p>
					<p className='font-size-35 six'>6IX</p>
				</div>
				<ul className='font-size-30'>
					<li className='login-btn'>
						Login
					</li>
					<li className='signup-btn'>Signup</li>
				</ul>
			</nav>

			<div className='test-block'></div>
		</div>
	);
}
