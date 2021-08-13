import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import './Footer.css';

const routeVisible = ['/', '/movies', '/saved-movies']

function Footer() {
  const location = useLocation();
    return (
      <footer className={`footer ${(location.pathname === "/sign-up" 
        || location.pathname === "/sign-in"
        || location.pathname === "/profile")  && "footer_none"}
        ${(location.pathname === {routeVisible}) && "footer"}`}>
          <Switch>
            <Route exact path = {routeVisible}> 
              <p className="project__header footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</p>
              <div className="footer__block">
                  <p className="footer__year">© 2021</p>
                  <div className="footer__links">
                    <a href="https://praktikum.yandex.ru" className="about-link footer__link">Яндекс.Практикум</a>
                    <a href="https://github.com/ulist2020" className="about-link footer__link">Github</a>
                    <a href="https://www.instagram.com/juliy_smirnovaa/" className="about-link footer__link">Instagram</a>
                  </div>
              </div>
            </Route>
          </Switch>
      </footer>
    )
  }
  export default Footer;