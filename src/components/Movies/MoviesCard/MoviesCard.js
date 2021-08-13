import './MoviesCard.css';

function MoviesCard(movies) {
  return (
    <li className="card">
        <div className="card__video" style={{ backgroundImage: `url(https://api.nomoreparties.co${movies.image})` }} />
            <div className="card__contaner">
                <p className="card__name" >{movies.nameRU}</p>
                <button className="card__like" onClick={movies.onCardLike}  type="button" aria-label="Поставить лайк" />
            </div>
            <p className="card__time">{movies.duration}</p>
    </li>
  )
}
export default MoviesCard;