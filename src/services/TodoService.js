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
    const response = await this.todoRepository.getTodoLists();
    const domain = response.data.map((dto) => {
      console.log(dto);
      const domainObj = this.todoMapper.fromDtoToDomain(dto);
      console.log('Domain: ', domainObj);

      return domainObj;
    });
    console.log(domain);
    return domain;
  }

  async addTodoList(list) {
    const dto = this.todoMapper.fromDomainToDto(list);
    const response = await this.todoRepository.addTodoList(dto);
    return response;
  }
}
