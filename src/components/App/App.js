import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import '../../index.css';
import './App.css';
//import checkedShorts from '../Movies/FilterCheckbox/FilterCheckbox';
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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const history = useHistory();
  let [checkedShorts, setChecked] = useState(false);
  const [isNavPopup, setisNavPopup] = useState(false);
  const [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(false);
  const [errorServer, setErrorServer] = useState(false);
  const [countCards, setCountCards] = useState(0);
  const [addCards, setaddCards] = useState(0);
  const [moreCards, setMoreCards] = useState(0);
  const [isAuthSuccess, setIsAuthSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [loggedIn, setloggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isInfoTooltipOpen, setisInfoTooltipOpen] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  const moviesForBackend = (movies, savedMovies, shorts = false) => {
    //console.log(checkedShorts)
    let moviesList = movies.map((movie) => {
      let savedMovieIndex = savedMovies.findIndex(el => el.movieId === movie.id);
      let isSaved = false;
      let savedMovieId = null;
      if ( savedMovieIndex > -1) {
        isSaved = true;
        savedMovieId = savedMovies[savedMovieIndex]._id;
      }
      return {
        country: movie.country ? movie.country : "No country",
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image:  movie.image,
        trailer: movie.trailerLink,
        thumbnail: movie.image ? `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}` : '',
        nameRU: movie.nameRU ?? "",
        nameEN: movie.nameEN ?? "",
        movieId: movie.id,
        isSaved: isSaved,
        savedMovieId: savedMovieId
      }
    });

    if (shorts) {
      moviesList = moviesList.filter(movie => movie.duration <= 40);
    }
    return moviesList;
  }

  //Фильтр фильма по названию
  const moviesFind = (results, request = null, shorts = false) => {
    let moviesList = movies;
    if (shorts) {
      moviesList = moviesList.filter((movie) => {
        return movie.duration <= 40;
      })
    }
    if (request) {
      moviesList = moviesList.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(request.toLowerCase());
      })
    }
    return moviesList;
  };

  //Фильтр короткого фильма
  const moviesShort = (results) => {
    return results.filter((movie) =>{
      return movie.duration <= 40;
    });
  };

  const moviesForSaved = (movies,shorts = false) => {
    let moviesList = movies;
    if (shorts) {
      moviesList = movies.filter((movie) => {
        return movie.duration <= 40;
      })
    }
    return moviesList;
  }


 //Нажатие на кнопку "ещё"
  const handleClickAddCards = () => {
    setMoreCards(moreCards + addCards);
  };

  function handleNavPopupClick() {
    setisNavPopup(true);
  }

  function handleInfoTooltip() {
    setisInfoTooltipOpen(true);
  }

  function closePopup() {
    setisNavPopup(false);
    setisInfoTooltipOpen(false);
  }


  //Поиск фильма по названию
  function handleUpdateForm(request){
    setLoading(true);
     moviesApi.getInitialMovies()
    .then((results) => {
      
      //const moviesConvert = moviesForBackend(results);
      console.log(results)
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
    checkedShorts = !checkedShorts;
    setChecked(checkedShorts);

    setLoading(true);
    showAllCards();
    setLoading(false);
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


    function showAllCards() {
      setLoading(true);
      moviesApi.getInitialMovies()
      .then((results) => {
        mainApi.getInitialCards()
        .then((res) => {
          const moviesConvert = moviesForBackend(results,res,checkedShorts);
          setMovies(moviesConvert);
          setSavedMovies(moviesForSaved(res,checkedShorts));
        })
        .catch((err) => {
          console.log(err);
        });
    
      })
      .catch(() => {
        setErrorServer(true);
      })
      .finally(() => {
        setLoading(false);
      });
    
    }
  //Отрисовка всех карточек
  useEffect(() => {
    showAllCards();
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

function handleAuthSuccess(item) {
  setIsAuthSuccess(item);
}

//Регистрация
function handleRegister(name, email, password) {
  auth.register(name, email, password)
     .then((result) => {
      if (result) {
        handleAuthSuccess(true);
        handleInfoTooltip();
        history.push("/sign-in");
      }
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
      handleAuthSuccess(false);
      handleInfoTooltip();
    });
};

//Авторизация
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
      handleInfoTooltip();
    })
    .finally(() => {
      handleGetSavedMovies();
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
      })
      .finally(() => {
        handleGetSavedMovies();
      });
  }
}, [history]);

