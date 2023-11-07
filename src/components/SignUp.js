import { useEffect, React } from 'react';
import '../styles/SignUp.css';

import Close from '../images/times-circle-solid.svg';

const { jwtDecode } = require('jwt-decode');
export default function SignUp() {
	// const handleCallbackResponse = function (response) {
	// 	var userObject = jwt_decode(response.credential);
	// 	console.log(userObject);
	// };

	function handleCallbackResponse(response) {
		var userObject = jwtDecode(response.credential);
		console.log(userObject);
	}

	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			client_id:
				'506919281725-6elvtkqshqv70g70vr00e2ctc04rm2j8.apps.googleusercontent.com',
			callback: handleCallbackResponse,
		});

		google.accounts.id.renderButton(document.getElementById('google-sign-in'), {
			theme: 'outline',
			size: 'large',
		});
	}, []);
	return (
		<div className='sign-up-container'>
			<div className='media-sign-up'>
				<div className='member'>
					Become a Member
					<img className='close-btn' src={Close} alt='Close'></img>
				</div>

				<div id='google-sign-in'></div>
			</div>
		</div>
	);
}
