import './SavedMovies.css';
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from '../Movies/Preloader/Preloader';
import ButtonAdd from "../Movies/ButtonAdd/ButtonAdd";


function SavedMovies({movies, onUpdateForm, loading, errorServer, onClickCheckbox, countCards, onButtonAdd, onSavedMovies}) {
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
        isSavedMoviesPage={false}   
        />
        {countCards < movies.length && (
        <ButtonAdd 
        onButtonAdd={onButtonAdd}
        />
        )}
    </div>
  )
}
export default SavedMovies;