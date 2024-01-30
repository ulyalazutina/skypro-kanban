import { appRoutes } from "../../lib/appRoutes";
import {
  Modal,
  ModalBlock,
  ModalFormGroup,
  ModalFormGroupLink,
  ModalFormGroupText,
  ModalFormLogin,
  ModalInput,
  ModalTitle,
  ModalTittleWrap,
  PopUpWrap,
} from "../../components/Common/Common.styled";
import {
  ContainerSignup,
  ModalEtnEignupEnt,
  // ModalEtnEignupEntLink,
} from "./SignUpPage.styled";
import { signUp } from "../../api";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function SignUpPage({ setUserData }) {
  let navigate = useNavigate();

  const registrForm = {
    name: "",
    login: "",
    password: "",
  };

  const [registrData, setRegistrData] = useState(registrForm);

  const handleRegistr = (e) => {
    e.preventDefault();

    signUp(registrData)
      .then((response) => {
        console.log(response);
        setUserData(response.user);
      })
      .then(() => {
        navigate(appRoutes.HOME)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRegistrData({
      ...registrData,
      [name]: value,
    });
  };

  return (
    <PopUpWrap>
      <ContainerSignup>
        <Modal>
          <ModalBlock>
            <ModalTittleWrap>
              <ModalTitle>Регистрация</ModalTitle>
            </ModalTittleWrap>
            <ModalFormLogin id="formLogUp" action="#">
              <ModalInput
                type="text"
                name="name"
                id="first-name"
                placeholder="Имя"
                onChange={handleInputChange}
                value={registrData.name}
              />
              <ModalInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                onChange={handleInputChange}
                value={registrData.login}
              />
              <ModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                onChange={handleInputChange}
                value={registrData.password}
              />
              <ModalEtnEignupEnt id="SignUpEnter" onClick={handleRegistr}>
                {/* <ModalEtnEignupEntLink > */}
                Зарегистрироваться
                {/* </ModalEtnEignupEntLink> */}
              </ModalEtnEignupEnt>
              <ModalFormGroup></ModalFormGroup>
              <ModalFormGroupText>
                Уже есть аккаунт?
                <ModalFormGroupLink to={appRoutes.SIGN_IN}>
                  {" "}
                  Войдите здесь
                </ModalFormGroupLink>
              </ModalFormGroupText>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignup>
    </PopUpWrap>
  );
}
