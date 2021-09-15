import { UserMapper } from '../mappers/UserMapper';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
  userMapper = new UserMapper();
  userRepository = new UserRepository();

  async addUser(domain) {
    const dto = this.userMapper.fromDomainToDto(domain);
    const response = await this.userRepository.addUser(dto);

    return response;
  }
}
