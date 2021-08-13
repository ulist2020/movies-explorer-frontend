import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from './Preloader/Preloader';

function Movies({movies, onUpdateForm, loading}) {
  return (
    <div className="movies">
        <SearchForm 
        onUpdateForm={onUpdateForm}
          />
        {loading && (<Preloader />)}
        <MoviesCardList 
        movies={movies}/>
    </div>
  )
}
export default Movies;