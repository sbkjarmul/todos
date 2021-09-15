import { httpClient } from '../services/HttpClient';
import { API_URLs } from '../config/API_URLs';

export class AuthRepository {
  constructor() {
    this.httpClient = httpClient;
  }

  login(data) {
    return this.httpClient.post({
      url: `${API_URLs.auth}`,
      data: data,
      isTokenRequired: false,
    });
  }
}
