import { httpClient } from '../services/HttpClient';

export class TodoRepository {
  constructor() {
    this.httpClient = httpClient;
  }

  getTodoLists() {
    return this.httpClient.get({
      url: 'https://recruitment.ultimate.systems/to-do-lists',
    });
  }

  addTodoList(data) {
    return this.httpClient.post({
      url: 'https://recruitment.ultimate.systems/to-do-lists',
      data: data,
    });
  }
}
