import './Portfolio.css';

function Portfolio() {
    return (
      <section className="portfolio">
          <h2 className="portfolio__header">Портфолио</h2>
          <ul className="portfolio__list">
              <li className="portfolio__block">
                  <p className="portfolio__name">Дипломный проект (Frontend)</p>
                  <a href="https://github.com/ulist2020/movies-explorer-frontend" className="portfolio__link">↗</a>
              </li>
              <li className="portfolio__block">
                  <p className="portfolio__name">Дипломный проект (Backend)</p>
                  <a href="https://github.com/ulist2020/movies-explorer-api" className="portfolio__link">↗</a>
              </li>
              <li className="portfolio__block portfolio__block-line">
                  <p className="portfolio__name">Учебный проект</p>
                  <a href="https://github.com/ulist2020/react-mesto-api-full" className="portfolio__link">↗</a>
              </li>
          </ul>
      </section>
    )
  }
  export default Portfolio;