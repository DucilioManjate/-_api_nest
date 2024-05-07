import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    async registerUser(userData: any): Promise<any> {
        // lógica
    }

    async loginUser(username: string, password: string): Promise<any> {
        // lógica 
    }

    generateToken(user: any): string {
        const payload = { username: user.username, sub: user.userId };
        return this.jwtService.sign(payload);
    }
}
