import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import {AuthGuard} from '@nestjs/passport'
import { UserDto } from '../users/user.dto';

@Controller('auth')
export class AuthController {
constructor(private authService : AuthService) {}

@UseGuards(AuthGuard('local'))
@Post('signin')
public async login(@Req() req) {
    return await this.authService.login(req.user)
}

@Post('signup')
public async signup(@Body() user : UserDto) {
    return await this.authService.createUser(user);
} 
}
