import axios from 'axios';

const apiClientInstance = axios.create();

class HttpClientFascade {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async get({ url }) {
    const config = {
      method: 'get',
      url: url,
    };

    return this.httpClient(config);
  }
}

const httpClient = new HttpClientFascade(apiClientInstance);

export { httpClient };
