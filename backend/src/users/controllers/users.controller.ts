import { CreateRequestDto } from './../dto/create.request.dto';
import { UsersService } from './../services/users.service';
import { HttpExceptionFilter } from './../../common/exceptions/http-exception.filter';
import { SuccessInterceptor } from './../../common/interceptors/success.interceptor';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: '모든 유저 정보' })
  @Get()
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: '특정 유저 정보' })
  @Get(':name')
  async getUser(@Param() params: { name: string }) {
    return await this.usersService.getUser(params.name);
  }

  @ApiOperation({ summary: '특정 유저 삭제' })
  @Delete(':id')
  async deleteUser(@Param() params: { id: string }) {
    return await this.usersService.deleteUser(params.id);
  }

  @ApiOperation({ summary: '유저 생성하기' })
  @Post()
  async createUser(@Body() data: CreateRequestDto) {
    return await this.usersService.creatUser(data);
  }
}
