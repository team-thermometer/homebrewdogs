let token = '';

const getOptions = (method, data) => {
  const options = {
    method,
    headers: {}
  };

  if(data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  if(token) {
    options.headers.Authorization = token;
  }

  return options;
};

export default {
  setToken(t) {
    token = t;
  },
  signUp(profile) {
    return fetch('/api/auth/signup', getOptions('POST', profile))
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        return response.json()
          .then(error => {
            return Promise.reject(error);
          });
      });
  },
  signIn(credentials) {
    return fetch('/api/auth/signin', getOptions('POST', credentials))
      .then(response => {
        if(response.ok) {
          return response.json();
        }

        return response.json()
          .then(error => {
            return Promise.reject(error);
          });
      });
  },
  getFavorites() {
    return fetch('/api/favorites', getOptions('GET'))
      .then(response => response.json());
  },
  addFavorite(name) {
    return fetch('/api/favorites', getOptions('POST', name))
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        return response.json()
          .then(error => {
            return Promise.reject(error, alert('Beer already saved'));
          });
      });
  },
  getBeers() {
    return fetch('/api/beers', getOptions('GET'))
      .then(response => response.json());
  },
  getBeer(id) {
    return fetch(`/api/beers/${id}`, getOptions('GET'))
      .then(response => response.json());
  },
  getBeerByKeyword(keyword, page = 1) {
    return fetch(`https://api.punkapi.com/v2/beers?beer_name=${encodeURIComponent(keyword)}&page=${page}`, getOptions('GET'))
      .then(response => response.json());
  },
  getRandomBeer() {
    return fetch('https://api.punkapi.com/v2/beers/random', getOptions('GET'))
      .then(response => response.json());
  },  
  addComment(id, favorite) {
    return fetch(`/api/favorites/${id}`, getOptions('PUT', favorite))
      .then(response => response.json());
  },
  addRating(rating) {
    return fetch('/api/ratings', getOptions('POST', rating))
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        return response.json()
          .then(error => {
            return Promise.reject(error, alert('Beer already rated'));
          });
      });
  },
  getRatings() {
    return fetch('/api/ratings', getOptions('GET'))
      .then(response => response.json());
  },
  deleteFavorite(id) {
    return fetch(`/api/favorites/${id}`, getOptions('DELETE'))
      .then(response => response.json());
  },
  getFavStats() {
    return fetch('/api/favorites/stats', getOptions('GET'))
      .then(response => response.json());
  },
};