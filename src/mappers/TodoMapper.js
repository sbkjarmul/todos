import { Todo } from '../domain/Todo';
import { TodoRequestDto } from '../dto/TodoRequestDto';

export class TodoMapper {
  fromDomainToDto(domain) {
    const dto = new TodoRequestDto();

    dto.id = domain.id;
    dto.name = domain.name;
    dto.task = domain.task;
    dto.created_at = domain.createdAt;

    return dto;
  }

  fromDtoToDomain(dto) {
    const domain = new Todo();

    domain.id = dto.id;
    domain.name = dto.name;
    domain.task = dto.task;

    domain.createdAt = dto.created_at.slice(0, 10);

    return domain;
  }
}
