import {ExtractJwt, Strategy } from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport'
import {Injectable, UnauthorizedException} from '@nestjs/common'
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userService : UsersService) {
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration : false,
            secretOrKey : process.env.JWT_SECRET_KEY
        });

    }

    async validate(payload : any) {
        const user = await this.userService.findUserByEmail(payload.email);
        console.log(user)
        if(user) {
            return payload;
        }
        else 
        {
            throw new UnauthorizedException('Invalid User');
        }
    }
}