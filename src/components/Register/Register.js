import { Link } from "react-router-dom";
import React from 'react';
import './Register.css';
import ButtonRegister from "./ButtonRegister/ButtonRegister";
import Logo from "../Logo/Logo";
import  Validation  from '../../utils/Validation';

function Register({onRegister}) {
    const {values, handleChange, errors, isValid} = Validation({});

    function handleSubmit(evt) {
        evt.preventDefault();
            if (isValid) {
                onRegister(values.name, values.email, values.password);
            }
    }

  return (
    <form className="register" onSubmit={handleSubmit}>
        <div className="register__contaner">
            <Link to="/"><Logo /></Link>
            <h3 className="register__header">Добро пожаловать!</h3>
        </div>
            <p className="register__description">Имя</p>
                <input 
                onChange={handleChange}
                className={`register__input ${errors && errors["name"] && 'register__input_error'}`} 
                name="name" 
                tape="text" 
                minLength="2" 
                maxLength="20" 
                required/>
                <span className="register__error">{errors && errors["name"] && errors["name"]}</span>
            <p className="register__description">E-mail</p>
                <input
                onChange={handleChange}
                className={`register__input ${errors && errors["name"] && 'register__input_error'}`} 
                name="email" 
                tape="email"
                pattern="^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$" 
                required/>
                <span className="register__error">{errors && errors["email"] && errors["email"]}</span>
            <p className="register__description">Пароль</p>
                <input
                onChange={handleChange} 
                className={`register__input ${errors && errors["name"] && 'register__input_error'}`} 
                name="password" 
                type="password" 
                minLength="8" 
                maxLength="20" 
                required/>
                <span className="register__error">{errors && errors["password"] && errors["password"]}</span> 
                <ButtonRegister
                    disabled={!isValid}
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