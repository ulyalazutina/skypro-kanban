import { appRoutes } from "../../lib/appRoutes";
import {
  Modal,
  ModalBlock,
  ModalFormGroupText,
  ModalFormLogin,
  ModalInput,
  ModalTitle,
  ModalFormGroup,
  ModalTittleWrap,
  PopUpWrap,
  ModalFormGroupLink,
} from "../../components/Common/Common.styled";
import { ModalBtnEnter, SignInContainer } from "./SignInPage.styled";
import { login } from "../../api";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function SignInPage({ setUserData }) {
  let navigate = useNavigate();

  const loginForm = {
    login: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(loginForm);

  const handleLogin = (e) => {
    e.preventDefault();

    login(loginData)
      .then((response) => {
        console.log(response);
        setUserData(response.user);
      })
      .then(() => {
        navigate(appRoutes.HOME);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <PopUpWrap>
      <SignInContainer>
        <Modal>
          <ModalBlock>
            <ModalTittleWrap>
              <ModalTitle>Вход</ModalTitle>
            </ModalTittleWrap>
            <ModalFormLogin id="formLogIn" action="#">
              <ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={loginData.login}
                onChange={handleInputChange}
              ></ModalInput>
              <ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                onChange={handleInputChange}
                value={loginData.password}
              ></ModalInput>
              <ModalBtnEnter id="btnEnter" onClick={handleLogin}>
                Войти
                {/* <ModalBtnEnterLink></ModalBtnEnterLink> */}
              </ModalBtnEnter>
              <ModalFormGroup>
                <ModalFormGroupText>
                  Нужно зарегистрироваться?
                </ModalFormGroupText>
                <ModalFormGroupLink to={appRoutes.SIGN_UP}>
                  Регистрируйтесь здесь
                </ModalFormGroupLink>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </SignInContainer>
    </PopUpWrap>
  );
}
