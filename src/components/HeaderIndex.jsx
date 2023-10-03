import { Link } from "react-router-dom";
import styles from "../assets/style/modules/HeaderIndex.module.scss";
import Button from "./Button";

function HeaderIndex({ token }) {
	return (
		<header className={`container-fluid ${styles.header}`}>
			<div className="container d-flex align-items-center">
				<Link to="/">
					<div className={styles.logo}>Contacts</div>
				</Link>
				{token ? (
					<Link to="/app" className="ms-auto">
						<Button customClass={styles.cta}>Go to dashboard</Button>
					</Link>
				) : (
					<>
						<Link className="ms-auto" to="login">
							<Button customClass={styles.login}>Login</Button>
						</Link>
						<Link to="signup">
							<Button customClass={`ms-5 ${styles.cta}`}>
								Create an Account
							</Button>
						</Link>
					</>
				)}
			</div>
		</header>
	);
}

export default HeaderIndex;
