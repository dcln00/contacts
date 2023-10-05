import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Index from "./pages/Index.jsx";
import Login from "./auth/Login.jsx";
import Signup from "./auth/Signup.jsx";
import { useEffect, useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";
import PrivateRoute from "./components/PrivateRoute";
import RouteGuard from "./components/RouteGuard";
import Error404 from "./pages/Error404";

function App() {
	const [user, setUser] = useState(false);

	if (user) {
		sessionStorage.setItem("user", JSON.stringify(user));
	}

	useEffect(() => {
		if (sessionStorage.getItem("user")) {
			let data = JSON.parse(sessionStorage.getItem("user"));
			setUser(data);
		}
	}, []);

	return (
		<>
			<DarkModeProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Index user={user} />} />
						<Route element={<PrivateRoute user={user}  />}>
							<Route path="app" element={<AppLayout user={user} setUser={setUser} />} />
						</Route>
						<Route element={<RouteGuard user={user}/>}>
							<Route path="login" element={<Login setUser={setUser} />} />
							<Route path="signup" element={<Signup />} />
						</Route>
						<Route path="*" element={<Error404 />} />
					</Routes>
				</BrowserRouter>
			</DarkModeProvider>
		</>
	);
}

export default App;
