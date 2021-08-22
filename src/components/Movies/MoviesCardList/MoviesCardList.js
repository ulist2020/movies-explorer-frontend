import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function randomString(len) {
  const chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
  let str = '';
  for (let i = 0; i < len; i++) {
      let pos = Math.floor(Math.random() * chrs.length);
      str += chrs.substring(pos,pos+1);
  }
  return str;
};

function MoviesCardList({movies, countCards, onSavedMovies, isSavedMoviesPage, onDeleteMovies, savedMovies}) {

  return (
      <div className="list">
        <ul className="list__contaner">
        {movies.slice(0, countCards).map((card)=> {
          const key = randomString(20);
          return (<MoviesCard
              key={key}
              image={card.image.url ? `https://api.nomoreparties.co`+card.image.url : card.image} 
              nameRU={card.nameRU}
              duration={card.duration}
              owner={card.owner}
              card={card}
              onSavedMovies={onSavedMovies}
              onDeleteMovies={onDeleteMovies}
              isSavedMoviesPage={isSavedMoviesPage}
              savedMovies={savedMovies}
              isSaved = {card.isSaved}
          />)
        }
            
        )}
        </ul>
    </div>
  )
}
export default MoviesCardList;