import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonAdd from "../ButtonAdd/ButtonAdd";

function MoviesCardList() {
  return (
      <div className="list">
        <ul className="list__contaner">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
        </ul>
        <ButtonAdd />
    </div>
  )
}
export default MoviesCardList;