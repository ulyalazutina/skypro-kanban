import "./App.css";
import { GlobalStyle } from "./Global.styled";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import CardPage from "./pages/CardPage";
import ExitPage from "./pages/ExitPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivateRoute  />}>
          <Route path={appRoutes.HOME} element={<HomePage  />}>
            <Route path={appRoutes.CARD} element={<CardPage />} />
          </Route>
        </Route>
        <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />}></Route>
        <Route path={appRoutes.SIGN_IN} element={<SignInPage />}></Route>
        <Route path={appRoutes.SIGN_UP} element={<SignUpPage />}></Route>
        <Route path={appRoutes.EXIT} element={<ExitPage />} />
      </Routes>
    </>
  );
}

export default App;
