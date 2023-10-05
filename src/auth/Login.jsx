import { useEffect, useState } from "react";
import Form from "../components/Form";
import Sidebar from "../components/Sidebar";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import BackgroundWrapper from "../components/BackgroundWrapper";

function Login({ setUser }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		document.title = "Login";

		return () => (document.title = "Contacts by Nii Aryeh");
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();
		if(!email || !password) return

		try {
			setIsLoading(true);
			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password,
			});

			if (error) throw error;
			setUser(data);
			navigate("/app");
		} catch (err) {
			alert(err);
		} finally {
			setIsLoading(false);
			setEmail("");
			setPassword("");
		}
	}

	return (
		<>
			<BackgroundWrapper />
			<div className="container-fluid" id="entry">
				<div className="row">
					<Sidebar welcome="Hello!" button="Signup" link="/signup">
						Start your journey with us! To keep connected with us, please sign
						up.
					</Sidebar>
					{isLoading && <Loading />}
					{!isLoading && (
						<Form
							title="Login to your account"
							message="Sign in with your email"
							email={email}
							password={password}
							setEmail={setEmail}
							setPassword={setPassword}
							handleSubmit={handleSubmit}
						/>
					)}
				</div>
			</div>
		</>
	);
}

export default Login;
