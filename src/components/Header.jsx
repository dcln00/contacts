import { useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";

const darkTheme = [
	{
		color: '#ededed',
		backgroundColor: 'transparent'
	},
];

function getGreetingMessage(username) {
	const currentDate = new Date();
	const currentHour = currentDate.getHours();
  
	if (currentHour < 12) {
	return `Good morning! ${username}`;
	} else if (currentHour < 17) {
	return `Good afternoon! ${username}`;
	} else {
	return `Good evening! ${username}`;
	}
  }

const Header = ({ onClick, onShowAddForm, contacts, showSettings, user }) => {
	const { darkMode } = useDarkMode()
	const numberContacts = contacts.length;
	return (
		<header className={`container d-flex align-items-center`} style={darkMode ? darkTheme.at(0) : {}}>
			<Link to='/'>
			<div className="logo" style={darkMode ? darkTheme.at(0) : {}}>Contacts</div>
			</Link>
			{numberContacts === 0 ? (
				<div className="description ms-5">You have no contacts</div>
			) : numberContacts <= 1 ? (
				<div className="description ms-5">{numberContacts} Contact</div>
			) : (
				<div className="description ms-5">{numberContacts} Contacts</div>
			)}
			<div className="ms-auto">{getGreetingMessage(user.session?.user.user_metadata.username)}</div>
			<div
				className={
					onShowAddForm
						? "button ms-3 d-flex justify-content-center align-items-center button-clicked"
						: "button ms-3 d-flex justify-content-center align-items-center "
				}
				onClick={onClick}
				style={darkMode ? darkTheme.at(0) : {}}
			>
				+
			</div>
			<div
				className="button ms-3 d-flex justify-content-center align-items-center"
				onClick={showSettings}
				style={darkMode ? darkTheme.at(0) : {}}
			>
				<i className="fa fa-sliders" aria-hidden="true"></i>
			</div>
		</header>
	);
};

export default Header;
