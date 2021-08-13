import './Portfolio.css';

function Portfolio() {
    return (
      <section className="portfolio">
          <h2 className="portfolio__header">Портфолио</h2>
          <ul className="portfolio__list">
              <li className="portfolio__block">
                  <p className="portfolio__name">Статичный сайт</p>
                  <a href="https://github.com/ulist2020" className="portfolio__link">↗</a>
              </li>
              <li className="portfolio__block">
                  <p className="portfolio__name">Адаптивный сайт</p>
                  <a href="https://github.com/ulist2020" className="portfolio__link">↗</a>
              </li>
              <li className="portfolio__block portfolio__block-line">
                  <p className="portfolio__name">Одностраничное приложение</p>
                  <a href="https://github.com/ulist2020" className="portfolio__link">↗</a>
              </li>
          </ul>
      </section>
    )
  }
  export default Portfolio;