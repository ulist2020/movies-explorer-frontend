import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="header__contaner navigation">
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
        <Link to="/profile" className="navigation__button">Аккаунт</Link>
        <div className="navigation__menu" onClick={props.handleClick}/>
    </div>
  );
}

export default Navigation;