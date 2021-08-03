import './Promo.css';
import image from '../../../images/world.png'

function Promo() {
    return (
      <section className="promo">
          <div className="promo__contaner">
            <div className="promo__description">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            </div>
            <img className="promo__image" src={image}  alt="Земной шар"/>
          </div>
          <button className="promo__button" aria-label="Кнопка узнать больше">Узнать больше</button>
      </section>
    )
  }
  export default Promo;