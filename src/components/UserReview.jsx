import { Link } from "react-router-dom";
import StarRating from "./StarRating";

function UserReview({name, children, rating = 5, link, }) {
	return (
		<div className="col-sm-4">
			<div className="review-component">
				<div className="review-text">
					{children}
				</div>
				<div className="review-user d-flex align-items-center">
					<div className="image">
						{/* <img src={image} alt="" /> */}
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

export default UserReview;
