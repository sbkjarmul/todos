import { httpClient } from '../services/HttpClient';

export class UserRepository {
  constructor() {
    this.httpClient = httpClient;
  }

  addUser(data) {
    return this.httpClient.post({
      url: 'https://recruitment.ultimate.systems/auth/local/register',
      data: data,
      isTokenRequired: false,
    });
  }
}
