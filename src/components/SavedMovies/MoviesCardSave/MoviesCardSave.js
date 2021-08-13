import './MoviesCardSave.css';

function MoviesCardSave() {
  return (
    <li className="card">
        <div className="card__video" style={{ backgroundImage: `url(https://www.kinobox.cz/data/clanky/640x400x1/recenze-spojenci.jpg)` }}  alt="Название фильма" />
            <div className="card__contaner">
                <p className="card__name">Название фильма</p>
                <button className="card__like card__like-saved" type="button" aria-label="Поставить лайк" />
            </div>
            <p className="card__time">1ч42м</p>
    </li>
  )
}
export default MoviesCardSave;