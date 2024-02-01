import { useEffect, useState, React } from 'react';
const { jwtDecode } = require('jwt-decode');

export default function GoogleAuth() {
	const [user, setUser] = useState({});

	const handleCallbackResponse = function (response) {
		var userObject = jwtDecode(response.credential);

		setUser(userObject);
		console.log('Google Response: ', user);
	};

	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			client_id:
				'506919281725-6elvtkqshqv70g70vr00e2ctc04rm2j8.apps.googleusercontent.com',
			callback: handleCallbackResponse,
		});

		google.accounts.id.renderButton(document.getElementById('google-sign-up'), {
			theme: 'outline',
			width: '260px',
			size: 'large',
			text: 'continue_with',
			shape: 'pill',
		});
	}, );

	return <div id='google-sign-up'></div>;
}
