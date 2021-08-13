import './Techs.css';

function Techs() {
    return (
      <section className="techs">
          <h2 className="project__header techs__header">Технологии</h2>
            <div className="techs__description">
                <h1 className="promo__title techs__title">7 технологий</h1>
                    <p className="promo__subtitle techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <ul className="techs__list">
                        <li className="techs__technology">HTML</li>
                        <li className="techs__technology">CSS</li>
                        <li className="techs__technology">JS</li>
                        <li className="techs__technology">React</li>
                        <li className="techs__technology">Git</li>
                        <li className="techs__technology">Express.js</li>
                        <li className="techs__technology">mongoDB</li>
                    </ul>
            </div>
      </section>
    )
  }
  export default Techs;