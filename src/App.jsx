import { useEffect, useState } from "react";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import Contact from "./components/Contact";

const initialContact = [
	{
		id: 12345,
		firstName: "Demo",
		lastName: "",
		phone: "0201234567",
		email: "demo@demo.io",
		location: "Accra, Ghana",
		birthday: "8th July",
		notes: "Demo Contact. Delete Me :)",
	},
];

const App = () => {
	const [contacts, setContacts] = useState(initialContact);
	const [selected, setSelected] = useState(null);
	const [showAddForm, setShowAddForm] = useState(false);

	useEffect(() => {
		const data = window.localStorage.getItem("contactsKey");
		if (data !== null) setContacts(JSON.parse(data));
	}, []);

	useEffect(() => {
		localStorage.setItem("contactsKey", JSON.stringify(contacts));
	}, [contacts]);

	function handleAddContacts(contact) {
		setContacts((x) => [...x, contact]);
		setShowAddForm(false);
	}

	function handleAddForm() {
		setShowAddForm((x) => !x);
		setSelected(null);
	}

	function handleSelected(contact) {
		setSelected((x) => (x?.id === contact.id ? null : contact));
		setShowAddForm(false);
	}

	function handleDelete(id) {
		const confirmed = window.confirm(
			"Are you sure you want to delete this contact?"
		);

		if (confirmed)
			setContacts((contacts) => contacts.filter((x) => x.id !== id));

		setSelected(null);
	}

	return (
		<div className="app">
			<Header onClick={handleAddForm} onShowAddForm={showAddForm} />
			<main className="container">
				<div className="row">
					<div className="col-sm-5">
						<ContactList
							contacts={contacts}
							onSelected={handleSelected}
							selected={selected}
						/>
					</div>
					<div className="col-sm-7">
						{showAddForm && <AddContact onAddContact={handleAddContacts} />}
						{selected && (
							<Contact selected={selected} onDelete={handleDelete} />
						)}
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
