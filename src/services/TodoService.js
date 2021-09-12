import { TodoRepository } from '../repositories/TodoRepository';
import { TodoMapper } from '../mappers/TodoMapper';

export class TodoService {
  todoRepository = new TodoRepository();
  todoMapper = new TodoMapper();

  async getTodoLists() {
    const response = await this.todoRepository.getTodoLists();
    const domain = response.data.map((dto) => {
      const domainObj = this.todoMapper.fromDtoToDomain(dto);

      return domainObj;
    });

    return domain;
  }

  async addTodoList(list) {
    const dto = this.todoMapper.fromDomainToDto(list);
    const response = await this.todoRepository.addTodoList(dto);

    return response;
  }

  async deleteTodoList(listId) {
    const response = await this.todoRepository.deleteTodoList(listId);

    return response;
  }
}
