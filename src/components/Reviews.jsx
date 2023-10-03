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



function Reviews() {
	return (
		<section id="reviews" className="container">
			<div className="title">What people say about us</div>
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
