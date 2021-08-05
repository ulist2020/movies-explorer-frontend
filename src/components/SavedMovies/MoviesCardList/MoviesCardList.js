import './MoviesCardList.css';
import MoviesCard from "../../Movies/MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
      <div className="list">
        <ul className="list__contaner">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
        </ul>
    </div>
  )
}
export default MoviesCardList;