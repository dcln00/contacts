import { Navigate } from "react-router-dom";
import { supabase } from "../supabase";
import { useEffect, useState } from "react";

export default function PrivateRoute({ children, token }) {
	const [checkSesh, setCheckSesh] = useState(null)

	useEffect(() => {
		async function checkSession() {
			// const {session: {access_token: jwt}} = token
			try {
				const { data: { user } } = await supabase.auth.getUser()
				setCheckSesh(user)
			} catch(err) {
				alert(err.message)
			}
		} 

		checkSession()
	}, [])

	return <div>{token.user?.aud === 'authenticated' ? children : <Navigate to="/" />}</div>; 
}
