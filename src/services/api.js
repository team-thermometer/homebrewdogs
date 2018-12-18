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
  
  // test() {
  //   return fetch('https://api.punkapi.com/v2/beers')
  //     .then(response => response.json());
  // },
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
  getBeers() {
    return fetch('https://api.punkapi.com/v2/beers', getOptions('GET'))
      .then(response => response.json());      
  },
  getBeer(id) {
    return fetch(`https://api.punkapi.com/v2/beers/${id}`)
      .then(response => response.json());
  }
};