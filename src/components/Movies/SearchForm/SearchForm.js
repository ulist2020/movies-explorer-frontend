import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({onUpdateForm}) {
  const [movie, setMovie] = useState('');

  function handleChangeMovie(e) {
    setMovie(e.target.value);
  }

    function handleSubmit(e) {
      e.preventDefault();
      onUpdateForm(movie)
}
  return (
    <div className="form">
        <form className="form__contaner" onSubmit={handleSubmit}>
            <input 
            value={movie}
            onChange={handleChangeMovie}
            id="form-name" 
            className="form__input" 
            placeholder="Фильм" 
            name="name" 
            tape="text" 
            minLength="2" 
            maxLength="50" required/>
            <button className="form__button" tape="submit" aria-label="Найти">Найти</button>
        </form>
        <FilterCheckbox />
    </div>
  )
}
export default SearchForm;