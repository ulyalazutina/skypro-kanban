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
import {
  ModalBtnEnter,
  ModalBtnEnterLink,
  SignInContainer,
} from "./SignInPage.styled";

export default function SignInPage() {
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
              ></ModalInput>
              <ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              ></ModalInput>
              <ModalBtnEnter id="btnEnter">
                <ModalBtnEnterLink>Войти</ModalBtnEnterLink>
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
