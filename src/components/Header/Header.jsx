import { useState } from "react";
import { Container } from "../Common/Common.styled";
import { HeaderBlock, HeaderNav, HeaderWrapper, PopUserSetMail, PopUserSetName, PopUserSetTheme, PopUserSetThemeText } from "./Header.styled";
function Header({addCard}) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen((prevValue) => !prevValue);
    }

    return (
        <HeaderWrapper>
            <Container>
                <HeaderBlock>
                    <div className="header__logo _show _light">
                        <a href="" target="_self">
                            <img src="images/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="header__logo _dark">
                        <a href="" target="_self">
                            <img src="images/logo_dark.png" alt="logo" />
                        </a>
                    </div>
                    <HeaderNav>
                        <button className="header__btn-main-new _hover01" id="btnMainNew" onClick={addCard}>
                           Создать новую задачу
                        </button>
                        <a className="header__user _hover02" onClick={toggleOpen}>
                            Ivan Ivanov
                        </a>
                        {isOpen && (
                            <div
                                className="header__pop-user-set pop-user-set"
                                id="user-set-target"
                            >
                                <PopUserSetName>Ivan Ivanov</PopUserSetName>
                                <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
                                <PopUserSetTheme>
                                <PopUserSetThemeText>Темная тема</PopUserSetThemeText>
                                    <input type="checkbox" className="checkbox" name="checkbox" />
                                </PopUserSetTheme>
                                <button type="button" className="_hover03">
                                    <a href="#popExit">Выйти</a>
                                </button>
                            </div>
                        )}
                    </HeaderNav>
                    </HeaderBlock>
                </Container>
                </HeaderWrapper>
    );
}

export default Header;
