import { useState } from "react"
import Button from "./Button"
import { useDarkMode } from "../context/DarkModeContext"

const desc = ` Contacts is easy to use and navigate, even if you're not tech-savvy. You should be able to quickly and easily add, edit, and delete contacts, as well as create and manage contact groups. If you're looking for a contact app that will make your life easier and more productive, try Contacts today.`

const darkTheme = [
	{
		color: '#ededed'
	},
	{
		backgroundColor: "#ededed",
		color: "#222222",
	}
];

function LearnMore() {
	const [show, setShow] = useState(false)
	const {darkMode} = useDarkMode()

	return (
		<section id="learn-more" className="container">
			<div className="title" style={darkMode ? darkTheme.at(0) : {}}>
				Manage your contacts with ease
			</div>
			<div className="desc">
				{!show ? desc.split(" ").slice(0, 15).join(" ") + " ..." : desc}
			</div>
			<Button customClass='cta' onClick={() => setShow(!show)} customStyle={darkMode ? darkTheme.at(1) : {}} >{!show ? 'Show More' : 'Show Less'}</Button>
		</section>
	)
}

export default LearnMore
