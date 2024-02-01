import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { appRoutes } from "../lib/appRoutes";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  let navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const loginUser = (user) => {
    setUserData(user);
    navigate(appRoutes.HOME);
  };

  const logoutUser = () => {
    setUserData(null);
    navigate(appRoutes.SIGN_IN);
  };

  return (
    <UserContext.Provider value={{ userData, loginUser, logoutUser}}>
    {children}
    </UserContext.Provider>
  )
}
