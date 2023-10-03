import { Link } from "react-router-dom";
import Button from "./Button";

function Jumbotron() {
	return (
		<div className="container-fluid" id="jumbotron">
			<div className="container">
				<div className="row">
					<div className="col-sm-4 info d-flex  align-items-center">
						<div>
							<div className="title">
								Not just another <br /> contact app
							</div>
							<div className="desc">Empowering unlimited connections.</div>
							<Link to='signup'>
							<Button customClass="cta">Try it now</Button>
							</Link>
						</div>
					</div>
					<div className="col-sm-8 image d-flex justify-content-center align-items-center">
						<img src="contact-ui.svg" alt="contacts" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Jumbotron;
