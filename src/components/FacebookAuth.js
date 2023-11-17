import { useState, React } from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';

export default function FacebookAuth() {
	const [user, setUser] = useState({});

	const FACEBOOK_STYLES = {
		fontSize: '4rem',
		width: '260px',
	};

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
					<FacebookLoginButton
						style={FACEBOOK_STYLES}
						text='Continue with Facebook'
						size='4rem'
					/>
				</LoginSocialFacebook>
			</div>
		</div>
	);
}
