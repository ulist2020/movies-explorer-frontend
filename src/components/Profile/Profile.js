import './Profile.css';
import ButtonRegister from "../Register/ButtonRegister/ButtonRegister";

function Profile() {
  return (
    <form className="profile">
        <div className="header__logo"/>
            <h3 className="profile__header">Добро пожаловать!</h3>
                <p className="profile__description">Имя</p>
                    <input id="profile-name" className="profile__input" placeholder="Имя" name="name" tape="text" minLength="2" maxLength="20" required/>
                <p className="profile__description">E-mail</p>
                    <input id="profile-email" className="profile__input" placeholder="E-mail" name="email" tape="email" required/>
                <p className="profile__description">Пароль</p>
                    <input id="profile-password" className="profile__input" placeholder="Пароль" name="password" tape="text" minLength="2" maxLength="20" required/>
                <ButtonRegister />
    </form>
  )
}
export default Profile;