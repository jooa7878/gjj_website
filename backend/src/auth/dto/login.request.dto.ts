import { PickType } from '@nestjs/swagger';
import { Auth } from '../auth.schema';

export class LoginRequestDto extends PickType(Auth, [
  'email',
  'password',
] as const) {}
