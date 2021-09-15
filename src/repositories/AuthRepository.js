import { httpClient } from '../services/HttpClient';

export class AuthRepository {
  constructor() {
    this.httpClient = httpClient;
  }

  login(data) {
    return this.httpClient.post({
      url: 'https://recruitment.ultimate.systems/auth/local',
      data: data,
      isTokenRequired: false,
    });
  }
}
