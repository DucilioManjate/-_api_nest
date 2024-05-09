import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from 'src/jwt/jwt.guard';


@Module({
  imports: [
    JwtModule.register({
      secret: 'my-secret-key', // Chave secreta para assinar o token JWT
      signOptions: { expiresIn: '1h' }, // Opções de assinatura do token JWT
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService], 
})
export class AuthModule {}
