import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService,
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOneByUsername(username);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        throw new UnauthorizedException();
    }
    async registerUser(userData: any): Promise<any> {
        
        if (!userData.username || !userData.password) {
            throw new Error('Nome de usuário e senha são obrigatórios.');
        }
        const existingUser = await this.usersService.findOneByUsername(userData.username);
        if (existingUser) {
            throw new Error('Nome de usuário já está em uso.');
        }
        const newUser = await this.usersService.create(userData);
        
        // Retorne os dados do usuário registrado ou uma mensagem de sucesso
        return newUser;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
