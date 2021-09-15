import { UserMapper } from '../mappers/UserMapper';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
  userMapper = new UserMapper();
  userRepository = new UserRepository();

  // setItem(response) {
  //   localStorage.setItem('token', `Bearer ${response.data.jwt}`);
  // }

  // async login(domain) {
  //   const dto = this.userMapper.fromDomainToDto(domain);
  //   const response = await this.userRepository.login(dto);
  //   this.setItem(response);

  //   return response;
  // }

  async addUser(domain) {
    const dto = this.userMapper.fromDomainToDto(domain);
    const response = await this.userRepository.addUser(dto);

    return response;
  }
}
