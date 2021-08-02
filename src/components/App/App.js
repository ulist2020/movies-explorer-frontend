import React from 'react';
import { Route, Switch } from "react-router-dom";
import '../../index.css';
import './App.css';
import Header from '../Header/Header';
import Promo from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';

function App() {
  return (
          <div className="app">
            
              <Header/>

              <Switch>
                <Route path="/">
                </Route>
                <Route path="/movies">
                </Route>
                <Route path="/saved-movies">
                </Route>
                <Route path="/profile">
                </Route>
                <Route path="/sign-in">
                </Route>
                <Route path="/sign-up">
                </Route>
              </Switch>



            </div>
          
  )
}

export default App;
