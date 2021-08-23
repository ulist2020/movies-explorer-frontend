import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
import  Validation  from '../../utils/Validation';


function Profile({onUpdateUser, onLogout}) {
    /*const [name, setName] = useState("");
    const [email, setEmail] = useState("");*/

    const currentUser = React.useContext(CurrentUserContext);

    const {values, handleChange, errors, isValid} = Validation({
      name: currentUser.name,
      email: currentUser.email
    });

    // Подписка на контекст
    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    /*useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    }, [currentUser]);*/

    /*function handleChangeName(e) {
        setName(e.target.value);
    }
    function handleChangeEmail(e) {
      setEmail(e.target.value);
    }*/
    function handleSubmit(e) {
        e.preventDefault();
        if (isValid) {
        onUpdateUser(values);
      }
    }
  return (
    <form className="profile"  onSubmit={handleSubmit}>
        <h3 className="profile__header">Привет, {currentUser.name}!</h3>
          <div className="profile__contaner">
            <div className="profile____block profile____block-line">
                <p className="profile__description">Имя</p>
                  <input 
                  value={values.name}
                  onChange={handleChange} 
                  id="profile-name" 
                  className={`profile__input ${errors && errors["name"] && 'register__input_error'}`}
                  name="name" 
                  tape="text" 
                  minLength="2" 
                  maxLength="20" 
                  />
            </div>
                <span className="register__error">{errors && errors["name"] && errors["name"]}</span>
            <div className="profile____block">
              <p className="profile__description">E-mail</p>
                <input
                value={values.email}
                onChange={handleChange} 
                id="profile-password" 
                className={`profile__input ${errors && errors["name"] && 'register__input_error'}`} 
                name="email" 
                tape="email" 
                minLength="2" 
                maxLength="20"
                pattern="^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$" 
                />
            </div>
                <span className="register__error">{errors && errors["email"] && errors["email"]}</span>
          </div>
          <button className="profile__redaction" tape="submit" aria-label="Редактировать" disabled={!isValid}>Редактировать</button>
          <button className="profile__out" onClick={onLogout} aria-label="Выйти из аккаунта">Выйти из аккаунта</button>
    </form>
  )
}
export default Profile;