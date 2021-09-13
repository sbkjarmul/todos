import { TodoRepository } from '../repositories/TodoRepository';
import { TodoMapper } from '../mappers/TodoMapper';

export class TodoService {
  todoRepository = new TodoRepository();
  todoMapper = new TodoMapper();

  async getTodoLists() {
    const response = await this.todoRepository.getTodoLists();
    const domains = response.data.map((dto) => {
      const domain = this.todoMapper.fromDtoToDomain(dto);

      return domain;
    });

    return domains;
  }

  async addTodoList(list) {
    const dto = this.todoMapper.fromDomainToDto(list);
    const response = await this.todoRepository.addTodoList(dto);

    return response;
  }

  async editTodoList(list) {
    const dto = this.todoMapper.fromDomainToDto(list);
    const response = await this.todoRepository.editTodoList(dto);

    return response;
  }

  async deleteTodoList(listId) {
    const response = await this.todoRepository.deleteTodoList(listId);

    return response;
  }
}
