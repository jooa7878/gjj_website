import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Payload } from './jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersRepository: any) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
      ignoreExpiration: false,
    });
  }
  // async validate(payload: Payload) {
  //   const cat = await this.catsRepository.findCatByIdWithoutPassword(
  //     payload.sub,
  //   );
  //   if (cat) {
  //     return cat;
  //   } else {
  //     throw new UnauthorizedException('접근 오류');
  //   }
  // }
}
