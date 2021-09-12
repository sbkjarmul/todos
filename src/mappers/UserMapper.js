import { UserRequestDto } from '../dto/UserRequestDto';
import { User } from '../domain/User';

export class UserMapper {
  fromDomainToDto(domain) {
    const dto = new UserRequestDto();

    dto.id = domain.id;
    dto.username = domain.username;
    dto.email = domain.email;
    dto.password = domain.password;
    dto.role = domain.role;
    dto.identifier = domain.identifier;

    return dto;
  }

  fromDtotoDomain(dto) {
    const domain = new User();

    domain.id = dto.id;
    domain.username = dto.username;
    domain.email = dto.email;
    domain.password = dto.password;
    domain.role = dto.role;
    domain.identifier = dto.identifier;

    return domain;
  }
}
