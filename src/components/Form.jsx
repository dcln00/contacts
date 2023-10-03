import { useState } from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

function Form({ title, message, username, email, password, setEmail, setPassword, setUsername, handleSubmit }) {
	const [showPassword, setShowPassword] = useState(false)
	const { pathname } = useLocation();

	function handleShowPassword() {
		setShowPassword(x => !x)
	}

	return (
		<div className="col-sm-8 form d-flex align-items-center justify-content-center">
			<div className="details">
				<div className="title">{title}</div>
				<div className="socials d-flex justify-content-center">
					{/* <Google /> */}
					{/* <Github /> */}
				</div>
				<div className="message">{message}</div>
				<form onSubmit={handleSubmit}>
					{pathname === "/signup" && (
						<div className="input-group">
							<span className="input-group-text" id="input-group-left-example">
								<PersonIcon />
							</span>
							<input
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className="form-control"
								placeholder="Username"
								aria-label="Username"
								aria-describedby="input-group-left"
							/>
						</div>
					)}
					<div className="input-group">
						<span className="input-group-text" id="input-group-left-example">
							<MailIcon />
						</span>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="form-control"
							placeholder="Email"
							aria-label="Email"
							aria-describedby="input-group-left"
							autoComplete="on"
						/>
					</div>
					<div className="input-group">
						<span className="input-group-text" id="input-group-left-example">
							<PasswordIcon />
						</span>
						<input
							type={!showPassword ? "password" : 'text'}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="form-control"
							placeholder="Password"
							aria-label="Password"
							aria-describedby="input-group-left"
							
						/>
						<span className="input-group-text" onClick={handleShowPassword}><EyeIcon/></span>
					</div>

					<Button customClass="cta">{pathname !== '/signup' ? 'Log in' : 'Sign up'}</Button>
				</form>
			</div>
		</div>
	);
}

function Google() {
	return (
		<div className="social d-flex justify-content-center align-items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.7em"
				height="1.7em"
				viewBox="0 0 24 24"
			>
				<path
					fill="#222222"
					d="M23 11h-2V9h-2v2h-2v2h2v2h2v-2h2M8 11v2.4h4c-.2 1-1.2 3-4 3c-2.4 0-4.3-2-4.3-4.4c0-2.4 1.9-4.4 4.3-4.4c1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 5.7 9.9 5 8 5c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8c0-.5 0-.8-.1-1.2H8Z"
				/>
			</svg>
		</div>
	);
}

function Github({onClick}) {
	return (
		<div className="social d-flex justify-content-center align-items-center" onClick={onClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.7em"
				height="1.7em"
				viewBox="0 0 256 256"
			>
				<path
					fill="#222222"
					d="M216 104v8a56.06 56.06 0 0 1-48.44 55.47A39.8 39.8 0 0 1 176 192v40a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-16H72a40 40 0 0 1-40-40a24 24 0 0 0-24-24a8 8 0 0 1 0-16a40 40 0 0 1 40 40a24 24 0 0 0 24 24h24v-8a39.8 39.8 0 0 1 8.44-24.53A56.06 56.06 0 0 1 56 112v-8a58.14 58.14 0 0 1 7.69-28.32A59.78 59.78 0 0 1 69.07 28A8 8 0 0 1 76 24a59.75 59.75 0 0 1 48 24h24a59.75 59.75 0 0 1 48-24a8 8 0 0 1 6.93 4a59.74 59.74 0 0 1 5.37 47.68A58 58 0 0 1 216 104Z"
				></path>
			</svg>
		</div>
	);
}

function PersonIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 256 256"
		>
			<path
				fill="currentColor"
				d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56Z"
			></path>
		</svg>
	);
}

function MailIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z"
			/>
		</svg>
	);
}

function PasswordIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
		>
			<g fill="currentColor">
				<path d="M9 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z" />
				<path
					fillRule="evenodd"
					d="M5.25 8v1.303c-.227.016-.44.036-.642.064c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337v.11c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h8.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982c.602-.602.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26c-.602-.602-1.36-.86-2.26-.981a10.215 10.215 0 0 0-.642-.064V8a6.75 6.75 0 0 0-13.5 0ZM12 2.75A5.25 5.25 0 0 0 6.75 8v1.253c.373-.003.772-.003 1.195-.003h8.11c.423 0 .822 0 1.195.003V8c0-2.9-2.35-5.25-5.25-5.25Zm-7.192 8.103c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4c-.101.755-.103 1.756-.103 3.191c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h8c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103Z"
					clipRule="evenodd"
				/>
			</g>
		</svg>
	);
}

function EyeIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z"></path></svg>
	)
}

export default Form;
