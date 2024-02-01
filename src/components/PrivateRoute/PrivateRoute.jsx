import { Navigate, Outlet } from "react-router";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";

export default function PrivateRoute() {
    const {userData} = useUser();
    return userData ? <Outlet /> : <Navigate to={appRoutes.SIGN_IN} />
}