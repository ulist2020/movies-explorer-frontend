import './PopupNav.css';
import { Link } from "react-router-dom";


function PopupNav(props) {
    return (
        <div className={props.isOpen ? 'popup popup_opened' : 'popup'}>
            <div className="popup__container">
                <button onClick={props.onClose} className="popup__close-button" type="reset" aria-label="Закрыть окно редактирования" />
                    <div className="popup__block">
                        <Link className="popup__menu" to="/">Главная</Link>
                        <Link className="popup__menu" to="/movies">Фильмы</Link>
                        <Link className="popup__menu" to="/saved-movies">Сохранённые фильмы</Link>
                        <Link className="navigation__button  popup__button" to="/profile">Аккаунт</Link>
                    </div>
            </div>
        </div>
    )
  }
  export default PopupNav;