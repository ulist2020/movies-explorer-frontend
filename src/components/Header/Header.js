import React from 'react';
import './Header.css';
import { Route, Link, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <Switch>
        <Route exact path="/">
            <div className="header">
                <div className="header__logo"/>
                    <div className="header-contaner">
                        <Link to="/sign-up" className="header__sign-up" >
                            Регистрация
                        </Link>
                        <Link to="/sign-in" className="header__sign-in" >
                            Войти
                        </Link>
                    </div>
            </div>
        </Route>
        <Route path="/movies">
            <Navigation/>
        </Route>
        <Route path="/saved-movies">
            <Navigation/>
        </Route>
        <Route path="/profile">
            <Navigation/>
        </Route>
    </Switch>
  );
}

export default Header;