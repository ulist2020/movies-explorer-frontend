import './MoviesCardList.css';
import MoviesCardSave from "../MoviesCardSave/MoviesCardSave";

function MoviesCardList() {
  return (
      <div className="list">
        <ul className="list__contaner">
            <MoviesCardSave />
            <MoviesCardSave />
            <MoviesCardSave />
        </ul>
    </div>
  )
}
export default MoviesCardList;