import './Register.css';
import ButtonRegister from "./ButtonRegister/ButtonRegister";

function Register() {
  return (
    <form className="register">
        <div className="header__logo"/>
            <h3 className="register__header">Добро пожаловать!</h3>
                <p className="register__description">Имя</p>
                    <input id="register-name" className="register__input" placeholder="Имя" name="name" tape="text" minLength="2" maxLength="20" required/>
                    <span className="register__error" />
                <p className="register__description">E-mail</p>
                    <input id="register-email" className="register__input" placeholder="E-mail" name="email" tape="email" required/>
                    <span className="register__error" />
                <p className="register__description">Пароль</p>
                    <input id="register-password" className="register__input register__input_error" placeholder="Пароль" name="password" type="password" minLength="2" maxLength="20" required/>
                    <span className="register__error register__error_visible">Что-то пошло не так...</span> 
                <ButtonRegister />
    </form>
  )
}
export default Register;