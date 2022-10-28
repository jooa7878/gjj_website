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
import { AuthService } from '../services/auth.service';
import { SignUpRequestDto } from '../dto/signup.request.dto';
import { LoginRequestDto } from '../dto/login.request.dto';

@Controller('auth')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {}

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
  async signup(@Body() body: SignUpRequestDto) {
    return await this.authService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  async login(@Body() body: LoginRequestDto) {
    return await this.authService.jwtLogIn(body);
  }
}
