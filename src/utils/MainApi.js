class Api {
    constructor({address, token, format}) {
        this._address = address;
        this._token = token;
        this._format = format;
    }

    //Загрузка информации о пользователе с сервера
    getUser(){
        this._token = `Bearer ${localStorage.getItem('jwt')}`;
  
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
    editUser({ name, email }){
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                Authorization: this._token,
                Accept: "application/json",
                'Content-Type': this._format
            },
            body: JSON.stringify({
                name,
                email
            })
    })
    .then(this._checkResponse)

    }

    //Загрузка карточек с сервера
    getInitialCards() {
        //console.log(localStorage.getItem('jwt'))
        return fetch(`${this._address}/movies`, {
            headers: {
                Authorization: this._token,
                Accept: "application/json",
                'Content-Type': this._format
            }
        })
        .then(this._checkResponse)
    }

    //Добавление сохраненного фильма
    addSaveMovies({ country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
     }){
        return fetch(`${this._address}/movies`, {
            method: 'POST',
            headers: {
                'Authorization': this._token,
                'Content-Type': this._format
            },
            body: JSON.stringify({
                country: country,
                director: director,
                duration: duration,
                year: year,
                description: description,
                image: 'https://api.nomoreparties.co'+image.url,
                trailer: trailer,
                nameRU: nameRU,
                nameEN: nameEN,
                thumbnail: thumbnail,
                movieId: movieId,
            })
    })
    .then(this._checkResponse)
}

    //Удаление карточки
    deleteCard(id){
        return fetch(`${this._address}/movies/${id}`, {
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
    //address: 'http://localhost:3000',
    token: `Bearer ${localStorage.getItem('jwt')}`,
    format: 'application/json'
  }); 
  
  export default mainApi;