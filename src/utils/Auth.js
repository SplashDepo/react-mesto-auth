// export const baseUrl = 'https://auth.nomoreparties.co/'

class AuthApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl
  }

  _serverRespones(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res.status)
    }
  }

  tokenVerefication(token) {
    return fetch(`${this._baseUrl}users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => this._serverRespones(res))
  }

  register({ password, email }) {
    return fetch(`${this._baseUrl}signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ password, email })
    })
      .then(res => this._serverRespones(res))
  }

  authorize({ password, email }) {
    return fetch(`${this._baseUrl}signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
      .then(res => this._serverRespones(res))
  }

}


const apiAuth = new AuthApi("https://auth.nomoreparties.co/")

export { apiAuth }




// export function serverResponse(res) {
//   if (res.ok) {
//     return res.json()
//   } else {
//     return Promise.reject(res.status)
//   }
// }

// export function register({ password, email }) {
//   return fetch(`${baseUrl}signup`, {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ password, email })
//   })
//     .then(res => serverResponse(res))
// }

// export function authorize({ password, email }) {
//   return fetch(`${baseUrl}signin`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ password, email })
//   })
//     .then(res => serverResponse(res))
//     .then(data => {
//       if (data.token) {
//         localStorage.setItem('jwt', data.token)
//         return data
//       }
//     }).catch(err => console.log(`Ошибка авторизации ${err}`))
// }

// export function getConnect(token) {
//   return fetch(`${baseUrl}users/me`, {
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${token}`
//     }
//   })
//     .then(res => serverResponse(res))
// }