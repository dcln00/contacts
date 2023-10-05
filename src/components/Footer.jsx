import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

const darkTheme = [
	{
		backgroundColor: '#1e1e1e'
	},
	{
		color: '#ededed'
	}
];

function Footer() {
	const {darkMode, toggleDarkMode} = useDarkMode()

	return (
		<footer className="container-fluid" style={darkMode ? darkTheme.at(0) : {}}>
			<div className="container d-flex align-items-center">
				<Link to="/" className="me-auto d-none d-sm-inline">
					<div className="logo" style={darkMode ? darkTheme.at(1) : {}}>Contacts</div>
				</Link>
				<div className="copyright" style={darkMode ? darkTheme.at(1) : {}}>
					Designed and Developed by <a href="https://niiaryeh.com">Nii Aryeh</a> x Ayvas dev.
				</div>
				<div className="ms-5 switch" onClick={toggleDarkMode}>
					{darkMode ? <SwitchOn /> : <SwitchOff />}
				</div>
			</div>
		</footer>
	);
}

function SwitchOn() {
	return (
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="currentColor" d="M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144ZM80 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40Z"></path></svg>
		</div>
	)
}

function SwitchOff() {
	return (
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="currentColor" d="M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144Zm0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40Z"></path></svg>
		</div>
	)
}

export default Footer;
