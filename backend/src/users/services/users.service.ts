import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { AuthRepository } from 'src/auth/auth.repository';

@Injectable()
export class UsersService {
  constructor(private readonly authRepository: AuthRepository) {}

  async getAllUsers(): Promise<any> {
    const users = await this.authRepository.findAll();
    const readOnlyUsers = users.map((user) => user.readOnlyData);

    return readOnlyUsers;
  }
}
