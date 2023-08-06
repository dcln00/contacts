export default function ContactList({ contacts }) {
	return (
		<div id="contactlist">
			{contacts.map((x) => (
				<Contact name={x.firstName} number={x.phone} key={x.id} />
			))}
		</div>
	);
}

function Contact({ name, number }) {
	return (
		<div className="contact d-flex align-items-center">
			<div className="contact-img d-flex justify-content-center align-items-center">
				{/* <img src={image} alt={name} /> */}
				<div className="initials">{name[0]}</div>
			</div>
			<div className="contact-details ms-3">
				<div className="name">{name}</div>
				<div className="number">{number}</div>
			</div>
			<button className="ms-auto">View</button>
		</div>
	);
}
