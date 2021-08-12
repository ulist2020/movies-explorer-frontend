import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
function handleLikeClick() {
  document.querySelector(".card__like").classList.add("card__like_activ");
} 

function MoviesCardList(props) {
  return (
      <div className="list">
        <ul className="list__contaner">
        {props.movies.map((card)=>
            (<MoviesCard
              key={card.id}
              image={card.image.url} 
              nameRU={card.nameRU} 
              duration={card.duration}
              card={card}
              onCardLike={handleLikeClick}
          />)
        )}
        </ul>
        <ButtonAdd />
    </div>
  )
}
export default MoviesCardList;