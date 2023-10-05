import { Link } from "react-router-dom";
import styles from "../assets/style/modules/HeaderIndex.module.scss";
import Button from "./Button";
import { useDarkMode } from "../context/DarkModeContext";

const darkTheme = [
	{
		backgroundColor: "#ededed",
		color: "#222222",
	}
];

function HeaderIndex({ user }) {
	const {darkMode} = useDarkMode()
	return (
		<header className={`container-fluid ${styles.header}`}>
			<div className="container d-flex align-items-center">
				<Link to="/">
					<div className={styles.logo}>Contacts</div>
				</Link>
				{user ? (
					<Link to="/app" className="ms-auto">
						<Button customClass={styles.cta} customStyle={darkMode ? darkTheme.at(0) : {}}>Go to dashboard</Button>
					</Link>
				) : (
					<>
						<Link className="ms-auto" to="login">
							<Button customClass={styles.login}>Login</Button>
						</Link>
						<Link to="signup">
							<Button customClass={`ms-5 ${styles.cta}`} customStyle={darkMode ? darkTheme.at(0) : {}} >
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
