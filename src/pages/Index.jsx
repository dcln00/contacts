import Footer from "../components/Footer"
import HeaderIndex from "../components/HeaderIndex"
import Jumbotron from "../components/Jumbotron"
import LearnMore from "../components/LearnMore"
import Reviews from "../components/Reviews"

function Index({token}) {
	return (
		<>
			<HeaderIndex token={token} />
			<Jumbotron />
			<LearnMore />
			<Reviews />
			<Footer />
		</>
	)
}

export default Index
