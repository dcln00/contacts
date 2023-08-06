const contacts = [
	{
		id: 1,
		name: "Nii Aryeh",
		number: "0204733113",
		image: "https://i.pravatar.cc/48?u=499476",
	},
	{
		id: 2,
		name: "Osei Boateng",
		number: "05512334567",
		image: "https://i.pravatar.cc/48?u=499476",
	},
	{
		id: 3,
		name: "Jennson",
		number: "02445938213",
		image: "https://i.pravatar.cc/48?u=499476",
	},
];

export default function ContactList() {
	return (
		<div id="contactlist">
			{contacts.map((x) => (
				<Contact name={x.name} number={x.number} key={x.id} image={x.image} />
			))}
		</div>
	);
}

function Contact({ name, number, image }) {
	return (
		<div className="contact d-flex align-items-center">
			<div className="contact-img">
				<img src={image} alt={name} />
			</div>
			<div className="contact-details ms-3">
				<div className="name">{name}</div>
				<div className="number">{number}</div>
			</div>
			<button className="ms-auto">View</button>
		</div>
	);
}
