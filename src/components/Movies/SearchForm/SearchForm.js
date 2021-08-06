import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <div className="form">
        <form className="form__contaner">
            <input id="form-name" className="form__input" placeholder="Фильм" name="name" tape="text" minLength="2" maxLength="50" required/>
            <button className="form__button" tape="submit" aria-label="Найти">Найти</button>
        </form>
        <FilterCheckbox />
    </div>
  )
}
export default SearchForm;