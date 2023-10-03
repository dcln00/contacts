import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="container-fluid">
			<div className="container d-flex align-items-center">
				<Link to="/" className="me-auto">
					<div className="logo">Contacts</div>
				</Link>
				<div className="copyright">
					Designed and Developed by <a href="https://niiaryeh.com">Nii Aryeh</a> x Ayvas dev.
				</div>
			</div>
		</footer>
	);
}

export default Footer;
