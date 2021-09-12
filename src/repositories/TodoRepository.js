import httpClient from '../services/HttpClient';

export class TodoRepository {
  getTodoLists() {
    httpClient.get({
      url: 'https://recruitment.ultimate.systems/to-do-lists',
    });
  }
}
