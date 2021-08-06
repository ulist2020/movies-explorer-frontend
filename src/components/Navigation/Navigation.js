import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="header__conaner navigation">
        <div className="navigation__contaner">
            <div className="header__logo"/>
                <nav className="navigation__links"> 
                    <Link to="/movies" className="header__sign-up navigation__movies" >
                        Фильмы
                    </Link>
                    <Link to="/saved-movies" className="header__sign-up navigation__saved-movies" >
                        Сохранённые фильмы
                    </Link>
                </nav>
        </div>
        <button className="navigation__button">Аккаунт</button>
        <div className="navigation__menu"/>
    </div>
  );
}

export default Navigation;