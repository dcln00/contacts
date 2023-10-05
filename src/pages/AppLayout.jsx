import { useEffect, useState } from "react";
import Header from "../components/Header";
import ContactList from "../components/ContactList";
import AddContact from "../components/AddContact";
import Contact from "../components/Contact";
import Welcome from "../components/Welcome";
import Settings from '../components/SettingsModal';
import BackgroundWrapper from '../components/BackgroundWrapper'
import EditContact from "../components/EditContact";


const initialContact = [
	{
		id: 12345,
		firstName: "Demo",
		lastName: "",
		phone: "0201234567",
		email: "demo@demo.io",
		location: "Accra, Ghana",
		birthday: "8th July",
		notes: `Demo Contact. Delete Me :)

Contacts was created and developed by Nii Aryeh.`,
	},
];

const AppLayout = ({setUser, user}) => {
	const [contacts, setContacts] = useState(initialContact)
	const [selected, setSelected] = useState(null)
	const [showAddForm, setShowAddForm] = useState(false)
	const [showSettings, setShowSettings] = useState(false)
	const [sort, setSort] = useState('input')
	const [showEditForm, setShowEditForm] = useState(false)

	useEffect(() => {
		const data = localStorage.getItem("saveSettings");
		if(data !== null) setSort(data);
	}, []);

	useEffect(() => {
		localStorage.setItem("saveSettings", sort);
	}, [sort]);

	useEffect(() => {
		const data = localStorage.getItem("contactsKey");
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

		if (confirmed) {
			setContacts((contacts) => contacts.filter((x) => x.id !== id));
			setSelected(null);
		} else {
			setSelected(selected);
		} 
	}

	function handleEdit() {
		setShowEditForm(x => !x)
	}

	function handleShowSettings() {
		setShowSettings((x) => !x)
	}

	return (
		<div className="app">
			
			{showSettings && <Settings setUser={setUser} onShowSettings={handleShowSettings} setContacts={setContacts} contacts={contacts} sort={sort} setSort={setSort} />}
			<BackgroundWrapper />
			<Header
				onClick={handleAddForm}
				onShowAddForm={showAddForm}
				contacts={contacts}
				showSettings={handleShowSettings}
				user={user}
			/>
			<main className="container">
				<div className="main row">
					<div className="col-md-5">
						<ContactList
							contacts={contacts}
							onSelected={handleSelected}
							selected={selected}
							sort={sort}
							onShowEditForm={setShowEditForm}
						/>
					</div>
					<div className="col-md-7">
						{!showAddForm && !selected && <Welcome onClick={handleAddForm}/>}
						{showAddForm && <AddContact onAddContact={handleAddContacts} />}
						{showEditForm && selected && <EditContact selected={selected} setSelected={setSelected} setContacts={setContacts} contacts={contacts} onShowEditForm={setShowEditForm} /> }
						{selected && !showEditForm && (
							<Contact selected={selected} onDelete={handleDelete} onEdit={handleEdit} contacts={contacts} />
						)}
					</div>
				</div>
			</main>
			
		</div>
	);
};

export default AppLayout;
