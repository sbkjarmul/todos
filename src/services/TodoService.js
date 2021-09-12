import { TodoRepository } from '../repositories/TodoRepository';
import { TodoMapper } from '../mappers/TodoMapper';

export class TodoService {
  todoRepository = new TodoRepository();
  todoMapper = new TodoMapper();

  // constructor(TodoRepository, TodoMapper) {
  //   this.todoRepository = new TodoRepository();
  //   this.todoMapper = new TodoMapper();
  // }

  async getTodoLists() {
    const response = this.todoRepository.getTodoLists();
    console.log(response);
  }

  async addTodoList(list) {
    const dto = this.todoMapper.fromDomainToDto(list);
    const response = this.todoRepository.addTodoList(dto);

    return response;
  }
}
