import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from './Preloader/Preloader';
import ButtonAdd from "../Movies/ButtonAdd/ButtonAdd";

function Movies({movies, onUpdateForm, loading, errorServer, onClickCheckbox, countCards, onButtonAdd, onSavedMovies, savedMovies, onDeleteMovies}) {

  return (
    <div className="movies">
        <SearchForm 
        onUpdateForm={onUpdateForm}
        onClickCheckbox={onClickCheckbox}
          />
        {loading && (<Preloader />)}
        {!movies.length && !errorServer && (
        <p className="movies__not-found">Ничего не найдено</p>
        )}
        {errorServer && (<p className="movies__not-found">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>)}
        <MoviesCardList 
        movies={movies}
        countCards={countCards}
        onSavedMovies={onSavedMovies} 
        isSavedMoviesPage ={true}
        savedMovies={savedMovies}
        onDeleteMovies={onDeleteMovies}  
        />
        {countCards < movies.length && (
        <ButtonAdd 
        onButtonAdd={onButtonAdd}
        />
        )}
    </div>
  )
}
export default Movies;