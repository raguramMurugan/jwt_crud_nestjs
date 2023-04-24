import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/database/constant/constant';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
    constructor(@Inject(USER_REPOSITORY) private userRepo : typeof User) {}

    public async createUserProfile(user : UserDto) : Promise<User> {
        const newUser =await this.userRepo.create<User> (user);
        return newUser;
    }

    public async findUserByEmail(email :string) : Promise<User> {
        const userDetails= await this.userRepo.findOne({
            where : {email}
        });
        return userDetails;
    }

    public async findUserById (id : number) :Promise<User> {
        const userDetail = await this.userRepo.findOne({
            where : {id}
        });
        return userDetail;
    }

    public async removeUser( id : number) : Promise<string>{
        await this.userRepo.destroy({where : {id}});
        return "User Deleted Successfully with Id : "+ id;         
    }

    }
    

    
