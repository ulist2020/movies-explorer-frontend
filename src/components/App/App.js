import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import '../../index.css';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import PopupNav from '../PopupNav/PopupNav';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [isNavPopup, setisNavPopup] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorServer, setErrorServer] = useState(false);

  function handleNavPopupClick() {
    setisNavPopup(true);
  }

  function closePopup() {
    setisNavPopup(false);
  }

  //Фильтр фильма по названию
  const moviesFind = (results, request) => {
    return results.filter((movie) =>{
      return movie.nameRU.toLowerCase().includes(request.toLowerCase());
    });
  };

  //Фильтр короткого фильма
  const moviesShort = (results) => {
    return results.filter((movie) =>{
    return movie.duration <= 40;
  });
}


  //Отрисовка всех карточек
  useEffect(() => {
    moviesApi.getInitialMovies()
    .then((results) => {
      setMovies(results)
    })
    .catch(() => {
      setErrorServer(true);
    });
  },[])

  //Поиск фильма по названию
  function handleUpdateForm(request){
    setLoading(true);
     moviesApi.getInitialMovies()
    .then((results) => {
      setMovies(moviesFind(results, request))
      
    })
    .catch(() => {
      setErrorServer(true);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  //Поиск короткого фильма
  function handleFilterCheckbox(request){
    setLoading(true);
     moviesApi.getInitialMovies()
    .then((results) => {
      setMovies(moviesShort(results))
      
    })
    .catch(() => {
      setErrorServer(true);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  return (
          <div className="app">
            
              <Header 
                handleClick={handleNavPopupClick}
              />

                <Switch>
                  <Route exact path="/">
                    <Main 
                    />
                  </Route>

                  <Route path="/movies">
                    <Movies 

                    loading={loading}
                    errorServer={errorServer}
                    onUpdateForm={handleUpdateForm}
                    onClickCheckbox={handleFilterCheckbox}
                    movies={movies}
                    />
                  </Route>

                  <Route path="/saved-movies">
                    <SavedMovies />
                  </Route>

                  <Route path="/profile">
                    <Profile />
                  </Route>

                  <Route path="/sign-in">
                    <Login />
                  </Route>

                  <Route path="/sign-up">
                    <Register />
                  </Route>

                  <Route path="*">
                    <PageNotFound />
                  </Route>

                </Switch>

              <Footer />

                <PopupNav
                isOpen={isNavPopup}
                onClose={closePopup}  />
              
            </div>
          
  )
}

export default App;
