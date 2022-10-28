import { UsersService } from './../services/users.service';
import { HttpExceptionFilter } from './../../common/exceptions/http-exception.filter';
import { SuccessInterceptor } from './../../common/interceptors/success.interceptor';
import { Controller, Get, UseFilters, UseInterceptors } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth.service';
import { ApiBearerAuth } from '@nestjs/swagger';
@Controller('users')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  // @ApiBearerAuth('auth')
  async getUserInfo() {
    console.log('hello info');
    return 'hello info';
    // return await this.usersService.info();
  }
}
