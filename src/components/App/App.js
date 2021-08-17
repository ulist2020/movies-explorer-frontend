import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
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
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import * as auth from "../../utils/auth";

function App() {
  const history = useHistory();
  const [isNavPopup, setisNavPopup] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorServer, setErrorServer] = useState(false);
  const [countCards, setCountCards] = useState(0);
  const [addCards, setaddCards] = useState(0);
  const [moreCards, setMoreCards] = useState(0);
  const [isAuthSuccess, setIsAuthSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [loggedIn, setloggedIn] = useState(false);

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
};

 //Нажатие на кнопку "ещё"
  const handleClickAddCards = () => {
    setMoreCards(moreCards + addCards);
  };

  function handleNavPopupClick() {
    setisNavPopup(true);
  }

  function closePopup() {
    setisNavPopup(false);
  }

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
  function handleFilterCheckbox(){
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

//Кличество карточек в зависимости от разрешения экрана
function countCard() {
  if (window.innerWidth >= 1024) {
    setCountCards(12);
    setaddCards(4);
  }
  if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
    setCountCards(8);
    setaddCards(2);
  }
  if (window.innerWidth <= 480 && window.innerWidth >= 320) {
    setCountCards(5);
    setaddCards(2);
  }
}

function timeoutResize() {
  setTimeout(countCard, 300);
};

  //Отрисовка всех карточек
  useEffect(() => {
    moviesApi.getInitialMovies()
    .then((results) => {
      setMovies(results)
    })
    .catch(() => {
      setErrorServer(true);
    });
  },[]);

//Отрисовка карточек в зависимости от разрешения экрана
useEffect(() => {
  countCard();
}, []);

//Изменение ширины экрана
useEffect(() => {
  window.addEventListener("resize", timeoutResize);
  return () => window.removeEventListener('resize', timeoutResize);
},);


function handleRegister(name, email, password) {
  auth.register(name, email, password)
     .then((result) => {
      if (result) {
        setIsAuthSuccess(true);
        history.push("/sign-in");
      }
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
      setIsAuthSuccess(false);
    });
};

function handleLogin(email, password) {
  auth.authorize(email, password)
     .then((result) => {
      if (result.token) {
        localStorage.setItem("jwt", result.token);
        setUserEmail({
          email: email,
        });
        setloggedIn(true);
        history.push("/movies");
      }
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
      setIsAuthSuccess(false);
    });
};

useEffect(() => {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    auth.getContent(jwt)
      .then((result) => {
         setUserEmail({
             email: result.data.email
         })
          setloggedIn(true);
          history.push("/movies");
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }
}, [history]);



  return (
          <div className="app">
            
              <Header 
                handleClick={handleNavPopupClick}
                email={userEmail.email}
              />

                <Switch>
                  <Route exact path="/">
                    <Main 
                    />
                  </Route>

                  <Route path="/movies">
                    <Movies 
                    loggedIn={loggedIn}

                    loading={loading}
                    errorServer={errorServer}
                    onUpdateForm={handleUpdateForm}
                    onClickCheckbox={handleFilterCheckbox}
                    movies={movies}
                    onButtonAdd={handleClickAddCards}
                    countCards={countCards + moreCards}
                  
                    />
                  </Route>

                  <Route path="/saved-movies">
                    <SavedMovies />
                  </Route>

                  <Route path="/profile">
                    <Profile />
                  </Route>

                  <Route path="/sign-in">
                    <Login 
                    onLogin={handleLogin}
                    />
                  </Route>

                  <Route path="/sign-up">
                    <Register 
                    onRegister={handleRegister}
                    isSuccess={isAuthSuccess}
                    />
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
