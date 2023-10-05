import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ user }) {

	return <div>{user ? <Outlet /> : <Navigate to='/'/>}</div>
}
