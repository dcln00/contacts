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
		<div
			className={
				select
					? "contact d-flex align-items-center selected"
					: "contact d-flex align-items-center"
			}
		>
			<div className="contact-img d-flex justify-content-center align-items-center">
				{/* <img src={image} alt={name} /> */}
				<div className="initials">{contact.firstName[0].toUpperCase()}</div>
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
				}}
				customClass={select ? "ms-auto selected" : "ms-auto"}
			>
				{!select ? "View" : "Close"}
			</Button>
		</div>
	);
}
