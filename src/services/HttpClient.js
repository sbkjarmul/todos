import axios from 'axios';
import { AuthService } from '../services/AuthService';

// const TOKEN =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjg5LCJpYXQiOjE2MzE0NTcyNTUsImV4cCI6MTYzNDA0OTI1NX0.vIeJzGbb8h1_jcYpm8glu0oI4HVL03lcHhU_nBniHfM';

const addTokenToHeaders = (config, isTokenRequired) => {
  if (isTokenRequired) {
    const authService = new AuthService();
    config.headers.Authorization = authService.getToken();
  }
};

const apiClientInstance = axios.create();

class HttpClientFascade {
  #headers = {
    accept: 'application/json',
  };

  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async get({ url, isTokenRequired = true }) {
    const config = {
      method: 'get',
      url: url,
      headers: { ...this.#headers },
    };

    addTokenToHeaders(config, isTokenRequired);

    return this.httpClient(config);
  }

  //pola12345@wp.pl
  //12345

  async post({ url, data, isTokenRequired = true }) {
    const config = {
      method: 'post',
      url: url,
      headers: { ...this.#headers },
      data: data,
    };

    addTokenToHeaders(config, isTokenRequired);

    return this.httpClient(config);
  }

  async put({ url, data, isTokenRequired = true }) {
    const config = {
      method: 'put',
      url: url,
      headers: { ...this.#headers },
      data: data,
    };

    addTokenToHeaders(config, isTokenRequired);

    return this.httpClient(config);
  }

  async delete({ url, isTokenRequired = true }) {
    const config = {
      method: 'delete',
      url: url,
      headers: { ...this.#headers },
    };

    addTokenToHeaders(config, isTokenRequired);

    return this.httpClient(config);
  }
}

const httpClient = new HttpClientFascade(apiClientInstance);

export { httpClient };
