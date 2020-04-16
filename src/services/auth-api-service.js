import config from '../config';
import TokenService from './token-service';

const AuthApiService = {
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postDevice(postContent) {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(postContent)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  updateDevice(updatedPost) {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedPost)
    });
  },
  getAllPosts() {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getAllPostsByUser() {
    return fetch(`${config.API_ENDPOINT}/posts/user-posts`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getSearchPosts(params) {
    return fetch(`${config.API_ENDPOINT}/posts?${params}`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postMessageThread(recipient_id) {
    return fetch(`${config.API_ENDPOINT}/threads`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ recipient_id })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postNewMessage(message) {
    return fetch(`${config.API_ENDPOINT}/messages`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(message)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getMessageThreads() {
    return fetch(`${config.API_ENDPOINT}/threads`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getMessageThreadChats(thread_id) {
    return fetch(`${config.API_ENDPOINT}/threads/${thread_id}`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default AuthApiService;
