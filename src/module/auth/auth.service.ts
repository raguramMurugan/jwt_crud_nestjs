import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt'
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(private userService : UsersService, private jwtService : JwtService) {}

    public async validateUser (username : string, pass : string) {
        const user = await this.userService.findUserByEmail(username);
        if(!user) {
            return null;
        }
        const matchPassword = await this.comparePassword(pass, user.password);
        if(!matchPassword)
        {
            return null;
        }
        const {password, ...result} = user['dataValues'];
        return result;
    }

    public async login(user) {
        const token = await this.generateToken(user)
        return {user, token}
    }

    public async createUser (user) {

        const userexists = await this.userService.findUserByEmail(user.email);
        if(!userexists){
            const pass = await this.hashPassword ( user.password );

            const newUser = await this.userService.createUserProfile( { ...user, password : pass});
    
            const {password, ...result} = newUser['dataValues'];
    
            const token = await this.generateToken(result);
    
            return {user : token, result};
        }
        else {
            return {status : 'User Already Exists'};
            
        }
    }

    private async hashPassword (password : string) {
        const hashedPassword = await bcrypt.hash(password,10);
        return hashedPassword;
    }


    private async generateToken (user) {
        const token = await this.jwtService.signAsync(user);
        return token;
    }


    private async comparePassword(userEntered :string, dbPassword: string) {
        const match = await bcrypt.compare(userEntered, dbPassword);
        return match;
    }
}
