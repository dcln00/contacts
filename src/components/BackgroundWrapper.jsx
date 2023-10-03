import { useDarkMode } from "../context/DarkModeContext";

export default function BackgroundWrapper() {
	const {darkMode} = useDarkMode()

	return <div id="background-wrapper" className={darkMode ? 'dark-mode' : 'light-mode'}></div>
}