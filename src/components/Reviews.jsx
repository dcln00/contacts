import { useDarkMode } from "../context/DarkModeContext";
import UserReview from "./UserReview";

const userReviews = [
	{
		name: "dev_williams",
		rating: 5,
		review:
			"Looks clean 🔥",
		link: 'https://twitter.com/dev_willman/status/1688931921303314432'
	},
	{
		name: "BDante101",
		rating: 5,
		review:
			"I love the UI 🤩",
		link: 'https://twitter.com/BDante101/status/1688799975327612928'
	},
	{
		name: "sammyisagenius",
		rating: 5,
		review:
			"Too clean",
		link: 'https://twitter.com/sammyisagenius/status/1688920305757270017'
	},
];

const darkTheme = [
	{
		color: '#ededed'
	},
	{
		backgroundColor: "#ededed",
		color: "#222222",
	}
];

function Reviews() {
	const {darkMode} = useDarkMode()

	return (
		<section id="reviews" className="container">
			<div className="title" style={darkMode ? darkTheme.at(0) : {}}>What people say about us</div>
			<div className="review">
				<div className="row">
					{userReviews.map((x, i) => (
						<UserReview key={i} name={x.name} rating={x.rating} link={x.link} >
							{x.review}
						</UserReview>
					))}
				</div>
			</div>
		</section>
	);
}

export default Reviews;
