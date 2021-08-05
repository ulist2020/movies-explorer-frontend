import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter">
            <input id="filter" className="filter-input" name="filter" type="checkbox"/>
            <label for="filter">Короткометражки</label>
    </div>
  )
}
export default FilterCheckbox;