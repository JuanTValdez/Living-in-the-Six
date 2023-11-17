import './GlobalVariables.css';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
import Home from './components/Home.js';
import GoogleAuth from './components/GoogleAuth.js';
function App() {
	return (
		<div className='App'>
			{/* <Login /> */}
			{/* <SignUp /> */}

			<Home />
			<GoogleAuth />
		</div>
	);
}

export default App;
