import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";

function Movies() {
  return (
    <div className="movies">
        <SearchForm />
        <MoviesCardList />
    </div>
  )
}
export default Movies;