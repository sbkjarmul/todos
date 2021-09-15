import { httpClient } from '../services/HttpClient';
import { API_URLs } from '../config/API_URLs';

export class TodoRepository {
  constructor() {
    this.httpClient = httpClient;
  }

  getTodoLists() {
    return this.httpClient.get({
      url: `${API_URLs.todo}`,
    });
  }

  addTodoList(data) {
    return this.httpClient.post({
      url: `${API_URLs.todo}`,
      data: data,
    });
  }

  editTodoList(data) {
    return this.httpClient.put({
      url: `${API_URLs.todo}/${data.id}`,
      data: data,
    });
  }

  deleteTodoList(id) {
    return this.httpClient.delete({
      url: `${API_URLs.todo}/${id}`,
    });
  }
}
