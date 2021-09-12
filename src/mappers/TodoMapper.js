import { Todo } from '../domain/Todo';
import { TodoRequestDto } from '../dto/TodoRequestDto';

export class TodoMapper {
  fromDomainToDto(domain) {
    const dto = new TodoRequestDto();

    dto.name = domain.name;
    dto.task = domain.task;

    return dto;
  }

  fromDtoToDomain(dto) {
    const domain = new Todo();

    domain.name = dto.name;
    domain.task = dto.task;

    return domain;
  }
}
