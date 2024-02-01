import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { appRoutes } from "../lib/appRoutes";

export const UserContext = createContext(null);
// возвращает данные из локального хранилища
const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user'))
}

export function UserProvider({ children }) {
  let navigate = useNavigate();
  const [userData, setUserData] = useState(getUserFromLocalStorage());

  const loginUser = (user) => {
    setUserData(user);
    localStorage.setItem('user',JSON.stringify(user));
    navigate(appRoutes.HOME);
  };

  const logoutUser = () => {
    setUserData(null);
    localStorage.removeItem('user');
    navigate(appRoutes.SIGN_IN);
  };

  return (
    <UserContext.Provider value={{ userData, loginUser, logoutUser}}>
    {children}
    </UserContext.Provider>
  )
}
