import { useEffect, useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import Button from "./Button";

const darkTheme = [
	{
		backgroundColor: "#1e1e1e",
	},
	{
		backgroundColor: "#222222",
		color: "#ededed",
	},
];

function validatePhoneNumber(phoneNumber) {
	const pattern = /^\d{10}$/;
	return !pattern.test(phoneNumber);
}

function birthdayStr(birthday) {
	const date = new Date(birthday);
	const day = date.getDate();
	const year = date.getFullYear();
	const monthName = date.toLocaleString("default", { month: "long" });
  
	let daySuffix = "th";
	if (day in [1, 21, 31]) {
	daySuffix = "st";
	} else if (day in [2, 22]) {
	daySuffix = "nd";
	} else if (day in [3, 23]) {
	daySuffix = "rd";
	}
  
	return `${day}${daySuffix} ${monthName} ${year}`;
}

function EditContact({selected, setContacts, contacts, onShowEditForm, setSelected}) {
	const [firstName, setFirstName] = useState(selected.firstName);
	const [lastName, setLastName] = useState(selected.lastName);
	const [phone, setPhone] = useState(selected.phone);
	const [email, setEmail] = useState(selected.email);
	const [location, setLocation] = useState(selected.location);
	const [birthday, setBirthday] = useState(selected.birthday);
	const [tags, setTags] = useState(selected.tags);
	const [notes, setNotes] = useState(selected.notes);
	const { darkMode } = useDarkMode()

	useEffect(() => {
		document.title = "Add Contact - Contacts by Nii Aryeh";

		return () => (document.title = "Contacts by Nii Aryeh");
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		if (!firstName || !lastName || !phone) return;

		if(validatePhoneNumber(phone)) return alert('Enter a valid Phone number')

		const id = selected.id

		setContacts(() => contacts.map(x => x.id === selected.id ? {...x, firstName: firstName.replace(/^./, firstName[0].toUpperCase()), lastName: lastName.replace(/^./, lastName[0].toUpperCase()), phone, email, location, birthday: birthdayStr(birthday), tags, notes} : x))

		setSelected({id, firstName: firstName.replace(/^./, firstName[0].toUpperCase()), lastName: lastName.replace(/^./, lastName[0].toUpperCase()), phone, email, location, birthday: birthdayStr(birthday), tags, notes})

		onShowEditForm(false)
	}

	return (
		<div id="addcontact" style={darkMode ? darkTheme.at(0) : {}}>
			<h3>Edit Contact</h3>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-6">
						<label>First Name</label>
						<br />
						<input
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							maxLength="14"
							required
						/>
					</div>
					<div className="col-sm-6">
						<label>Last Name</label>
						<br />
						<input
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							maxLength="14"
							required
						/>
					</div>
					<div className="col-sm-6">
						<label>Phone Number</label>
						<br />
						<input
							type="tel"
							value={phone.replace(
								/(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
								"$1$2$3$4$5$6$7$8$9$10"
							)}
							// pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
							onChange={(e) => setPhone(e.target.value)}
							required
						/>
					</div>
					<div className="col-sm-6">
						<label>Email</label>
						<br />
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="col-sm-4">
						<label>Location</label>
						<br />
						<input
							type="text"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
						/>
					</div>
					<div className="col-sm-4">
						<label>Birthday</label>
						<br />
						<input
							type="text"
							value={birthday}
							max="2005-01-01"
							onChange={(e) => setBirthday(e.target.value)}
						/>
					</div>
					<div className="col-sm-4">
						<label>Tags</label>
						<br />
						<input
							type="text"
							value={tags}
							onChange={(e) => setTags(e.target.value)}
						/>
					</div>
					<div className="col-sm-9">
						<label>Notes</label>
						<br />
						<textarea
							value={notes}
							onChange={(e) => setNotes(e.target.value)}
						></textarea>
					</div>
					<div className="col-sm-3 align-self-end">
						<Button customStyle={darkMode ? darkTheme.at(1) : {}}>
							Save
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default EditContact;
