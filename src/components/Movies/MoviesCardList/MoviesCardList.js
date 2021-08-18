import React from 'react';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext'
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

/*function handleLikeClick() {
  document.querySelector(".card__like").classList.add("card__like_activ");
}*/


function MoviesCardList({movies, countCards, onSavedMovies, isSavedMoviesPage}) {
 /* const currentUser = React.useContext(CurrentUserContext);
  const isSaved = movies.owner === currentUser._id;*/

  
  /*const handleLikeClick = () => {
console.log(movies)    
        onSavedMovies(movies);
    
}*/



  return (
      <div className="list">
        <ul className="list__contaner">
        {movies.slice(0, countCards).map((card)=>
            (<MoviesCard
              key={card.movieId}
              image={card.image} 
              nameRU={card.nameRU}
              duration={card.duration}
              owner={card.owner}
              card={card}
              onSavedMovies={onSavedMovies}
              isSavedMoviesPage={isSavedMoviesPage}
          />)
        )}
        </ul>
    </div>
  )
}
export default MoviesCardList;