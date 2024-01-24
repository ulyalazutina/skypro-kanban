import "./App.css";
import { GlobalStyle } from "./Global.styled";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import CardPage from "./pages/CardPage";
import ExitPage from "./pages/ExitPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  let user = true;

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivateRoute user={user} />}>
          <Route path={appRoutes.HOME} element={<HomePage />}>
            <Route path={appRoutes.CARD} element={<CardPage />} />
          </Route>
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
      </Route>
      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />}></Route>
      <Route path={appRoutes.SIGN_IN} element={<SignInPage />}></Route>
      <Route path={appRoutes.SIGN_UP} element={<SignUpPage />}></Route>
    </Routes >
    </>
  );
}

export default App;
