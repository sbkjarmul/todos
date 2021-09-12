import { TodoRepository } from '../repositories/TodoRepository';
import { TodoMapper } from '../mappers/TodoMapper';

export class TodoService {
  constructor(TodoRepository, TodoMapper) {
    this.todoRepository = new TodoRepository();
    this.todoMapper = new TodoMapper();
  }

  async getTodoLists() {
    const response = this.todoRepository.getTodoLists();
    console.log(response);
  }
}
