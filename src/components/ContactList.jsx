import Button from "./Button";

export default function ContactList({ selected, contacts, onSelected }) {
	return (
		<div id="contactlist">
			{contacts.map((x) => (
				<Contact
					contact={x}
					key={x.id}
					onSelected={onSelected}
					selected={selected}
				/>
			))}
		</div>
	);
}

function Contact({ contact, selected, onSelected }) {
	const select = selected?.id === contact.id;

	return (
		<div className="contact d-flex align-items-center">
			<div className="contact-img d-flex justify-content-center align-items-center">
				{/* <img src={image} alt={name} /> */}
				<div className="initials">{contact.firstName[0]}</div>
			</div>
			<div className="contact-details ms-3">
				<div className="name">{contact.firstName}</div>
				<div className="number">{contact.phone}</div>
			</div>
			<Button
				onClick={() => {
					onSelected(contact);
				}}
				customClass={selected ? "ms-auto selected" : "ms-auto"}
			>
				{!selected ? "View" : "Close"}
			</Button>
		</div>
	);
}
