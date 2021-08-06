import './ButtonRegister.css';
import { Link } from "react-router-dom";

function ButtonRegister(props) {
  return (
    <div className="but but_register">
        <button className="but__profile but__profile_register" tape="submit" aria-label="Зарегистрироваться">Зарегистрироваться</button>
          <p className="but__register but__register_register">Уже зарегистрированны?
              <Link to="/sign-in" className="but__register-auth but__register-auth_register">Войти</Link>
          </p>
    </div>
  )
}
export default ButtonRegister;