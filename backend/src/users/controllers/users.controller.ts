import { UsersService } from './../services/users.service';
import { HttpExceptionFilter } from './../../common/exceptions/http-exception.filter';
import { SuccessInterceptor } from './../../common/interceptors/success.interceptor';
import { Controller, Get, UseFilters, UseInterceptors } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
@Controller('users')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '모든 유저 정보' })
  @Get('all')
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
