import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';

function Profile({onUpdateUser, onLogout}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // Подписка на контекст
    const currentUser = React.useContext(CurrentUserContext);
    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    }, [currentUser]);

    function handleChangeName(e) {
        setName(e.target.value);
    }
    function handleChangeEmail(e) {
      setEmail(e.target.value);
    }
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        console.log(currentUser)
        onUpdateUser({
          name,
          email
        });
    }
  return (
    <form className="profile"  onSubmit={handleSubmit}>
        <h3 className="profile__header">Привет, {currentUser.name}!</h3>
          <div className="profile__contaner">
            <div className="profile____block profile____block-line">
              <p className="profile__description">Имя</p>
                <input 
                value={name ||''}
                onChange={handleChangeName} 
                id="profile-name" 
                className="profile__input" 
                name="name" 
                tape="text" 
                minLength="2" 
                maxLength="20" 
                />
            </div>
            <div className="profile____block">
              <p className="profile__description">E-mail</p>
                <input
                value={email ||''}
                onChange={handleChangeEmail} 
                id="profile-password" 
                className="profile__input" 
                name="password" 
                tape="text" 
                minLength="2" 
                maxLength="20" 
                />
              </div>
          </div>
          <button className="profile__redaction" tape="submit" aria-label="Редактировать">Редактировать</button>
          <button className="profile__out" onClick={onLogout} aria-label="Выйти из аккаунта">Выйти из аккаунта</button>
    </form>
  )
}
export default Profile;