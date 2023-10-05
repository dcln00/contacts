import { Navigate, Outlet } from "react-router-dom"

function RouteGuard({user}) {
	return (
		<div>
			{!user ? <Outlet /> : <Navigate to="/app" replace={true} />}
		</div>
	)
}

export default RouteGuard
