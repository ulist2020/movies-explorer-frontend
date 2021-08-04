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
                    <p className="about__subtitle">Я живу в Екатеринбурге, закончила гуманитарный факультет УГТУ-УПИ. У меня есть муж 
                                                    и две дочери. Я люблю заниматься садом, а ещё увлекаюсь йогой. Недавно начала кодить. 
                                                    С 2007 года работала в сфере торговли.
                                                    Когда начала учится на курсах по веб-разработке ушла с постоянной работы. 
                                                    Сейчас занимаюсь поиском работы.
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