import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies(props) {
  return (
    <div className="movies">
        <SearchForm />
        <MoviesCardList 
        movies={props.movies}/>
    </div>
  )
}
export default Movies;