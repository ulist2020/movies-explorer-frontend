import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './Register.css';
import ButtonRegister from "./ButtonRegister/ButtonRegister";
import Logo from "../Logo/Logo";

function Register({onRegister}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleChangeName(evt) {
        setName(evt.target.value);
      }

    function handleChangeEmail(evt) {
        setEmail(evt.target.value);
    }

    function handleChangePassword(evt) {
        setPassword(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onRegister(name, email, password);
    }
  return (
    <form className="register" onSubmit={handleSubmit}>
        <div className="register__contaner">
            <Link to="/"><Logo /></Link>
            <h3 className="register__header">Добро пожаловать!</h3>
        </div>
            <p className="register__description">Имя</p>
                <input 
                value={name}
                onChange={handleChangeName}
                id="register-name" 
                className="register__input" 
                name="name" 
                tape="text" 
                minLength="2" 
                maxLength="20" 
                required/>
                <span className="register__error" />
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
                    className="but"
                    buttonText="Зарегистрироваться"
                    text="Уже зарегистрированы?"
                    link="/sign-in"
                    buttonLink="Войти"
                 />
    </form>
  )
}
export default Register;