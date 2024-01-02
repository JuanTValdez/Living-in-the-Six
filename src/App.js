import './GlobalVariables.css';
import NavBar from './components/NavBar.js';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Home from './components/Home.js';
import AccountSettings from './components/AccountSettings.js';
// import ContactOwner from './components/ContactOwner.js';
// import Footer from './components/Footer.js';

function App() {
	return (
		<div className='App'>
			{/* <Login /> */}
			{/* <SignUp /> */}
			{/* <Home />
			 */}

			<NavBar />
			<AccountSettings />
			{/* <ContactOwner /> */}
			{/* <Footer /> */}
		</div>
	);
}

export default App;
