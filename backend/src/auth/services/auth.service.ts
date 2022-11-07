// import { LoginRequestDto } from './dto/login.request.dto';
// import { CatsRepository } from './../cats/cats.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from '../auth.repository';
import { SignUpRequestDto } from '../dto/signup.request.dto';
import { LoginRequestDto } from '../dto/login.request.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(body: SignUpRequestDto) {
    const { email, password, name } = body;
    const isUserExist = await this.authRepository.existsByEmail(email);
    if (isUserExist) {
      throw new UnauthorizedException('해당하는 유저는 이미 존재합니다.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const auth = await this.authRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return auth.readOnlyData;
  }

  async jwtLogIn(data: LoginRequestDto) {
    const { email, password } = data;

    // 해당하는 이메일이 있는지 ?
    const auth = await this.authRepository.findUserByEmail(email);

    if (!auth) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    // password 일치?

    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      auth.password,
    );

    if (!isPasswordValidated) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    const payload = { email, sub: auth.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
