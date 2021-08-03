import './AboutProject.css';

function AboutProject() {
    return (
      <section className="project">
          <h2 className="project__header">О проекте</h2>
          <div className="project__description">
              <div className="project__stages">
                <h3 className="project__stages-title">Дипломный проект включал 5 этапов</h3>
                <p className="project__stages-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
              </div>
              <div className="project__stages">
                <h3 className="project__stages-title">На выполнение диплома ушло 5 недель</h3>
                <p className="project__stages-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
              </div>
          </div>
          <div className="project__time">
              <div className="project__time-front">
                  <p className="project__time-first">1 неделя</p>
                  <p className="project__time-about">Back-end</p>
              </div>
              <div className="project__time-back">
                  <p className="project__time-second">4 недели</p>
                  <p className="project__time-about">Front-end</p>
              </div>
          </div>
      </section>
    )
  }
  export default AboutProject;