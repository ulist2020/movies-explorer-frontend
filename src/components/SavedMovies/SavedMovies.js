import './SavedMovies.css';
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from '../Movies/Preloader/Preloader';

function SavedMovies({ onUpdateForm, loading, errorServer, onClickCheckbox, countCards, onButtonAdd, savedMovies, onDeleteMovies,checkedShorts}) {
  return (
    <div className="movies">
        <SearchForm 
        onUpdateForm={onUpdateForm}
        onClickCheckbox={onClickCheckbox}
        checkedShorts = {checkedShorts}
          />
        {loading && (<Preloader />)}
        {!savedMovies.length && !errorServer && (
        <p className="movies__not-found">Ничего не найдено</p>
        )}
        {errorServer && (<p className="movies__not-found">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>)}
        <MoviesCardList 
        savedMovies={savedMovies}
        movies={savedMovies}
        countCards={countCards}
        isSavedMoviesPage={false}
        onDeleteMovies={onDeleteMovies}   
        />
    </div>
  )
}
export default SavedMovies;