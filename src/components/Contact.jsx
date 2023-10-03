import { useEffect } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import Button from "./Button";

const darkTheme = [
	{
		backgroundImage: 'linear-gradient(#1e1e1e, #1e1e1e)',
		color: '#ededed'
	},
	{
		backgroundColor: "#222222",
		// color: "#ededed",
	},
	{
		backgroundColor: "#ededed",
		color: "#222222",
	},
];

export default function Contact({ selected, onDelete, onEdit }) {
	const {darkMode} = useDarkMode()

	useEffect(() => {
		document.title = `${selected.firstName} - Contacts by Nii Aryeh`

		return () => document.title = 'Contacts by Nii Aryeh'
	}, [selected])

	return (
		<div id="contact" style={darkMode ? darkTheme.at(0) : {}}>
			<div className="contact-header d-flex align-items-center">
				<div className="image d-flex justify-content-center align-items-center" style={darkMode ? darkTheme.at(2) : {}}>
					<div className="initials" style={darkMode ? darkTheme.at(2) : {}}>{selected.firstName[0].toUpperCase()}</div>
				</div>
				<div className="details ms-4">
					<div className="name" style={darkMode ? {color: '#ededed'} : {}}>
						{selected.firstName} {selected.lastName}
					</div>
					<div className="number">
						<a href={`tel:${selected.phone}`}>
							{selected.phone.replace(
								/(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
								"$1$2$3 $4$5$6 $7$8$9$10"
							)}
						</a>
					</div>
				</div>
			</div>
			<div className="contact-details">
				<div className="row">
					<div className="col-sm-6">
						<div className="email detail">
							<div className="title">Email</div>
							<div className="deet">
								<a href={!selected.email ? null : `mailto:${selected.email}`}>
									{!selected.email ? "-" : selected.email}
								</a>
							</div>
						</div>
						<div className="location detail">
							<div className="title">Location</div>
							<div className="deet">
								{!selected.location ? "-" : selected.location}
							</div>
						</div>
						<div className="birthday detail">
							<div className="title">Birthday</div>
							<div className="deet">
								{!selected.birthday ? "-" : selected.birthday}
							</div>
						</div>
					</div>

					<div className="col-sm-6">
						<div className="tags detail">
							<div className="title">Tags</div>
							<div className="deet">{!selected.tags ? "-" : selected.tags}</div>
						</div>
						<div className="notes detail">
							<div className="title">Notes</div>
							<div className="notes deet" style={darkMode ? darkTheme.at(1) : {}} >
								{!selected.notes ? "-" : selected.notes}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="buttons">
			<Button onClick={() => onEdit(selected.id)} customStyle={darkMode ? darkTheme.at(2) : {}}>Edit</Button>
			<Button customClass='ms-3' onClick={() => onDelete(selected.id)}>Delete</Button>
			</div>
		</div>
	);
}