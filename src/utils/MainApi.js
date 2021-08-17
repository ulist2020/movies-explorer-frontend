class Api {
    constructor({address, token, format}) {
        this._address = address;
        this._token = token;
        this._format = format;
    }

    //Загрузка информации о пользователе с сервера
    getUser(){
        return fetch(`${this._address}/users/me`, {
            headers: {
                Authorization: this._token,
                Accept: "application/json",
                'Content-Type': this._format
            }
        })
        .then(this._checkResponse)
    }    
    
    //Редактирование профиля
    editUser({ name, about }){
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                Authorization: this._token,
                Accept: "application/json",
                'Content-Type': this._format
            },
            body: JSON.stringify({
                name,
                about
            })
    })
    .then(this._checkResponse)

    }





    //Загрузка карточек с сервера
    getInitialCards() {
        return fetch(`${this._address}/movies`, {
            headers: {
                Authorization: this._token,
                Accept: "application/json",
                'Content-Type': this._format
            }
        })
        .then(this._checkResponse)
    }



    //Добавление новой карточки
    addCard({ name, link }){
        return fetch(`${this._address}/movies`, {
            method: 'POST',
            headers: {
                'Authorization': this._token,
                'Content-Type': this._format
            },
            body: JSON.stringify({
                name,
                link
            })
    })
    .then(this._checkResponse)
}

    //Удаление карточки
    deleteCard(){
        return fetch(`${this._address}/movies/:movieId`, {
                method: 'DELETE',
                headers: {
                    'Authorization': this._token,
                    'Content-Type': this._format
                },
        })
        .then(this._checkResponse)
        
    }


    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
}

const mainApi = new Api({
    address: 'https://api.julia.smirnova.nomoredomains.club',
    //address: 'http://localhost:5000',
    token: `Bearer ${localStorage.getItem('jwt')}`,
    format: 'application/json'
  }); 
  
  export default mainApi;