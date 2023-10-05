import { Link } from "react-router-dom";
import Button from "./Button";
import { useDarkMode } from "../context/DarkModeContext";

const darkTheme = [
	{
		backgroundColor: "#1e1e1e",
		backgroundImage: 'none',
	}
];

function Sidebar({children, welcome, button, link}) {
	const {darkMode} = useDarkMode()
	return (
		<aside className="col-sm-4 sidebar d-none d-sm-flex align-items-center justify-content-center" style={darkMode ? darkTheme.at(0) : {}}>
			<div className="details">
				<Link to="/">
					<div className="logo">Contacts</div>
				</Link>
				<div className="welcome">{welcome}</div>
				<div className="message">
					{children}
				</div>
				<Link to={link}>
				<Button customClass="cta">{button}</Button>
				</Link>
			</div>
		</aside>
	);
}

export default Sidebar;
