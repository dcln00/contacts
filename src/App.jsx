import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Index from "./pages/Index.jsx";
import Login from "./auth/Login.jsx";
import Signup from "./auth/Signup.jsx";
import { useEffect, useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	const [token, setToken] = useState(false);

	if (token) {
		sessionStorage.setItem("token", JSON.stringify(token));
	}

	useEffect(() => {
		if (sessionStorage.getItem("token")) {
			let data = JSON.parse(sessionStorage.getItem("token"));
			setToken(data);
		}
	}, []);

	return (
		<>
			<DarkModeProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Index token={token} />} />

						<Route
							path="app"
							element={
								<PrivateRoute token={token}>
									<AppLayout setToken={setToken} token={token}/>
								</PrivateRoute>
							}
						/>

						{!token && (
							<Route path="login" element={<Login setToken={setToken} />} />
						)}
						{!token && <Route path="signup" element={<Signup />} />}
					</Routes>
				</BrowserRouter>
			</DarkModeProvider>
		</>
	);
}

export default App;
