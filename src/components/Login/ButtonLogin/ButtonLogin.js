import './ButtonLogin.css';
import { Link } from "react-router-dom";

function ButtonLogin() {
  return (
    <div className="but but__login">
        <button className="but__profile" tape="submit" aria-label="Войти">Войти</button>
          <p className="but__register">Ещё не зарегистрированы?
              <Link to="/sign-up"  className="but__register-auth but__register-auth_register">Регистрация</Link>
          </p>
    </div>
  )
}
export default ButtonLogin;