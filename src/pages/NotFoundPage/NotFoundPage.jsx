import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { NotFoundText, NotFoundWrap } from "./NotFoundPage.styled";

export default function NotFoundPage() {
  return (
    <NotFoundWrap>
      <NotFoundText>Страницы не существует</NotFoundText>
      <Link to={appRoutes.HOME}> Вернуться на главную </Link>
    </NotFoundWrap>
  );
}
