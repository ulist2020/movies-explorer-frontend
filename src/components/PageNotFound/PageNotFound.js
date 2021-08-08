import './PageNotFound.css';
import { Link } from "react-router-dom";


function PageNotFound() {
    return (
        <div className="page">
            <h2 className="page__title">404</h2>
            <p className="page__subtitle">Страница не найдена</p>
            <Link className="page__link" to="/">Назад</Link>
        </div>
    )
  }
  export default PageNotFound;