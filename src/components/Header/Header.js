import React from 'react';
import './Header.css';
import { Route, Link, Switch, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

function Header({loggedIn, handleClick}) {
    const location = useLocation();
  return (
        <header className={`header ${(location.pathname === "/sign-up" 
        || location.pathname === "/sign-in")  && "header_none"}
        ${location.pathname=== "/" && "header"}`}>
            <Switch>
                <Route exact path="/"> 
                {!loggedIn && (
                    <div className="header__contaner">     
                        <Link to="/"><Logo /></Link>
                            <div className="header__block">
                                <Link to="/sign-up" className="header__sign-up" >
                                    Регистрация
                                </Link>
                                <Link to="/sign-in" className="header__sign-in" >
                                    Войти
                                </Link>
                        </div>
                    </div>
                    )}
                    {loggedIn && (
                      <Navigation />
                    )}
                </Route>
                <Route path="/movies">
                    <Navigation
                    handleClick={handleClick}
                    
                    />
                </Route>
                <Route path="/saved-movies">
                    <Navigation/>
                </Route>
                <Route path="/profile">
                    <Navigation/>
                </Route>
            </Switch>
        </header>
  );
}

export default Header;