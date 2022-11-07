import { Users } from './../users.schema';
import { PickType } from '@nestjs/swagger';

export class CreateRequestDto extends PickType(Users, [
  'name',
  'dueDate',
] as const) {}
