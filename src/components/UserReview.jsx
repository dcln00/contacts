import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { useDarkMode } from "../context/DarkModeContext";

const darkTheme = [
	{
		color: '#ededed'
	},
	{
		color: "#ededed",
		backgroundColor: "#1e1e1e",
	}
];

function UserReview({name, children, rating = 5, link }) {
	const {darkMode} = useDarkMode()

	return (
		<div className="col-md-4">
			<div className="review-component" style={darkMode ? darkTheme.at(1) : {}}>
				<div className="review-text">
					{children}
				</div>
				<div className="review-user d-flex align-items-center">
					<div className="image d-flex align-items-center justify-content-center">
						<ProfileIcon />
					</div>
					<div className="box ms-3">
						<div className="name">{name}</div>
						<div className="rating">
							{Array.from({ length: rating }, (_, i) => i + 1).map((x, i) => (
								<StarRating key={i} color="#ffcc00" />
							))}
						</div>
					</div>
					<XIcon link={link} />
				</div>
			</div>
		</div>
	);
}

function XIcon({link}) {
	return (
		<Link to={link} className="ms-auto twtter">
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path fill="currentColor" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"></path></svg>
		</div>
		</Link>
	)
}

function ProfileIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56Z"></path></svg>
	)
}

export default UserReview;
