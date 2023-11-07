import { useEffect, useState, React } from 'react';
import '../styles/SignUp.css';

import Close from '../images/times-circle-solid.svg';

const { jwtDecode } = require('jwt-decode');
export default function SignUp() {
	const [user, setUser] = useState({});
	const handleCallbackResponse = function (response) {
		var userObject = jwtDecode(response.credential);

		setUser(userObject);
		console.log(userObject);
	};

	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			client_id:
				'506919281725-6elvtkqshqv70g70vr00e2ctc04rm2j8.apps.googleusercontent.com',
			callback: handleCallbackResponse,
		});

		google.accounts.id.renderButton(document.getElementById('google-sign-in'), {
			theme: 'filled_blue',
			size: 'large',
			text: 'continue_with',
		});
	}, []);
	return (
		<div className='sign-up-container'>
			<div className='media-sign-up'>
				<div className='member'>
					Become a Member
					<img className='close-btn' src={Close} alt=''></img>
				</div>

				<div id='google-sign-in'></div>
			</div>
		</div>
	);
}
