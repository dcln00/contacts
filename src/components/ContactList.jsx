import { useDarkMode } from "../context/DarkModeContext";
import Button from "./Button";

const darkTheme = [
	{
		backgroundColor: "#1e1e1e",
	},
	{
		backgroundColor: "#ededed",
		color: "#222222",
	},
	{
		color: '#fff',
	},
];

export default function ContactList({ selected, contacts, onSelected, sort, onShowEditForm }) {
	let sortedContacts;

	if (sort === "input") sortedContacts = contacts;

	if (sort === "alphabetically")
		sortedContacts = contacts
			.slice()
			.sort((a, b) => a.firstName.localeCompare(b.firstName));

	return (
		<div id="contactlist">
			{sortedContacts.map((x) => (
				<Contact
					contact={x}
					key={x.id}
					onSelected={onSelected}
					selected={selected}
					onShowEditForm={onShowEditForm}
				/>
			))}
		</div>
	);
}

function Contact({ contact, selected, onSelected, onShowEditForm }) {
	const select = selected?.id === contact.id;

	const { darkMode } = useDarkMode()

	return (
		<div
			className={
				select
					? "contact d-flex align-items-center selected"
					: "contact d-flex align-items-center"
			}
			style={select && darkMode ? darkTheme.at(0) : {}}
		>
			<div className="contact-img d-flex justify-content-center align-items-center" style={darkMode ? darkTheme.at(1) : {}}>
				{/* <img src={image} alt={name} /> */}
				<div className="initials" style={darkMode ? darkTheme.at(1) : {}}>{contact.firstName[0].toUpperCase()}</div>
			</div>
			<div className="contact-details ms-3">
				<div className="name">
					{contact.firstName.replace(/^./, contact.firstName[0].toUpperCase())}
				</div>
				<div className="number">
					{contact.phone.replace(
						/(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
						"$1$2$3 $4$5$6 $7$8$9$10"
					)}
				</div>
			</div>
			<Button
				onClick={() => {
					onSelected(contact);
					onShowEditForm(false)
				}}
				customClass={select ? "ms-auto selected" : "ms-auto"}
				customStyle={darkMode && !select ? darkTheme.at(1) : {}}
			>
				{!select ? "View" : "Close"}
			</Button>
		</div>
	);
}
