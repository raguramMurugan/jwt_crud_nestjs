import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class FeedbackDto {
    @IsNotEmpty()
    comment : string;
    
    @IsNumber()
    @IsPositive()
    rating : number;
}