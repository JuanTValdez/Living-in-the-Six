import React from 'react';
import '../styles/NavBar.css';

export default function NavBar() {
	return (
		<nav className="nav">
			<div className='logo'>Living in the 6ix</div>
			<ul >
				<li className='login-btn'>Login</li>
				<li className="signup-btn">Signup</li>
			</ul>
		</nav>
	);
}
