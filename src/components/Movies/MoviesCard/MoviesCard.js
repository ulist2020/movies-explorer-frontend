import React from 'react';
import './MoviesCard.css';

function MoviesCard({ card, nameRU, image, duration, owner, isSavedMoviesPage, onSavedMovies, onDeleteMovies, isSaved}) {

function Time(min) {
  const hours = Math.trunc(min / 60);
  const minutes = min % 60;
  return hours + "ч " + minutes + "м";
};

const cardLikeButtonClassName = (
  `card__like ${isSaved ? 'card__like_activ' : ''}`
); 

  const handleLikeClick = () => {
      if (isSaved) {
        onDeleteMovies(card.savedMovieId);
    } else {
        onSavedMovies(card);
    }
  }
  const handleDeleteClick = () => {
      onDeleteMovies(card._id);
  }

  function openTrailer(){
      window.open(card.trailer)
  }

  return (
    <li className="card">
        <div className="card__video" onClick={openTrailer} style={{ backgroundImage: `url(${image})` }} />
            <div className="card__contaner">
                <p className="card__name" >{nameRU}</p>
                {
                isSavedMoviesPage ?
                <button className={cardLikeButtonClassName} onClick={handleLikeClick}  type="button" aria-label="Поставить лайк" />
                : <button className="card__like card__like-saved" onClick={handleDeleteClick} type="reset" aria-label="Удалить фильм из сохраненных" />
                }
            </div>
            <p className="card__time">{Time(duration)}</p>
    </li>
  )
}
export default MoviesCard;