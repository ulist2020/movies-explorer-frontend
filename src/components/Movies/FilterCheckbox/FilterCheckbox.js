import './FilterCheckbox.css';

function FilterCheckbox({ onClickCheckbox }) {
  return (
    <div className="filter">
            <input id="filter" className="filter-input" onClick={onClickCheckbox} name="filter" type="checkbox"/>
            <label htmlFor="filter">Короткометражки</label>
    </div>
  )
}
export default FilterCheckbox;