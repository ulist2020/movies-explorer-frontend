import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './Header';
import Promo from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';

function App() {
  return (
          <div className="page">
            <div className="page__container">

              <Header/>

              <Switch>
                <Route path="/">
                  <Promo
                      />
                </Route>
                <Route path="/movies">
                  <Movies
                    />
                </Route>
                <Route path="/saved-movies">
                  <SavedMovies
                    />
                </Route>
                <Route path="/profile">
                  <Profile
                    />
                </Route>
                <Route path="/sign-in">
                  <Login
                    />
                </Route>
                <Route path="/sign-up">
                  <Register
                    />
                </Route>
              </Switch>

              <Footer/>


            </div>
          </div>
  )
}

export default App;
