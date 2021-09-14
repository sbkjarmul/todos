import { UserMapper } from '../mappers/UserMapper';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
  userMapper = new UserMapper();
  userRepository = new UserRepository();

  async login(user) {
    const dto = this.userMapper.fromDomainToDto(user);
    const response = await this.userRepository.login(dto);
    return response;
  }

  async register(user) {
    const dto = this.userMapper.fromDomainToDto(user);
    const response = await this.userRepository.register(dto);

    return response;
  }
}
