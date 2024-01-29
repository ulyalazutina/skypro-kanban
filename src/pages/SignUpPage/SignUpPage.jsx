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
  ModalEtnEignupEntLink,
} from "./SignUpPage.styled";

export default function SignUpPage() {
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
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <ModalInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <ModalEtnEignupEnt id="SignUpEnter">
                <ModalEtnEignupEntLink>
                  Зарегистрироваться
                </ModalEtnEignupEntLink>
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
