import { IsAlphanumeric, IsEnum, IsNotEmpty, MinLength, IsEmail } from "class-validator";
enum Gender  {
    MALE = 'male',
    FEMALE = 'female',
    NOT_SPECIFIIED = 'not specified'
    
}
export class UserDto {

    @IsNotEmpty()
    @MinLength(4)
    username : string;

    @IsAlphanumeric()
    @IsNotEmpty()
    @MinLength(6)
    password : string;

    @IsEmail()
    @IsNotEmpty()
    email : string;

    @IsEnum(Gender, {
        message : 'Gender should either be male or female or not specified'
    })
    gender : Gender
}
