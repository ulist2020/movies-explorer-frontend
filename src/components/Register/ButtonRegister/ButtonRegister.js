import './ButtonRegister.css';
import { Link } from "react-router-dom";

function ButtonRegister() {
  return (
    <div className="but">
        <button className="but__profile" tape="submit" aria-label="Зарегистрироваться">Зарегистрироваться</button>
          <p className="but__register">Уже зарегистрированны?
              <Link to="/sign-in" className="but__register-auth">Войти</Link>
          </p>
    </div>
  )
}
export default ButtonRegister;