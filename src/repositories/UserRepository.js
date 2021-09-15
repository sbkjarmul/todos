import { httpClient } from '../services/HttpClient';
import { API_URLs } from '../config/API_URLs';

export class UserRepository {
  constructor() {
    this.httpClient = httpClient;
  }

  addUser(data) {
    console.log(data);
    return this.httpClient.post({
      url: `${API_URLs.auth}/register`,
      data: data,
      isTokenRequired: false,
    });
  }
}
