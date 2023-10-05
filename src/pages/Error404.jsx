import { Link, useNavigate } from "react-router-dom";
import BackgroundWrapper from "../components/BackgroundWrapper";
import { useEffect, useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const darkTheme = [
	{
		color: '#ededed'
	}
];

function Error404() {
	const [countdown, setCountdown] = useState(5)
	const navigate = useNavigate()
	const {darkMode} = useDarkMode()

	useEffect(() => {
		document.title = 'Page not found'

		return () => document.title = 'Contacts by Nii Aryeh'
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
		setCountdown((countdown) => countdown - 1);
		}, 1000);
	
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			navigate('app')
		}, 5000)
	}, [navigate])

	return (
		<>
		<BackgroundWrapper />
		<section
			id="error"
			className="container-fluid d-flex align-items-center justify-content-center"
		>
			<div className="error-message">
				<div className="title" style={darkMode ? darkTheme.at(0) : {}}>Page Not Found</div>
				<div className="message">
					Looks like you&apos;ve followed a broken link or entered a URL that doesn&apos;t
					exist on this site.
				</div>
				<div className="button">Redirecting back to <Link to='app'>app</Link> in {countdown > 0 ? countdown : '0'} seconds</div>
			</div>
		</section>
		</>
	);
}

export default Error404;
