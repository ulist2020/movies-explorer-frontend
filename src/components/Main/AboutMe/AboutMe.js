import './AboutMe.css';
import image from '../../../images/photo.jpg'

function AboutMe() {
    return (
      <section className="about">
          <h2 className="project__header">Студент</h2>
          <div className="promo__contaner about__contaner">
            <div className="about__description">
                <h1 className="promo__title about__title">Юлия</h1>
                    <p className="about__profession">Фронтенд-разработчик, 36 лет</p>
                    <p className="about__subtitle">
                                                    Для меня веб-разработка – это как игра в конструктор LEGO. 
                                                    Из множества разных деталей можно собрать что-то одно большое, красивое и функциональное. 
                                                    Так же и в веб-разработке существуют миллионы вариантов, как сделать классный сайт. 
                                                    И, самое главное, я могу видеть результат своей работы. <br/>
                                                    Для того, чтобы осуществить свое давнее желание, стать веб-разработчиком, я решила учиться в Яндекс Практикум. 
                                                    Активно изучаю все теоретические знания по курсу. 
                                                    А так же дополнительные материалы, которые предлагаются для самостоятельного обучения.<br/>
                                                    Мой девиз для работы: «Сделал дело – гуляй смело». 
                                                    Поэтому любую работу делаю вовремя.
                                                    Люблю «копаться» с растениями, для меня это своего рода медитация. 
                                                    </p>
                        <a href="https://github.com/ulist2020" className="about-link">Github</a>
                        <a href="https://www.instagram.com/juliy_smirnovaa/" className="about-link">Instagram</a>
            </div>
            <img className="about__image" src={image}  alt="Фотография студента"/>
          </div>
      </section>
    )
  }
  export default AboutMe;