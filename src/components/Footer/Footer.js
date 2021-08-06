import React from 'react';
import { useLocation } from "react-router-dom";
import './Footer.css';


function Footer() {
  const location = useLocation();
    return (
      <section className={`footer ${(location.pathname === '/sign-up' || location.pathname === '/sign-in')  && 'header__none'}`}>
          <p className="project__header footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__block">
              <p className="footer__year">© 2021</p>
              <div className="footer__links">
                <a href="https://praktikum.yandex.ru" className="about-link footer__link">Яндекс.Практикум</a>
                <a href="https://github.com/ulist2020" className="about-link footer__link">Github</a>
                <a href="https://www.instagram.com/juliy_smirnovaa/" className="about-link footer__link">Instagram</a>
              </div>
          </div>
      </section>
    )
  }
  export default Footer;