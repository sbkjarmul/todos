import { httpClient } from '../services/HttpClient';

export class UserRepository {
  constructor() {
    this.httpClient = httpClient;
  }

  register(data) {
    return this.httpClient.post({
      url: 'https://recruitment.ultimate.systems/auth/local/register',
      data: data,
    });
  }

  login(data) {
    return this.httpClient.post({
      url: 'https://recruitment.ultimate.systems/auth/local',
      data: data,
    });
  }
}
