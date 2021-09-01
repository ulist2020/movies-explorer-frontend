import './FilterCheckbox.css';

function FilterCheckbox({ onClickCheckbox, checkedShorts }) {
  return (
    <div className="filter">
            <input id="filter" className="filter-input" checked={checkedShorts} onChange={onClickCheckbox} name="filter" type="checkbox"/>
            <label htmlFor="filter">Короткометражки</label>
    </div>
  )
}
export default FilterCheckbox;