import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async registerUser(@Body() userData: any): Promise<any> {
        try {
            return await this.authService.registerUser(userData);
        } catch (error) {
            throw new UnauthorizedException('Failed to register user.');
        }
    }

    @Post('login')
    async loginUser(@Body() loginData: any): Promise<any> {
        try {
            const { username, password } = loginData;
            const user = await this.authService.validateUser(username, password);
            return this.authService.login(user);
        } catch (error) {
            throw new UnauthorizedException('Invalid credentials.');
        }
    }
}
