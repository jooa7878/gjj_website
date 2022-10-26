import { UsersService } from './../services/users.service';
import { HttpExceptionFilter } from './../../common/exceptions/http-exception.filter';
import { SuccessInterceptor } from './../../common/interceptors/success.interceptor';
import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';

@Controller('users')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
