import { Link } from "react-router-dom";
import { appRoutes } from "../lib/appRoutes";

export default function NotFoundPage() {
    return (
        <div className="notFoundWrap">
        <p className="notFoundText"> Страницы не существует </p>
        <Link to={appRoutes.HOME}> Вернуться на главную </Link>
        </div>
    )
}