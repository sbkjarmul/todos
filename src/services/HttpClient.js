import axios from 'axios';

const TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjg5LCJpYXQiOjE2MzE0NTcyNTUsImV4cCI6MTYzNDA0OTI1NX0.vIeJzGbb8h1_jcYpm8glu0oI4HVL03lcHhU_nBniHfM';

const apiClientInstance = axios.create();

class HttpClientFascade {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async get({ url }) {
    const config = {
      method: 'get',
      url: url,
      headers: {
        accept: 'application/json',
        Authorization: TOKEN,
      },
    };

    return this.httpClient(config);
  }

  async post({ url, data }) {
    const config = {
      method: 'post',
      url: url,
      headers: {
        accept: 'application/json',
        Authorization: TOKEN,
      },
      data: data,
    };

    return this.httpClient(config);
  }

  async delete({ url }) {
    const config = {
      method: 'delete',
      url: url,
      headers: {
        accept: 'application/json',
        Authorization: TOKEN,
      },
    };

    return this.httpClient(config);
  }
}

const httpClient = new HttpClientFascade(apiClientInstance);

export { httpClient };
