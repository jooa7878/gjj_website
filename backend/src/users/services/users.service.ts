import { CreateRequestDto } from './../dto/create.request.dto';
import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { UsersRepository } from '../users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getAllUsers(): Promise<any> {
    const users = await this.usersRepository.findAll();
    const readOnlyUsers = users.map((user) => user.readOnlyData);

    return readOnlyUsers;
  }

  async getUser(name: string): Promise<any> {
    const user = await this.usersRepository.findByName(name);

    return user.readOnlyData;
  }

  async creatUser(body: CreateRequestDto): Promise<any> {
    const { name, dueDate } = body;

    const user = await this.usersRepository.create({
      name,
      dueDate,
    });

    return user.readOnlyData;
  }

  async deleteUser(id: string): Promise<any> {
    return this.usersRepository.deleteByName(id);
  }
}
