import { PickType } from '@nestjs/swagger';
import { Auth } from '../auth.schema';

export class SignUpRequestDto extends PickType(Auth, [
  'email',
  'name',
  'password',
] as const) {}
