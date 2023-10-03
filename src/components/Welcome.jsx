import Button from "./Button";
import { useDarkMode } from "../context/DarkModeContext";

const darkTheme = [
	{
		backgroundImage: 'linear-gradient(#1e1e1e, #1e1e1e)'
	},
	{
		backgroundColor: "#ededed",
		color: "#222222",
	}
];

export default function Welcome({onClick}) {
	const {darkMode} = useDarkMode()

	return (
		<div
			id="welcome"
			className="d-flex justify-content-center align-items-center"
			style={darkMode ? darkTheme.at(0) : {}}
		>
			<div className="inner">
				<div className="welcome-text">welcome to</div>
				<div className="welcome-text">contacts</div>

				<Button onClick={onClick} customStyle={darkMode ? darkTheme.at(1) : {}}>
					Add Contact
				</Button>
			</div>
		</div>
	);
}
