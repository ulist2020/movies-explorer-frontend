import './Login.css';
import { Link } from "react-router-dom";
import ButtonRegister from "../Register/ButtonRegister/ButtonRegister";
import Logo from "../Logo/Logo";

function Login() {
  return (
    <form className="register">
        <div className="register__contaner">
          <Link to="/"><Logo /></Link>
          <h3 className="register__header">Рады видеть!</h3>
        </div>
            <p className="register__description">E-mail</p>
              <input id="register-email" className="register__input" name="email" tape="email" required/>
              <span className="register__error" />
            <p className="register__description">Пароль</p>
              <input id="register-password" className="register__input register__input_error"  name="password" type="password" minLength="2" maxLength="20" required/>
              <span className="register__error register__error_visible">Что-то пошло не так...</span> 
                <ButtonRegister
                  className="but__login"
                  buttonText="Войти"
                  text="Ещё не зарегистрированы?"
                  link="/sign-up"
                  buttonLink="Регистрация"
                />
    </form>
  )
}
export default Login;