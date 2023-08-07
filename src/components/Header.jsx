const Header = ({ onClick, onShowAddForm, contacts }) => {
	const numberContacts = contacts.length;
	return (
		<header className="container d-flex align-items-center">
			<div className="logo">Contacts</div>
			{numberContacts === 0 ? (
				<div className="description ms-5">You have no contacts</div>
			) : numberContacts <= 1 ? (
				<div className="description ms-5">{numberContacts} Contact</div>
			) : (
				<div className="description ms-5">{numberContacts} Contacts</div>
			)}
			<div
				className={
					onShowAddForm
						? "button ms-auto d-flex justify-content-center align-items-center button-clicked"
						: "button ms-auto d-flex justify-content-center align-items-center "
				}
				onClick={onClick}
			>
				+
			</div>
		</header>
	);
};

export default Header;
