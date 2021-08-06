import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter">
            <input id="filter" className="filter-input" name="filter" type="checkbox"/>
            <label htmlFor="filter">Короткометражки</label>
    </div>
  )
}
export default FilterCheckbox;