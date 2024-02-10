import { appRoutes } from '../../lib/appRoutes'
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
} from '../../components/Common/Common.styled'
import { ModalBtnEnter, SignInContainer } from './SignInPage.styled'
import { login } from '../../api'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useUser } from '../../hooks/useUser'

export default function SignInPage() {
    const { loginUser } = useUser()
    let navigate = useNavigate()

    const [loginError, setLoginError] = useState(null)

    const loginForm = {
        login: '',
        password: '',
    }

    const [loginData, setLoginData] = useState(loginForm)

    const handleLogin = (e) => {
        e.preventDefault()
        login(loginData)
            .then((response) => {
                console.log(response)
                loginUser(response.user)
            })
            .then(() => {
                navigate(appRoutes.HOME)
            })
            .catch((error) => {
                setLoginError(error.message)
            })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setLoginData({
            ...loginData,
            [name]: value,
        })
    }

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
                            {loginError ? (
                                <p style={{ color: 'red' }}>{loginError}</p>
                            ) : (
                                ''
                            )}
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
    )
}
