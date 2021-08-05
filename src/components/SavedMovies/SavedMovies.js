import './SavedMovies.css';
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <div className="movies">
        <SearchForm />
        <MoviesCardList />
    </div>
  )
}
export default SavedMovies;