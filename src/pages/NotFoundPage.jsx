import { Link } from "react-router-dom";
import { appRoutes } from "../lib/appRoutes";

export default function NotFoundPage() {
    return (
        <><p> Страницы не существует </p><Link to={appRoutes.HOME}> Вернуться на главную </Link></>
    )
}