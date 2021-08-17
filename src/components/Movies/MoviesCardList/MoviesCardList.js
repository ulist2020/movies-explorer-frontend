import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function handleLikeClick() {
  document.querySelector(".card__like").classList.add("card__like_activ");
}


function MoviesCardList({movies, countCards}) {

  return (
      <div className="list">
        <ul className="list__contaner">
        {movies.slice(0, countCards).map((card)=>
            (<MoviesCard
              key={card.id}
              image={card.image.url} 
              nameRU={card.nameRU} 
              duration={card.duration}
              trailer={() => {window.open(card.trailerLink)}}
              card={card}
              onCardLike={handleLikeClick}
          />)
        )}
        </ul>
    </div>
  )
}
export default MoviesCardList;