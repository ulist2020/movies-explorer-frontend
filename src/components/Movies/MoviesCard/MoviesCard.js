import React from 'react';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext'
import './MoviesCard.css';

function MoviesCard({ card,trailer, nameRU, image, duration, isSavedMoviesPage, onSavedMovies}) {
  const currentUser = React.useContext(CurrentUserContext);

function Time(min) {
  const hours = Math.trunc(min / 60);
  const minutes = min % 60;
  return hours + "ч " + minutes + "м";
};

//const duration = Time(movies.duration);

// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
//const isLiked = movies.owner === currentUser._id
// Создаём переменную, которую после зададим в `className` для кнопки лайка
//const cardLikeButtonClassName = (
//  `card__like ${isLiked ? 'card__like_activ' : 'card__like'}`
//); ; 

const handleLikeClick = () => {
  console.log(card)    
          onSavedMovies(card);
      
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
                <button className="card__like" onClick={handleLikeClick}  type="button" aria-label="Поставить лайк" />
                : <button className="card__like card__like-saved" type="button" aria-label="Удалить фильм из сохраненных" />
                }
            </div>
            <p className="card__time">{Time(duration)}</p>
    </li>
  )
}
export default MoviesCard;