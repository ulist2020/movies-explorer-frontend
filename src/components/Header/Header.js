import React from 'react';
import './Header.css';
import { Route, Link, Switch, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
    const location = useLocation();
  return (
        <div className={`header ${(location.pathname === '/sign-up' || location.pathname === '/sign-in')  && 'header__none'}`}>
            <Switch>
                <Route exact path="/">      
                    <div className="header__logo"/>
                        <div className="header-contaner">
                            <Link to="/sign-up" className="header__sign-up" >
                                 Регистрация
                            </Link>
                            <Link to="/sign-in" className="header__sign-in" >
                                 Войти
                            </Link>
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
        </div>
  );
}

export default Header;