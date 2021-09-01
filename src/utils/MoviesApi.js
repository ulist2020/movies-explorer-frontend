class Api {
    constructor({address}) {
        this._address = address;
    }

    getInitialMovies() {
        return fetch(this._address, {
            headers: {
                'Content-Type': "application/json"
            }
        })
        .then(this._checkResponse);
    }
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
}

const moviesApi = new Api({
    address: 'https://api.nomoreparties.co/beatfilm-movies',
  }); 

  export default moviesApi;