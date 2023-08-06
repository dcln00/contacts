import { useState } from "react";
import Header from "./components/Header";
import ContactList from "./components/ContactList";

const App = () => {
	// const [] = useState("");

	return (
		<div className="app">
			<Header />
			<main className="container">
				<div className="row">
					<div className="col-sm-5">
						<ContactList />
					</div>
					<div className="col-sm-7"></div>
				</div>
			</main>
		</div>
	);
};

export default App;
