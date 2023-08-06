const Header = ({ onClick, onShowAddForm }) => {
	return (
		<header className="container d-flex align-items-center">
			<div className="logo">Contacts</div>
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
