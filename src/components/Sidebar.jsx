import { Link } from "react-router-dom";
import Button from "./Button";

function Sidebar({children, welcome, button, link}) {
	return (
		<aside className="col-sm-4 sidebar d-flex align-items-center justify-content-center">
			<div className="details">
				<Link to="/">
					<div className="logo">Contacts</div>
				</Link>
				<div className="welcome">{welcome}</div>
				<div className="message">
					{children}
				</div>
				<Link to={link}>
				<Button customClass="cta">{button}</Button>
				</Link>
			</div>
		</aside>
	);
}

export default Sidebar;
