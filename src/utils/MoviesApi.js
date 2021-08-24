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
        // fetch(this._address, {
        //     headers: {
        //         'Content-Type': "application/json"
        //     }
        // })
        // .then((result) => {
        //     movies = this._checkResponse(result);            
        // });
        // localStorage.setItem('allMovies',movies);
        // console.log(localStorage.getItem('allMovies'))
        // return movies;
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