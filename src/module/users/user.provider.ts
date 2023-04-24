import { User } from '../users/user.entity';
import { USER_REPOSITORY } from 'src/database/constant/constant';

export const userProviders = [{
    provide : USER_REPOSITORY,
    useValue : User
}];