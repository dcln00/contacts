import { useEffect, useState } from "react";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";

const App = () => {
	const [contacts, setContacts] = useState([]);
	const [showAddForm, setShowAddForm] = useState(false);

	useEffect(() => {
		localStorage.setItem("dataKey", JSON.stringify(contacts));
	}, [contacts]);

	function handleAddContacts(contact) {
		setContacts((x) => [...x, contact]);
		setShowAddForm(false)
	}

	function handleAddForm() {
		setShowAddForm((x) => !x);
	}

	return (
		<div className="app">
			<Header onClick={handleAddForm} onShowAddForm={showAddForm} />
			<main className="container">
				<div className="row">
					<div className="col-sm-5">
						<ContactList contacts={contacts} />
					</div>
					<div className="col-sm-7">
						{showAddForm && <AddContact onAddContact={handleAddContacts} />}
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
