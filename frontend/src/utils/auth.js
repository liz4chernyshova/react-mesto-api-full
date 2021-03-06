export const BASE_URL = 'https://api.chernyshova.backend.nomoredomains.rocks';

const checkResponse = (res) => {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({email, password})
    })
    .then(checkResponse)
  };


export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({email, password})
    })
    .then(checkResponse)
};


export const checkToken = (jwt) => {
return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwt}`,
    },
    credentials: 'include',
})
  .then(checkResponse)
}