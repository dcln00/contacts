import Button from "./Button";

export default function Welcome({onClick}) {
	return (
		<div
			id="welcome"
			className="d-flex justify-content-center align-items-center"
		>
			<div className="inner">
				<div className="welcome-text">welcome to</div>
				<div className="welcome-text">contacts</div>

				<Button onClick={onClick}>
					Add Contact
				</Button>
			</div>
		</div>
	);
}
