import { JwtService } from '@nestjs/jwt';
import {
  Body,
  Controller,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class AuthController {
  constructor(private readonly jwtService: JwtService) {}

  @ApiResponse({
    status: 500,
    description: 'Server Error ...',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiOperation({ summary: '회원가입' })
  @Post('signup')
  async signup(@Body() body: any) {
    console.log('sign up');
    return 'hello sign up';
  }
}
