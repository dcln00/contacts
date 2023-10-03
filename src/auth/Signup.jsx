import { useEffect, useState } from "react";
import Form from "../components/Form";
import Sidebar from "../components/Sidebar";

import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

function Signup() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate()

	useEffect(() => {
		document.title = "Signup";

		return () => (document.title = "Contacts by Nii Aryeh");
	}, []);

	// async function handleGithub() {
	// 	try {
	// 		const { data, error } = await supabase.auth.signInWithOAuth({
	// 			provider: "github",
	// 		});

	// 		if (error) alert(error);
	// 	} catch (err) {
	// 		throw new Error(err.message);
	// 	}
	// }

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const { error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					data: {
						username,
					},
				},
			});

			if (error) throw error;
			alert("Login with your email address");
			navigate("/login");
		} catch (err) {
			alert(err);
		} finally {
			setUsername("");
			setEmail("");
			setPassword("");
		}
	}

	return (
		<>
			<div className="container-fluid" id="entry">
				<div className="row">
					<Sidebar welcome="Welcome!" button="Log in" link="/login">
						To keep connected with us, please sign in.
					</Sidebar>
					<Form
						title="Create account"
						message="Use your email to register"
						username={username}
						email={email}
						password={password}
						setUsername={setUsername}
						setEmail={setEmail}
						setPassword={setPassword}
						handleSubmit={handleSubmit}
					/>
				</div>
			</div>
		</>
	);
}

export default Signup;
