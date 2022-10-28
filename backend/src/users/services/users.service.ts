import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { AuthRepository } from 'src/auth/auth.repository';

@Injectable()
export class UsersService {
  constructor(private readonly authRepository: AuthRepository) {}

  async info(): Promise<any> {
    console.log('in');
    return 'hello info -';
    // const user = this.authRepository.findUserByEmail(req);
    // if (!user) {
    //   throw new UnauthorizedException('유저 없음');
    // }
  }
}
