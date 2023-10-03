import { useState } from "react"
import Button from "./Button"

const desc = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias earum sequi, quibusdam impedit dignissimos quam, officia adipisci animi at dolorum repellendus incidunt id, odit fuga iure blanditiis minima facilis eius reiciendis dolor ullam! Eveniet delectus ea tenetur quas maxime doloremque sequi odit, officia distinctio a quod nam nihil culpa doloribus.`

function LearnMore() {

	const [show, setShow] = useState(false)

	return (
		<section id="learn-more" className="container">
			<div className="title">
				Manage your contacts with ease
			</div>
			<div className="desc">
				{!show ? desc.split(" ").slice(0, 15).join(" ") + " ..." : desc}
			</div>
			<Button customClass='cta' onClick={() => setShow(!show)}>{!show ? 'Show More' : 'Show Less'}</Button>
		</section>
	)
}

export default LearnMore
