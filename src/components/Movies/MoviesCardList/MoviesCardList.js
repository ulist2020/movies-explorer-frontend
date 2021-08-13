import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
function handleLikeClick() {
  document.querySelector(".card__like").classList.add("card__like_activ");
} 

function MoviesCardList() {
  return (
      <div className="list">
        <ul className="list__contaner">
            <MoviesCard
            onCardLike={handleLikeClick} />
            <MoviesCard 
            onCardLike={handleLikeClick}/>
            <MoviesCard 
            onCardLike={handleLikeClick}/>
            <MoviesCard 
            onCardLike={handleLikeClick}/>
            <MoviesCard 
            onCardLike={handleLikeClick}/>
            <MoviesCard 
            onCardLike={handleLikeClick}/>
            <MoviesCard 
            onCardLike={handleLikeClick}/>
            <MoviesCard 
            onCardLike={handleLikeClick}/>
            <MoviesCard 
            onCardLike={handleLikeClick}/>
            <MoviesCard 
            onCardLike={handleLikeClick}/>
            <MoviesCard 
            onCardLike={handleLikeClick}/>
        </ul>
        <ButtonAdd />
    </div>
  )
}
export default MoviesCardList;