useEffect(() => {
  mainApi.getUser()
  .then((results) => {
    setCurrentUser(
      {
        _id: results.data._id,
        name: results.data.name,
        email: results.data.email,
    })
  })
  .catch((err) => console.log(`Ошибка: ${err}`));
},[])

//Редактирование пользователя
function handleUpdateUser(currentUser) {
  mainApi.editUser(currentUser)
    .then((results) =>{
      console.log(results)
      setCurrentUser(results);
      handleAuthSuccess(true);
      handleInfoTooltip();
    })
    .catch((err) => console.log(`Ошибка: ${err}`));

}

function handleLogOut () {
  localStorage.removeItem("jwt");
  setloggedIn(false);
  setUserEmail(' ');
  history.push("/");
};

function handleSavedMovies(movie)  {

  mainApi.addSaveMovies(movie)
    .then((results) => {
      
        setSavedMovies((item) => [...item, results]);
      
    })
    .catch((err) => {
      console.log(err);
    })    
    .finally(() => {
      showAllCards();
      //handleGetSavedMovies();
    });
};


//Отрисовка всех сохраненных карточек
const handleGetSavedMovies = () => {
  mainApi.getInitialCards()
    .then((res) => {
      setSavedMovies(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Поиск короткого сохраненного фильма
function handleFilterCheckboxSave(){
  checkedShorts = !checkedShorts;
  setChecked(checkedShorts);

  setLoading(true);
  mainApi.getInitialCards()
  .then((results) => {
    setSavedMovies(moviesShort(results))
    
  })
  .catch(() => {
    setErrorServer(true);
  })
  .finally(() => {
    setLoading(false);
  });
}

//Поиск сохраненного фильма по названию
function handleUpdateFormSave(request){
  setLoading(true);
  mainApi.getInitialCards()
  .then((results) => {
    setSavedMovies(moviesFind(moviesForSaved(results,checkedShorts), request))
    
  })
  .catch(() => {
    setErrorServer(true);
  })
  .finally(() => {
    setLoading(false);
  });
}


const handleDeleteMovies = (id) => {
  mainApi.deleteCard(id)
    .then(() => {
      const newCards = savedMovies.filter((movie) => 
         movie._id !== id
      );
        setSavedMovies(newCards);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      showAllCards();
    })
};


  return (
    <CurrentUserContext.Provider value={currentUser}>
          <div className="app">
            
              <Header 
                handleClick={handleNavPopupClick}
                email={userEmail.email}
                loggedIn={loggedIn}
              />

                <Switch>
                  <Route exact path="/">
                    <Main 
                    />
                  </Route>

                  <ProtectedRoute
                      exact
                      path="/movies"
                      loggedIn={loggedIn}
                      component={Movies} 
                      loading={loading}
                      errorServer={errorServer}
                      onUpdateForm={handleUpdateForm}
                      onClickCheckbox={handleFilterCheckbox}
                      movies={movies}
                      onButtonAdd={handleClickAddCards}
                      countCards={countCards + moreCards}
                      onSavedMovies={handleSavedMovies}
                      onDeleteMovies={handleDeleteMovies}
                      savedMovies={savedMovies}
                      checkedShorts={checkedShorts}
                    />
                  
                  <ProtectedRoute 
                      exact
                      path="/saved-movies"
                      loggedIn={loggedIn}
                      component={SavedMovies}
                      savedMovies={savedMovies}
                      onClickCheckbox={handleFilterCheckbox}
                      onUpdateForm={handleUpdateFormSave}
                      onDeleteMovies={handleDeleteMovies}
                      loading={loading}
                      errorServer={errorServer}
                      movies={savedMovies}
                      checkedShorts={checkedShorts}
                    />

                  <ProtectedRoute 
                      exact
                      path="/profile"
                      loggedIn={loggedIn}
                      component={Profile}
                      onUpdateUser={handleUpdateUser}
                      onLogout={handleLogOut}
                    />
                  
                  <Route path="/sign-in">
                    <Login 
                    onLogin={handleLogin}
                    />
                  </Route>

                  <Route path="/sign-up">
                    <Register 
                    onRegister={handleRegister}
                    />
                  </Route>

                  <Route path="*">
                    <PageNotFound />
                  </Route>

                </Switch>

              <Footer />

                <PopupNav
                  isOpen={isNavPopup}
                  onClose={closePopup}  
                />
                <InfoTooltip
                isOpen={isInfoTooltipOpen}
                onClose={closePopup}
                isSuccess={isAuthSuccess}
              />
              
            </div>
            </CurrentUserContext.Provider>     
  )
}

export default App;
