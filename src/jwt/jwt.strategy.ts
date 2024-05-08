import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '6c8KsnvC#m%G^2T!vKz9@E7a$L8?R3bU', 
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
