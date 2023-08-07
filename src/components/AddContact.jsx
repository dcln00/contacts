import { useState } from "react";

export default function AddContact({onAddContact}) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [location, setLocation] = useState("");
	const [birthday, setBirthday] = useState("");
	const [tags, setTags] = useState("")
	const [notes, setNotes] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		const id = Math.random().toString(16).slice(2, 7)

		if (!firstName || !lastName || !phone )
			return;

		const contact = {
			id,
			firstName,
			lastName,
			phone,
			email,
			location,
			birthday,
			tags,
			notes,
		};

		onAddContact(contact)

		setFirstName("");
		setLastName("");
		setPhone("");
		setEmail("");
		setLocation("");
		setBirthday("");
		setTags("")
		setNotes("");
		
	}

	return (
		<div id="addcontact">
			<h3>Add Contact</h3>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-6">
						<label>First Name</label>
						<br />
						<input
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
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
							required
						/>
					</div>
					<div className="col-sm-6">
						<label>Phone Number</label>
						<br />
						<input
							type="text"
							value={phone}
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
						<button>Add Contact</button>
					</div>
				</div>
			</form>
		</div>
	);
}
