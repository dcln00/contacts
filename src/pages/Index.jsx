import BackgroundWrapper from "../components/BackgroundWrapper"
import Footer from "../components/Footer"
import HeaderIndex from "../components/HeaderIndex"
import Jumbotron from "../components/Jumbotron"
import LearnMore from "../components/LearnMore"
import Reviews from "../components/Reviews"

function Index({user}) {
	return (
		<>
			<BackgroundWrapper />
			<HeaderIndex user={user} />
			<Jumbotron />
			<LearnMore />
			<Reviews />
			<Footer />
		</>
	)
}

export default Index
