import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import ButtonRegister from "../Register/ButtonRegister/ButtonRegister";
import Logo from "../Logo/Logo";

function Login({onLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!email || !password) {
      return;
    }
    onLogin(email, password);
  }

  return (
    <form className="register" onSubmit={handleSubmit}>
        <div className="register__contaner">
          <Link to="/"><Logo /></Link>
          <h3 className="register__header">Рады видеть!</h3>
        </div>
            <p className="register__description">E-mail</p>
              <input 
              value={email}
              onChange={handleChangeEmail} 
              id="register-email" 
              className="register__input" 
              name="email" 
              tape="email" 
              required/>
              <span className="register__error" />
            <p className="register__description">Пароль</p>
              <input 
              value={password} 
              onChange={handleChangePassword} 
              id="register-password" 
              className="register__input register__input_error"  
              name="password" 
              type="password" 
              minLength="2" 
              maxLength="20" 
              required/>
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