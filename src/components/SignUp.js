import { useEffect, useState, React } from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import '../styles/SignUp.css';

import Close from '../images/times-circle-solid.svg';

const { jwtDecode } = require('jwt-decode');
export default function SignUp() {
	const [user, setUser] = useState({});

	const handleCallbackResponse = function (response) {
		var userObject = jwtDecode(response.credential);

		setUser(userObject);
		console.log('Google Response: ', userObject);
	};

	const handleFacebookResponse = function (response) {
		setUser(response.data);
		console.log('Facebook Response: ', response);
		console.log('Email: ', response.data);
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
	}, []);

	return (
		<div className='sign-up-container'>
			<div className='member'>
				Become a Member
				<img className='close-btn' src={Close} alt=''></img>
			</div>
			<div className='media-sign-up'>
				<div id='google-sign-up'></div>
				<div id='facebook-sign-up'>
					<LoginSocialFacebook
						appId='776750570885292'
						onResolve={(response) => {
							handleFacebookResponse(response);
						}}
						onReject={(error) => {
							console.log(error);
						}}>
						<FacebookLoginButton text='Continue with Facebook' />
					</LoginSocialFacebook>
				</div>
			</div>
		</div>
	);
}
