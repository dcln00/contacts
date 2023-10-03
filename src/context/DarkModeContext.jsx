import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		const data = localStorage.getItem("theme");
		setDarkMode(data === "dark" ? true : false);
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", darkMode ? "dark" : "light");
	}, [darkMode]);

	function toggleDarkMode() {
		setDarkMode((x) => !x);
	}

	return (
		<div>
			<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
				{children}
			</DarkModeContext.Provider>
		</div>
	);
}

export function useDarkMode() {
	const context = useContext(DarkModeContext)
	return context
}