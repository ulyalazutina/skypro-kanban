import { appRoutes } from '../../lib/appRoutes'
import {
    PopExitWrap,
    PopExitContainer,
    PopExitBlock,
    PopExitTittleWrap,
    PopExitTittle,
    PopExitForm,
    PopExitFormGroup,
    PopExitYes,
    PopExitNo,
    PopExitNoLink,
} from './PopExit.styled'
import { useUser } from '../../hooks/useUser'

function PopExit() {
    const { logoutUser } = useUser()

    const logout = (e) => {
        e.preventDefault()
        logoutUser()
    }

    return (
        <PopExitWrap>
            <PopExitContainer>
                <PopExitBlock>
                    <PopExitTittleWrap>
                        <PopExitTittle>Выйти из аккаунта?</PopExitTittle>
                    </PopExitTittleWrap>
                    <PopExitForm id="formExit" action="#">
                        <PopExitFormGroup>
                            <PopExitYes id="exitYes" onClick={logout}>
                                {/* <PopExitYesLink to={appRoutes.SIGN_IN}> */}
                                Да, выйти
                                {/* </PopExitYesLink> */}
                            </PopExitYes>
                            <PopExitNo id="exitNo">
                                <PopExitNoLink to={appRoutes.HOME}>
                                    Нет, остаться
                                </PopExitNoLink>
                            </PopExitNo>
                        </PopExitFormGroup>
                    </PopExitForm>
                </PopExitBlock>
            </PopExitContainer>
        </PopExitWrap>
    )
}

export default PopExit
