import { useEffect, useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

const darkTheme = [
	{
		backgroundColor: "#222222",
		color: "#ededed",
	},
	{
		backgroundColor: "#ededed",
		color: "#222222",
	},
];

export default function SettingsModal({
	onShowSettings,
	sort,
	setSort,
	contacts,
	setContacts,
	setUser,
}) {
	const { darkMode, toggleDarkMode } = useDarkMode();
	const navigate = useNavigate();
	const numOfContacts = contacts.length;
	const [loading, setLoading] = useState(false)

	function handleLogout() {
		setLoading(true)
		const delay = Math.random() * 2500;

		setTimeout(async () => {
			const { error } = await supabase.auth.signOut();
			sessionStorage.removeItem("user");
			setUser(false);
			navigate("/");
			setLoading(false)
		}, delay)
	}

	function handleDeleteAllContacts() {
		if (!numOfContacts) return;

		const confirmed = window.confirm("Do you want to delete all contacts?");

		if (confirmed) setContacts([]);

		if (!confirmed) return

		onShowSettings(false);
	}

	useEffect(() => {
		document.title = "Settings - Contacts by Nii Aryeh";

		return () => (document.title = "Contacts by Nii Aryeh");
	}, []);
	
	return (
		<div
			id="settings"
			className="d-flex justify-content-center align-items-center"
		>
			<div className="settings-modal" style={darkMode ? darkTheme.at(0) : {}}>
				<div className="settings-header d-flex align-items-center">
					<div className="title">Settings</div>
					<div className="button ms-auto" onClick={onShowSettings}>
						+
					</div>
				</div>
				<div className="settings-body">
					<select value={sort} onChange={(e) => setSort(e.target.value)}>
						<option value="input">Sort by input order</option>
						<option value="alphabetically">Sort contacts alphabetically</option>
					</select>
					<div
						className="delete-button"
						onClick={() => handleDeleteAllContacts()}
						style={numOfContacts > 0 ? {} : { backgroundColor: "gray" }}
					>
						{numOfContacts > 0 ? "Delete All Contacts" : "You have no contacts"}
					</div>
				</div>
				<div className="settings-footer">
					<div className="mode d-flex align-items-center">
						{darkMode ? (
							<i
								className={
									darkMode ? "fa fa-sun-o dark-mode" : "fa fa-sun-o light-mode"
								}
								aria-hidden="true"
								onClick={() => {
									toggleDarkMode();
								}}
							></i>
						) : (
							<i
								className="fa fa-moon-o"
								aria-hidden="true"
								onClick={() => {
									toggleDarkMode();
								}}
							></i>
						)}
						<Button
							customClass="ms-auto"
							customStyle={darkMode ? darkTheme.at(1) : {}}
							onClick={onShowSettings}
						>
							Save
						</Button>
						<Button
							customClass="ms-3"
							customStyle={darkMode ? darkTheme.at(1) : {}}
							onClick={handleLogout}
						>
							{loading ? <LoggingOut /> : <LogoutIcon />}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

function LoggingOut() {
	return (
		<div className="d-flex justify-content-center align-items-center" style={{height: '21px'}}>
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>
		</div>
	)
}

function LogoutIcon() {
	return (
		<div className="d-flex align-items-center">
			<div className="text">Log out</div>
			<svg
				className="ms-2"
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5l-5-5m5 5H9"
				></path>
			</svg>
		</div>
	);
}
