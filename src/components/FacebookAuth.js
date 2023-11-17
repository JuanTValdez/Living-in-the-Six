import { useState, React } from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';

export default function FacebookAuth() {
	const [user, setUser] = useState({});

	const handleFacebookResponse = function (response) {
		setUser(response.data);
		console.log('Facebook Response: ', response.data);
	};
	return (
		<div>
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
	);
}
