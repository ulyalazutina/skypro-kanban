import { useState } from "react";
import { Container } from "../Common/Common.styled";
import {
  Checkbox,
  HeaderBlock,
  HeaderBtnExit,
  HeaderButton,
  HeaderNav,
  HeaderPopUp,
  HeaderUser,
  HeaderWrapper,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
  PopUserSetThemeText,
  StyledLink,
} from "./Header.styled";
// import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { userData } = useUser();

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
            <HeaderButton id="btnMainNew">
              {" "}
              <Link to={appRoutes.NEW_CARD}> Создать новую задачу </Link>
            </HeaderButton>
            <HeaderUser onClick={toggleOpen}>{userData.name}</HeaderUser>
            {isOpen && (
              <HeaderPopUp id="user-set-target">
                <PopUserSetName>{userData.name}</PopUserSetName>
                <PopUserSetMail>{userData.login}</PopUserSetMail>
                <PopUserSetTheme>
                  <PopUserSetThemeText>Темная тема</PopUserSetThemeText>
                  {/* <input type="checkbox" className="checkbox" name="checkbox" /> */}
                  <Checkbox></Checkbox>
                </PopUserSetTheme>
                <HeaderBtnExit>
                  <StyledLink to={appRoutes.EXIT}>Выйти</StyledLink>
                </HeaderBtnExit>
              </HeaderPopUp>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
