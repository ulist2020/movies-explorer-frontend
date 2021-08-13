import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from './Preloader/Preloader';

function Movies({movies, onUpdateForm, loading, errorServer}) {
  return (
    <div className="movies">
        <SearchForm 
        onUpdateForm={onUpdateForm}
          />
        {loading && (<Preloader />)}
        {!movies.length && !errorServer && (
        <p className="movies__not-found">Ничего не найдено</p>
        )}
        {errorServer && (<p className="movies__not-found">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>)}
        <MoviesCardList 
        movies={movies}/>
    </div>
  )
}
export default Movies;