import React from 'react';
import './Header.css';
import { Route, Link, Switch } from "react-router-dom";

function Header() {
  return (
    <div className="header">
        <div className="header__logo"/>
            <div className="header-contaner">
                <Link to="./sign-up" className="header__sign-up" >
                    Регистрация
                </Link>
                <Link to="./sign-in" className="header__sign-in" >
                    Войти
                </Link>
            </div>
    </div>
  );
}

export default Header;