import { useState } from 'react'
import { Container } from '../Common/Common.styled'
import {
    Checkbox,
    HeaderBlock,
    HeaderBtnExit,
    HeaderButton,
    HeaderButtonLink,
    HeaderLogo,
    HeaderLogoImg,
    HeaderNav,
    HeaderPopUp,
    HeaderUser,
    HeaderWrapper,
    PopUserSetMail,
    PopUserSetName,
    PopUserSetTheme,
    PopUserSetThemeText,
    StyledLink,
} from './Header.styled'
import { appRoutes } from '../../lib/appRoutes'
import { useUser } from '../../hooks/useUser'
import { Link } from 'react-router-dom'
function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const { userData } = useUser()

    function toggleOpen() {
        setIsOpen((prevValue) => !prevValue)
    }

    return (
        <HeaderWrapper>
            <Container>
                <HeaderBlock>
                    <HeaderLogo>
                        <Link to={appRoutes.HOME}>
                            <HeaderLogoImg src="images/logo.png" alt="logo" />
                        </Link>
                    </HeaderLogo>
                    {/* <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div> */}
                    <HeaderNav>
                        <HeaderButton id="btnMainNew">
                            {' '}
                            <HeaderButtonLink to={appRoutes.NEW_CARD}>
                                {' '}
                                Создать новую задачу{' '}
                            </HeaderButtonLink>
                        </HeaderButton>
                        <HeaderUser onClick={toggleOpen}>
                            {userData.name}
                        </HeaderUser>
                        {isOpen && (
                            <HeaderPopUp id="user-set-target">
                                <PopUserSetName>{userData.name}</PopUserSetName>
                                <PopUserSetMail>
                                    {userData.login}
                                </PopUserSetMail>
                                <PopUserSetTheme>
                                    <PopUserSetThemeText>
                                        Темная тема
                                    </PopUserSetThemeText>
                                    <Checkbox></Checkbox>
                                </PopUserSetTheme>
                                <HeaderBtnExit>
                                    <StyledLink to={appRoutes.EXIT}>
                                        Выйти
                                    </StyledLink>
                                </HeaderBtnExit>
                            </HeaderPopUp>
                        )}
                    </HeaderNav>
                </HeaderBlock>
            </Container>
        </HeaderWrapper>
    )
}

export default Header
