import './MoviesCard.css';

function MoviesCard(props) {
  return (
    <li className="card">
        <div className="card__video" style={{ backgroundImage: `url(https://api.nomoreparties.co${props.image})` }} />
            <div className="card__contaner">
                <p className="card__name" >{props.nameRU}</p>
                <button className="card__like" onClick={props.onCardLike}  type="button" aria-label="Поставить лайк" />
            </div>
            <p className="card__time">{props.duration}</p>
    </li>
  )
}
export default MoviesCard;