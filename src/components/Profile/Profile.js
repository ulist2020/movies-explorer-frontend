import './Profile.css';

function Profile() {
  return (
    <form className="profile">
        <h3 className="profile__header">Привет, Юлия!</h3>
          <div className="profile__contaner">
            <div className="profile____block profile____block-line">
              <p className="profile__description">Имя</p>
                <input id="profile-name" className="profile__input" name="name" tape="text" minLength="2" maxLength="20" required/>
            </div>
            <div className="profile____block">
              <p className="profile__description">E-mail</p>
                <input id="profile-password" className="profile__input" name="password" tape="text" minLength="2" maxLength="20" required/>
              </div>
          </div>
          <p className="profile__redaction">Редактировать</p>
          <p className="profile__out">Выйти из аккаунта</p>
    </form>
  )
}
export default Profile;