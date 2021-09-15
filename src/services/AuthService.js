import { UserMapper } from '../mappers/UserMapper';
import { AuthRepository } from '../repositories/AuthRepository';

export class AuthService {
  constructor() {
    this.authRepository = new AuthRepository();
    this.userMapper = new UserMapper();
  }

  setToken(token) {
    localStorage.setItem('token', `Bearer ${token}`);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  async login(domain) {
    const dto = this.userMapper.fromDomainToDto(domain);
    const response = await this.authRepository.login(dto);
    this.setToken(response.data.jwt);

    return response;
  }
}
