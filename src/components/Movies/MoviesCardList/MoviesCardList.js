import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

/*function handleLikeClick() {
  document.querySelector(".card__like").classList.add("card__like_activ");
}*/


function MoviesCardList({movies, countCards, onSavedMovies, isSavedMoviesPage, onDeleteMovies, savedMovies}) {

  return (
      <div className="list">
        <ul className="list__contaner">
        {movies.slice(0, countCards).map((card)=>
            (<MoviesCard
              key={card._id || card.id || card.movieId}
              image={card.image} 
              nameRU={card.nameRU}
              duration={card.duration}
              owner={card.owner}
              card={card}
              onSavedMovies={onSavedMovies}
              onDeleteMovies={onDeleteMovies}
              isSavedMoviesPage={isSavedMoviesPage}
              savedMovies={savedMovies}
          />)
        )}
        </ul>
    </div>
  )
}
export default MoviesCardList;