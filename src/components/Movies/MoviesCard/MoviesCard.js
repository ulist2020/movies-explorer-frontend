import './MoviesCard.css';

function MoviesCard(movies) {

function Time(min) {
  const hours = Math.trunc(min / 60);
  const minutes = min % 60;
  return hours + "ч " + minutes + "м";
};

const duration = Time(movies.duration);

  return (
    <li className="card">
        <div className="card__video" style={{ backgroundImage: `url(https://api.nomoreparties.co${movies.image})` }} />
            <div className="card__contaner">
                <p className="card__name" >{movies.nameRU}</p>
                <button className="card__like" onClick={movies.onCardLike}  type="button" aria-label="Поставить лайк" />
            </div>
            <p className="card__time">{duration}</p>
    </li>
  )
}
export default MoviesCard;